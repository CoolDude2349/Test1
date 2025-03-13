(async () => {
const demoMode = false;
const rammerheadEnabled = true;
const meteorEnabled = false;
const scramjetEnabled = false;
const uvEnabled = true;
const defaultService = "uv";

const currentScript = document.currentScript;

window.chemical = {
  loaded: false,
  demoMode,
  transport:
    currentScript.dataset.transportStore !== undefined
      ? localStorage.getItem("@chemical/transport") ||
        currentScript.dataset.transport ||
        "libcurl"
      : currentScript.dataset.transport || "libcurl",
  wisp:
    currentScript.dataset.wispStore !== undefined
      ? localStorage.getItem("@chemical/wisp") ||
        currentScript.dataset.wisp ||
        (location.protocol === "https:" ? "wss" : "ws") +
          "://" +
          location.host +
          "/wisp/"
      : currentScript.dataset.wisp ||
        (location.protocol === "https:" ? "wss" : "ws") +
          "://" +
          location.host +
          "/wisp/",
};

function rammerheadEncode(baseUrl, decode = false) {
  const mod = (n, m) => ((n % m) + m) % m;
  const baseDictionary =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~-";
  const shuffledIndicator = "_rhs";

  const generateDictionary = function () {
    let str = "";
    const split = baseDictionary.split("");
    while (split.length > 0) {
      str += split.splice(Math.floor(Math.random() * split.length), 1)[0];
    }
    return str;
  };

  class StrShuffler {
    constructor(dictionary = generateDictionary()) {
      this.dictionary = dictionary;
    }

    shuffle(str) {
      if (str.startsWith(shuffledIndicator)) {
        return str;
      }
      let shuffledStr = "";
      for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        const idx = baseDictionary.indexOf(char);
        if (char === "%" && str.length - i >= 3) {
          shuffledStr += char;
          shuffledStr += str.charAt(++i);
          shuffledStr += str.charAt(++i);
        } else if (idx === -1) {
          shuffledStr += char;
        } else {
          shuffledStr += this.dictionary.charAt(
            mod(idx + i, baseDictionary.length)
          );
        }
      }
      return shuffledIndicator + shuffledStr;
    }

    unshuffle(str) {
      if (!str.startsWith(shuffledIndicator)) {
        return str;
      }

      str = str.slice(shuffledIndicator.length);

      let unshuffledStr = "";
      for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        const idx = this.dictionary.indexOf(char);
        if (char === "%" && str.length - i >= 3) {
          unshuffledStr += char;
          unshuffledStr += str.charAt(++i);
          unshuffledStr += str.charAt(++i);
        } else if (idx === -1) {
          unshuffledStr += char;
        } else {
          unshuffledStr += baseDictionary.charAt(
            mod(idx - i, baseDictionary.length)
          );
        }
      }
      return unshuffledStr;
    }
  }

  function get(url, callback, shush = false) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();

    request.onerror = function () {
      if (!shush) console.log("Cannot communicate with the server");
    };
    request.onload = function () {
      if (request.status === 200) {
        callback(request.responseText);
      } else {
        if (!shush)
          console.log(
            'unexpected server response to not match "200". Server says "' +
              request.responseText +
              '"'
          );
      }
    };
  }

  var api = {
    newsession(callback) {
      get("/newsession", callback);
    },
    sessionexists(id, callback) {
      get("/sessionexists?id=" + encodeURIComponent(id), function (res) {
        if (res === "exists") return callback(true);
        if (res === "not found") return callback(false);
        console.log("unexpected response from server. received" + res);
      });
    },
    shuffleDict(id, callback) {
      console.log("Shuffling", id);
      get("/api/shuffleDict?id=" + encodeURIComponent(id), function (res) {
        callback(JSON.parse(res));
      });
    },
  };

  var localStorageKey = "rammerhead_sessionids";
  var localStorageKeyDefault = "rammerhead_default_sessionid";
  var sessionIdsStore = {
    get() {
      var rawData = localStorage.getItem(localStorageKey);
      if (!rawData) return [];
      try {
        var data = JSON.parse(rawData);
        if (!Array.isArray(data)) throw "getout";
        return data;
      } catch (e) {
        return [];
      }
    },
    set(data) {
      if (!data || !Array.isArray(data)) throw new TypeError("must be array");
      localStorage.setItem(localStorageKey, JSON.stringify(data));
    },
    getDefault() {
      var sessionId = localStorage.getItem(localStorageKeyDefault);
      if (sessionId) {
        var data = sessionIdsStore.get();
        data.filter(function (e) {
          return e.id === sessionId;
        });
        if (data.length) return data[0];
      }
      return null;
    },
    setDefault(id) {
      localStorage.setItem(localStorageKeyDefault, id);
    },
  };

  function addSession(id) {
    var data = sessionIdsStore.get();
    data.unshift({ id: id, createdOn: new Date().toLocaleString() });
    sessionIdsStore.set(data);
  }

  function getSessionId() {
    return new Promise((resolve) => {
      var id = localStorage.getItem("session-string");
      api.sessionexists(id, function (value) {
        if (!value) {
          console.log("Session validation failed");
          api.newsession(function (id) {
            addSession(id);
            localStorage.setItem("session-string", id);
            console.log(id);
            console.log("^ new id");
            resolve(id);
          });
        } else {
          resolve(id);
        }
      });
    });
  }

  var ProxyHref;

  return getSessionId().then((id) => {
    return new Promise((resolve) => {
      api.shuffleDict(id, function (shuffleDict) {
        var shuffler = new StrShuffler(shuffleDict);
        if (decode) {
          ProxyHref = shuffler.unshuffle(baseUrl.split(id + "/")[1]);
        } else {
          ProxyHref = "/" + id + "/" + shuffler.shuffle(baseUrl);
        }
        resolve(ProxyHref);
      });
    });
  });
}

async function encodeService(url, service) {
  switch (service) {
    case "uv":
      if (uvEnabled) {
        return (
          window.location.origin +
          __uv$config.prefix +
          __uv$config.encodeUrl(url)
        );
      }
      break;
    case "rammerhead":
      if (rammerheadEnabled) {
        return window.location.origin + (await rammerheadEncode(url));
      }
      break;
    case "scramjet":
      if (scramjetEnabled) {
        return (
          window.location.origin +
          __scramjet$config.prefix +
          __scramjet$config.codec.encode(url)
        );
      }
      break;
    case "meteor":
      if (meteorEnabled) {
        return (
          window.location.origin +
          $meteor_config.prefix +
          $meteor_config.codec.encode(url)
        );
      }
      break;
  }
}

window.chemical.encode = async function (url, config) {
  if (!config || typeof config !== "object" || Array.isArray(config)) {
    config = {
      service: defaultService,
      autoHttps: false,
    };
  }

  if (config.service === undefined) {
    config.service = defaultService;
  }

  if (config.autoHttps === undefined) {
    config.autoHttps = false;
  }

  if (demoMode) {
    return "/chemical.demo.html";
  }

  if (url.match(/^https?:\/\//)) {
    return await encodeService(url, config.service);
  } else if (
    config.autoHttps === true &&
    url.includes(".") &&
    !url.includes(" ")
  ) {
    return await encodeService("https://" + url, config.service);
  } else if (config.searchEngine) {
    return await encodeService(
      config.searchEngine.replace("%s", encodeURIComponent(url)),
      config.service
    );
  } else {
    return await encodeService(url, config.service);
  }
};

window.chemical.decode = async function (url, config) {
  if (!config || typeof config !== "object" || Array.isArray(config)) {
    config = {
      service: defaultService,
    };
  }

  switch (config.service) {
    case "uv":
      if (uvEnabled) {
        return __uv$config.decodeUrl(url.split(__uv$config.prefix)[1]);
      }
      break;
    case "rammerhead":
      if (rammerheadEnabled) {
        return await rammerheadEncode(
          url.split(window.location.origin)[1],
          true
        );
      }
      break;
    case "scramjet":
      if (scramjetEnabled) {
        return __scramjet$config.codec.decode(
          url.split(__scramjet$config.prefix)[1]
        );
      }
      break;
    case "meteor":
      if (meteorEnabled) {
        return $meteor_config.codec.decode(url.split($meteor_config.prefix)[1]);
      }
      break;
  }
};

window.chemical.setStore = function (key, value) {
  const allowed = ["transport", "wisp", "service", "autoHttps", "searchEngine"];

  if (allowed.includes(key)) {
    localStorage.setItem("@chemical/" + key, String(value));
    if (key === "transport") {
      window.chemical.setTransport(value);
    }
    if (key === "wisp") {
      window.chemical.setWisp(value);
    }
    window.dispatchEvent(
      new CustomEvent("chemicalStoreChange", {
        detail: { key, value },
      })
    );
  }
};

window.chemical.getStore = function (key) {
  const value =
    key === "autoHttps"
      ? localStorage.getItem("@chemical/" + key) === "true"
      : localStorage.getItem("@chemical/" + key);

  const defaults = {
    transport: window.chemical.transport,
    wisp: window.chemical.wisp,
    service: "uv",
    autoHttps: false,
  };

  return value || defaults[key];
};

function getTransport(transport) {
  switch (transport) {
    default:
    case "libcurl":
      return "/libcurl/index.mjs";
      break;
    case "epoxy":
      return "/epoxy/index.mjs";
      break;
  }
}

window.chemical.setTransport = async function (newTransport) {
  newTransport = newTransport || currentScript.dataset.transport || "libcurl";
  await window.chemical.connection.setTransport(getTransport(newTransport), [
    { wisp: window.chemical.wisp },
  ]);
  window.chemical.transport = newTransport;
};

window.chemical.setWisp = async function (wisp) {
  wisp =
    wisp ||
    currentScript.dataset.wisp ||
    (location.protocol === "https:" ? "wss" : "ws") +
      "://" +
      location.host +
      "/wisp/";
  await window.chemical.connection.setTransport(
    getTransport(window.chemical.transport),
    [{ wisp: wisp }]
  );
  window.chemical.wisp = wisp;
};

async function registerSW() {
  if ("serviceWorker" in navigator) {
    await navigator.serviceWorker.register("https://cdn.jsdelivr.net/gh/CoolDude2349/Test1@main/chemical.sw.js");
  } else {
    console.error("Service worker failed to register.");
  }
}

async function loadScript(src) {
  await new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      reject();
    };
    document.head.appendChild(script);
  });
}

function setupFetch() {
  const client = new window.BareMux.BareClient();
  window.chemical.fetch = client.fetch.bind(client);

  window.chemical.getSuggestions = async function (query) {
    if (!query) {
      return [];
    }

    try {
      const DDGSuggestions = await window.chemical.fetch(
        "https://duckduckgo.com/ac/?q=" + query + "&type=list"
      );
      const suggestions = await DDGSuggestions.json();
      return suggestions[1].slice(0, 9);
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  window.chemical.createDataURL = async function (url) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await window.chemical.fetch(url);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onloadend = function () {
          resolve(reader.result);
        };

        reader.readAsDataURL(blob);
      } catch {
        resolve(undefined);
      }
    });
  };
}

await loadScript("data:text/javascript;base64,IWZ1bmN0aW9uKGUsIHQpIHsKICAgICJvYmplY3QiID09IHR5cGVvZiBleHBvcnRzICYmICJ1bmRlZmluZWQiICE9IHR5cGVvZiBtb2R1bGUgPyB0KGV4cG9ydHMpIDogImZ1bmN0aW9uIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWyJleHBvcnRzIl0sIHQpIDogdCgoZSA9ICJ1bmRlZmluZWQiICE9IHR5cGVvZiBnbG9iYWxUaGlzID8gZ2xvYmFsVGhpcyA6IGUgfHwgc2VsZikuQmFyZU11eCA9IHt9KQp9KHRoaXMsIChmdW5jdGlvbihlKSB7CiAgICAidXNlIHN0cmljdCI7CiAgICBjb25zdCB0ID0gZ2xvYmFsVGhpcy5mZXRjaAogICAgICAsIHIgPSBnbG9iYWxUaGlzLlNoYXJlZFdvcmtlcgogICAgICAsIGEgPSBnbG9iYWxUaGlzLmxvY2FsU3RvcmFnZQogICAgICAsIG8gPSBnbG9iYWxUaGlzLm5hdmlnYXRvci5zZXJ2aWNlV29ya2VyCiAgICAgICwgcyA9IE1lc3NhZ2VQb3J0LnByb3RvdHlwZS5wb3N0TWVzc2FnZQogICAgICAsIG4gPSB7CiAgICAgICAgcHJvdG90eXBlOiB7CiAgICAgICAgICAgIHNlbmQ6IFdlYlNvY2tldC5wcm90b3R5cGUuc2VuZAogICAgICAgIH0sCiAgICAgICAgQ0xPU0VEOiBXZWJTb2NrZXQuQ0xPU0VELAogICAgICAgIENMT1NJTkc6IFdlYlNvY2tldC5DTE9TSU5HLAogICAgICAgIENPTk5FQ1RJTkc6IFdlYlNvY2tldC5DT05ORUNUSU5HLAogICAgICAgIE9QRU46IFdlYlNvY2tldC5PUEVOCiAgICB9OwogICAgYXN5bmMgZnVuY3Rpb24gYygpIHsKICAgICAgICBjb25zdCBlID0gKGF3YWl0IHNlbGYuY2xpZW50cy5tYXRjaEFsbCh7CiAgICAgICAgICAgIHR5cGU6ICJ3aW5kb3ciLAogICAgICAgICAgICBpbmNsdWRlVW5jb250cm9sbGVkOiAhMAogICAgICAgIH0pKS5tYXAoKGFzeW5jIGUgPT4gewogICAgICAgICAgICBjb25zdCB0ID0gYXdhaXQgZnVuY3Rpb24oZSkgewogICAgICAgICAgICAgICAgbGV0IHQgPSBuZXcgTWVzc2FnZUNoYW5uZWw7CiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHIgPT4gewogICAgICAgICAgICAgICAgICAgIGUucG9zdE1lc3NhZ2UoewogICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAiZ2V0UG9ydCIsCiAgICAgICAgICAgICAgICAgICAgICAgIHBvcnQ6IHQucG9ydDIKICAgICAgICAgICAgICAgICAgICB9LCBbdC5wb3J0Ml0pLAogICAgICAgICAgICAgICAgICAgIHQucG9ydDEub25tZXNzYWdlID0gZSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAgIHIoZS5kYXRhKQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICkpCiAgICAgICAgICAgIH0oZSk7CiAgICAgICAgICAgIHJldHVybiBhd2FpdCBpKHQpLAogICAgICAgICAgICB0CiAgICAgICAgfQogICAgICAgICkpCiAgICAgICAgICAsIHQgPSBQcm9taXNlLnJhY2UoW1Byb21pc2UuYW55KGUpLCBuZXcgUHJvbWlzZSgoIChlLCB0KSA9PiBzZXRUaW1lb3V0KHQsIDFlMywgbmV3IFR5cGVFcnJvcigidGltZW91dCIpKSkpXSk7CiAgICAgICAgdHJ5IHsKICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHQKICAgICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgQWdncmVnYXRlRXJyb3IpCiAgICAgICAgICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKCJiYXJlLW11eDogZmFpbGVkIHRvIGdldCBhIGJhcmUtbXV4IFNoYXJlZFdvcmtlciBNZXNzYWdlUG9ydCBhcyBhbGwgY2xpZW50cyByZXR1cm5lZCBhbiBpbnZhbGlkIE1lc3NhZ2VQb3J0LiIpLAogICAgICAgICAgICAgICAgbmV3IEVycm9yKCJBbGwgY2xpZW50cyByZXR1cm5lZCBhbiBpbnZhbGlkIE1lc3NhZ2VQb3J0LiIpOwogICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKCJiYXJlLW11eDogZmFpbGVkIHRvIGdldCBhIGJhcmUtbXV4IFNoYXJlZFdvcmtlciBNZXNzYWdlUG9ydCB3aXRoaW4gMXMsIHJldHJ5aW5nIiksCiAgICAgICAgICAgIGF3YWl0IGMoKQogICAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGkoZSkgewogICAgICAgIGNvbnN0IHQgPSBuZXcgTWVzc2FnZUNoYW5uZWwKICAgICAgICAgICwgciA9IG5ldyBQcm9taXNlKCggKGUsIHIpID0+IHsKICAgICAgICAgICAgdC5wb3J0MS5vbm1lc3NhZ2UgPSB0ID0+IHsKICAgICAgICAgICAgICAgICJwb25nIiA9PT0gdC5kYXRhLnR5cGUgJiYgZSgpCiAgICAgICAgICAgIH0KICAgICAgICAgICAgLAogICAgICAgICAgICBzZXRUaW1lb3V0KHIsIDE1MDApCiAgICAgICAgfQogICAgICAgICkpOwogICAgICAgIHJldHVybiBzLmNhbGwoZSwgewogICAgICAgICAgICBtZXNzYWdlOiB7CiAgICAgICAgICAgICAgICB0eXBlOiAicGluZyIKICAgICAgICAgICAgfSwKICAgICAgICAgICAgcG9ydDogdC5wb3J0MgogICAgICAgIH0sIFt0LnBvcnQyXSksCiAgICAgICAgcgogICAgfQogICAgZnVuY3Rpb24gbChlLCB0KSB7CiAgICAgICAgY29uc3QgYSA9IG5ldyByKGUsImJhcmUtbXV4LXdvcmtlciIpOwogICAgICAgIHJldHVybiB0ICYmIG8uYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsICh0ID0+IHsKICAgICAgICAgICAgaWYgKCJnZXRQb3J0IiA9PT0gdC5kYXRhLnR5cGUgJiYgdC5kYXRhLnBvcnQpIHsKICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoImJhcmUtbXV4OiByZWNpZXZlZCByZXF1ZXN0IGZvciBwb3J0IGZyb20gc3ciKTsKICAgICAgICAgICAgICAgIGNvbnN0IGEgPSBuZXcgcihlLCJiYXJlLW11eC13b3JrZXIiKTsKICAgICAgICAgICAgICAgIHMuY2FsbCh0LmRhdGEucG9ydCwgYS5wb3J0LCBbYS5wb3J0XSkKICAgICAgICAgICAgfQogICAgICAgIH0KICAgICAgICApKSwKICAgICAgICBhLnBvcnQKICAgIH0KICAgIGxldCBoID0gbnVsbDsKICAgIGZ1bmN0aW9uIGQoKSB7CiAgICAgICAgaWYgKG51bGwgPT09IGgpIHsKICAgICAgICAgICAgY29uc3QgZSA9IG5ldyBNZXNzYWdlQ2hhbm5lbAogICAgICAgICAgICAgICwgdCA9IG5ldyBSZWFkYWJsZVN0cmVhbTsKICAgICAgICAgICAgbGV0IHI7CiAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICBzLmNhbGwoZS5wb3J0MSwgdCwgW3RdKSwKICAgICAgICAgICAgICAgIHIgPSAhMAogICAgICAgICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgICAgICAgICByID0gITEKICAgICAgICAgICAgfQogICAgICAgICAgICByZXR1cm4gaCA9IHIsCiAgICAgICAgICAgIHIKICAgICAgICB9CiAgICAgICAgcmV0dXJuIGgKICAgIH0KICAgIGNsYXNzIHAgewogICAgICAgIGNvbnN0cnVjdG9yKGUpIHsKICAgICAgICAgICAgdGhpcy5jaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoImJhcmUtbXV4IiksCiAgICAgICAgICAgIGUgaW5zdGFuY2VvZiBNZXNzYWdlUG9ydCB8fCBlIGluc3RhbmNlb2YgUHJvbWlzZSA/IHRoaXMucG9ydCA9IGUgOiB0aGlzLmNyZWF0ZUNoYW5uZWwoZSwgITApCiAgICAgICAgfQogICAgICAgIGNyZWF0ZUNoYW5uZWwoZSwgdCkgewogICAgICAgICAgICBpZiAoc2VsZi5jbGllbnRzKQogICAgICAgICAgICAgICAgdGhpcy5wb3J0ID0gYygpLAogICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsLm9ubWVzc2FnZSA9IGUgPT4gewogICAgICAgICAgICAgICAgICAgICJyZWZyZXNoUG9ydCIgPT09IGUuZGF0YS50eXBlICYmICh0aGlzLnBvcnQgPSBjKCkpCiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICA7CiAgICAgICAgICAgIGVsc2UgaWYgKGUgJiYgU2hhcmVkV29ya2VyKSB7CiAgICAgICAgICAgICAgICBpZiAoIWUuc3RhcnRzV2l0aCgiLyIpICYmICFlLmluY2x1ZGVzKCI6Ly8iKSkKICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIkludmFsaWQgVVJMLiBNdXN0IGJlIGFic29sdXRlIG9yIHN0YXJ0IGF0IHRoZSByb290LiIpOwogICAgICAgICAgICAgICAgdGhpcy5wb3J0ID0gbChlLCB0KSwKICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoImJhcmUtbXV4OiBzZXR0aW5nIGxvY2FsU3RvcmFnZSBiYXJlLW11eC1wYXRoIHRvIiwgZSksCiAgICAgICAgICAgICAgICBhWyJiYXJlLW11eC1wYXRoIl0gPSBlCiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICBpZiAoIVNoYXJlZFdvcmtlcikKICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIlVuYWJsZSB0byBnZXQgYSBjaGFubmVsIHRvIHRoZSBTaGFyZWRXb3JrZXIuIik7CiAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgY29uc3QgZSA9IGFbImJhcmUtbXV4LXBhdGgiXTsKICAgICAgICAgICAgICAgICAgICBpZiAoY29uc29sZS5kZWJ1ZygiYmFyZS1tdXg6IGdvdCBsb2NhbFN0b3JhZ2UgYmFyZS1tdXgtcGF0aDoiLCBlKSwKICAgICAgICAgICAgICAgICAgICAhZSkKICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJVbmFibGUgdG8gZ2V0IGJhcmUtbXV4IHdvcmtlclBhdGggZnJvbSBsb2NhbFN0b3JhZ2UuIik7CiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0ID0gbChlLCB0KQogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgfQogICAgICAgIGFzeW5jIHNlbmRNZXNzYWdlKGUsIHQpIHsKICAgICAgICAgICAgdGhpcy5wb3J0IGluc3RhbmNlb2YgUHJvbWlzZSAmJiAodGhpcy5wb3J0ID0gYXdhaXQgdGhpcy5wb3J0KTsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgIGF3YWl0IGkodGhpcy5wb3J0KQogICAgICAgICAgICB9IGNhdGNoIHsKICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oImJhcmUtbXV4OiBGYWlsZWQgdG8gZ2V0IGEgcGluZyByZXNwb25zZSBmcm9tIHRoZSB3b3JrZXIgd2l0aGluIDEuNXMuIEFzc3VtaW5nIHBvcnQgaXMgZGVhZC4iKSwKICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ2hhbm5lbCgpLAogICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShlLCB0KQogICAgICAgICAgICB9CiAgICAgICAgICAgIGNvbnN0IHIgPSBuZXcgTWVzc2FnZUNoYW5uZWwKICAgICAgICAgICAgICAsIGEgPSBbci5wb3J0MiwgLi4udCB8fCBbXV0KICAgICAgICAgICAgICAsIG8gPSBuZXcgUHJvbWlzZSgoIChlLCB0KSA9PiB7CiAgICAgICAgICAgICAgICByLnBvcnQxLm9ubWVzc2FnZSA9IHIgPT4gewogICAgICAgICAgICAgICAgICAgIGNvbnN0IGEgPSByLmRhdGE7CiAgICAgICAgICAgICAgICAgICAgImVycm9yIiA9PT0gYS50eXBlID8gdChhLmVycm9yKSA6IGUoYSkKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgICAgICApKTsKICAgICAgICAgICAgcmV0dXJuIHMuY2FsbCh0aGlzLnBvcnQsIHsKICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGUsCiAgICAgICAgICAgICAgICBwb3J0OiByLnBvcnQyCiAgICAgICAgICAgIH0sIGEpLAogICAgICAgICAgICBhd2FpdCBvCiAgICAgICAgfQogICAgfQogICAgY2xhc3MgdSBleHRlbmRzIEV2ZW50VGFyZ2V0IHsKICAgICAgICBjb25zdHJ1Y3RvcihlLCB0PVtdLCByLCBhKSB7CiAgICAgICAgICAgIHN1cGVyKCksCiAgICAgICAgICAgIHRoaXMucHJvdG9jb2xzID0gdCwKICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gbi5DT05ORUNUSU5HLAogICAgICAgICAgICB0aGlzLnVybCA9IGUudG9TdHJpbmcoKSwKICAgICAgICAgICAgdGhpcy5wcm90b2NvbHMgPSB0OwogICAgICAgICAgICBjb25zdCBvID0gZSA9PiB7CiAgICAgICAgICAgICAgICB0aGlzLnByb3RvY29scyA9IGUsCiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBuLk9QRU47CiAgICAgICAgICAgICAgICBjb25zdCB0ID0gbmV3IEV2ZW50KCJvcGVuIik7CiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodCkKICAgICAgICAgICAgfQogICAgICAgICAgICAgICwgcyA9IGFzeW5jIGUgPT4gewogICAgICAgICAgICAgICAgY29uc3QgdCA9IG5ldyBNZXNzYWdlRXZlbnQoIm1lc3NhZ2UiLHsKICAgICAgICAgICAgICAgICAgICBkYXRhOiBlCiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCh0KQogICAgICAgICAgICB9CiAgICAgICAgICAgICAgLCBjID0gKGUsIHQpID0+IHsKICAgICAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IG4uQ0xPU0VEOwogICAgICAgICAgICAgICAgY29uc3QgciA9IG5ldyBDbG9zZUV2ZW50KCJjbG9zZSIsewogICAgICAgICAgICAgICAgICAgIGNvZGU6IGUsCiAgICAgICAgICAgICAgICAgICAgcmVhc29uOiB0CiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChyKQogICAgICAgICAgICB9CiAgICAgICAgICAgICAgLCBpID0gKCkgPT4gewogICAgICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gbi5DTE9TRUQ7CiAgICAgICAgICAgICAgICBjb25zdCBlID0gbmV3IEV2ZW50KCJlcnJvciIpOwogICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGUpCiAgICAgICAgICAgIH0KICAgICAgICAgICAgOwogICAgICAgICAgICB0aGlzLmNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwsCiAgICAgICAgICAgIHRoaXMuY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBlID0+IHsKICAgICAgICAgICAgICAgICJvcGVuIiA9PT0gZS5kYXRhLnR5cGUgPyBvKGUuZGF0YS5hcmdzWzBdKSA6ICJtZXNzYWdlIiA9PT0gZS5kYXRhLnR5cGUgPyBzKGUuZGF0YS5hcmdzWzBdKSA6ICJjbG9zZSIgPT09IGUuZGF0YS50eXBlID8gYyhlLmRhdGEuYXJnc1swXSwgZS5kYXRhLmFyZ3NbMV0pIDogImVycm9yIiA9PT0gZS5kYXRhLnR5cGUgJiYgaSgpCiAgICAgICAgICAgIH0KICAgICAgICAgICAgLAogICAgICAgICAgICByLnNlbmRNZXNzYWdlKHsKICAgICAgICAgICAgICAgIHR5cGU6ICJ3ZWJzb2NrZXQiLAogICAgICAgICAgICAgICAgd2Vic29ja2V0OiB7CiAgICAgICAgICAgICAgICAgICAgdXJsOiBlLnRvU3RyaW5nKCksCiAgICAgICAgICAgICAgICAgICAgcHJvdG9jb2xzOiB0LAogICAgICAgICAgICAgICAgICAgIHJlcXVlc3RIZWFkZXJzOiBhLAogICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMuY2hhbm5lbC5wb3J0MgogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9LCBbdGhpcy5jaGFubmVsLnBvcnQyXSkKICAgICAgICB9CiAgICAgICAgc2VuZCguLi5lKSB7CiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IG4uQ09OTkVDVElORykKICAgICAgICAgICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oIkZhaWxlZCB0byBleGVjdXRlICdzZW5kJyBvbiAnV2ViU29ja2V0JzogU3RpbGwgaW4gQ09OTkVDVElORyBzdGF0ZS4iKTsKICAgICAgICAgICAgbGV0IHQgPSBlWzBdOwogICAgICAgICAgICB0LmJ1ZmZlciAmJiAodCA9IHQuYnVmZmVyLnNsaWNlKHQuYnl0ZU9mZnNldCwgdC5ieXRlT2Zmc2V0ICsgdC5ieXRlTGVuZ3RoKSksCiAgICAgICAgICAgIHMuY2FsbCh0aGlzLmNoYW5uZWwucG9ydDEsIHsKICAgICAgICAgICAgICAgIHR5cGU6ICJkYXRhIiwKICAgICAgICAgICAgICAgIGRhdGE6IHQKICAgICAgICAgICAgfSwgdCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gW3RdIDogW10pCiAgICAgICAgfQogICAgICAgIGNsb3NlKGUsIHQpIHsKICAgICAgICAgICAgcy5jYWxsKHRoaXMuY2hhbm5lbC5wb3J0MSwgewogICAgICAgICAgICAgICAgdHlwZTogImNsb3NlIiwKICAgICAgICAgICAgICAgIGNsb3NlQ29kZTogZSwKICAgICAgICAgICAgICAgIGNsb3NlUmVhc29uOiB0CiAgICAgICAgICAgIH0pCiAgICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gdyhlLCB0LCByKSB7CiAgICAgICAgY29uc29sZS5lcnJvcihgZXJyb3Igd2hpbGUgcHJvY2Vzc2luZyAnJHtyfSc6IGAsIHQpLAogICAgICAgIGUucG9zdE1lc3NhZ2UoewogICAgICAgICAgICB0eXBlOiAiZXJyb3IiLAogICAgICAgICAgICBlcnJvcjogdAogICAgICAgIH0pCiAgICB9CiAgICBmdW5jdGlvbiBmKGUpIHsKICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IGUubGVuZ3RoOyB0KyspIHsKICAgICAgICAgICAgY29uc3QgciA9IGVbdF07CiAgICAgICAgICAgIGlmICghIiEjJCUmJyorLS4wMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpeX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5enx+Ii5pbmNsdWRlcyhyKSkKICAgICAgICAgICAgICAgIHJldHVybiAhMQogICAgICAgIH0KICAgICAgICByZXR1cm4gITAKICAgIH0KICAgIGNvbnN0IGcgPSBbIndzOiIsICJ3c3M6Il0KICAgICAgLCBiID0gWzEwMSwgMjA0LCAyMDUsIDMwNF0KICAgICAgLCB5ID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XTsKICAgIGNsYXNzIG0gewogICAgICAgIGNvbnN0cnVjdG9yKGUpIHsKICAgICAgICAgICAgdGhpcy53b3JrZXIgPSBuZXcgcChlKQogICAgICAgIH0KICAgICAgICBjcmVhdGVXZWJTb2NrZXQoZSwgdD1bXSwgciwgYSkgewogICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgZSA9IG5ldyBVUkwoZSkKICAgICAgICAgICAgfSBjYXRjaCAodCkgewogICAgICAgICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihgRmFpaWxlZCB0byBjb25zdHJ1Y3QgJ1dlYlNvY2tldCc6IFRoZSBVUkwgJyR7ZX0nIGlzIGludmFsaWQuYCkKICAgICAgICAgICAgfQogICAgICAgICAgICBpZiAoIWcuaW5jbHVkZXMoZS5wcm90b2NvbCkpCiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKGBGYWlsZWQgdG8gY29uc3RydWN0ICdXZWJTb2NrZXQnOiBUaGUgVVJMJ3Mgc2NoZW1lIG11c3QgYmUgZWl0aGVyICd3cycgb3IgJ3dzcycuICcke2UucHJvdG9jb2x9JyBpcyBub3QgYWxsb3dlZC5gKTsKICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh0KSB8fCAodCA9IFt0XSksCiAgICAgICAgICAgIHQgPSB0Lm1hcChTdHJpbmcpOwogICAgICAgICAgICBmb3IgKGNvbnN0IGUgb2YgdCkKICAgICAgICAgICAgICAgIGlmICghZihlKSkKICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKGBGYWlsZWQgdG8gY29uc3RydWN0ICdXZWJTb2NrZXQnOiBUaGUgc3VicHJvdG9jb2wgJyR7ZX0nIGlzIGludmFsaWQuYCk7CiAgICAgICAgICAgIGEgPSBhIHx8IHt9OwogICAgICAgICAgICByZXR1cm4gbmV3IHUoZSx0LHRoaXMud29ya2VyLGEpCiAgICAgICAgfQogICAgICAgIGFzeW5jIGZldGNoKGUsIHIpIHsKICAgICAgICAgICAgY29uc3QgYSA9IG5ldyBSZXF1ZXN0KGUscikKICAgICAgICAgICAgICAsIG8gPSByPy5oZWFkZXJzIHx8IGEuaGVhZGVycwogICAgICAgICAgICAgICwgcyA9IG8gaW5zdGFuY2VvZiBIZWFkZXJzID8gT2JqZWN0LmZyb21FbnRyaWVzKG8pIDogbwogICAgICAgICAgICAgICwgbiA9IGEuYm9keTsKICAgICAgICAgICAgbGV0IGMgPSBuZXcgVVJMKGEudXJsKTsKICAgICAgICAgICAgaWYgKGMucHJvdG9jb2wuc3RhcnRzV2l0aCgiYmxvYjoiKSkgewogICAgICAgICAgICAgICAgY29uc3QgZSA9IGF3YWl0IHQoYykKICAgICAgICAgICAgICAgICAgLCByID0gbmV3IFJlc3BvbnNlKGUuYm9keSxlKTsKICAgICAgICAgICAgICAgIHJldHVybiByLnJhd0hlYWRlcnMgPSBPYmplY3QuZnJvbUVudHJpZXMoZS5oZWFkZXJzKSwKICAgICAgICAgICAgICAgIHIucmF3UmVzcG9uc2UgPSBlLAogICAgICAgICAgICAgICAgcgogICAgICAgICAgICB9CiAgICAgICAgICAgIGZvciAobGV0IGUgPSAwOyA7IGUrKykgewogICAgICAgICAgICAgICAgbGV0IHQgPSAoYXdhaXQgdGhpcy53b3JrZXIuc2VuZE1lc3NhZ2UoewogICAgICAgICAgICAgICAgICAgIHR5cGU6ICJmZXRjaCIsCiAgICAgICAgICAgICAgICAgICAgZmV0Y2g6IHsKICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlOiBjLnRvU3RyaW5nKCksCiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogYS5tZXRob2QsCiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHMsCiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IG4gfHwgdm9pZCAwCiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSwgbiA/IFtuXSA6IFtdKSkuZmV0Y2gKICAgICAgICAgICAgICAgICAgLCBvID0gbmV3IFJlc3BvbnNlKGIuaW5jbHVkZXModC5zdGF0dXMpID8gdm9pZCAwIDogdC5ib2R5LHsKICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0LmhlYWRlcnMpLAogICAgICAgICAgICAgICAgICAgIHN0YXR1czogdC5zdGF0dXMsCiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogdC5zdGF0dXNUZXh0CiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIG8ucmF3SGVhZGVycyA9IHQuaGVhZGVycywKICAgICAgICAgICAgICAgIG8uZmluYWxVUkwgPSBjLnRvU3RyaW5nKCk7CiAgICAgICAgICAgICAgICBjb25zdCBpID0gcj8ucmVkaXJlY3QgfHwgYS5yZWRpcmVjdDsKICAgICAgICAgICAgICAgIGlmICgheS5pbmNsdWRlcyhvLnN0YXR1cykpCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87CiAgICAgICAgICAgICAgICBzd2l0Y2ggKGkpIHsKICAgICAgICAgICAgICAgIGNhc2UgImZvbGxvdyI6CiAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gby5oZWFkZXJzLmdldCgibG9jYXRpb24iKTsKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDIwID4gZSAmJiBudWxsICE9PSB0KSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gbmV3IFVSTCh0LGMpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJGYWlsZWQgdG8gZmV0Y2giKQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIGNhc2UgImVycm9yIjoKICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJGYWlsZWQgdG8gZmV0Y2giKTsKICAgICAgICAgICAgICAgIGNhc2UgIm1hbnVhbCI6CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8KICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KICAgIGNvbnNvbGUuZGVidWcoImJhcmUtbXV4OiBydW5uaW5nIHYyLjEuNiAoYnVpbGQgNGI3NjA3YikiKSwKICAgIGUuQmFyZUNsaWVudCA9IG0sCiAgICBlLkJhcmVNdXhDb25uZWN0aW9uID0gY2xhc3MgewogICAgICAgIGNvbnN0cnVjdG9yKGUpIHsKICAgICAgICAgICAgdGhpcy53b3JrZXIgPSBuZXcgcChlKQogICAgICAgIH0KICAgICAgICBhc3luYyBnZXRUcmFuc3BvcnQoKSB7CiAgICAgICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy53b3JrZXIuc2VuZE1lc3NhZ2UoewogICAgICAgICAgICAgICAgdHlwZTogImdldCIKICAgICAgICAgICAgfSkpLm5hbWUKICAgICAgICB9CiAgICAgICAgYXN5bmMgc2V0VHJhbnNwb3J0KGUsIHQsIHIpIHsKICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRNYW51YWxUcmFuc3BvcnQoYFxuXHRcdFx0Y29uc3QgeyBkZWZhdWx0OiBCYXJlVHJhbnNwb3J0IH0gPSBhd2FpdCBpbXBvcnQoIiR7ZX0iKTtcblx0XHRcdHJldHVybiBbQmFyZVRyYW5zcG9ydCwgIiR7ZX0iXTtcblx0XHRgLCB0LCByKQogICAgICAgIH0KICAgICAgICBhc3luYyBzZXRNYW51YWxUcmFuc3BvcnQoZSwgdCwgcikgewogICAgICAgICAgICBpZiAoImJhcmUtbXV4LXJlbW90ZSIgPT09IGUpCiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIlVzZSBzZXRSZW1vdGVUcmFuc3BvcnQuIik7CiAgICAgICAgICAgIGF3YWl0IHRoaXMud29ya2VyLnNlbmRNZXNzYWdlKHsKICAgICAgICAgICAgICAgIHR5cGU6ICJzZXQiLAogICAgICAgICAgICAgICAgY2xpZW50OiB7CiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb246IGUsCiAgICAgICAgICAgICAgICAgICAgYXJnczogdAogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9LCByKQogICAgICAgIH0KICAgICAgICBhc3luYyBzZXRSZW1vdGVUcmFuc3BvcnQoZSwgdCkgewogICAgICAgICAgICBjb25zdCByID0gbmV3IE1lc3NhZ2VDaGFubmVsOwogICAgICAgICAgICByLnBvcnQxLm9ubWVzc2FnZSA9IGFzeW5jIHQgPT4gewogICAgICAgICAgICAgICAgY29uc3QgciA9IHQuZGF0YS5wb3J0CiAgICAgICAgICAgICAgICAgICwgYSA9IHQuZGF0YS5tZXNzYWdlOwogICAgICAgICAgICAgICAgaWYgKCJmZXRjaCIgPT09IGEudHlwZSkKICAgICAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgICAgICBlLnJlYWR5IHx8IGF3YWl0IGUuaW5pdCgpLAogICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBhc3luYyBmdW5jdGlvbihlLCB0LCByKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhID0gYXdhaXQgci5yZXF1ZXN0KG5ldyBVUkwoZS5mZXRjaC5yZW1vdGUpLCBlLmZldGNoLm1ldGhvZCwgZS5mZXRjaC5ib2R5LCBlLmZldGNoLmhlYWRlcnMsIG51bGwpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkKCkgJiYgYS5ib2R5IGluc3RhbmNlb2YgUmVhZGFibGVTdHJlYW0pIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlID0gbmV3IFJlc3BvbnNlKGEuYm9keSk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYS5ib2R5ID0gYXdhaXQgZS5hcnJheUJ1ZmZlcigpCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmJvZHkgaW5zdGFuY2VvZiBSZWFkYWJsZVN0cmVhbSB8fCBhLmJvZHkgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IHMuY2FsbCh0LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogImZldGNoIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaDogYQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW2EuYm9keV0pIDogcy5jYWxsKHQsIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAiZmV0Y2giLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoOiBhCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KQogICAgICAgICAgICAgICAgICAgICAgICB9KGEsIHIsIGUpCiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgewogICAgICAgICAgICAgICAgICAgICAgICB3KHIsIGUsICJmZXRjaCIpCiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgZWxzZSBpZiAoIndlYnNvY2tldCIgPT09IGEudHlwZSkKICAgICAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgICAgICBlLnJlYWR5IHx8IGF3YWl0IGUuaW5pdCgpLAogICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBhc3luYyBmdW5jdGlvbihlLCB0LCByKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBbYSxvXSA9IHIuY29ubmVjdChuZXcgVVJMKGUud2Vic29ja2V0LnVybCksIGUud2Vic29ja2V0LnByb3RvY29scywgZS53ZWJzb2NrZXQucmVxdWVzdEhlYWRlcnMsICh0ID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmNhbGwoZS53ZWJzb2NrZXQuY2hhbm5lbCwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAib3BlbiIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IFt0XQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAodCA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gcy5jYWxsKGUud2Vic29ja2V0LmNoYW5uZWwsIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogIm1lc3NhZ2UiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBbdF0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBbdF0pIDogcy5jYWxsKGUud2Vic29ja2V0LmNoYW5uZWwsIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogIm1lc3NhZ2UiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzOiBbdF0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgKSwgKCAodCwgcikgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY2FsbChlLndlYnNvY2tldC5jaGFubmVsLCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICJjbG9zZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IFt0LCByXQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLCAodCA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5jYWxsKGUud2Vic29ja2V0LmNoYW5uZWwsIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogImVycm9yIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogW3RdCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkKICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgZS53ZWJzb2NrZXQuY2hhbm5lbC5vbm1lc3NhZ2UgPSBlID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZGF0YSIgPT09IGUuZGF0YS50eXBlID8gYShlLmRhdGEuZGF0YSkgOiAiY2xvc2UiID09PSBlLmRhdGEudHlwZSAmJiBvKGUuZGF0YS5jbG9zZUNvZGUsIGUuZGF0YS5jbG9zZVJlYXNvbikKICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuY2FsbCh0LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogIndlYnNvY2tldCIKICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pCiAgICAgICAgICAgICAgICAgICAgICAgIH0oYSwgciwgZSkKICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHcociwgZSwgIndlYnNvY2tldCIpCiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CiAgICAgICAgICAgICwKICAgICAgICAgICAgYXdhaXQgdGhpcy53b3JrZXIuc2VuZE1lc3NhZ2UoewogICAgICAgICAgICAgICAgdHlwZTogInNldCIsCiAgICAgICAgICAgICAgICBjbGllbnQ6IHsKICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbjogImJhcmUtbXV4LXJlbW90ZSIsCiAgICAgICAgICAgICAgICAgICAgYXJnczogW3IucG9ydDIsIHRdCiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0sIFtyLnBvcnQyXSkKICAgICAgICB9CiAgICAgICAgZ2V0SW5uZXJQb3J0KCkgewogICAgICAgICAgICByZXR1cm4gdGhpcy53b3JrZXIucG9ydAogICAgICAgIH0KICAgIH0KICAgICwKICAgIGUuQmFyZVdlYlNvY2tldCA9IHUsCiAgICBlLldlYlNvY2tldEZpZWxkcyA9IG4sCiAgICBlLldvcmtlckNvbm5lY3Rpb24gPSBwLAogICAgZS5icm93c2VyU3VwcG9ydHNUcmFuc2ZlcnJpbmdTdHJlYW1zID0gZCwKICAgIGUuZGVmYXVsdCA9IG0sCiAgICBlLm1heFJlZGlyZWN0cyA9IDIwLAogICAgZS52YWxpZFByb3RvY29sID0gZiwKICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCAiX19lc01vZHVsZSIsIHsKICAgICAgICB2YWx1ZTogITAKICAgIH0pCn0KKSk7Ci8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcA==");
if (uvEnabled) {
  await loadScript("https://cdn.jsdelivr.net/gh/CoolDude2349/Test1@main/uv/uv.bundle.js");
  await loadScript("https://cdn.jsdelivr.net/gh/CoolDude2349/Test1@main/uv/uv.config.js");
}
if (scramjetEnabled) {
  await loadScript("/scramjet/scramjet.codecs.js");
  await loadScript("/scramjet/scramjet.config.js");
}
if (meteorEnabled) {
  await loadScript("/meteor/meteor.codecs.js");
  await loadScript("/meteor/meteor.config.js");
}
window.chemical.connection = new window.BareMux.BareMuxConnection(
  "https://cdn.jsdelivr.net/gh/CoolDude2349/Test1@main/baremux/worker.js"
);
await window.chemical.setTransport(window.chemical.transport);
setupFetch();
await registerSW();
window.chemical.loaded = true;
window.dispatchEvent(new Event("chemicalLoaded"));

})();
