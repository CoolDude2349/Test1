function Eg(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const l of i.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
}
)();
function hd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var md = {
    exports: {}
}
  , bl = {}
  , gd = {
    exports: {}
}
  , de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ho = Symbol.for("react.element")
  , Rg = Symbol.for("react.portal")
  , bg = Symbol.for("react.fragment")
  , Cg = Symbol.for("react.strict_mode")
  , Tg = Symbol.for("react.profiler")
  , Ng = Symbol.for("react.provider")
  , Lg = Symbol.for("react.context")
  , Pg = Symbol.for("react.forward_ref")
  , jg = Symbol.for("react.suspense")
  , Og = Symbol.for("react.memo")
  , Ag = Symbol.for("react.lazy")
  , xc = Symbol.iterator;
function Mg(e) {
    return e === null || typeof e != "object" ? null : (e = xc && e[xc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var vd = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , yd = Object.assign
  , wd = {};
function Dr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = wd,
    this.updater = n || vd
}
Dr.prototype.isReactComponent = {};
Dr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Dr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Sd() {}
Sd.prototype = Dr.prototype;
function fu(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = wd,
    this.updater = n || vd
}
var du = fu.prototype = new Sd;
du.constructor = fu;
yd(du, Dr.prototype);
du.isPureReactComponent = !0;
var Ec = Array.isArray
  , _d = Object.prototype.hasOwnProperty
  , pu = {
    current: null
}
  , kd = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function xd(e, t, n) {
    var r, o = {}, i = null, l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            _d.call(t, r) && !kd.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1)
        o.children = n;
    else if (1 < s) {
        for (var a = Array(s), u = 0; u < s; u++)
            a[u] = arguments[u + 2];
        o.children = a
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps,
        s)
            o[r] === void 0 && (o[r] = s[r]);
    return {
        $$typeof: Ho,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: pu.current
    }
}
function Ig(e, t) {
    return {
        $$typeof: Ho,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function hu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ho
}
function $g(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Rc = /\/+/g;
function ya(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? $g("" + e.key) : t.toString(36)
}
function Pi(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var l = !1;
    if (e === null)
        l = !0;
    else
        switch (i) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Ho:
            case Rg:
                l = !0
            }
        }
    if (l)
        return l = e,
        o = o(l),
        e = r === "" ? "." + ya(l, 0) : r,
        Ec(o) ? (n = "",
        e != null && (n = e.replace(Rc, "$&/") + "/"),
        Pi(o, t, n, "", function(u) {
            return u
        })) : o != null && (hu(o) && (o = Ig(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Rc, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (l = 0,
    r = r === "" ? "." : r + ":",
    Ec(e))
        for (var s = 0; s < e.length; s++) {
            i = e[s];
            var a = r + ya(i, s);
            l += Pi(i, t, n, a, o)
        }
    else if (a = Mg(e),
    typeof a == "function")
        for (e = a.call(e),
        s = 0; !(i = e.next()).done; )
            i = i.value,
            a = r + ya(i, s++),
            l += Pi(i, t, n, a, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function ai(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return Pi(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function Dg(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var qe = {
    current: null
}
  , ji = {
    transition: null
}
  , zg = {
    ReactCurrentDispatcher: qe,
    ReactCurrentBatchConfig: ji,
    ReactCurrentOwner: pu
};
function Ed() {
    throw Error("act(...) is not supported in production builds of React.")
}
de.Children = {
    map: ai,
    forEach: function(e, t, n) {
        ai(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ai(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return ai(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!hu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
de.Component = Dr;
de.Fragment = bg;
de.Profiler = Tg;
de.PureComponent = fu;
de.StrictMode = Cg;
de.Suspense = jg;
de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zg;
de.act = Ed;
de.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = yd({}, e.props)
      , o = e.key
      , i = e.ref
      , l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        l = pu.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (a in t)
            _d.call(t, a) && !kd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        s = Array(a);
        for (var u = 0; u < a; u++)
            s[u] = arguments[u + 2];
        r.children = s
    }
    return {
        $$typeof: Ho,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: l
    }
}
;
de.createContext = function(e) {
    return e = {
        $$typeof: Lg,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Ng,
        _context: e
    },
    e.Consumer = e
}
;
de.createElement = xd;
de.createFactory = function(e) {
    var t = xd.bind(null, e);
    return t.type = e,
    t
}
;
de.createRef = function() {
    return {
        current: null
    }
}
;
de.forwardRef = function(e) {
    return {
        $$typeof: Pg,
        render: e
    }
}
;
de.isValidElement = hu;
de.lazy = function(e) {
    return {
        $$typeof: Ag,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Dg
    }
}
;
de.memo = function(e, t) {
    return {
        $$typeof: Og,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
de.startTransition = function(e) {
    var t = ji.transition;
    ji.transition = {};
    try {
        e()
    } finally {
        ji.transition = t
    }
}
;
de.unstable_act = Ed;
de.useCallback = function(e, t) {
    return qe.current.useCallback(e, t)
}
;
de.useContext = function(e) {
    return qe.current.useContext(e)
}
;
de.useDebugValue = function() {}
;
de.useDeferredValue = function(e) {
    return qe.current.useDeferredValue(e)
}
;
de.useEffect = function(e, t) {
    return qe.current.useEffect(e, t)
}
;
de.useId = function() {
    return qe.current.useId()
}
;
de.useImperativeHandle = function(e, t, n) {
    return qe.current.useImperativeHandle(e, t, n)
}
;
de.useInsertionEffect = function(e, t) {
    return qe.current.useInsertionEffect(e, t)
}
;
de.useLayoutEffect = function(e, t) {
    return qe.current.useLayoutEffect(e, t)
}
;
de.useMemo = function(e, t) {
    return qe.current.useMemo(e, t)
}
;
de.useReducer = function(e, t, n) {
    return qe.current.useReducer(e, t, n)
}
;
de.useRef = function(e) {
    return qe.current.useRef(e)
}
;
de.useState = function(e) {
    return qe.current.useState(e)
}
;
de.useSyncExternalStore = function(e, t, n) {
    return qe.current.useSyncExternalStore(e, t, n)
}
;
de.useTransition = function() {
    return qe.current.useTransition()
}
;
de.version = "18.3.1";
gd.exports = de;
var $ = gd.exports;
const ve = hd($)
  , Vg = Eg({
    __proto__: null,
    default: ve
}, [$]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fg = $
  , Bg = Symbol.for("react.element")
  , Ug = Symbol.for("react.fragment")
  , Wg = Object.prototype.hasOwnProperty
  , Hg = Fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Gg = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Rd(e, t, n) {
    var r, o = {}, i = null, l = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
    for (r in t)
        Wg.call(t, r) && !Gg.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: Bg,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: Hg.current
    }
}
bl.Fragment = Ug;
bl.jsx = Rd;
bl.jsxs = Rd;
md.exports = bl;
var _ = md.exports
  , bd = {
    exports: {}
}
  , ht = {}
  , Cd = {
    exports: {}
}
  , Td = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(F, Q) {
        var V = F.length;
        F.push(Q);
        e: for (; 0 < V; ) {
            var H = V - 1 >>> 1
              , E = F[H];
            if (0 < o(E, Q))
                F[H] = Q,
                F[V] = E,
                V = H;
            else
                break e
        }
    }
    function n(F) {
        return F.length === 0 ? null : F[0]
    }
    function r(F) {
        if (F.length === 0)
            return null;
        var Q = F[0]
          , V = F.pop();
        if (V !== Q) {
            F[0] = V;
            e: for (var H = 0, E = F.length, A = E >>> 1; H < A; ) {
                var M = 2 * (H + 1) - 1
                  , Y = F[M]
                  , W = M + 1
                  , J = F[W];
                if (0 > o(Y, V))
                    W < E && 0 > o(J, Y) ? (F[H] = J,
                    F[W] = V,
                    H = W) : (F[H] = Y,
                    F[M] = V,
                    H = M);
                else if (W < E && 0 > o(J, V))
                    F[H] = J,
                    F[W] = V,
                    H = W;
                else
                    break e
            }
        }
        return Q
    }
    function o(F, Q) {
        var V = F.sortIndex - Q.sortIndex;
        return V !== 0 ? V : F.id - Q.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var l = Date
          , s = l.now();
        e.unstable_now = function() {
            return l.now() - s
        }
    }
    var a = []
      , u = []
      , c = 1
      , f = null
      , m = 3
      , x = !1
      , y = !1
      , R = !1
      , O = typeof setTimeout == "function" ? setTimeout : null
      , v = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(F) {
        for (var Q = n(u); Q !== null; ) {
            if (Q.callback === null)
                r(u);
            else if (Q.startTime <= F)
                r(u),
                Q.sortIndex = Q.expirationTime,
                t(a, Q);
            else
                break;
            Q = n(u)
        }
    }
    function T(F) {
        if (R = !1,
        g(F),
        !y)
            if (n(a) !== null)
                y = !0,
                he(N);
            else {
                var Q = n(u);
                Q !== null && ke(T, Q.startTime - F)
            }
    }
    function N(F, Q) {
        y = !1,
        R && (R = !1,
        v(L),
        L = -1),
        x = !0;
        var V = m;
        try {
            for (g(Q),
            f = n(a); f !== null && (!(f.expirationTime > Q) || F && !q()); ) {
                var H = f.callback;
                if (typeof H == "function") {
                    f.callback = null,
                    m = f.priorityLevel;
                    var E = H(f.expirationTime <= Q);
                    Q = e.unstable_now(),
                    typeof E == "function" ? f.callback = E : f === n(a) && r(a),
                    g(Q)
                } else
                    r(a);
                f = n(a)
            }
            if (f !== null)
                var A = !0;
            else {
                var M = n(u);
                M !== null && ke(T, M.startTime - Q),
                A = !1
            }
            return A
        } finally {
            f = null,
            m = V,
            x = !1
        }
    }
    var P = !1
      , j = null
      , L = -1
      , K = 5
      , B = -1;
    function q() {
        return !(e.unstable_now() - B < K)
    }
    function le() {
        if (j !== null) {
            var F = e.unstable_now();
            B = F;
            var Q = !0;
            try {
                Q = j(!0, F)
            } finally {
                Q ? re() : (P = !1,
                j = null)
            }
        } else
            P = !1
    }
    var re;
    if (typeof p == "function")
        re = function() {
            p(le)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var ee = new MessageChannel
          , _e = ee.port2;
        ee.port1.onmessage = le,
        re = function() {
            _e.postMessage(null)
        }
    } else
        re = function() {
            O(le, 0)
        }
        ;
    function he(F) {
        j = F,
        P || (P = !0,
        re())
    }
    function ke(F, Q) {
        L = O(function() {
            F(e.unstable_now())
        }, Q)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(F) {
        F.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        y || x || (y = !0,
        he(N))
    }
    ,
    e.unstable_forceFrameRate = function(F) {
        0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : K = 0 < F ? Math.floor(1e3 / F) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(F) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var Q = 3;
            break;
        default:
            Q = m
        }
        var V = m;
        m = Q;
        try {
            return F()
        } finally {
            m = V
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(F, Q) {
        switch (F) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            F = 3
        }
        var V = m;
        m = F;
        try {
            return Q()
        } finally {
            m = V
        }
    }
    ,
    e.unstable_scheduleCallback = function(F, Q, V) {
        var H = e.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay,
        V = typeof V == "number" && 0 < V ? H + V : H) : V = H,
        F) {
        case 1:
            var E = -1;
            break;
        case 2:
            E = 250;
            break;
        case 5:
            E = 1073741823;
            break;
        case 4:
            E = 1e4;
            break;
        default:
            E = 5e3
        }
        return E = V + E,
        F = {
            id: c++,
            callback: Q,
            priorityLevel: F,
            startTime: V,
            expirationTime: E,
            sortIndex: -1
        },
        V > H ? (F.sortIndex = V,
        t(u, F),
        n(a) === null && F === n(u) && (R ? (v(L),
        L = -1) : R = !0,
        ke(T, V - H))) : (F.sortIndex = E,
        t(a, F),
        y || x || (y = !0,
        he(N))),
        F
    }
    ,
    e.unstable_shouldYield = q,
    e.unstable_wrapCallback = function(F) {
        var Q = m;
        return function() {
            var V = m;
            m = Q;
            try {
                return F.apply(this, arguments)
            } finally {
                m = V
            }
        }
    }
}
)(Td);
Cd.exports = Td;
var Kg = Cd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qg = $
  , pt = Kg;
function z(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Nd = new Set
  , bo = {};
function Zn(e, t) {
    Rr(e, t),
    Rr(e + "Capture", t)
}
function Rr(e, t) {
    for (bo[e] = t,
    e = 0; e < t.length; e++)
        Nd.add(t[e])
}
var Gt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , ts = Object.prototype.hasOwnProperty
  , Yg = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , bc = {}
  , Cc = {};
function Xg(e) {
    return ts.call(Cc, e) ? !0 : ts.call(bc, e) ? !1 : Yg.test(e) ? Cc[e] = !0 : (bc[e] = !0,
    !1)
}
function Zg(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function qg(e, t, n, r) {
    if (t === null || typeof t > "u" || Zg(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Je(e, t, n, r, o, i, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = l
}
var We = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    We[e] = new Je(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    We[t] = new Je(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    We[e] = new Je(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    We[e] = new Je(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    We[e] = new Je(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    We[e] = new Je(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    We[e] = new Je(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    We[e] = new Je(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    We[e] = new Je(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var mu = /[\-:]([a-z])/g;
function gu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(mu, gu);
    We[t] = new Je(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(mu, gu);
    We[t] = new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(mu, gu);
    We[t] = new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    We[e] = new Je(e,1,!1,e.toLowerCase(),null,!1,!1)
});
We.xlinkHref = new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    We[e] = new Je(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function vu(e, t, n, r) {
    var o = We.hasOwnProperty(t) ? We[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (qg(t, n, o, r) && (n = null),
    r || o === null ? Xg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Zt = Qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , si = Symbol.for("react.element")
  , lr = Symbol.for("react.portal")
  , ar = Symbol.for("react.fragment")
  , yu = Symbol.for("react.strict_mode")
  , ns = Symbol.for("react.profiler")
  , Ld = Symbol.for("react.provider")
  , Pd = Symbol.for("react.context")
  , wu = Symbol.for("react.forward_ref")
  , rs = Symbol.for("react.suspense")
  , os = Symbol.for("react.suspense_list")
  , Su = Symbol.for("react.memo")
  , on = Symbol.for("react.lazy")
  , jd = Symbol.for("react.offscreen")
  , Tc = Symbol.iterator;
function Yr(e) {
    return e === null || typeof e != "object" ? null : (e = Tc && e[Tc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var je = Object.assign, wa;
function so(e) {
    if (wa === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            wa = t && t[1] || ""
        }
    return `
` + wa + e
}
var Sa = !1;
function _a(e, t) {
    if (!e || Sa)
        return "";
    Sa = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s]; )
                s--;
            for (; 1 <= l && 0 <= s; l--,
            s--)
                if (o[l] !== i[s]) {
                    if (l !== 1 || s !== 1)
                        do
                            if (l--,
                            s--,
                            0 > s || o[l] !== i[s]) {
                                var a = `
` + o[l].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= l && 0 <= s);
                    break
                }
        }
    } finally {
        Sa = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? so(e) : ""
}
function Jg(e) {
    switch (e.tag) {
    case 5:
        return so(e.type);
    case 16:
        return so("Lazy");
    case 13:
        return so("Suspense");
    case 19:
        return so("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = _a(e.type, !1),
        e;
    case 11:
        return e = _a(e.type.render, !1),
        e;
    case 1:
        return e = _a(e.type, !0),
        e;
    default:
        return ""
    }
}
function is(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case ar:
        return "Fragment";
    case lr:
        return "Portal";
    case ns:
        return "Profiler";
    case yu:
        return "StrictMode";
    case rs:
        return "Suspense";
    case os:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Pd:
            return (e.displayName || "Context") + ".Consumer";
        case Ld:
            return (e._context.displayName || "Context") + ".Provider";
        case wu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Su:
            return t = e.displayName || null,
            t !== null ? t : is(e.type) || "Memo";
        case on:
            t = e._payload,
            e = e._init;
            try {
                return is(e(t))
            } catch {}
        }
    return null
}
function ev(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return is(t);
    case 8:
        return t === yu ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function kn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Od(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function tv(e) {
    var t = Od(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(l) {
                r = "" + l,
                i.call(this, l)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function ui(e) {
    e._valueTracker || (e._valueTracker = tv(e))
}
function Ad(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Od(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Hi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ls(e, t) {
    var n = t.checked;
    return je({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Nc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = kn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Md(e, t) {
    t = t.checked,
    t != null && vu(e, "checked", t, !1)
}
function as(e, t) {
    Md(e, t);
    var n = kn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ss(e, t.type, n) : t.hasOwnProperty("defaultValue") && ss(e, t.type, kn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Lc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ss(e, t, n) {
    (t !== "number" || Hi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var uo = Array.isArray;
function yr(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + kn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function us(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(z(91));
    return je({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Pc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(z(92));
            if (uo(n)) {
                if (1 < n.length)
                    throw Error(z(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: kn(n)
    }
}
function Id(e, t) {
    var n = kn(t.value)
      , r = kn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function jc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function $d(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function cs(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? $d(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ci, Dd = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ci = ci || document.createElement("div"),
        ci.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ci.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Co(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var ho = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , nv = ["Webkit", "ms", "Moz", "O"];
Object.keys(ho).forEach(function(e) {
    nv.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        ho[t] = ho[e]
    })
});
function zd(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ho.hasOwnProperty(e) && ho[e] ? ("" + t).trim() : t + "px"
}
function Vd(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = zd(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var rv = je({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function fs(e, t) {
    if (t) {
        if (rv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(z(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(z(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(z(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(z(62))
    }
}
function ds(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var ps = null;
function _u(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var hs = null
  , wr = null
  , Sr = null;
function Oc(e) {
    if (e = Qo(e)) {
        if (typeof hs != "function")
            throw Error(z(280));
        var t = e.stateNode;
        t && (t = Pl(t),
        hs(e.stateNode, e.type, t))
    }
}
function Fd(e) {
    wr ? Sr ? Sr.push(e) : Sr = [e] : wr = e
}
function Bd() {
    if (wr) {
        var e = wr
          , t = Sr;
        if (Sr = wr = null,
        Oc(e),
        t)
            for (e = 0; e < t.length; e++)
                Oc(t[e])
    }
}
function Ud(e, t) {
    return e(t)
}
function Wd() {}
var ka = !1;
function Hd(e, t, n) {
    if (ka)
        return e(t, n);
    ka = !0;
    try {
        return Ud(e, t, n)
    } finally {
        ka = !1,
        (wr !== null || Sr !== null) && (Wd(),
        Bd())
    }
}
function To(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Pl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(z(231, t, typeof n));
    return n
}
var ms = !1;
if (Gt)
    try {
        var Xr = {};
        Object.defineProperty(Xr, "passive", {
            get: function() {
                ms = !0
            }
        }),
        window.addEventListener("test", Xr, Xr),
        window.removeEventListener("test", Xr, Xr)
    } catch {
        ms = !1
    }
function ov(e, t, n, r, o, i, l, s, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var mo = !1
  , Gi = null
  , Ki = !1
  , gs = null
  , iv = {
    onError: function(e) {
        mo = !0,
        Gi = e
    }
};
function lv(e, t, n, r, o, i, l, s, a) {
    mo = !1,
    Gi = null,
    ov.apply(iv, arguments)
}
function av(e, t, n, r, o, i, l, s, a) {
    if (lv.apply(this, arguments),
    mo) {
        if (mo) {
            var u = Gi;
            mo = !1,
            Gi = null
        } else
            throw Error(z(198));
        Ki || (Ki = !0,
        gs = u)
    }
}
function qn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Gd(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Ac(e) {
    if (qn(e) !== e)
        throw Error(z(188))
}
function sv(e) {
    var t = e.alternate;
    if (!t) {
        if (t = qn(e),
        t === null)
            throw Error(z(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return Ac(o),
                    e;
                if (i === r)
                    return Ac(o),
                    t;
                i = i.sibling
            }
            throw Error(z(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var l = !1, s = o.child; s; ) {
                if (s === n) {
                    l = !0,
                    n = o,
                    r = i;
                    break
                }
                if (s === r) {
                    l = !0,
                    r = o,
                    n = i;
                    break
                }
                s = s.sibling
            }
            if (!l) {
                for (s = i.child; s; ) {
                    if (s === n) {
                        l = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (s === r) {
                        l = !0,
                        r = i,
                        n = o;
                        break
                    }
                    s = s.sibling
                }
                if (!l)
                    throw Error(z(189))
            }
        }
        if (n.alternate !== r)
            throw Error(z(190))
    }
    if (n.tag !== 3)
        throw Error(z(188));
    return n.stateNode.current === n ? e : t
}
function Kd(e) {
    return e = sv(e),
    e !== null ? Qd(e) : null
}
function Qd(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Qd(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Yd = pt.unstable_scheduleCallback
  , Mc = pt.unstable_cancelCallback
  , uv = pt.unstable_shouldYield
  , cv = pt.unstable_requestPaint
  , Ie = pt.unstable_now
  , fv = pt.unstable_getCurrentPriorityLevel
  , ku = pt.unstable_ImmediatePriority
  , Xd = pt.unstable_UserBlockingPriority
  , Qi = pt.unstable_NormalPriority
  , dv = pt.unstable_LowPriority
  , Zd = pt.unstable_IdlePriority
  , Cl = null
  , At = null;
function pv(e) {
    if (At && typeof At.onCommitFiberRoot == "function")
        try {
            At.onCommitFiberRoot(Cl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ct = Math.clz32 ? Math.clz32 : gv
  , hv = Math.log
  , mv = Math.LN2;
function gv(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (hv(e) / mv | 0) | 0
}
var fi = 64
  , di = 4194304;
function co(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Yi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , l = n & 268435455;
    if (l !== 0) {
        var s = l & ~o;
        s !== 0 ? r = co(s) : (i &= l,
        i !== 0 && (r = co(i)))
    } else
        l = n & ~o,
        l !== 0 ? r = co(l) : i !== 0 && (r = co(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Ct(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function vv(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function yv(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var l = 31 - Ct(i)
          , s = 1 << l
          , a = o[l];
        a === -1 ? (!(s & n) || s & r) && (o[l] = vv(s, t)) : a <= t && (e.expiredLanes |= s),
        i &= ~s
    }
}
function vs(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function qd() {
    var e = fi;
    return fi <<= 1,
    !(fi & 4194240) && (fi = 64),
    e
}
function xa(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Go(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ct(t),
    e[t] = n
}
function wv(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Ct(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function xu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Ct(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var we = 0;
function Jd(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var ep, Eu, tp, np, rp, ys = !1, pi = [], pn = null, hn = null, mn = null, No = new Map, Lo = new Map, sn = [], Sv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ic(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        pn = null;
        break;
    case "dragenter":
    case "dragleave":
        hn = null;
        break;
    case "mouseover":
    case "mouseout":
        mn = null;
        break;
    case "pointerover":
    case "pointerout":
        No.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Lo.delete(t.pointerId)
    }
}
function Zr(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = Qo(t),
    t !== null && Eu(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function _v(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return pn = Zr(pn, e, t, n, r, o),
        !0;
    case "dragenter":
        return hn = Zr(hn, e, t, n, r, o),
        !0;
    case "mouseover":
        return mn = Zr(mn, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return No.set(i, Zr(No.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        Lo.set(i, Zr(Lo.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function op(e) {
    var t = zn(e.target);
    if (t !== null) {
        var n = qn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Gd(n),
                t !== null) {
                    e.blockedOn = t,
                    rp(e.priority, function() {
                        tp(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Oi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            ps = r,
            n.target.dispatchEvent(r),
            ps = null
        } else
            return t = Qo(n),
            t !== null && Eu(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function $c(e, t, n) {
    Oi(e) && n.delete(t)
}
function kv() {
    ys = !1,
    pn !== null && Oi(pn) && (pn = null),
    hn !== null && Oi(hn) && (hn = null),
    mn !== null && Oi(mn) && (mn = null),
    No.forEach($c),
    Lo.forEach($c)
}
function qr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    ys || (ys = !0,
    pt.unstable_scheduleCallback(pt.unstable_NormalPriority, kv)))
}
function Po(e) {
    function t(o) {
        return qr(o, e)
    }
    if (0 < pi.length) {
        qr(pi[0], e);
        for (var n = 1; n < pi.length; n++) {
            var r = pi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (pn !== null && qr(pn, e),
    hn !== null && qr(hn, e),
    mn !== null && qr(mn, e),
    No.forEach(t),
    Lo.forEach(t),
    n = 0; n < sn.length; n++)
        r = sn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < sn.length && (n = sn[0],
    n.blockedOn === null); )
        op(n),
        n.blockedOn === null && sn.shift()
}
var _r = Zt.ReactCurrentBatchConfig
  , Xi = !0;
function xv(e, t, n, r) {
    var o = we
      , i = _r.transition;
    _r.transition = null;
    try {
        we = 1,
        Ru(e, t, n, r)
    } finally {
        we = o,
        _r.transition = i
    }
}
function Ev(e, t, n, r) {
    var o = we
      , i = _r.transition;
    _r.transition = null;
    try {
        we = 4,
        Ru(e, t, n, r)
    } finally {
        we = o,
        _r.transition = i
    }
}
function Ru(e, t, n, r) {
    if (Xi) {
        var o = ws(e, t, n, r);
        if (o === null)
            Oa(e, t, r, Zi, n),
            Ic(e, r);
        else if (_v(o, e, t, n, r))
            r.stopPropagation();
        else if (Ic(e, r),
        t & 4 && -1 < Sv.indexOf(e)) {
            for (; o !== null; ) {
                var i = Qo(o);
                if (i !== null && ep(i),
                i = ws(e, t, n, r),
                i === null && Oa(e, t, r, Zi, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            Oa(e, t, r, null, n)
    }
}
var Zi = null;
function ws(e, t, n, r) {
    if (Zi = null,
    e = _u(r),
    e = zn(e),
    e !== null)
        if (t = qn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Gd(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Zi = e,
    null
}
function ip(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (fv()) {
        case ku:
            return 1;
        case Xd:
            return 4;
        case Qi:
        case dv:
            return 16;
        case Zd:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var cn = null
  , bu = null
  , Ai = null;
function lp() {
    if (Ai)
        return Ai;
    var e, t = bu, n = t.length, r, o = "value"in cn ? cn.value : cn.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
        ;
    return Ai = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Mi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function hi() {
    return !0
}
function Dc() {
    return !1
}
function mt(e) {
    function t(n, r, o, i, l) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = l,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (n = e[s],
            this[s] = n ? n(i) : i[s]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? hi : Dc,
        this.isPropagationStopped = Dc,
        this
    }
    return je(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = hi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = hi)
        },
        persist: function() {},
        isPersistent: hi
    }),
    t
}
var zr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Cu = mt(zr), Ko = je({}, zr, {
    view: 0,
    detail: 0
}), Rv = mt(Ko), Ea, Ra, Jr, Tl = je({}, Ko, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Tu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Jr && (Jr && e.type === "mousemove" ? (Ea = e.screenX - Jr.screenX,
        Ra = e.screenY - Jr.screenY) : Ra = Ea = 0,
        Jr = e),
        Ea)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Ra
    }
}), zc = mt(Tl), bv = je({}, Tl, {
    dataTransfer: 0
}), Cv = mt(bv), Tv = je({}, Ko, {
    relatedTarget: 0
}), ba = mt(Tv), Nv = je({}, zr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Lv = mt(Nv), Pv = je({}, zr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), jv = mt(Pv), Ov = je({}, zr, {
    data: 0
}), Vc = mt(Ov), Av = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Mv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Iv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function $v(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Iv[e]) ? !!t[e] : !1
}
function Tu() {
    return $v
}
var Dv = je({}, Ko, {
    key: function(e) {
        if (e.key) {
            var t = Av[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Mi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Mv[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Tu,
    charCode: function(e) {
        return e.type === "keypress" ? Mi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Mi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , zv = mt(Dv)
  , Vv = je({}, Tl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Fc = mt(Vv)
  , Fv = je({}, Ko, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tu
})
  , Bv = mt(Fv)
  , Uv = je({}, zr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Wv = mt(Uv)
  , Hv = je({}, Tl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Gv = mt(Hv)
  , Kv = [9, 13, 27, 32]
  , Nu = Gt && "CompositionEvent"in window
  , go = null;
Gt && "documentMode"in document && (go = document.documentMode);
var Qv = Gt && "TextEvent"in window && !go
  , ap = Gt && (!Nu || go && 8 < go && 11 >= go)
  , Bc = " "
  , Uc = !1;
function sp(e, t) {
    switch (e) {
    case "keyup":
        return Kv.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function up(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var sr = !1;
function Yv(e, t) {
    switch (e) {
    case "compositionend":
        return up(t);
    case "keypress":
        return t.which !== 32 ? null : (Uc = !0,
        Bc);
    case "textInput":
        return e = t.data,
        e === Bc && Uc ? null : e;
    default:
        return null
    }
}
function Xv(e, t) {
    if (sr)
        return e === "compositionend" || !Nu && sp(e, t) ? (e = lp(),
        Ai = bu = cn = null,
        sr = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return ap && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Zv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Wc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Zv[e.type] : t === "textarea"
}
function cp(e, t, n, r) {
    Fd(r),
    t = qi(t, "onChange"),
    0 < t.length && (n = new Cu("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var vo = null
  , jo = null;
function qv(e) {
    _p(e, 0)
}
function Nl(e) {
    var t = fr(e);
    if (Ad(t))
        return e
}
function Jv(e, t) {
    if (e === "change")
        return t
}
var fp = !1;
if (Gt) {
    var Ca;
    if (Gt) {
        var Ta = "oninput"in document;
        if (!Ta) {
            var Hc = document.createElement("div");
            Hc.setAttribute("oninput", "return;"),
            Ta = typeof Hc.oninput == "function"
        }
        Ca = Ta
    } else
        Ca = !1;
    fp = Ca && (!document.documentMode || 9 < document.documentMode)
}
function Gc() {
    vo && (vo.detachEvent("onpropertychange", dp),
    jo = vo = null)
}
function dp(e) {
    if (e.propertyName === "value" && Nl(jo)) {
        var t = [];
        cp(t, jo, e, _u(e)),
        Hd(qv, t)
    }
}
function e0(e, t, n) {
    e === "focusin" ? (Gc(),
    vo = t,
    jo = n,
    vo.attachEvent("onpropertychange", dp)) : e === "focusout" && Gc()
}
function t0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Nl(jo)
}
function n0(e, t) {
    if (e === "click")
        return Nl(t)
}
function r0(e, t) {
    if (e === "input" || e === "change")
        return Nl(t)
}
function o0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Nt = typeof Object.is == "function" ? Object.is : o0;
function Oo(e, t) {
    if (Nt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!ts.call(t, o) || !Nt(e[o], t[o]))
            return !1
    }
    return !0
}
function Kc(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Qc(e, t) {
    var n = Kc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Kc(n)
    }
}
function pp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pp(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function hp() {
    for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Hi(e.document)
    }
    return t
}
function Lu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function i0(e) {
    var t = hp()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && pp(n.ownerDocument.documentElement, n)) {
        if (r !== null && Lu(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = Qc(n, i);
                var l = Qc(n, r);
                o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var l0 = Gt && "documentMode"in document && 11 >= document.documentMode
  , ur = null
  , Ss = null
  , yo = null
  , _s = !1;
function Yc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    _s || ur == null || ur !== Hi(r) || (r = ur,
    "selectionStart"in r && Lu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    yo && Oo(yo, r) || (yo = r,
    r = qi(Ss, "onSelect"),
    0 < r.length && (t = new Cu("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = ur)))
}
function mi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var cr = {
    animationend: mi("Animation", "AnimationEnd"),
    animationiteration: mi("Animation", "AnimationIteration"),
    animationstart: mi("Animation", "AnimationStart"),
    transitionend: mi("Transition", "TransitionEnd")
}
  , Na = {}
  , mp = {};
Gt && (mp = document.createElement("div").style,
"AnimationEvent"in window || (delete cr.animationend.animation,
delete cr.animationiteration.animation,
delete cr.animationstart.animation),
"TransitionEvent"in window || delete cr.transitionend.transition);
function Ll(e) {
    if (Na[e])
        return Na[e];
    if (!cr[e])
        return e;
    var t = cr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in mp)
            return Na[e] = t[n];
    return e
}
var gp = Ll("animationend")
  , vp = Ll("animationiteration")
  , yp = Ll("animationstart")
  , wp = Ll("transitionend")
  , Sp = new Map
  , Xc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function En(e, t) {
    Sp.set(e, t),
    Zn(t, [e])
}
for (var La = 0; La < Xc.length; La++) {
    var Pa = Xc[La]
      , a0 = Pa.toLowerCase()
      , s0 = Pa[0].toUpperCase() + Pa.slice(1);
    En(a0, "on" + s0)
}
En(gp, "onAnimationEnd");
En(vp, "onAnimationIteration");
En(yp, "onAnimationStart");
En("dblclick", "onDoubleClick");
En("focusin", "onFocus");
En("focusout", "onBlur");
En(wp, "onTransitionEnd");
Rr("onMouseEnter", ["mouseout", "mouseover"]);
Rr("onMouseLeave", ["mouseout", "mouseover"]);
Rr("onPointerEnter", ["pointerout", "pointerover"]);
Rr("onPointerLeave", ["pointerout", "pointerover"]);
Zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var fo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , u0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));
function Zc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    av(r, t, void 0, e),
    e.currentTarget = null
}
function _p(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var s = r[l]
                      , a = s.instance
                      , u = s.currentTarget;
                    if (s = s.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Zc(o, s, u),
                    i = a
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (s = r[l],
                    a = s.instance,
                    u = s.currentTarget,
                    s = s.listener,
                    a !== i && o.isPropagationStopped())
                        break e;
                    Zc(o, s, u),
                    i = a
                }
        }
    }
    if (Ki)
        throw e = gs,
        Ki = !1,
        gs = null,
        e
}
function Re(e, t) {
    var n = t[bs];
    n === void 0 && (n = t[bs] = new Set);
    var r = e + "__bubble";
    n.has(r) || (kp(t, e, 2, !1),
    n.add(r))
}
function ja(e, t, n) {
    var r = 0;
    t && (r |= 4),
    kp(n, e, r, t)
}
var gi = "_reactListening" + Math.random().toString(36).slice(2);
function Ao(e) {
    if (!e[gi]) {
        e[gi] = !0,
        Nd.forEach(function(n) {
            n !== "selectionchange" && (u0.has(n) || ja(n, !1, e),
            ja(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[gi] || (t[gi] = !0,
        ja("selectionchange", !1, t))
    }
}
function kp(e, t, n, r) {
    switch (ip(t)) {
    case 1:
        var o = xv;
        break;
    case 4:
        o = Ev;
        break;
    default:
        o = Ru
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !ms || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Oa(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var s = r.stateNode.containerInfo;
                if (s === o || s.nodeType === 8 && s.parentNode === o)
                    break;
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var a = l.tag;
                        if ((a === 3 || a === 4) && (a = l.stateNode.containerInfo,
                        a === o || a.nodeType === 8 && a.parentNode === o))
                            return;
                        l = l.return
                    }
                for (; s !== null; ) {
                    if (l = zn(s),
                    l === null)
                        return;
                    if (a = l.tag,
                    a === 5 || a === 6) {
                        r = i = l;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
    Hd(function() {
        var u = i
          , c = _u(n)
          , f = [];
        e: {
            var m = Sp.get(e);
            if (m !== void 0) {
                var x = Cu
                  , y = e;
                switch (e) {
                case "keypress":
                    if (Mi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    x = zv;
                    break;
                case "focusin":
                    y = "focus",
                    x = ba;
                    break;
                case "focusout":
                    y = "blur",
                    x = ba;
                    break;
                case "beforeblur":
                case "afterblur":
                    x = ba;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    x = zc;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    x = Cv;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    x = Bv;
                    break;
                case gp:
                case vp:
                case yp:
                    x = Lv;
                    break;
                case wp:
                    x = Wv;
                    break;
                case "scroll":
                    x = Rv;
                    break;
                case "wheel":
                    x = Gv;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    x = jv;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    x = Fc
                }
                var R = (t & 4) !== 0
                  , O = !R && e === "scroll"
                  , v = R ? m !== null ? m + "Capture" : null : m;
                R = [];
                for (var p = u, g; p !== null; ) {
                    g = p;
                    var T = g.stateNode;
                    if (g.tag === 5 && T !== null && (g = T,
                    v !== null && (T = To(p, v),
                    T != null && R.push(Mo(p, T, g)))),
                    O)
                        break;
                    p = p.return
                }
                0 < R.length && (m = new x(m,y,null,n,c),
                f.push({
                    event: m,
                    listeners: R
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                x = e === "mouseout" || e === "pointerout",
                m && n !== ps && (y = n.relatedTarget || n.fromElement) && (zn(y) || y[Kt]))
                    break e;
                if ((x || m) && (m = c.window === c ? c : (m = c.ownerDocument) ? m.defaultView || m.parentWindow : window,
                x ? (y = n.relatedTarget || n.toElement,
                x = u,
                y = y ? zn(y) : null,
                y !== null && (O = qn(y),
                y !== O || y.tag !== 5 && y.tag !== 6) && (y = null)) : (x = null,
                y = u),
                x !== y)) {
                    if (R = zc,
                    T = "onMouseLeave",
                    v = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (R = Fc,
                    T = "onPointerLeave",
                    v = "onPointerEnter",
                    p = "pointer"),
                    O = x == null ? m : fr(x),
                    g = y == null ? m : fr(y),
                    m = new R(T,p + "leave",x,n,c),
                    m.target = O,
                    m.relatedTarget = g,
                    T = null,
                    zn(c) === u && (R = new R(v,p + "enter",y,n,c),
                    R.target = g,
                    R.relatedTarget = O,
                    T = R),
                    O = T,
                    x && y)
                        t: {
                            for (R = x,
                            v = y,
                            p = 0,
                            g = R; g; g = or(g))
                                p++;
                            for (g = 0,
                            T = v; T; T = or(T))
                                g++;
                            for (; 0 < p - g; )
                                R = or(R),
                                p--;
                            for (; 0 < g - p; )
                                v = or(v),
                                g--;
                            for (; p--; ) {
                                if (R === v || v !== null && R === v.alternate)
                                    break t;
                                R = or(R),
                                v = or(v)
                            }
                            R = null
                        }
                    else
                        R = null;
                    x !== null && qc(f, m, x, R, !1),
                    y !== null && O !== null && qc(f, O, y, R, !0)
                }
            }
            e: {
                if (m = u ? fr(u) : window,
                x = m.nodeName && m.nodeName.toLowerCase(),
                x === "select" || x === "input" && m.type === "file")
                    var N = Jv;
                else if (Wc(m))
                    if (fp)
                        N = r0;
                    else {
                        N = t0;
                        var P = e0
                    }
                else
                    (x = m.nodeName) && x.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (N = n0);
                if (N && (N = N(e, u))) {
                    cp(f, N, n, c);
                    break e
                }
                P && P(e, m, u),
                e === "focusout" && (P = m._wrapperState) && P.controlled && m.type === "number" && ss(m, "number", m.value)
            }
            switch (P = u ? fr(u) : window,
            e) {
            case "focusin":
                (Wc(P) || P.contentEditable === "true") && (ur = P,
                Ss = u,
                yo = null);
                break;
            case "focusout":
                yo = Ss = ur = null;
                break;
            case "mousedown":
                _s = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                _s = !1,
                Yc(f, n, c);
                break;
            case "selectionchange":
                if (l0)
                    break;
            case "keydown":
            case "keyup":
                Yc(f, n, c)
            }
            var j;
            if (Nu)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var L = "onCompositionStart";
                        break e;
                    case "compositionend":
                        L = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        L = "onCompositionUpdate";
                        break e
                    }
                    L = void 0
                }
            else
                sr ? sp(e, n) && (L = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
            L && (ap && n.locale !== "ko" && (sr || L !== "onCompositionStart" ? L === "onCompositionEnd" && sr && (j = lp()) : (cn = c,
            bu = "value"in cn ? cn.value : cn.textContent,
            sr = !0)),
            P = qi(u, L),
            0 < P.length && (L = new Vc(L,e,null,n,c),
            f.push({
                event: L,
                listeners: P
            }),
            j ? L.data = j : (j = up(n),
            j !== null && (L.data = j)))),
            (j = Qv ? Yv(e, n) : Xv(e, n)) && (u = qi(u, "onBeforeInput"),
            0 < u.length && (c = new Vc("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = j))
        }
        _p(f, t)
    })
}
function Mo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function qi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = To(e, n),
        i != null && r.unshift(Mo(e, i, o)),
        i = To(e, t),
        i != null && r.push(Mo(e, i, o))),
        e = e.return
    }
    return r
}
function or(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function qc(e, t, n, r, o) {
    for (var i = t._reactName, l = []; n !== null && n !== r; ) {
        var s = n
          , a = s.alternate
          , u = s.stateNode;
        if (a !== null && a === r)
            break;
        s.tag === 5 && u !== null && (s = u,
        o ? (a = To(n, i),
        a != null && l.unshift(Mo(n, a, s))) : o || (a = To(n, i),
        a != null && l.push(Mo(n, a, s)))),
        n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var c0 = /\r\n?/g
  , f0 = /\u0000|\uFFFD/g;
function Jc(e) {
    return (typeof e == "string" ? e : "" + e).replace(c0, `
`).replace(f0, "")
}
function vi(e, t, n) {
    if (t = Jc(t),
    Jc(e) !== t && n)
        throw Error(z(425))
}
function Ji() {}
var ks = null
  , xs = null;
function Es(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Rs = typeof setTimeout == "function" ? setTimeout : void 0
  , d0 = typeof clearTimeout == "function" ? clearTimeout : void 0
  , ef = typeof Promise == "function" ? Promise : void 0
  , p0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ef < "u" ? function(e) {
    return ef.resolve(null).then(e).catch(h0)
}
: Rs;
function h0(e) {
    setTimeout(function() {
        throw e
    })
}
function Aa(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Po(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Po(t)
}
function gn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function tf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Vr = Math.random().toString(36).slice(2)
  , jt = "__reactFiber$" + Vr
  , Io = "__reactProps$" + Vr
  , Kt = "__reactContainer$" + Vr
  , bs = "__reactEvents$" + Vr
  , m0 = "__reactListeners$" + Vr
  , g0 = "__reactHandles$" + Vr;
function zn(e) {
    var t = e[jt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Kt] || n[jt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = tf(e); e !== null; ) {
                    if (n = e[jt])
                        return n;
                    e = tf(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Qo(e) {
    return e = e[jt] || e[Kt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function fr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(z(33))
}
function Pl(e) {
    return e[Io] || null
}
var Cs = []
  , dr = -1;
function Rn(e) {
    return {
        current: e
    }
}
function Ce(e) {
    0 > dr || (e.current = Cs[dr],
    Cs[dr] = null,
    dr--)
}
function xe(e, t) {
    dr++,
    Cs[dr] = e.current,
    e.current = t
}
var xn = {}
  , Ye = Rn(xn)
  , rt = Rn(!1)
  , Wn = xn;
function br(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return xn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function ot(e) {
    return e = e.childContextTypes,
    e != null
}
function el() {
    Ce(rt),
    Ce(Ye)
}
function nf(e, t, n) {
    if (Ye.current !== xn)
        throw Error(z(168));
    xe(Ye, t),
    xe(rt, n)
}
function xp(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(z(108, ev(e) || "Unknown", o));
    return je({}, n, r)
}
function tl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xn,
    Wn = Ye.current,
    xe(Ye, e),
    xe(rt, rt.current),
    !0
}
function rf(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(z(169));
    n ? (e = xp(e, t, Wn),
    r.__reactInternalMemoizedMergedChildContext = e,
    Ce(rt),
    Ce(Ye),
    xe(Ye, e)) : Ce(rt),
    xe(rt, n)
}
var Bt = null
  , jl = !1
  , Ma = !1;
function Ep(e) {
    Bt === null ? Bt = [e] : Bt.push(e)
}
function v0(e) {
    jl = !0,
    Ep(e)
}
function bn() {
    if (!Ma && Bt !== null) {
        Ma = !0;
        var e = 0
          , t = we;
        try {
            var n = Bt;
            for (we = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Bt = null,
            jl = !1
        } catch (o) {
            throw Bt !== null && (Bt = Bt.slice(e + 1)),
            Yd(ku, bn),
            o
        } finally {
            we = t,
            Ma = !1
        }
    }
    return null
}
var pr = []
  , hr = 0
  , nl = null
  , rl = 0
  , gt = []
  , vt = 0
  , Hn = null
  , Ut = 1
  , Wt = "";
function Mn(e, t) {
    pr[hr++] = rl,
    pr[hr++] = nl,
    nl = e,
    rl = t
}
function Rp(e, t, n) {
    gt[vt++] = Ut,
    gt[vt++] = Wt,
    gt[vt++] = Hn,
    Hn = e;
    var r = Ut;
    e = Wt;
    var o = 32 - Ct(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - Ct(t) + o;
    if (30 < i) {
        var l = o - o % 5;
        i = (r & (1 << l) - 1).toString(32),
        r >>= l,
        o -= l,
        Ut = 1 << 32 - Ct(t) + o | n << o | r,
        Wt = i + e
    } else
        Ut = 1 << i | n << o | r,
        Wt = e
}
function Pu(e) {
    e.return !== null && (Mn(e, 1),
    Rp(e, 1, 0))
}
function ju(e) {
    for (; e === nl; )
        nl = pr[--hr],
        pr[hr] = null,
        rl = pr[--hr],
        pr[hr] = null;
    for (; e === Hn; )
        Hn = gt[--vt],
        gt[vt] = null,
        Wt = gt[--vt],
        gt[vt] = null,
        Ut = gt[--vt],
        gt[vt] = null
}
var dt = null
  , ft = null
  , Te = !1
  , bt = null;
function bp(e, t) {
    var n = yt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function of(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        dt = e,
        ft = gn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        dt = e,
        ft = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Hn !== null ? {
            id: Ut,
            overflow: Wt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = yt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        dt = e,
        ft = null,
        !0) : !1;
    default:
        return !1
    }
}
function Ts(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Ns(e) {
    if (Te) {
        var t = ft;
        if (t) {
            var n = t;
            if (!of(e, t)) {
                if (Ts(e))
                    throw Error(z(418));
                t = gn(n.nextSibling);
                var r = dt;
                t && of(e, t) ? bp(r, n) : (e.flags = e.flags & -4097 | 2,
                Te = !1,
                dt = e)
            }
        } else {
            if (Ts(e))
                throw Error(z(418));
            e.flags = e.flags & -4097 | 2,
            Te = !1,
            dt = e
        }
    }
}
function lf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    dt = e
}
function yi(e) {
    if (e !== dt)
        return !1;
    if (!Te)
        return lf(e),
        Te = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Es(e.type, e.memoizedProps)),
    t && (t = ft)) {
        if (Ts(e))
            throw Cp(),
            Error(z(418));
        for (; t; )
            bp(e, t),
            t = gn(t.nextSibling)
    }
    if (lf(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(z(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ft = gn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ft = null
        }
    } else
        ft = dt ? gn(e.stateNode.nextSibling) : null;
    return !0
}
function Cp() {
    for (var e = ft; e; )
        e = gn(e.nextSibling)
}
function Cr() {
    ft = dt = null,
    Te = !1
}
function Ou(e) {
    bt === null ? bt = [e] : bt.push(e)
}
var y0 = Zt.ReactCurrentBatchConfig;
function eo(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(z(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(z(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
                var s = o.refs;
                l === null ? delete s[i] : s[i] = l
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(z(284));
        if (!n._owner)
            throw Error(z(290, e))
    }
    return e
}
function wi(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function af(e) {
    var t = e._init;
    return t(e._payload)
}
function Tp(e) {
    function t(v, p) {
        if (e) {
            var g = v.deletions;
            g === null ? (v.deletions = [p],
            v.flags |= 16) : g.push(p)
        }
    }
    function n(v, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(v, p),
            p = p.sibling;
        return null
    }
    function r(v, p) {
        for (v = new Map; p !== null; )
            p.key !== null ? v.set(p.key, p) : v.set(p.index, p),
            p = p.sibling;
        return v
    }
    function o(v, p) {
        return v = Sn(v, p),
        v.index = 0,
        v.sibling = null,
        v
    }
    function i(v, p, g) {
        return v.index = g,
        e ? (g = v.alternate,
        g !== null ? (g = g.index,
        g < p ? (v.flags |= 2,
        p) : g) : (v.flags |= 2,
        p)) : (v.flags |= 1048576,
        p)
    }
    function l(v) {
        return e && v.alternate === null && (v.flags |= 2),
        v
    }
    function s(v, p, g, T) {
        return p === null || p.tag !== 6 ? (p = Ba(g, v.mode, T),
        p.return = v,
        p) : (p = o(p, g),
        p.return = v,
        p)
    }
    function a(v, p, g, T) {
        var N = g.type;
        return N === ar ? c(v, p, g.props.children, T, g.key) : p !== null && (p.elementType === N || typeof N == "object" && N !== null && N.$$typeof === on && af(N) === p.type) ? (T = o(p, g.props),
        T.ref = eo(v, p, g),
        T.return = v,
        T) : (T = Bi(g.type, g.key, g.props, null, v.mode, T),
        T.ref = eo(v, p, g),
        T.return = v,
        T)
    }
    function u(v, p, g, T) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = Ua(g, v.mode, T),
        p.return = v,
        p) : (p = o(p, g.children || []),
        p.return = v,
        p)
    }
    function c(v, p, g, T, N) {
        return p === null || p.tag !== 7 ? (p = Un(g, v.mode, T, N),
        p.return = v,
        p) : (p = o(p, g),
        p.return = v,
        p)
    }
    function f(v, p, g) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = Ba("" + p, v.mode, g),
            p.return = v,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case si:
                return g = Bi(p.type, p.key, p.props, null, v.mode, g),
                g.ref = eo(v, null, p),
                g.return = v,
                g;
            case lr:
                return p = Ua(p, v.mode, g),
                p.return = v,
                p;
            case on:
                var T = p._init;
                return f(v, T(p._payload), g)
            }
            if (uo(p) || Yr(p))
                return p = Un(p, v.mode, g, null),
                p.return = v,
                p;
            wi(v, p)
        }
        return null
    }
    function m(v, p, g, T) {
        var N = p !== null ? p.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return N !== null ? null : s(v, p, "" + g, T);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case si:
                return g.key === N ? a(v, p, g, T) : null;
            case lr:
                return g.key === N ? u(v, p, g, T) : null;
            case on:
                return N = g._init,
                m(v, p, N(g._payload), T)
            }
            if (uo(g) || Yr(g))
                return N !== null ? null : c(v, p, g, T, null);
            wi(v, g)
        }
        return null
    }
    function x(v, p, g, T, N) {
        if (typeof T == "string" && T !== "" || typeof T == "number")
            return v = v.get(g) || null,
            s(p, v, "" + T, N);
        if (typeof T == "object" && T !== null) {
            switch (T.$$typeof) {
            case si:
                return v = v.get(T.key === null ? g : T.key) || null,
                a(p, v, T, N);
            case lr:
                return v = v.get(T.key === null ? g : T.key) || null,
                u(p, v, T, N);
            case on:
                var P = T._init;
                return x(v, p, g, P(T._payload), N)
            }
            if (uo(T) || Yr(T))
                return v = v.get(g) || null,
                c(p, v, T, N, null);
            wi(p, T)
        }
        return null
    }
    function y(v, p, g, T) {
        for (var N = null, P = null, j = p, L = p = 0, K = null; j !== null && L < g.length; L++) {
            j.index > L ? (K = j,
            j = null) : K = j.sibling;
            var B = m(v, j, g[L], T);
            if (B === null) {
                j === null && (j = K);
                break
            }
            e && j && B.alternate === null && t(v, j),
            p = i(B, p, L),
            P === null ? N = B : P.sibling = B,
            P = B,
            j = K
        }
        if (L === g.length)
            return n(v, j),
            Te && Mn(v, L),
            N;
        if (j === null) {
            for (; L < g.length; L++)
                j = f(v, g[L], T),
                j !== null && (p = i(j, p, L),
                P === null ? N = j : P.sibling = j,
                P = j);
            return Te && Mn(v, L),
            N
        }
        for (j = r(v, j); L < g.length; L++)
            K = x(j, v, L, g[L], T),
            K !== null && (e && K.alternate !== null && j.delete(K.key === null ? L : K.key),
            p = i(K, p, L),
            P === null ? N = K : P.sibling = K,
            P = K);
        return e && j.forEach(function(q) {
            return t(v, q)
        }),
        Te && Mn(v, L),
        N
    }
    function R(v, p, g, T) {
        var N = Yr(g);
        if (typeof N != "function")
            throw Error(z(150));
        if (g = N.call(g),
        g == null)
            throw Error(z(151));
        for (var P = N = null, j = p, L = p = 0, K = null, B = g.next(); j !== null && !B.done; L++,
        B = g.next()) {
            j.index > L ? (K = j,
            j = null) : K = j.sibling;
            var q = m(v, j, B.value, T);
            if (q === null) {
                j === null && (j = K);
                break
            }
            e && j && q.alternate === null && t(v, j),
            p = i(q, p, L),
            P === null ? N = q : P.sibling = q,
            P = q,
            j = K
        }
        if (B.done)
            return n(v, j),
            Te && Mn(v, L),
            N;
        if (j === null) {
            for (; !B.done; L++,
            B = g.next())
                B = f(v, B.value, T),
                B !== null && (p = i(B, p, L),
                P === null ? N = B : P.sibling = B,
                P = B);
            return Te && Mn(v, L),
            N
        }
        for (j = r(v, j); !B.done; L++,
        B = g.next())
            B = x(j, v, L, B.value, T),
            B !== null && (e && B.alternate !== null && j.delete(B.key === null ? L : B.key),
            p = i(B, p, L),
            P === null ? N = B : P.sibling = B,
            P = B);
        return e && j.forEach(function(le) {
            return t(v, le)
        }),
        Te && Mn(v, L),
        N
    }
    function O(v, p, g, T) {
        if (typeof g == "object" && g !== null && g.type === ar && g.key === null && (g = g.props.children),
        typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case si:
                e: {
                    for (var N = g.key, P = p; P !== null; ) {
                        if (P.key === N) {
                            if (N = g.type,
                            N === ar) {
                                if (P.tag === 7) {
                                    n(v, P.sibling),
                                    p = o(P, g.props.children),
                                    p.return = v,
                                    v = p;
                                    break e
                                }
                            } else if (P.elementType === N || typeof N == "object" && N !== null && N.$$typeof === on && af(N) === P.type) {
                                n(v, P.sibling),
                                p = o(P, g.props),
                                p.ref = eo(v, P, g),
                                p.return = v,
                                v = p;
                                break e
                            }
                            n(v, P);
                            break
                        } else
                            t(v, P);
                        P = P.sibling
                    }
                    g.type === ar ? (p = Un(g.props.children, v.mode, T, g.key),
                    p.return = v,
                    v = p) : (T = Bi(g.type, g.key, g.props, null, v.mode, T),
                    T.ref = eo(v, p, g),
                    T.return = v,
                    v = T)
                }
                return l(v);
            case lr:
                e: {
                    for (P = g.key; p !== null; ) {
                        if (p.key === P)
                            if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                n(v, p.sibling),
                                p = o(p, g.children || []),
                                p.return = v,
                                v = p;
                                break e
                            } else {
                                n(v, p);
                                break
                            }
                        else
                            t(v, p);
                        p = p.sibling
                    }
                    p = Ua(g, v.mode, T),
                    p.return = v,
                    v = p
                }
                return l(v);
            case on:
                return P = g._init,
                O(v, p, P(g._payload), T)
            }
            if (uo(g))
                return y(v, p, g, T);
            if (Yr(g))
                return R(v, p, g, T);
            wi(v, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g,
        p !== null && p.tag === 6 ? (n(v, p.sibling),
        p = o(p, g),
        p.return = v,
        v = p) : (n(v, p),
        p = Ba(g, v.mode, T),
        p.return = v,
        v = p),
        l(v)) : n(v, p)
    }
    return O
}
var Tr = Tp(!0)
  , Np = Tp(!1)
  , ol = Rn(null)
  , il = null
  , mr = null
  , Au = null;
function Mu() {
    Au = mr = il = null
}
function Iu(e) {
    var t = ol.current;
    Ce(ol),
    e._currentValue = t
}
function Ls(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function kr(e, t) {
    il = e,
    Au = mr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (nt = !0),
    e.firstContext = null)
}
function St(e) {
    var t = e._currentValue;
    if (Au !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        mr === null) {
            if (il === null)
                throw Error(z(308));
            mr = e,
            il.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            mr = mr.next = e;
    return t
}
var Vn = null;
function $u(e) {
    Vn === null ? Vn = [e] : Vn.push(e)
}
function Lp(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    $u(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Qt(e, r)
}
function Qt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var ln = !1;
function Du(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Pp(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Ht(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function vn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    me & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Qt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    $u(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Qt(e, n)
}
function Ii(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        xu(e, n)
    }
}
function sf(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = l : i = i.next = l,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ll(e, t, n, r) {
    var o = e.updateQueue;
    ln = !1;
    var i = o.firstBaseUpdate
      , l = o.lastBaseUpdate
      , s = o.shared.pending;
    if (s !== null) {
        o.shared.pending = null;
        var a = s
          , u = a.next;
        a.next = null,
        l === null ? i = u : l.next = u,
        l = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        s = c.lastBaseUpdate,
        s !== l && (s === null ? c.firstBaseUpdate = u : s.next = u,
        c.lastBaseUpdate = a))
    }
    if (i !== null) {
        var f = o.baseState;
        l = 0,
        c = u = a = null,
        s = i;
        do {
            var m = s.lane
              , x = s.eventTime;
            if ((r & m) === m) {
                c !== null && (c = c.next = {
                    eventTime: x,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var y = e
                      , R = s;
                    switch (m = t,
                    x = n,
                    R.tag) {
                    case 1:
                        if (y = R.payload,
                        typeof y == "function") {
                            f = y.call(x, f, m);
                            break e
                        }
                        f = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = R.payload,
                        m = typeof y == "function" ? y.call(x, f, m) : y,
                        m == null)
                            break e;
                        f = je({}, f, m);
                        break e;
                    case 2:
                        ln = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                m = o.effects,
                m === null ? o.effects = [s] : m.push(s))
            } else
                x = {
                    eventTime: x,
                    lane: m,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                c === null ? (u = c = x,
                a = f) : c = c.next = x,
                l |= m;
            if (s = s.next,
            s === null) {
                if (s = o.shared.pending,
                s === null)
                    break;
                m = s,
                s = m.next,
                m.next = null,
                o.lastBaseUpdate = m,
                o.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = f),
        o.baseState = a,
        o.firstBaseUpdate = u,
        o.lastBaseUpdate = c,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                l |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        Kn |= l,
        e.lanes = l,
        e.memoizedState = f
    }
}
function uf(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(z(191, o));
                o.call(r)
            }
        }
}
var Yo = {}
  , Mt = Rn(Yo)
  , $o = Rn(Yo)
  , Do = Rn(Yo);
function Fn(e) {
    if (e === Yo)
        throw Error(z(174));
    return e
}
function zu(e, t) {
    switch (xe(Do, t),
    xe($o, e),
    xe(Mt, Yo),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : cs(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = cs(t, e)
    }
    Ce(Mt),
    xe(Mt, t)
}
function Nr() {
    Ce(Mt),
    Ce($o),
    Ce(Do)
}
function jp(e) {
    Fn(Do.current);
    var t = Fn(Mt.current)
      , n = cs(t, e.type);
    t !== n && (xe($o, e),
    xe(Mt, n))
}
function Vu(e) {
    $o.current === e && (Ce(Mt),
    Ce($o))
}
var Le = Rn(0);
function al(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Ia = [];
function Fu() {
    for (var e = 0; e < Ia.length; e++)
        Ia[e]._workInProgressVersionPrimary = null;
    Ia.length = 0
}
var $i = Zt.ReactCurrentDispatcher
  , $a = Zt.ReactCurrentBatchConfig
  , Gn = 0
  , Pe = null
  , De = null
  , Ve = null
  , sl = !1
  , wo = !1
  , zo = 0
  , w0 = 0;
function Ge() {
    throw Error(z(321))
}
function Bu(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Nt(e[n], t[n]))
            return !1;
    return !0
}
function Uu(e, t, n, r, o, i) {
    if (Gn = i,
    Pe = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    $i.current = e === null || e.memoizedState === null ? x0 : E0,
    e = n(r, o),
    wo) {
        i = 0;
        do {
            if (wo = !1,
            zo = 0,
            25 <= i)
                throw Error(z(301));
            i += 1,
            Ve = De = null,
            t.updateQueue = null,
            $i.current = R0,
            e = n(r, o)
        } while (wo)
    }
    if ($i.current = ul,
    t = De !== null && De.next !== null,
    Gn = 0,
    Ve = De = Pe = null,
    sl = !1,
    t)
        throw Error(z(300));
    return e
}
function Wu() {
    var e = zo !== 0;
    return zo = 0,
    e
}
function Pt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Ve === null ? Pe.memoizedState = Ve = e : Ve = Ve.next = e,
    Ve
}
function _t() {
    if (De === null) {
        var e = Pe.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = De.next;
    var t = Ve === null ? Pe.memoizedState : Ve.next;
    if (t !== null)
        Ve = t,
        De = e;
    else {
        if (e === null)
            throw Error(z(310));
        De = e,
        e = {
            memoizedState: De.memoizedState,
            baseState: De.baseState,
            baseQueue: De.baseQueue,
            queue: De.queue,
            next: null
        },
        Ve === null ? Pe.memoizedState = Ve = e : Ve = Ve.next = e
    }
    return Ve
}
function Vo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Da(e) {
    var t = _t()
      , n = t.queue;
    if (n === null)
        throw Error(z(311));
    n.lastRenderedReducer = e;
    var r = De
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var l = o.next;
            o.next = i.next,
            i.next = l
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var s = l = null
          , a = null
          , u = i;
        do {
            var c = u.lane;
            if ((Gn & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (s = a = f,
                l = r) : a = a.next = f,
                Pe.lanes |= c,
                Kn |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        a === null ? l = r : a.next = s,
        Nt(r, t.memoizedState) || (nt = !0),
        t.memoizedState = r,
        t.baseState = l,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            Pe.lanes |= i,
            Kn |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function za(e) {
    var t = _t()
      , n = t.queue;
    if (n === null)
        throw Error(z(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var l = o = o.next;
        do
            i = e(i, l.action),
            l = l.next;
        while (l !== o);
        Nt(i, t.memoizedState) || (nt = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function Op() {}
function Ap(e, t) {
    var n = Pe
      , r = _t()
      , o = t()
      , i = !Nt(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    nt = !0),
    r = r.queue,
    Hu($p.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || Ve !== null && Ve.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Fo(9, Ip.bind(null, n, r, o, t), void 0, null),
        Fe === null)
            throw Error(z(349));
        Gn & 30 || Mp(n, t, o)
    }
    return o
}
function Mp(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Pe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Pe.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Ip(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Dp(t) && zp(e)
}
function $p(e, t, n) {
    return n(function() {
        Dp(t) && zp(e)
    })
}
function Dp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Nt(e, n)
    } catch {
        return !0
    }
}
function zp(e) {
    var t = Qt(e, 1);
    t !== null && Tt(t, e, 1, -1)
}
function cf(e) {
    var t = Pt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vo,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = k0.bind(null, Pe, e),
    [t.memoizedState, e]
}
function Fo(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Pe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Pe.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Vp() {
    return _t().memoizedState
}
function Di(e, t, n, r) {
    var o = Pt();
    Pe.flags |= e,
    o.memoizedState = Fo(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ol(e, t, n, r) {
    var o = _t();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (De !== null) {
        var l = De.memoizedState;
        if (i = l.destroy,
        r !== null && Bu(r, l.deps)) {
            o.memoizedState = Fo(t, n, i, r);
            return
        }
    }
    Pe.flags |= e,
    o.memoizedState = Fo(1 | t, n, i, r)
}
function ff(e, t) {
    return Di(8390656, 8, e, t)
}
function Hu(e, t) {
    return Ol(2048, 8, e, t)
}
function Fp(e, t) {
    return Ol(4, 2, e, t)
}
function Bp(e, t) {
    return Ol(4, 4, e, t)
}
function Up(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Wp(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ol(4, 4, Up.bind(null, t, e), n)
}
function Gu() {}
function Hp(e, t) {
    var n = _t();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bu(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Gp(e, t) {
    var n = _t();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Bu(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Kp(e, t, n) {
    return Gn & 21 ? (Nt(n, t) || (n = qd(),
    Pe.lanes |= n,
    Kn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    nt = !0),
    e.memoizedState = n)
}
function S0(e, t) {
    var n = we;
    we = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = $a.transition;
    $a.transition = {};
    try {
        e(!1),
        t()
    } finally {
        we = n,
        $a.transition = r
    }
}
function Qp() {
    return _t().memoizedState
}
function _0(e, t, n) {
    var r = wn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Yp(e))
        Xp(t, n);
    else if (n = Lp(e, t, n, r),
    n !== null) {
        var o = Ze();
        Tt(n, e, r, o),
        Zp(n, t, r)
    }
}
function k0(e, t, n) {
    var r = wn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Yp(e))
        Xp(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var l = t.lastRenderedState
                  , s = i(l, n);
                if (o.hasEagerState = !0,
                o.eagerState = s,
                Nt(s, l)) {
                    var a = t.interleaved;
                    a === null ? (o.next = o,
                    $u(t)) : (o.next = a.next,
                    a.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Lp(e, t, o, r),
        n !== null && (o = Ze(),
        Tt(n, e, r, o),
        Zp(n, t, r))
    }
}
function Yp(e) {
    var t = e.alternate;
    return e === Pe || t !== null && t === Pe
}
function Xp(e, t) {
    wo = sl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Zp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        xu(e, n)
    }
}
var ul = {
    readContext: St,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useInsertionEffect: Ge,
    useLayoutEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useMutableSource: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    unstable_isNewReconciler: !1
}
  , x0 = {
    readContext: St,
    useCallback: function(e, t) {
        return Pt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: St,
    useEffect: ff,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Di(4194308, 4, Up.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Di(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Di(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Pt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Pt();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = _0.bind(null, Pe, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Pt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: cf,
    useDebugValue: Gu,
    useDeferredValue: function(e) {
        return Pt().memoizedState = e
    },
    useTransition: function() {
        var e = cf(!1)
          , t = e[0];
        return e = S0.bind(null, e[1]),
        Pt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Pe
          , o = Pt();
        if (Te) {
            if (n === void 0)
                throw Error(z(407));
            n = n()
        } else {
            if (n = t(),
            Fe === null)
                throw Error(z(349));
            Gn & 30 || Mp(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        ff($p.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        Fo(9, Ip.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Pt()
          , t = Fe.identifierPrefix;
        if (Te) {
            var n = Wt
              , r = Ut;
            n = (r & ~(1 << 32 - Ct(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = zo++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = w0++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , E0 = {
    readContext: St,
    useCallback: Hp,
    useContext: St,
    useEffect: Hu,
    useImperativeHandle: Wp,
    useInsertionEffect: Fp,
    useLayoutEffect: Bp,
    useMemo: Gp,
    useReducer: Da,
    useRef: Vp,
    useState: function() {
        return Da(Vo)
    },
    useDebugValue: Gu,
    useDeferredValue: function(e) {
        var t = _t();
        return Kp(t, De.memoizedState, e)
    },
    useTransition: function() {
        var e = Da(Vo)[0]
          , t = _t().memoizedState;
        return [e, t]
    },
    useMutableSource: Op,
    useSyncExternalStore: Ap,
    useId: Qp,
    unstable_isNewReconciler: !1
}
  , R0 = {
    readContext: St,
    useCallback: Hp,
    useContext: St,
    useEffect: Hu,
    useImperativeHandle: Wp,
    useInsertionEffect: Fp,
    useLayoutEffect: Bp,
    useMemo: Gp,
    useReducer: za,
    useRef: Vp,
    useState: function() {
        return za(Vo)
    },
    useDebugValue: Gu,
    useDeferredValue: function(e) {
        var t = _t();
        return De === null ? t.memoizedState = e : Kp(t, De.memoizedState, e)
    },
    useTransition: function() {
        var e = za(Vo)[0]
          , t = _t().memoizedState;
        return [e, t]
    },
    useMutableSource: Op,
    useSyncExternalStore: Ap,
    useId: Qp,
    unstable_isNewReconciler: !1
};
function Et(e, t) {
    if (e && e.defaultProps) {
        t = je({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Ps(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : je({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Al = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? qn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ze()
          , o = wn(e)
          , i = Ht(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = vn(e, i, o),
        t !== null && (Tt(t, e, o, r),
        Ii(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ze()
          , o = wn(e)
          , i = Ht(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = vn(e, i, o),
        t !== null && (Tt(t, e, o, r),
        Ii(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ze()
          , r = wn(e)
          , o = Ht(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = vn(e, o, r),
        t !== null && (Tt(t, e, r, n),
        Ii(t, e, r))
    }
};
function df(e, t, n, r, o, i, l) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Oo(n, r) || !Oo(o, i) : !0
}
function qp(e, t, n) {
    var r = !1
      , o = xn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = St(i) : (o = ot(t) ? Wn : Ye.current,
    r = t.contextTypes,
    i = (r = r != null) ? br(e, o) : xn),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Al,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function pf(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Al.enqueueReplaceState(t, t.state, null)
}
function js(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Du(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = St(i) : (i = ot(t) ? Wn : Ye.current,
    o.context = br(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (Ps(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Al.enqueueReplaceState(o, o.state, null),
    ll(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Lr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Jg(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Va(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Os(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var b0 = typeof WeakMap == "function" ? WeakMap : Map;
function Jp(e, t, n) {
    n = Ht(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        fl || (fl = !0,
        Us = r),
        Os(e, t)
    }
    ,
    n
}
function eh(e, t, n) {
    n = Ht(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            Os(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        Os(e, t),
        typeof r != "function" && (yn === null ? yn = new Set([this]) : yn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }
    ),
    n
}
function hf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new b0;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = V0.bind(null, e, t, n),
    t.then(e, e))
}
function mf(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function gf(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ht(-1, 1),
    t.tag = 2,
    vn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var C0 = Zt.ReactCurrentOwner
  , nt = !1;
function Xe(e, t, n, r) {
    t.child = e === null ? Np(t, null, n, r) : Tr(t, e.child, n, r)
}
function vf(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return kr(t, o),
    r = Uu(e, t, n, r, i, o),
    n = Wu(),
    e !== null && !nt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Yt(e, t, o)) : (Te && n && Pu(t),
    t.flags |= 1,
    Xe(e, t, r, o),
    t.child)
}
function yf(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !ec(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        th(e, t, i, r, o)) : (e = Bi(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var l = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Oo,
        n(l, r) && e.ref === t.ref)
            return Yt(e, t, o)
    }
    return t.flags |= 1,
    e = Sn(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function th(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Oo(i, r) && e.ref === t.ref)
            if (nt = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (nt = !0);
            else
                return t.lanes = e.lanes,
                Yt(e, t, o)
    }
    return As(e, t, n, r, o)
}
function nh(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            xe(vr, ut),
            ut |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                xe(vr, ut),
                ut |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            xe(vr, ut),
            ut |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        xe(vr, ut),
        ut |= r;
    return Xe(e, t, o, n),
    t.child
}
function rh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function As(e, t, n, r, o) {
    var i = ot(n) ? Wn : Ye.current;
    return i = br(t, i),
    kr(t, o),
    n = Uu(e, t, n, r, i, o),
    r = Wu(),
    e !== null && !nt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Yt(e, t, o)) : (Te && r && Pu(t),
    t.flags |= 1,
    Xe(e, t, n, o),
    t.child)
}
function wf(e, t, n, r, o) {
    if (ot(n)) {
        var i = !0;
        tl(t)
    } else
        i = !1;
    if (kr(t, o),
    t.stateNode === null)
        zi(e, t),
        qp(t, n, r),
        js(t, n, r, o),
        r = !0;
    else if (e === null) {
        var l = t.stateNode
          , s = t.memoizedProps;
        l.props = s;
        var a = l.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = St(u) : (u = ot(n) ? Wn : Ye.current,
        u = br(t, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || a !== u) && pf(t, l, r, u),
        ln = !1;
        var m = t.memoizedState;
        l.state = m,
        ll(t, r, l, o),
        a = t.memoizedState,
        s !== r || m !== a || rt.current || ln ? (typeof c == "function" && (Ps(t, n, c, r),
        a = t.memoizedState),
        (s = ln || df(t, n, s, r, m, a, u)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        l.props = r,
        l.state = a,
        l.context = u,
        r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        l = t.stateNode,
        Pp(e, t),
        s = t.memoizedProps,
        u = t.type === t.elementType ? s : Et(t.type, s),
        l.props = u,
        f = t.pendingProps,
        m = l.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = St(a) : (a = ot(n) ? Wn : Ye.current,
        a = br(t, a));
        var x = n.getDerivedStateFromProps;
        (c = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== f || m !== a) && pf(t, l, r, a),
        ln = !1,
        m = t.memoizedState,
        l.state = m,
        ll(t, r, l, o);
        var y = t.memoizedState;
        s !== f || m !== y || rt.current || ln ? (typeof x == "function" && (Ps(t, n, x, r),
        y = t.memoizedState),
        (u = ln || df(t, n, u, r, m, y, a) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, y, a),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, y, a)),
        typeof l.componentDidUpdate == "function" && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = y),
        l.props = r,
        l.state = y,
        l.context = a,
        r = u) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ms(e, t, n, r, i, o)
}
function Ms(e, t, n, r, o, i) {
    rh(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l)
        return o && rf(t, n, !1),
        Yt(e, t, i);
    r = t.stateNode,
    C0.current = t;
    var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && l ? (t.child = Tr(t, e.child, null, i),
    t.child = Tr(t, null, s, i)) : Xe(e, t, s, i),
    t.memoizedState = r.state,
    o && rf(t, n, !0),
    t.child
}
function oh(e) {
    var t = e.stateNode;
    t.pendingContext ? nf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && nf(e, t.context, !1),
    zu(e, t.containerInfo)
}
function Sf(e, t, n, r, o) {
    return Cr(),
    Ou(o),
    t.flags |= 256,
    Xe(e, t, n, r),
    t.child
}
var Is = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function $s(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function ih(e, t, n) {
    var r = t.pendingProps, o = Le.current, i = !1, l = (t.flags & 128) !== 0, s;
    if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    xe(Le, o & 1),
    e === null)
        return Ns(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (l = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        l = {
            mode: "hidden",
            children: l
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = l) : i = $l(l, r, 0, null),
        e = Un(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = $s(n),
        t.memoizedState = Is,
        e) : Ku(t, l));
    if (o = e.memoizedState,
    o !== null && (s = o.dehydrated,
    s !== null))
        return T0(e, t, l, r, s, o, n);
    if (i) {
        i = r.fallback,
        l = t.mode,
        o = e.child,
        s = o.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Sn(o, a),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        s !== null ? i = Sn(s, i) : (i = Un(i, l, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        l = e.child.memoizedState,
        l = l === null ? $s(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        },
        i.memoizedState = l,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = Is,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = Sn(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Ku(e, t) {
    return t = $l({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Si(e, t, n, r) {
    return r !== null && Ou(r),
    Tr(t, e.child, null, n),
    e = Ku(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function T0(e, t, n, r, o, i, l) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Va(Error(z(422))),
        Si(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = $l({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = Un(i, o, l, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Tr(t, e.child, null, l),
        t.child.memoizedState = $s(l),
        t.memoizedState = Is,
        i);
    if (!(t.mode & 1))
        return Si(e, t, l, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var s = r.dgst;
        return r = s,
        i = Error(z(419)),
        r = Va(i, r, void 0),
        Si(e, t, l, r)
    }
    if (s = (l & e.childLanes) !== 0,
    nt || s) {
        if (r = Fe,
        r !== null) {
            switch (l & -l) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | l) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Qt(e, o),
            Tt(r, e, o, -1))
        }
        return Ju(),
        r = Va(Error(z(421))),
        Si(e, t, l, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = F0.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    ft = gn(o.nextSibling),
    dt = t,
    Te = !0,
    bt = null,
    e !== null && (gt[vt++] = Ut,
    gt[vt++] = Wt,
    gt[vt++] = Hn,
    Ut = e.id,
    Wt = e.overflow,
    Hn = t),
    t = Ku(t, r.children),
    t.flags |= 4096,
    t)
}
function _f(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Ls(e.return, t, n)
}
function Fa(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function lh(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (Xe(e, t, r.children, n),
    r = Le.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && _f(e, n, t);
                else if (e.tag === 19)
                    _f(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (xe(Le, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && al(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            Fa(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && al(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            Fa(t, !0, n, null, i);
            break;
        case "together":
            Fa(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function zi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Yt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Kn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(z(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Sn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Sn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function N0(e, t, n) {
    switch (t.tag) {
    case 3:
        oh(t),
        Cr();
        break;
    case 5:
        jp(t);
        break;
    case 1:
        ot(t.type) && tl(t);
        break;
    case 4:
        zu(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        xe(ol, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (xe(Le, Le.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? ih(e, t, n) : (xe(Le, Le.current & 1),
            e = Yt(e, t, n),
            e !== null ? e.sibling : null);
        xe(Le, Le.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return lh(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        xe(Le, Le.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        nh(e, t, n)
    }
    return Yt(e, t, n)
}
var ah, Ds, sh, uh;
ah = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Ds = function() {}
;
sh = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        Fn(Mt.current);
        var i = null;
        switch (n) {
        case "input":
            o = ls(e, o),
            r = ls(e, r),
            i = [];
            break;
        case "select":
            o = je({}, o, {
                value: void 0
            }),
            r = je({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = us(e, o),
            r = us(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ji)
        }
        fs(n, r);
        var l;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var s = o[u];
                    for (l in s)
                        s.hasOwnProperty(l) && (n || (n = {}),
                        n[l] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (bo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (s = o != null ? o[u] : void 0,
            r.hasOwnProperty(u) && a !== s && (a != null || s != null))
                if (u === "style")
                    if (s) {
                        for (l in s)
                            !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}),
                            n[l] = "");
                        for (l in a)
                            a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}),
                            n[l] = a[l])
                    } else
                        n || (i || (i = []),
                        i.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    s = s ? s.__html : void 0,
                    a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (bo.hasOwnProperty(u) ? (a != null && u === "onScroll" && Re("scroll", e),
                    i || s === a || (i = [])) : (i = i || []).push(u, a))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
uh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function to(e, t) {
    if (!Te)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function L0(e, t, n) {
    var r = t.pendingProps;
    switch (ju(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Ke(t),
        null;
    case 1:
        return ot(t.type) && el(),
        Ke(t),
        null;
    case 3:
        return r = t.stateNode,
        Nr(),
        Ce(rt),
        Ce(Ye),
        Fu(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (yi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        bt !== null && (Gs(bt),
        bt = null))),
        Ds(e, t),
        Ke(t),
        null;
    case 5:
        Vu(t);
        var o = Fn(Do.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            sh(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(z(166));
                return Ke(t),
                null
            }
            if (e = Fn(Mt.current),
            yi(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[jt] = t,
                r[Io] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    Re("cancel", r),
                    Re("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    Re("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < fo.length; o++)
                        Re(fo[o], r);
                    break;
                case "source":
                    Re("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    Re("error", r),
                    Re("load", r);
                    break;
                case "details":
                    Re("toggle", r);
                    break;
                case "input":
                    Nc(r, i),
                    Re("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    Re("invalid", r);
                    break;
                case "textarea":
                    Pc(r, i),
                    Re("invalid", r)
                }
                fs(n, i),
                o = null;
                for (var l in i)
                    if (i.hasOwnProperty(l)) {
                        var s = i[l];
                        l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && vi(r.textContent, s, e),
                        o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && vi(r.textContent, s, e),
                        o = ["children", "" + s]) : bo.hasOwnProperty(l) && s != null && l === "onScroll" && Re("scroll", r)
                    }
                switch (n) {
                case "input":
                    ui(r),
                    Lc(r, i, !0);
                    break;
                case "textarea":
                    ui(r),
                    jc(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Ji)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                l = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = $d(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                    is: r.is
                }) : (e = l.createElement(n),
                n === "select" && (l = e,
                r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n),
                e[jt] = t,
                e[Io] = r,
                ah(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (l = ds(n, r),
                    n) {
                    case "dialog":
                        Re("cancel", e),
                        Re("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Re("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < fo.length; o++)
                            Re(fo[o], e);
                        o = r;
                        break;
                    case "source":
                        Re("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Re("error", e),
                        Re("load", e),
                        o = r;
                        break;
                    case "details":
                        Re("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Nc(e, r),
                        o = ls(e, r),
                        Re("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = je({}, r, {
                            value: void 0
                        }),
                        Re("invalid", e);
                        break;
                    case "textarea":
                        Pc(e, r),
                        o = us(e, r),
                        Re("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    fs(n, o),
                    s = o;
                    for (i in s)
                        if (s.hasOwnProperty(i)) {
                            var a = s[i];
                            i === "style" ? Vd(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Dd(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Co(e, a) : typeof a == "number" && Co(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (bo.hasOwnProperty(i) ? a != null && i === "onScroll" && Re("scroll", e) : a != null && vu(e, i, a, l))
                        }
                    switch (n) {
                    case "input":
                        ui(e),
                        Lc(e, r, !1);
                        break;
                    case "textarea":
                        ui(e),
                        jc(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + kn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? yr(e, !!r.multiple, i, !1) : r.defaultValue != null && yr(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Ji)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Ke(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            uh(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(z(166));
            if (n = Fn(Do.current),
            Fn(Mt.current),
            yi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[jt] = t,
                (i = r.nodeValue !== n) && (e = dt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        vi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && vi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[jt] = t,
                t.stateNode = r
        }
        return Ke(t),
        null;
    case 13:
        if (Ce(Le),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (Te && ft !== null && t.mode & 1 && !(t.flags & 128))
                Cp(),
                Cr(),
                t.flags |= 98560,
                i = !1;
            else if (i = yi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(z(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(z(317));
                    i[jt] = t
                } else
                    Cr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Ke(t),
                i = !1
            } else
                bt !== null && (Gs(bt),
                bt = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || Le.current & 1 ? ze === 0 && (ze = 3) : Ju())),
        t.updateQueue !== null && (t.flags |= 4),
        Ke(t),
        null);
    case 4:
        return Nr(),
        Ds(e, t),
        e === null && Ao(t.stateNode.containerInfo),
        Ke(t),
        null;
    case 10:
        return Iu(t.type._context),
        Ke(t),
        null;
    case 17:
        return ot(t.type) && el(),
        Ke(t),
        null;
    case 19:
        if (Ce(Le),
        i = t.memoizedState,
        i === null)
            return Ke(t),
            null;
        if (r = (t.flags & 128) !== 0,
        l = i.rendering,
        l === null)
            if (r)
                to(i, !1);
            else {
                if (ze !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (l = al(e),
                        l !== null) {
                            for (t.flags |= 128,
                            to(i, !1),
                            r = l.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                l = i.alternate,
                                l === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = l.childLanes,
                                i.lanes = l.lanes,
                                i.child = l.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = l.memoizedProps,
                                i.memoizedState = l.memoizedState,
                                i.updateQueue = l.updateQueue,
                                i.type = l.type,
                                e = l.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return xe(Le, Le.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && Ie() > Pr && (t.flags |= 128,
                r = !0,
                to(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = al(l),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    to(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !l.alternate && !Te)
                        return Ke(t),
                        null
                } else
                    2 * Ie() - i.renderingStartTime > Pr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    to(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (l.sibling = t.child,
            t.child = l) : (n = i.last,
            n !== null ? n.sibling = l : t.child = l,
            i.last = l)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = Ie(),
        t.sibling = null,
        n = Le.current,
        xe(Le, r ? n & 1 | 2 : n & 1),
        t) : (Ke(t),
        null);
    case 22:
    case 23:
        return qu(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ut & 1073741824 && (Ke(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(z(156, t.tag))
}
function P0(e, t) {
    switch (ju(t),
    t.tag) {
    case 1:
        return ot(t.type) && el(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Nr(),
        Ce(rt),
        Ce(Ye),
        Fu(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Vu(t),
        null;
    case 13:
        if (Ce(Le),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(z(340));
            Cr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return Ce(Le),
        null;
    case 4:
        return Nr(),
        null;
    case 10:
        return Iu(t.type._context),
        null;
    case 22:
    case 23:
        return qu(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var _i = !1
  , Qe = !1
  , j0 = typeof WeakSet == "function" ? WeakSet : Set
  , G = null;
function gr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Ae(e, t, r)
            }
        else
            n.current = null
}
function zs(e, t, n) {
    try {
        n()
    } catch (r) {
        Ae(e, t, r)
    }
}
var kf = !1;
function O0(e, t) {
    if (ks = Xi,
    e = hp(),
    Lu(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var l = 0
                      , s = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , f = e
                      , m = null;
                    t: for (; ; ) {
                        for (var x; f !== n || o !== 0 && f.nodeType !== 3 || (s = l + o),
                        f !== i || r !== 0 && f.nodeType !== 3 || (a = l + r),
                        f.nodeType === 3 && (l += f.nodeValue.length),
                        (x = f.firstChild) !== null; )
                            m = f,
                            f = x;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (m === n && ++u === o && (s = l),
                            m === i && ++c === r && (a = l),
                            (x = f.nextSibling) !== null)
                                break;
                            f = m,
                            m = f.parentNode
                        }
                        f = x
                    }
                    n = s === -1 || a === -1 ? null : {
                        start: s,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (xs = {
        focusedElem: e,
        selectionRange: n
    },
    Xi = !1,
    G = t; G !== null; )
        if (t = G,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            G = e;
        else
            for (; G !== null; ) {
                t = G;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var R = y.memoizedProps
                                  , O = y.memoizedState
                                  , v = t.stateNode
                                  , p = v.getSnapshotBeforeUpdate(t.elementType === t.type ? R : Et(t.type, R), O);
                                v.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(z(163))
                        }
                } catch (T) {
                    Ae(t, t.return, T)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    G = e;
                    break
                }
                G = t.return
            }
    return y = kf,
    kf = !1,
    y
}
function So(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && zs(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function Ml(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Vs(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function ch(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    ch(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[jt],
    delete t[Io],
    delete t[bs],
    delete t[m0],
    delete t[g0])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function fh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function xf(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || fh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Fs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Ji));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Fs(e, t, n),
        e = e.sibling; e !== null; )
            Fs(e, t, n),
            e = e.sibling
}
function Bs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Bs(e, t, n),
        e = e.sibling; e !== null; )
            Bs(e, t, n),
            e = e.sibling
}
var Be = null
  , Rt = !1;
function nn(e, t, n) {
    for (n = n.child; n !== null; )
        dh(e, t, n),
        n = n.sibling
}
function dh(e, t, n) {
    if (At && typeof At.onCommitFiberUnmount == "function")
        try {
            At.onCommitFiberUnmount(Cl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Qe || gr(n, t);
    case 6:
        var r = Be
          , o = Rt;
        Be = null,
        nn(e, t, n),
        Be = r,
        Rt = o,
        Be !== null && (Rt ? (e = Be,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Be.removeChild(n.stateNode));
        break;
    case 18:
        Be !== null && (Rt ? (e = Be,
        n = n.stateNode,
        e.nodeType === 8 ? Aa(e.parentNode, n) : e.nodeType === 1 && Aa(e, n),
        Po(e)) : Aa(Be, n.stateNode));
        break;
    case 4:
        r = Be,
        o = Rt,
        Be = n.stateNode.containerInfo,
        Rt = !0,
        nn(e, t, n),
        Be = r,
        Rt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Qe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , l = i.destroy;
                i = i.tag,
                l !== void 0 && (i & 2 || i & 4) && zs(n, t, l),
                o = o.next
            } while (o !== r)
        }
        nn(e, t, n);
        break;
    case 1:
        if (!Qe && (gr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (s) {
                Ae(n, t, s)
            }
        nn(e, t, n);
        break;
    case 21:
        nn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Qe = (r = Qe) || n.memoizedState !== null,
        nn(e, t, n),
        Qe = r) : nn(e, t, n);
        break;
    default:
        nn(e, t, n)
    }
}
function Ef(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new j0),
        t.forEach(function(r) {
            var o = B0.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function kt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , l = t
                  , s = l;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        Be = s.stateNode,
                        Rt = !1;
                        break e;
                    case 3:
                        Be = s.stateNode.containerInfo,
                        Rt = !0;
                        break e;
                    case 4:
                        Be = s.stateNode.containerInfo,
                        Rt = !0;
                        break e
                    }
                    s = s.return
                }
                if (Be === null)
                    throw Error(z(160));
                dh(i, l, o),
                Be = null,
                Rt = !1;
                var a = o.alternate;
                a !== null && (a.return = null),
                o.return = null
            } catch (u) {
                Ae(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            ph(t, e),
            t = t.sibling
}
function ph(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (kt(t, e),
        Lt(e),
        r & 4) {
            try {
                So(3, e, e.return),
                Ml(3, e)
            } catch (R) {
                Ae(e, e.return, R)
            }
            try {
                So(5, e, e.return)
            } catch (R) {
                Ae(e, e.return, R)
            }
        }
        break;
    case 1:
        kt(t, e),
        Lt(e),
        r & 512 && n !== null && gr(n, n.return);
        break;
    case 5:
        if (kt(t, e),
        Lt(e),
        r & 512 && n !== null && gr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Co(o, "")
            } catch (R) {
                Ae(e, e.return, R)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , l = n !== null ? n.memoizedProps : i
              , s = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    s === "input" && i.type === "radio" && i.name != null && Md(o, i),
                    ds(s, l);
                    var u = ds(s, i);
                    for (l = 0; l < a.length; l += 2) {
                        var c = a[l]
                          , f = a[l + 1];
                        c === "style" ? Vd(o, f) : c === "dangerouslySetInnerHTML" ? Dd(o, f) : c === "children" ? Co(o, f) : vu(o, c, f, u)
                    }
                    switch (s) {
                    case "input":
                        as(o, i);
                        break;
                    case "textarea":
                        Id(o, i);
                        break;
                    case "select":
                        var m = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var x = i.value;
                        x != null ? yr(o, !!i.multiple, x, !1) : m !== !!i.multiple && (i.defaultValue != null ? yr(o, !!i.multiple, i.defaultValue, !0) : yr(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Io] = i
                } catch (R) {
                    Ae(e, e.return, R)
                }
        }
        break;
    case 6:
        if (kt(t, e),
        Lt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(z(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (R) {
                Ae(e, e.return, R)
            }
        }
        break;
    case 3:
        if (kt(t, e),
        Lt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Po(t.containerInfo)
            } catch (R) {
                Ae(e, e.return, R)
            }
        break;
    case 4:
        kt(t, e),
        Lt(e);
        break;
    case 13:
        kt(t, e),
        Lt(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (Xu = Ie())),
        r & 4 && Ef(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Qe = (u = Qe) || c,
        kt(t, e),
        Qe = u) : kt(t, e),
        Lt(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (G = e,
                c = e.child; c !== null; ) {
                    for (f = G = c; G !== null; ) {
                        switch (m = G,
                        x = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            So(4, m, m.return);
                            break;
                        case 1:
                            gr(m, m.return);
                            var y = m.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (R) {
                                    Ae(r, n, R)
                                }
                            }
                            break;
                        case 5:
                            gr(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                bf(f);
                                continue
                            }
                        }
                        x !== null ? (x.return = m,
                        G = x) : bf(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            o = f.stateNode,
                            u ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode,
                            a = f.memoizedProps.style,
                            l = a != null && a.hasOwnProperty("display") ? a.display : null,
                            s.style.display = zd("display", l))
                        } catch (R) {
                            Ae(e, e.return, R)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (R) {
                            Ae(e, e.return, R)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        kt(t, e),
        Lt(e),
        r & 4 && Ef(e);
        break;
    case 21:
        break;
    default:
        kt(t, e),
        Lt(e)
    }
}
function Lt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (fh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(z(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Co(o, ""),
                r.flags &= -33);
                var i = xf(e);
                Bs(e, i, o);
                break;
            case 3:
            case 4:
                var l = r.stateNode.containerInfo
                  , s = xf(e);
                Fs(e, s, l);
                break;
            default:
                throw Error(z(161))
            }
        } catch (a) {
            Ae(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function A0(e, t, n) {
    G = e,
    hh(e)
}
function hh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; G !== null; ) {
        var o = G
          , i = o.child;
        if (o.tag === 22 && r) {
            var l = o.memoizedState !== null || _i;
            if (!l) {
                var s = o.alternate
                  , a = s !== null && s.memoizedState !== null || Qe;
                s = _i;
                var u = Qe;
                if (_i = l,
                (Qe = a) && !u)
                    for (G = o; G !== null; )
                        l = G,
                        a = l.child,
                        l.tag === 22 && l.memoizedState !== null ? Cf(o) : a !== null ? (a.return = l,
                        G = a) : Cf(o);
                for (; i !== null; )
                    G = i,
                    hh(i),
                    i = i.sibling;
                G = o,
                _i = s,
                Qe = u
            }
            Rf(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            G = i) : Rf(e)
    }
}
function Rf(e) {
    for (; G !== null; ) {
        var t = G;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Qe || Ml(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Qe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Et(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && uf(t, i, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            uf(t, l, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Po(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(z(163))
                    }
                Qe || t.flags & 512 && Vs(t)
            } catch (m) {
                Ae(t, t.return, m)
            }
        }
        if (t === e) {
            G = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            G = n;
            break
        }
        G = t.return
    }
}
function bf(e) {
    for (; G !== null; ) {
        var t = G;
        if (t === e) {
            G = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            G = n;
            break
        }
        G = t.return
    }
}
function Cf(e) {
    for (; G !== null; ) {
        var t = G;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ml(4, t)
                } catch (a) {
                    Ae(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        Ae(t, o, a)
                    }
                }
                var i = t.return;
                try {
                    Vs(t)
                } catch (a) {
                    Ae(t, i, a)
                }
                break;
            case 5:
                var l = t.return;
                try {
                    Vs(t)
                } catch (a) {
                    Ae(t, l, a)
                }
            }
        } catch (a) {
            Ae(t, t.return, a)
        }
        if (t === e) {
            G = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            G = s;
            break
        }
        G = t.return
    }
}
var M0 = Math.ceil
  , cl = Zt.ReactCurrentDispatcher
  , Qu = Zt.ReactCurrentOwner
  , wt = Zt.ReactCurrentBatchConfig
  , me = 0
  , Fe = null
  , $e = null
  , Ue = 0
  , ut = 0
  , vr = Rn(0)
  , ze = 0
  , Bo = null
  , Kn = 0
  , Il = 0
  , Yu = 0
  , _o = null
  , tt = null
  , Xu = 0
  , Pr = 1 / 0
  , Ft = null
  , fl = !1
  , Us = null
  , yn = null
  , ki = !1
  , fn = null
  , dl = 0
  , ko = 0
  , Ws = null
  , Vi = -1
  , Fi = 0;
function Ze() {
    return me & 6 ? Ie() : Vi !== -1 ? Vi : Vi = Ie()
}
function wn(e) {
    return e.mode & 1 ? me & 2 && Ue !== 0 ? Ue & -Ue : y0.transition !== null ? (Fi === 0 && (Fi = qd()),
    Fi) : (e = we,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : ip(e.type)),
    e) : 1
}
function Tt(e, t, n, r) {
    if (50 < ko)
        throw ko = 0,
        Ws = null,
        Error(z(185));
    Go(e, n, r),
    (!(me & 2) || e !== Fe) && (e === Fe && (!(me & 2) && (Il |= n),
    ze === 4 && un(e, Ue)),
    it(e, r),
    n === 1 && me === 0 && !(t.mode & 1) && (Pr = Ie() + 500,
    jl && bn()))
}
function it(e, t) {
    var n = e.callbackNode;
    yv(e, t);
    var r = Yi(e, e === Fe ? Ue : 0);
    if (r === 0)
        n !== null && Mc(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Mc(n),
        t === 1)
            e.tag === 0 ? v0(Tf.bind(null, e)) : Ep(Tf.bind(null, e)),
            p0(function() {
                !(me & 6) && bn()
            }),
            n = null;
        else {
            switch (Jd(r)) {
            case 1:
                n = ku;
                break;
            case 4:
                n = Xd;
                break;
            case 16:
                n = Qi;
                break;
            case 536870912:
                n = Zd;
                break;
            default:
                n = Qi
            }
            n = kh(n, mh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function mh(e, t) {
    if (Vi = -1,
    Fi = 0,
    me & 6)
        throw Error(z(327));
    var n = e.callbackNode;
    if (xr() && e.callbackNode !== n)
        return null;
    var r = Yi(e, e === Fe ? Ue : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = pl(e, r);
    else {
        t = r;
        var o = me;
        me |= 2;
        var i = vh();
        (Fe !== e || Ue !== t) && (Ft = null,
        Pr = Ie() + 500,
        Bn(e, t));
        do
            try {
                D0();
                break
            } catch (s) {
                gh(e, s)
            }
        while (!0);
        Mu(),
        cl.current = i,
        me = o,
        $e !== null ? t = 0 : (Fe = null,
        Ue = 0,
        t = ze)
    }
    if (t !== 0) {
        if (t === 2 && (o = vs(e),
        o !== 0 && (r = o,
        t = Hs(e, o))),
        t === 1)
            throw n = Bo,
            Bn(e, 0),
            un(e, r),
            it(e, Ie()),
            n;
        if (t === 6)
            un(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !I0(o) && (t = pl(e, r),
            t === 2 && (i = vs(e),
            i !== 0 && (r = i,
            t = Hs(e, i))),
            t === 1))
                throw n = Bo,
                Bn(e, 0),
                un(e, r),
                it(e, Ie()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(z(345));
            case 2:
                In(e, tt, Ft);
                break;
            case 3:
                if (un(e, r),
                (r & 130023424) === r && (t = Xu + 500 - Ie(),
                10 < t)) {
                    if (Yi(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Ze(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Rs(In.bind(null, e, tt, Ft), t);
                    break
                }
                In(e, tt, Ft);
                break;
            case 4:
                if (un(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var l = 31 - Ct(r);
                    i = 1 << l,
                    l = t[l],
                    l > o && (o = l),
                    r &= ~i
                }
                if (r = o,
                r = Ie() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * M0(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Rs(In.bind(null, e, tt, Ft), r);
                    break
                }
                In(e, tt, Ft);
                break;
            case 5:
                In(e, tt, Ft);
                break;
            default:
                throw Error(z(329))
            }
        }
    }
    return it(e, Ie()),
    e.callbackNode === n ? mh.bind(null, e) : null
}
function Hs(e, t) {
    var n = _o;
    return e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256),
    e = pl(e, t),
    e !== 2 && (t = tt,
    tt = n,
    t !== null && Gs(t)),
    e
}
function Gs(e) {
    tt === null ? tt = e : tt.push.apply(tt, e)
}
function I0(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Nt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function un(e, t) {
    for (t &= ~Yu,
    t &= ~Il,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ct(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Tf(e) {
    if (me & 6)
        throw Error(z(327));
    xr();
    var t = Yi(e, 0);
    if (!(t & 1))
        return it(e, Ie()),
        null;
    var n = pl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = vs(e);
        r !== 0 && (t = r,
        n = Hs(e, r))
    }
    if (n === 1)
        throw n = Bo,
        Bn(e, 0),
        un(e, t),
        it(e, Ie()),
        n;
    if (n === 6)
        throw Error(z(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    In(e, tt, Ft),
    it(e, Ie()),
    null
}
function Zu(e, t) {
    var n = me;
    me |= 1;
    try {
        return e(t)
    } finally {
        me = n,
        me === 0 && (Pr = Ie() + 500,
        jl && bn())
    }
}
function Qn(e) {
    fn !== null && fn.tag === 0 && !(me & 6) && xr();
    var t = me;
    me |= 1;
    var n = wt.transition
      , r = we;
    try {
        if (wt.transition = null,
        we = 1,
        e)
            return e()
    } finally {
        we = r,
        wt.transition = n,
        me = t,
        !(me & 6) && bn()
    }
}
function qu() {
    ut = vr.current,
    Ce(vr)
}
function Bn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    d0(n)),
    $e !== null)
        for (n = $e.return; n !== null; ) {
            var r = n;
            switch (ju(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && el();
                break;
            case 3:
                Nr(),
                Ce(rt),
                Ce(Ye),
                Fu();
                break;
            case 5:
                Vu(r);
                break;
            case 4:
                Nr();
                break;
            case 13:
                Ce(Le);
                break;
            case 19:
                Ce(Le);
                break;
            case 10:
                Iu(r.type._context);
                break;
            case 22:
            case 23:
                qu()
            }
            n = n.return
        }
    if (Fe = e,
    $e = e = Sn(e.current, null),
    Ue = ut = t,
    ze = 0,
    Bo = null,
    Yu = Il = Kn = 0,
    tt = _o = null,
    Vn !== null) {
        for (t = 0; t < Vn.length; t++)
            if (n = Vn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var l = i.next;
                    i.next = o,
                    r.next = l
                }
                n.pending = r
            }
        Vn = null
    }
    return e
}
function gh(e, t) {
    do {
        var n = $e;
        try {
            if (Mu(),
            $i.current = ul,
            sl) {
                for (var r = Pe.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                sl = !1
            }
            if (Gn = 0,
            Ve = De = Pe = null,
            wo = !1,
            zo = 0,
            Qu.current = null,
            n === null || n.return === null) {
                ze = 1,
                Bo = t,
                $e = null;
                break
            }
            e: {
                var i = e
                  , l = n.return
                  , s = n
                  , a = t;
                if (t = Ue,
                s.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = s
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var m = c.alternate;
                        m ? (c.updateQueue = m.updateQueue,
                        c.memoizedState = m.memoizedState,
                        c.lanes = m.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var x = mf(l);
                    if (x !== null) {
                        x.flags &= -257,
                        gf(x, l, s, i, t),
                        x.mode & 1 && hf(i, u, t),
                        t = x,
                        a = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var R = new Set;
                            R.add(a),
                            t.updateQueue = R
                        } else
                            y.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            hf(i, u, t),
                            Ju();
                            break e
                        }
                        a = Error(z(426))
                    }
                } else if (Te && s.mode & 1) {
                    var O = mf(l);
                    if (O !== null) {
                        !(O.flags & 65536) && (O.flags |= 256),
                        gf(O, l, s, i, t),
                        Ou(Lr(a, s));
                        break e
                    }
                }
                i = a = Lr(a, s),
                ze !== 4 && (ze = 2),
                _o === null ? _o = [i] : _o.push(i),
                i = l;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var v = Jp(i, a, t);
                        sf(i, v);
                        break e;
                    case 1:
                        s = a;
                        var p = i.type
                          , g = i.stateNode;
                        if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (yn === null || !yn.has(g)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var T = eh(i, s, t);
                            sf(i, T);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            wh(n)
        } catch (N) {
            t = N,
            $e === n && n !== null && ($e = n = n.return);
            continue
        }
        break
    } while (!0)
}
function vh() {
    var e = cl.current;
    return cl.current = ul,
    e === null ? ul : e
}
function Ju() {
    (ze === 0 || ze === 3 || ze === 2) && (ze = 4),
    Fe === null || !(Kn & 268435455) && !(Il & 268435455) || un(Fe, Ue)
}
function pl(e, t) {
    var n = me;
    me |= 2;
    var r = vh();
    (Fe !== e || Ue !== t) && (Ft = null,
    Bn(e, t));
    do
        try {
            $0();
            break
        } catch (o) {
            gh(e, o)
        }
    while (!0);
    if (Mu(),
    me = n,
    cl.current = r,
    $e !== null)
        throw Error(z(261));
    return Fe = null,
    Ue = 0,
    ze
}
function $0() {
    for (; $e !== null; )
        yh($e)
}
function D0() {
    for (; $e !== null && !uv(); )
        yh($e)
}
function yh(e) {
    var t = _h(e.alternate, e, ut);
    e.memoizedProps = e.pendingProps,
    t === null ? wh(e) : $e = t,
    Qu.current = null
}
function wh(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = P0(n, t),
            n !== null) {
                n.flags &= 32767,
                $e = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                ze = 6,
                $e = null;
                return
            }
        } else if (n = L0(n, t, ut),
        n !== null) {
            $e = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            $e = t;
            return
        }
        $e = t = e
    } while (t !== null);
    ze === 0 && (ze = 5)
}
function In(e, t, n) {
    var r = we
      , o = wt.transition;
    try {
        wt.transition = null,
        we = 1,
        z0(e, t, n, r)
    } finally {
        wt.transition = o,
        we = r
    }
    return null
}
function z0(e, t, n, r) {
    do
        xr();
    while (fn !== null);
    if (me & 6)
        throw Error(z(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(z(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (wv(e, i),
    e === Fe && ($e = Fe = null,
    Ue = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ki || (ki = !0,
    kh(Qi, function() {
        return xr(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = wt.transition,
        wt.transition = null;
        var l = we;
        we = 1;
        var s = me;
        me |= 4,
        Qu.current = null,
        O0(e, n),
        ph(n, e),
        i0(xs),
        Xi = !!ks,
        xs = ks = null,
        e.current = n,
        A0(n),
        cv(),
        me = s,
        we = l,
        wt.transition = i
    } else
        e.current = n;
    if (ki && (ki = !1,
    fn = e,
    dl = o),
    i = e.pendingLanes,
    i === 0 && (yn = null),
    pv(n.stateNode),
    it(e, Ie()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (fl)
        throw fl = !1,
        e = Us,
        Us = null,
        e;
    return dl & 1 && e.tag !== 0 && xr(),
    i = e.pendingLanes,
    i & 1 ? e === Ws ? ko++ : (ko = 0,
    Ws = e) : ko = 0,
    bn(),
    null
}
function xr() {
    if (fn !== null) {
        var e = Jd(dl)
          , t = wt.transition
          , n = we;
        try {
            if (wt.transition = null,
            we = 16 > e ? 16 : e,
            fn === null)
                var r = !1;
            else {
                if (e = fn,
                fn = null,
                dl = 0,
                me & 6)
                    throw Error(z(331));
                var o = me;
                for (me |= 4,
                G = e.current; G !== null; ) {
                    var i = G
                      , l = i.child;
                    if (G.flags & 16) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var a = 0; a < s.length; a++) {
                                var u = s[a];
                                for (G = u; G !== null; ) {
                                    var c = G;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        So(8, c, i)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        G = f;
                                    else
                                        for (; G !== null; ) {
                                            c = G;
                                            var m = c.sibling
                                              , x = c.return;
                                            if (ch(c),
                                            c === u) {
                                                G = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = x,
                                                G = m;
                                                break
                                            }
                                            G = x
                                        }
                                }
                            }
                            var y = i.alternate;
                            if (y !== null) {
                                var R = y.child;
                                if (R !== null) {
                                    y.child = null;
                                    do {
                                        var O = R.sibling;
                                        R.sibling = null,
                                        R = O
                                    } while (R !== null)
                                }
                            }
                            G = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && l !== null)
                        l.return = i,
                        G = l;
                    else
                        e: for (; G !== null; ) {
                            if (i = G,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    So(9, i, i.return)
                                }
                            var v = i.sibling;
                            if (v !== null) {
                                v.return = i.return,
                                G = v;
                                break e
                            }
                            G = i.return
                        }
                }
                var p = e.current;
                for (G = p; G !== null; ) {
                    l = G;
                    var g = l.child;
                    if (l.subtreeFlags & 2064 && g !== null)
                        g.return = l,
                        G = g;
                    else
                        e: for (l = p; G !== null; ) {
                            if (s = G,
                            s.flags & 2048)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ml(9, s)
                                    }
                                } catch (N) {
                                    Ae(s, s.return, N)
                                }
                            if (s === l) {
                                G = null;
                                break e
                            }
                            var T = s.sibling;
                            if (T !== null) {
                                T.return = s.return,
                                G = T;
                                break e
                            }
                            G = s.return
                        }
                }
                if (me = o,
                bn(),
                At && typeof At.onPostCommitFiberRoot == "function")
                    try {
                        At.onPostCommitFiberRoot(Cl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            we = n,
            wt.transition = t
        }
    }
    return !1
}
function Nf(e, t, n) {
    t = Lr(n, t),
    t = Jp(e, t, 1),
    e = vn(e, t, 1),
    t = Ze(),
    e !== null && (Go(e, 1, t),
    it(e, t))
}
function Ae(e, t, n) {
    if (e.tag === 3)
        Nf(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Nf(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (yn === null || !yn.has(r))) {
                    e = Lr(n, e),
                    e = eh(t, e, 1),
                    t = vn(t, e, 1),
                    e = Ze(),
                    t !== null && (Go(t, 1, e),
                    it(t, e));
                    break
                }
            }
            t = t.return
        }
}
function V0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ze(),
    e.pingedLanes |= e.suspendedLanes & n,
    Fe === e && (Ue & n) === n && (ze === 4 || ze === 3 && (Ue & 130023424) === Ue && 500 > Ie() - Xu ? Bn(e, 0) : Yu |= n),
    it(e, t)
}
function Sh(e, t) {
    t === 0 && (e.mode & 1 ? (t = di,
    di <<= 1,
    !(di & 130023424) && (di = 4194304)) : t = 1);
    var n = Ze();
    e = Qt(e, t),
    e !== null && (Go(e, t, n),
    it(e, n))
}
function F0(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Sh(e, n)
}
function B0(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(z(314))
    }
    r !== null && r.delete(t),
    Sh(e, n)
}
var _h;
_h = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || rt.current)
            nt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return nt = !1,
                N0(e, t, n);
            nt = !!(e.flags & 131072)
        }
    else
        nt = !1,
        Te && t.flags & 1048576 && Rp(t, rl, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        zi(e, t),
        e = t.pendingProps;
        var o = br(t, Ye.current);
        kr(t, n),
        o = Uu(null, t, r, e, o, n);
        var i = Wu();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        ot(r) ? (i = !0,
        tl(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Du(t),
        o.updater = Al,
        t.stateNode = o,
        o._reactInternals = t,
        js(t, r, e, n),
        t = Ms(null, t, r, !0, i, n)) : (t.tag = 0,
        Te && i && Pu(t),
        Xe(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (zi(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = W0(r),
            e = Et(r, e),
            o) {
            case 0:
                t = As(null, t, r, e, n);
                break e;
            case 1:
                t = wf(null, t, r, e, n);
                break e;
            case 11:
                t = vf(null, t, r, e, n);
                break e;
            case 14:
                t = yf(null, t, r, Et(r.type, e), n);
                break e
            }
            throw Error(z(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Et(r, o),
        As(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Et(r, o),
        wf(e, t, r, o, n);
    case 3:
        e: {
            if (oh(t),
            e === null)
                throw Error(z(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            Pp(e, t),
            ll(t, r, null, n);
            var l = t.memoizedState;
            if (r = l.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = Lr(Error(z(423)), t),
                    t = Sf(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Lr(Error(z(424)), t),
                    t = Sf(e, t, r, n, o);
                    break e
                } else
                    for (ft = gn(t.stateNode.containerInfo.firstChild),
                    dt = t,
                    Te = !0,
                    bt = null,
                    n = Np(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Cr(),
                r === o) {
                    t = Yt(e, t, n);
                    break e
                }
                Xe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return jp(t),
        e === null && Ns(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        l = o.children,
        Es(r, o) ? l = null : i !== null && Es(r, i) && (t.flags |= 32),
        rh(e, t),
        Xe(e, t, l, n),
        t.child;
    case 6:
        return e === null && Ns(t),
        null;
    case 13:
        return ih(e, t, n);
    case 4:
        return zu(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Tr(t, null, r, n) : Xe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Et(r, o),
        vf(e, t, r, o, n);
    case 7:
        return Xe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Xe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Xe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            l = o.value,
            xe(ol, r._currentValue),
            r._currentValue = l,
            i !== null)
                if (Nt(i.value, l)) {
                    if (i.children === o.children && !rt.current) {
                        t = Yt(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var s = i.dependencies;
                        if (s !== null) {
                            l = i.child;
                            for (var a = s.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (i.tag === 1) {
                                        a = Ht(-1, n & -n),
                                        a.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    i.lanes |= n,
                                    a = i.alternate,
                                    a !== null && (a.lanes |= n),
                                    Ls(i.return, n, t),
                                    s.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (i.tag === 10)
                            l = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (l = i.return,
                            l === null)
                                throw Error(z(341));
                            l.lanes |= n,
                            s = l.alternate,
                            s !== null && (s.lanes |= n),
                            Ls(l, n, t),
                            l = i.sibling
                        } else
                            l = i.child;
                        if (l !== null)
                            l.return = i;
                        else
                            for (l = i; l !== null; ) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (i = l.sibling,
                                i !== null) {
                                    i.return = l.return,
                                    l = i;
                                    break
                                }
                                l = l.return
                            }
                        i = l
                    }
            Xe(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        kr(t, n),
        o = St(o),
        r = r(o),
        t.flags |= 1,
        Xe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = Et(r, t.pendingProps),
        o = Et(r.type, o),
        yf(e, t, r, o, n);
    case 15:
        return th(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Et(r, o),
        zi(e, t),
        t.tag = 1,
        ot(r) ? (e = !0,
        tl(t)) : e = !1,
        kr(t, n),
        qp(t, r, o),
        js(t, r, o, n),
        Ms(null, t, r, !0, e, n);
    case 19:
        return lh(e, t, n);
    case 22:
        return nh(e, t, n)
    }
    throw Error(z(156, t.tag))
}
;
function kh(e, t) {
    return Yd(e, t)
}
function U0(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function yt(e, t, n, r) {
    return new U0(e,t,n,r)
}
function ec(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function W0(e) {
    if (typeof e == "function")
        return ec(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === wu)
            return 11;
        if (e === Su)
            return 14
    }
    return 2
}
function Sn(e, t) {
    var n = e.alternate;
    return n === null ? (n = yt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Bi(e, t, n, r, o, i) {
    var l = 2;
    if (r = e,
    typeof e == "function")
        ec(e) && (l = 1);
    else if (typeof e == "string")
        l = 5;
    else
        e: switch (e) {
        case ar:
            return Un(n.children, o, i, t);
        case yu:
            l = 8,
            o |= 8;
            break;
        case ns:
            return e = yt(12, n, t, o | 2),
            e.elementType = ns,
            e.lanes = i,
            e;
        case rs:
            return e = yt(13, n, t, o),
            e.elementType = rs,
            e.lanes = i,
            e;
        case os:
            return e = yt(19, n, t, o),
            e.elementType = os,
            e.lanes = i,
            e;
        case jd:
            return $l(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Ld:
                    l = 10;
                    break e;
                case Pd:
                    l = 9;
                    break e;
                case wu:
                    l = 11;
                    break e;
                case Su:
                    l = 14;
                    break e;
                case on:
                    l = 16,
                    r = null;
                    break e
                }
            throw Error(z(130, e == null ? e : typeof e, ""))
        }
    return t = yt(l, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Un(e, t, n, r) {
    return e = yt(7, e, r, t),
    e.lanes = n,
    e
}
function $l(e, t, n, r) {
    return e = yt(22, e, r, t),
    e.elementType = jd,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Ba(e, t, n) {
    return e = yt(6, e, null, t),
    e.lanes = n,
    e
}
function Ua(e, t, n) {
    return t = yt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function H0(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = xa(0),
    this.expirationTimes = xa(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = xa(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function tc(e, t, n, r, o, i, l, s, a) {
    return e = new H0(e,t,n,s,a),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = yt(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Du(i),
    e
}
function G0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: lr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function xh(e) {
    if (!e)
        return xn;
    e = e._reactInternals;
    e: {
        if (qn(e) !== e || e.tag !== 1)
            throw Error(z(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (ot(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(z(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ot(n))
            return xp(e, n, t)
    }
    return t
}
function Eh(e, t, n, r, o, i, l, s, a) {
    return e = tc(n, r, !0, e, o, i, l, s, a),
    e.context = xh(null),
    n = e.current,
    r = Ze(),
    o = wn(n),
    i = Ht(r, o),
    i.callback = t ?? null,
    vn(n, i, o),
    e.current.lanes = o,
    Go(e, o, r),
    it(e, r),
    e
}
function Dl(e, t, n, r) {
    var o = t.current
      , i = Ze()
      , l = wn(o);
    return n = xh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Ht(i, l),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = vn(o, t, l),
    e !== null && (Tt(e, o, l, i),
    Ii(e, o, l)),
    l
}
function hl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Lf(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function nc(e, t) {
    Lf(e, t),
    (e = e.alternate) && Lf(e, t)
}
function K0() {
    return null
}
var Rh = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function rc(e) {
    this._internalRoot = e
}
zl.prototype.render = rc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(z(409));
    Dl(e, t, null, null)
}
;
zl.prototype.unmount = rc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Qn(function() {
            Dl(null, e, null, null)
        }),
        t[Kt] = null
    }
}
;
function zl(e) {
    this._internalRoot = e
}
zl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = np();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++)
            ;
        sn.splice(n, 0, e),
        n === 0 && op(e)
    }
}
;
function oc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Vl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Pf() {}
function Q0(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = hl(l);
                i.call(u)
            }
        }
        var l = Eh(t, r, e, 0, null, !1, !1, "", Pf);
        return e._reactRootContainer = l,
        e[Kt] = l.current,
        Ao(e.nodeType === 8 ? e.parentNode : e),
        Qn(),
        l
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var u = hl(a);
            s.call(u)
        }
    }
    var a = tc(e, 0, !1, null, null, !1, !1, "", Pf);
    return e._reactRootContainer = a,
    e[Kt] = a.current,
    Ao(e.nodeType === 8 ? e.parentNode : e),
    Qn(function() {
        Dl(t, a, n, r)
    }),
    a
}
function Fl(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var l = i;
        if (typeof o == "function") {
            var s = o;
            o = function() {
                var a = hl(l);
                s.call(a)
            }
        }
        Dl(t, l, e, o)
    } else
        l = Q0(n, t, e, o, r);
    return hl(l)
}
ep = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = co(t.pendingLanes);
            n !== 0 && (xu(t, n | 1),
            it(t, Ie()),
            !(me & 6) && (Pr = Ie() + 500,
            bn()))
        }
        break;
    case 13:
        Qn(function() {
            var r = Qt(e, 1);
            if (r !== null) {
                var o = Ze();
                Tt(r, e, 1, o)
            }
        }),
        nc(e, 1)
    }
}
;
Eu = function(e) {
    if (e.tag === 13) {
        var t = Qt(e, 134217728);
        if (t !== null) {
            var n = Ze();
            Tt(t, e, 134217728, n)
        }
        nc(e, 134217728)
    }
}
;
tp = function(e) {
    if (e.tag === 13) {
        var t = wn(e)
          , n = Qt(e, t);
        if (n !== null) {
            var r = Ze();
            Tt(n, e, t, r)
        }
        nc(e, t)
    }
}
;
np = function() {
    return we
}
;
rp = function(e, t) {
    var n = we;
    try {
        return we = e,
        t()
    } finally {
        we = n
    }
}
;
hs = function(e, t, n) {
    switch (t) {
    case "input":
        if (as(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Pl(r);
                    if (!o)
                        throw Error(z(90));
                    Ad(r),
                    as(r, o)
                }
            }
        }
        break;
    case "textarea":
        Id(e, n);
        break;
    case "select":
        t = n.value,
        t != null && yr(e, !!n.multiple, t, !1)
    }
}
;
Ud = Zu;
Wd = Qn;
var Y0 = {
    usingClientEntryPoint: !1,
    Events: [Qo, fr, Pl, Fd, Bd, Zu]
}
  , no = {
    findFiberByHostInstance: zn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , X0 = {
    bundleType: no.bundleType,
    version: no.version,
    rendererPackageName: no.rendererPackageName,
    rendererConfig: no.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Kd(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: no.findFiberByHostInstance || K0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xi.isDisabled && xi.supportsFiber)
        try {
            Cl = xi.inject(X0),
            At = xi
        } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y0;
ht.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!oc(t))
        throw Error(z(200));
    return G0(e, t, null, n)
}
;
ht.createRoot = function(e, t) {
    if (!oc(e))
        throw Error(z(299));
    var n = !1
      , r = ""
      , o = Rh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = tc(e, 1, !1, null, null, n, !1, r, o),
    e[Kt] = t.current,
    Ao(e.nodeType === 8 ? e.parentNode : e),
    new rc(t)
}
;
ht.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","),
        Error(z(268, e)));
    return e = Kd(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ht.flushSync = function(e) {
    return Qn(e)
}
;
ht.hydrate = function(e, t, n) {
    if (!Vl(t))
        throw Error(z(200));
    return Fl(null, e, t, !0, n)
}
;
ht.hydrateRoot = function(e, t, n) {
    if (!oc(e))
        throw Error(z(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , l = Rh;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    t = Eh(t, null, e, 1, n ?? null, o, !1, i, l),
    e[Kt] = t.current,
    Ao(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new zl(t)
}
;
ht.render = function(e, t, n) {
    if (!Vl(t))
        throw Error(z(200));
    return Fl(null, e, t, !1, n)
}
;
ht.unmountComponentAtNode = function(e) {
    if (!Vl(e))
        throw Error(z(40));
    return e._reactRootContainer ? (Qn(function() {
        Fl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Kt] = null
        })
    }),
    !0) : !1
}
;
ht.unstable_batchedUpdates = Zu;
ht.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Vl(n))
        throw Error(z(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(z(38));
    return Fl(e, t, n, !1, r)
}
;
ht.version = "18.3.1-next-f1338f8080-20240426";
function bh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bh)
        } catch (e) {
            console.error(e)
        }
}
bh(),
bd.exports = ht;
var Ch = bd.exports;
const Z0 = hd(Ch);
var Th, jf = Ch;
Th = jf.createRoot,
jf.hydrateRoot;
var Nh = {};
function q0(e) {
    const t = new Error(e);
    if (t.stack === void 0)
        try {
            throw t
        } catch {}
    return t
}
var J0 = q0
  , se = J0;
function ey(e) {
    return !!e && typeof e.then == "function"
}
var be = ey;
function ty(e, t) {
    if (e != null)
        return e;
    throw se(t ?? "Got unexpected null or undefined")
}
var Ne = ty;
function ie(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
class Bl {
    getValue() {
        throw se("BaseLoadable")
    }
    toPromise() {
        throw se("BaseLoadable")
    }
    valueMaybe() {
        throw se("BaseLoadable")
    }
    valueOrThrow() {
        throw se(`Loadable expected value, but in "${this.state}" state`)
    }
    promiseMaybe() {
        throw se("BaseLoadable")
    }
    promiseOrThrow() {
        throw se(`Loadable expected promise, but in "${this.state}" state`)
    }
    errorMaybe() {
        throw se("BaseLoadable")
    }
    errorOrThrow() {
        throw se(`Loadable expected error, but in "${this.state}" state`)
    }
    is(t) {
        return t.state === this.state && t.contents === this.contents
    }
    map(t) {
        throw se("BaseLoadable")
    }
}
class ny extends Bl {
    constructor(t) {
        super(),
        ie(this, "state", "hasValue"),
        ie(this, "contents", void 0),
        this.contents = t
    }
    getValue() {
        return this.contents
    }
    toPromise() {
        return Promise.resolve(this.contents)
    }
    valueMaybe() {
        return this.contents
    }
    valueOrThrow() {
        return this.contents
    }
    promiseMaybe() {}
    errorMaybe() {}
    map(t) {
        try {
            const n = t(this.contents);
            return be(n) ? Yn(n) : jr(n) ? n : Xo(n)
        } catch (n) {
            return be(n) ? Yn(n.next( () => this.map(t))) : Ul(n)
        }
    }
}
class ry extends Bl {
    constructor(t) {
        super(),
        ie(this, "state", "hasError"),
        ie(this, "contents", void 0),
        this.contents = t
    }
    getValue() {
        throw this.contents
    }
    toPromise() {
        return Promise.reject(this.contents)
    }
    valueMaybe() {}
    promiseMaybe() {}
    errorMaybe() {
        return this.contents
    }
    errorOrThrow() {
        return this.contents
    }
    map(t) {
        return this
    }
}
class Lh extends Bl {
    constructor(t) {
        super(),
        ie(this, "state", "loading"),
        ie(this, "contents", void 0),
        this.contents = t
    }
    getValue() {
        throw this.contents
    }
    toPromise() {
        return this.contents
    }
    valueMaybe() {}
    promiseMaybe() {
        return this.contents
    }
    promiseOrThrow() {
        return this.contents
    }
    errorMaybe() {}
    map(t) {
        return Yn(this.contents.then(n => {
            const r = t(n);
            if (jr(r)) {
                const o = r;
                switch (o.state) {
                case "hasValue":
                    return o.contents;
                case "hasError":
                    throw o.contents;
                case "loading":
                    return o.contents
                }
            }
            return r
        }
        ).catch(n => {
            if (be(n))
                return n.then( () => this.map(t).contents);
            throw n
        }
        ))
    }
}
function Xo(e) {
    return Object.freeze(new ny(e))
}
function Ul(e) {
    return Object.freeze(new ry(e))
}
function Yn(e) {
    return Object.freeze(new Lh(e))
}
function Ph() {
    return Object.freeze(new Lh(new Promise( () => {}
    )))
}
function oy(e) {
    return e.every(t => t.state === "hasValue") ? Xo(e.map(t => t.contents)) : e.some(t => t.state === "hasError") ? Ul(Ne(e.find(t => t.state === "hasError"), "Invalid loadable passed to loadableAll").contents) : Yn(Promise.all(e.map(t => t.contents)))
}
function jh(e) {
    const n = (Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map(o => e[o])).map(o => jr(o) ? o : be(o) ? Yn(o) : Xo(o))
      , r = oy(n);
    return Array.isArray(e) ? r : r.map(o => Object.getOwnPropertyNames(e).reduce( (i, l, s) => ({
        ...i,
        [l]: o[s]
    }), {}))
}
function jr(e) {
    return e instanceof Bl
}
const iy = {
    of: e => be(e) ? Yn(e) : jr(e) ? e : Xo(e),
    error: e => Ul(e),
    loading: () => Ph(),
    all: jh,
    isLoadable: jr
};
var Jn = {
    loadableWithValue: Xo,
    loadableWithError: Ul,
    loadableWithPromise: Yn,
    loadableLoading: Ph,
    loadableAll: jh,
    isLoadable: jr,
    RecoilLoadable: iy
}
  , ly = Jn.loadableWithValue
  , ay = Jn.loadableWithError
  , sy = Jn.loadableWithPromise
  , uy = Jn.loadableLoading
  , cy = Jn.loadableAll
  , fy = Jn.isLoadable
  , dy = Jn.RecoilLoadable
  , Zo = Object.freeze({
    __proto__: null,
    loadableWithValue: ly,
    loadableWithError: ay,
    loadableWithPromise: sy,
    loadableLoading: uy,
    loadableAll: cy,
    isLoadable: fy,
    RecoilLoadable: dy
});
const Ks = {
    RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
    RECOIL_GKS_ENABLED: new Set(["recoil_hamt_2020", "recoil_sync_external_store", "recoil_suppress_rerender_in_callback", "recoil_memory_managament_2020"])
};
function py(e, t) {
    var n, r;
    const o = (n = Nh[e]) === null || n === void 0 || (r = n.toLowerCase()) === null || r === void 0 ? void 0 : r.trim();
    if (o == null || o === "")
        return;
    if (!["true", "false"].includes(o))
        throw se(`process.env.${e} value must be 'true', 'false', or empty: ${o}`);
    t(o === "true")
}
function hy(e, t) {
    var n;
    const r = (n = Nh[e]) === null || n === void 0 ? void 0 : n.trim();
    r == null || r === "" || t(r.split(/\s*,\s*|\s+/))
}
function my() {
    var e;
    typeof process > "u" || ((e = process) === null || e === void 0 ? void 0 : e.env) != null && (py("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", t => {
        Ks.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = t
    }
    ),
    hy("RECOIL_GKS_ENABLED", t => {
        t.forEach(n => {
            Ks.RECOIL_GKS_ENABLED.add(n)
        }
        )
    }
    ))
}
my();
var Fr = Ks;
function Wl(e) {
    return Fr.RECOIL_GKS_ENABLED.has(e)
}
Wl.setPass = e => {
    Fr.RECOIL_GKS_ENABLED.add(e)
}
;
Wl.setFail = e => {
    Fr.RECOIL_GKS_ENABLED.delete(e)
}
;
Wl.clear = () => {
    Fr.RECOIL_GKS_ENABLED.clear()
}
;
var Se = Wl;
function gy(e, t, {error: n}={}) {
    return null
}
var vy = gy, ic = vy, Wa, Ha, Ga;
const yy = (Wa = ve.createMutableSource) !== null && Wa !== void 0 ? Wa : ve.unstable_createMutableSource
  , Oh = (Ha = ve.useMutableSource) !== null && Ha !== void 0 ? Ha : ve.unstable_useMutableSource
  , Ah = (Ga = ve.useSyncExternalStore) !== null && Ga !== void 0 ? Ga : ve.unstable_useSyncExternalStore;
function wy() {
    var e;
    const {ReactCurrentDispatcher: t, ReactCurrentOwner: n} = ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    return ((e = t == null ? void 0 : t.current) !== null && e !== void 0 ? e : n.currentDispatcher).useSyncExternalStore != null
}
function Sy() {
    return Se("recoil_transition_support") ? {
        mode: "TRANSITION_SUPPORT",
        early: !0,
        concurrent: !0
    } : Se("recoil_sync_external_store") && Ah != null ? {
        mode: "SYNC_EXTERNAL_STORE",
        early: !0,
        concurrent: !1
    } : Se("recoil_mutable_source") && Oh != null && typeof window < "u" && !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE ? Se("recoil_suppress_rerender_in_callback") ? {
        mode: "MUTABLE_SOURCE",
        early: !0,
        concurrent: !0
    } : {
        mode: "MUTABLE_SOURCE",
        early: !1,
        concurrent: !1
    } : Se("recoil_suppress_rerender_in_callback") ? {
        mode: "LEGACY",
        early: !0,
        concurrent: !1
    } : {
        mode: "LEGACY",
        early: !1,
        concurrent: !1
    }
}
function _y() {
    return !1
}
var qo = {
    createMutableSource: yy,
    useMutableSource: Oh,
    useSyncExternalStore: Ah,
    currentRendererSupportsUseSyncExternalStore: wy,
    reactMode: Sy,
    isFastRefreshEnabled: _y
};
class lc {
    constructor(t) {
        ie(this, "key", void 0),
        this.key = t
    }
    toJSON() {
        return {
            key: this.key
        }
    }
}
class Mh extends lc {
}
class Ih extends lc {
}
function ky(e) {
    return e instanceof Mh || e instanceof Ih
}
var Hl = {
    AbstractRecoilValue: lc,
    RecoilState: Mh,
    RecoilValueReadOnly: Ih,
    isRecoilValue: ky
}
  , xy = Hl.AbstractRecoilValue
  , Ey = Hl.RecoilState
  , Ry = Hl.RecoilValueReadOnly
  , by = Hl.isRecoilValue
  , Or = Object.freeze({
    __proto__: null,
    AbstractRecoilValue: xy,
    RecoilState: Ey,
    RecoilValueReadOnly: Ry,
    isRecoilValue: by
});
function Cy(e, t) {
    return function*() {
        let n = 0;
        for (const r of e)
            yield t(r, n++)
    }()
}
var Gl = Cy;
class $h {
}
const Ty = new $h
  , Xn = new Map
  , ac = new Map;
function Ny(e) {
    return Gl(e, t => Ne(ac.get(t)))
}
function Ly(e) {
    if (Xn.has(e)) {
        const t = `Duplicate atom key "${e}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
        console.warn(t)
    }
}
function Py(e) {
    Fr.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && Ly(e.key),
    Xn.set(e.key, e);
    const t = e.set == null ? new Or.RecoilValueReadOnly(e.key) : new Or.RecoilState(e.key);
    return ac.set(e.key, t),
    t
}
class Dh extends Error {
}
function jy(e) {
    const t = Xn.get(e);
    if (t == null)
        throw new Dh(`Missing definition for RecoilValue: "${e}""`);
    return t
}
function Oy(e) {
    return Xn.get(e)
}
const ml = new Map;
function Ay(e) {
    var t;
    if (!Se("recoil_memory_managament_2020"))
        return;
    const n = Xn.get(e);
    if (n != null && (t = n.shouldDeleteConfigOnRelease) !== null && t !== void 0 && t.call(n)) {
        var r;
        Xn.delete(e),
        (r = zh(e)) === null || r === void 0 || r(),
        ml.delete(e)
    }
}
function My(e, t) {
    Se("recoil_memory_managament_2020") && (t === void 0 ? ml.delete(e) : ml.set(e, t))
}
function zh(e) {
    return ml.get(e)
}
var at = {
    nodes: Xn,
    recoilValues: ac,
    registerNode: Py,
    getNode: jy,
    getNodeMaybe: Oy,
    deleteNodeConfigIfPossible: Ay,
    setConfigDeletionHandler: My,
    getConfigDeletionHandler: zh,
    recoilValuesForKeys: Ny,
    NodeMissingError: Dh,
    DefaultValue: $h,
    DEFAULT_VALUE: Ty
};
function Iy(e, t) {
    t()
}
var $y = {
    enqueueExecution: Iy
};
function Dy(e, t) {
    return t = {
        exports: {}
    },
    e(t, t.exports),
    t.exports
}
var zy = Dy(function(e) {
    var t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(C) {
        return typeof C
    }
    : function(C) {
        return C && typeof Symbol == "function" && C.constructor === Symbol && C !== Symbol.prototype ? "symbol" : typeof C
    }
      , n = {}
      , r = 5
      , o = Math.pow(2, r)
      , i = o - 1
      , l = o / 2
      , s = o / 4
      , a = {}
      , u = function(d) {
        return function() {
            return d
        }
    }
      , c = n.hash = function(C) {
        var d = typeof C > "u" ? "undefined" : t(C);
        if (d === "number")
            return C;
        d !== "string" && (C += "");
        for (var h = 0, w = 0, k = C.length; w < k; ++w) {
            var S = C.charCodeAt(w);
            h = (h << 5) - h + S | 0
        }
        return h
    }
      , f = function(d) {
        return d -= d >> 1 & 1431655765,
        d = (d & 858993459) + (d >> 2 & 858993459),
        d = d + (d >> 4) & 252645135,
        d += d >> 8,
        d += d >> 16,
        d & 127
    }
      , m = function(d, h) {
        return h >>> d & i
    }
      , x = function(d) {
        return 1 << d
    }
      , y = function(d, h) {
        return f(d & h - 1)
    }
      , R = function(d, h, w, k) {
        var S = k;
        if (!d) {
            var b = k.length;
            S = new Array(b);
            for (var D = 0; D < b; ++D)
                S[D] = k[D]
        }
        return S[h] = w,
        S
    }
      , O = function(d, h, w) {
        var k = w.length - 1
          , S = 0
          , b = 0
          , D = w;
        if (d)
            S = b = h;
        else
            for (D = new Array(k); S < h; )
                D[b++] = w[S++];
        for (++S; S <= k; )
            D[b++] = w[S++];
        return d && (D.length = k),
        D
    }
      , v = function(d, h, w, k) {
        var S = k.length;
        if (d) {
            for (var b = S; b >= h; )
                k[b--] = k[b];
            return k[h] = w,
            k
        }
        for (var D = 0, I = 0, U = new Array(S + 1); D < h; )
            U[I++] = k[D++];
        for (U[h] = w; D < S; )
            U[++I] = k[D++];
        return U
    }
      , p = 1
      , g = 2
      , T = 3
      , N = 4
      , P = {
        __hamt_isEmpty: !0
    }
      , j = function(d) {
        return d === P || d && d.__hamt_isEmpty
    }
      , L = function(d, h, w, k) {
        return {
            type: p,
            edit: d,
            hash: h,
            key: w,
            value: k,
            _modify: F
        }
    }
      , K = function(d, h, w) {
        return {
            type: g,
            edit: d,
            hash: h,
            children: w,
            _modify: Q
        }
    }
      , B = function(d, h, w) {
        return {
            type: T,
            edit: d,
            mask: h,
            children: w,
            _modify: V
        }
    }
      , q = function(d, h, w) {
        return {
            type: N,
            edit: d,
            size: h,
            children: w,
            _modify: H
        }
    }
      , le = function(d) {
        return d === P || d.type === p || d.type === g
    }
      , re = function(d, h, w, k, S) {
        for (var b = [], D = k, I = 0, U = 0; D; ++U)
            D & 1 && (b[U] = S[I++]),
            D >>>= 1;
        return b[h] = w,
        q(d, I + 1, b)
    }
      , ee = function(d, h, w, k) {
        for (var S = new Array(h - 1), b = 0, D = 0, I = 0, U = k.length; I < U; ++I)
            if (I !== w) {
                var Z = k[I];
                Z && !j(Z) && (S[b++] = Z,
                D |= 1 << I)
            }
        return B(d, D, S)
    }
      , _e = function C(d, h, w, k, S, b) {
        if (w === S)
            return K(d, w, [b, k]);
        var D = m(h, w)
          , I = m(h, S);
        return B(d, x(D) | x(I), D === I ? [C(d, h + r, w, k, S, b)] : D < I ? [k, b] : [b, k])
    }
      , he = function(d, h, w, k, S, b, D, I) {
        for (var U = S.length, Z = 0; Z < U; ++Z) {
            var fe = S[Z];
            if (w(D, fe.key)) {
                var oe = fe.value
                  , ue = b(oe);
                return ue === oe ? S : ue === a ? (--I.value,
                O(d, Z, S)) : R(d, Z, L(h, k, D, ue), S)
            }
        }
        var ye = b();
        return ye === a ? S : (++I.value,
        R(d, U, L(h, k, D, ye), S))
    }
      , ke = function(d, h) {
        return d === h.edit
    }
      , F = function(d, h, w, k, S, b, D) {
        if (h(b, this.key)) {
            var I = k(this.value);
            return I === this.value ? this : I === a ? (--D.value,
            P) : ke(d, this) ? (this.value = I,
            this) : L(d, S, b, I)
        }
        var U = k();
        return U === a ? this : (++D.value,
        _e(d, w, this.hash, this, S, L(d, S, b, U)))
    }
      , Q = function(d, h, w, k, S, b, D) {
        if (S === this.hash) {
            var I = ke(d, this)
              , U = he(I, d, h, this.hash, this.children, k, b, D);
            return U === this.children ? this : U.length > 1 ? K(d, this.hash, U) : U[0]
        }
        var Z = k();
        return Z === a ? this : (++D.value,
        _e(d, w, this.hash, this, S, L(d, S, b, Z)))
    }
      , V = function(d, h, w, k, S, b, D) {
        var I = this.mask
          , U = this.children
          , Z = m(w, S)
          , fe = x(Z)
          , oe = y(I, fe)
          , ue = I & fe
          , ye = ue ? U[oe] : P
          , Ee = ye._modify(d, h, w + r, k, S, b, D);
        if (ye === Ee)
            return this;
        var Oe = ke(d, this)
          , Vt = I
          , tn = void 0;
        if (ue && j(Ee)) {
            if (Vt &= ~fe,
            !Vt)
                return P;
            if (U.length <= 2 && le(U[oe ^ 1]))
                return U[oe ^ 1];
            tn = O(Oe, oe, U)
        } else if (!ue && !j(Ee)) {
            if (U.length >= l)
                return re(d, Z, Ee, I, U);
            Vt |= fe,
            tn = v(Oe, oe, Ee, U)
        } else
            tn = R(Oe, oe, Ee, U);
        return Oe ? (this.mask = Vt,
        this.children = tn,
        this) : B(d, Vt, tn)
    }
      , H = function(d, h, w, k, S, b, D) {
        var I = this.size
          , U = this.children
          , Z = m(w, S)
          , fe = U[Z]
          , oe = (fe || P)._modify(d, h, w + r, k, S, b, D);
        if (fe === oe)
            return this;
        var ue = ke(d, this)
          , ye = void 0;
        if (j(fe) && !j(oe))
            ++I,
            ye = R(ue, Z, oe, U);
        else if (!j(fe) && j(oe)) {
            if (--I,
            I <= s)
                return ee(d, I, Z, U);
            ye = R(ue, Z, P, U)
        } else
            ye = R(ue, Z, oe, U);
        return ue ? (this.size = I,
        this.children = ye,
        this) : q(d, I, ye)
    };
    P._modify = function(C, d, h, w, k, S, b) {
        var D = w();
        return D === a ? P : (++b.value,
        L(C, k, S, D))
    }
    ;
    function E(C, d, h, w, k) {
        this._editable = C,
        this._edit = d,
        this._config = h,
        this._root = w,
        this._size = k
    }
    E.prototype.setTree = function(C, d) {
        return this._editable ? (this._root = C,
        this._size = d,
        this) : C === this._root ? this : new E(this._editable,this._edit,this._config,C,d)
    }
    ;
    var A = n.tryGetHash = function(C, d, h, w) {
        for (var k = w._root, S = 0, b = w._config.keyEq; ; )
            switch (k.type) {
            case p:
                return b(h, k.key) ? k.value : C;
            case g:
                {
                    if (d === k.hash)
                        for (var D = k.children, I = 0, U = D.length; I < U; ++I) {
                            var Z = D[I];
                            if (b(h, Z.key))
                                return Z.value
                        }
                    return C
                }
            case T:
                {
                    var fe = m(S, d)
                      , oe = x(fe);
                    if (k.mask & oe) {
                        k = k.children[y(k.mask, oe)],
                        S += r;
                        break
                    }
                    return C
                }
            case N:
                {
                    if (k = k.children[m(S, d)],
                    k) {
                        S += r;
                        break
                    }
                    return C
                }
            default:
                return C
            }
    }
    ;
    E.prototype.tryGetHash = function(C, d, h) {
        return A(C, d, h, this)
    }
    ;
    var M = n.tryGet = function(C, d, h) {
        return A(C, h._config.hash(d), d, h)
    }
    ;
    E.prototype.tryGet = function(C, d) {
        return M(C, d, this)
    }
    ;
    var Y = n.getHash = function(C, d, h) {
        return A(void 0, C, d, h)
    }
    ;
    E.prototype.getHash = function(C, d) {
        return Y(C, d, this)
    }
    ,
    n.get = function(C, d) {
        return A(void 0, d._config.hash(C), C, d)
    }
    ,
    E.prototype.get = function(C, d) {
        return M(d, C, this)
    }
    ;
    var W = n.has = function(C, d, h) {
        return A(a, C, d, h) !== a
    }
    ;
    E.prototype.hasHash = function(C, d) {
        return W(C, d, this)
    }
    ;
    var J = n.has = function(C, d) {
        return W(d._config.hash(C), C, d)
    }
    ;
    E.prototype.has = function(C) {
        return J(C, this)
    }
    ;
    var te = function(d, h) {
        return d === h
    };
    n.make = function(C) {
        return new E(0,0,{
            keyEq: C && C.keyEq || te,
            hash: C && C.hash || c
        },P,0)
    }
    ,
    n.empty = n.make();
    var X = n.isEmpty = function(C) {
        return C && !!j(C._root)
    }
    ;
    E.prototype.isEmpty = function() {
        return X(this)
    }
    ;
    var ge = n.modifyHash = function(C, d, h, w) {
        var k = {
            value: w._size
        }
          , S = w._root._modify(w._editable ? w._edit : NaN, w._config.keyEq, 0, C, d, h, k);
        return w.setTree(S, k.value)
    }
    ;
    E.prototype.modifyHash = function(C, d, h) {
        return ge(h, C, d, this)
    }
    ;
    var pe = n.modify = function(C, d, h) {
        return ge(C, h._config.hash(d), d, h)
    }
    ;
    E.prototype.modify = function(C, d) {
        return pe(d, C, this)
    }
    ;
    var ae = n.setHash = function(C, d, h, w) {
        return ge(u(h), C, d, w)
    }
    ;
    E.prototype.setHash = function(C, d, h) {
        return ae(C, d, h, this)
    }
    ;
    var ce = n.set = function(C, d, h) {
        return ae(h._config.hash(C), C, d, h)
    }
    ;
    E.prototype.set = function(C, d) {
        return ce(C, d, this)
    }
    ;
    var st = u(a)
      , Dt = n.removeHash = function(C, d, h) {
        return ge(st, C, d, h)
    }
    ;
    E.prototype.removeHash = E.prototype.deleteHash = function(C, d) {
        return Dt(C, d, this)
    }
    ;
    var et = n.remove = function(C, d) {
        return Dt(d._config.hash(C), C, d)
    }
    ;
    E.prototype.remove = E.prototype.delete = function(C) {
        return et(C, this)
    }
    ;
    var He = n.beginMutation = function(C) {
        return new E(C._editable + 1,C._edit + 1,C._config,C._root,C._size)
    }
    ;
    E.prototype.beginMutation = function() {
        return He(this)
    }
    ;
    var jn = n.endMutation = function(C) {
        return C._editable = C._editable && C._editable - 1,
        C
    }
    ;
    E.prototype.endMutation = function() {
        return jn(this)
    }
    ;
    var Hr = n.mutate = function(C, d) {
        var h = He(d);
        return C(h),
        jn(h)
    }
    ;
    E.prototype.mutate = function(C) {
        return Hr(C, this)
    }
    ;
    var On = function(d) {
        return d && Gr(d[0], d[1], d[2], d[3], d[4])
    }
      , Gr = function(d, h, w, k, S) {
        for (; w < d; ) {
            var b = h[w++];
            if (b && !j(b))
                return zt(b, k, [d, h, w, k, S])
        }
        return On(S)
    }
      , zt = function(d, h, w) {
        switch (d.type) {
        case p:
            return {
                value: h(d),
                rest: w
            };
        case g:
        case N:
        case T:
            var k = d.children;
            return Gr(k.length, k, 0, h, w);
        default:
            return On(w)
        }
    }
      , ha = {
        done: !0
    };
    function tr(C) {
        this.v = C
    }
    tr.prototype.next = function() {
        if (!this.v)
            return ha;
        var C = this.v;
        return this.v = On(C.rest),
        C
    }
    ,
    tr.prototype[Symbol.iterator] = function() {
        return this
    }
    ;
    var nr = function(d, h) {
        return new tr(zt(d._root, h))
    }
      , ma = function(d) {
        return [d.key, d.value]
    }
      , rr = n.entries = function(C) {
        return nr(C, ma)
    }
    ;
    E.prototype.entries = E.prototype[Symbol.iterator] = function() {
        return rr(this)
    }
    ;
    var ga = function(d) {
        return d.key
    }
      , oi = n.keys = function(C) {
        return nr(C, ga)
    }
    ;
    E.prototype.keys = function() {
        return oi(this)
    }
    ;
    var va = function(d) {
        return d.value
    }
      , ii = n.values = E.prototype.values = function(C) {
        return nr(C, va)
    }
    ;
    E.prototype.values = function() {
        return ii(this)
    }
    ;
    var An = n.fold = function(C, d, h) {
        var w = h._root;
        if (w.type === p)
            return C(d, w.value, w.key);
        for (var k = [w.children], S = void 0; S = k.pop(); )
            for (var b = 0, D = S.length; b < D; ) {
                var I = S[b++];
                I && I.type && (I.type === p ? d = C(d, I.value, I.key) : k.push(I.children))
            }
        return d
    }
    ;
    E.prototype.fold = function(C, d) {
        return An(C, d, this)
    }
    ;
    var Kr = n.forEach = function(C, d) {
        return An(function(h, w, k) {
            return C(w, k, d)
        }, null, d)
    }
    ;
    E.prototype.forEach = function(C) {
        return Kr(C, this)
    }
    ;
    var Qr = n.count = function(C) {
        return C._size
    }
    ;
    E.prototype.count = function() {
        return Qr(this)
    }
    ,
    Object.defineProperty(E.prototype, "size", {
        get: E.prototype.count
    }),
    e.exports ? e.exports = n : (void 0).hamt = n
});
class Vy {
    constructor(t) {
        ie(this, "_map", void 0),
        this._map = new Map(t == null ? void 0 : t.entries())
    }
    keys() {
        return this._map.keys()
    }
    entries() {
        return this._map.entries()
    }
    get(t) {
        return this._map.get(t)
    }
    has(t) {
        return this._map.has(t)
    }
    set(t, n) {
        return this._map.set(t, n),
        this
    }
    delete(t) {
        return this._map.delete(t),
        this
    }
    clone() {
        return uc(this)
    }
    toMap() {
        return new Map(this._map)
    }
}
class sc {
    constructor(t) {
        if (ie(this, "_hamt", zy.empty.beginMutation()),
        t instanceof sc) {
            const n = t._hamt.endMutation();
            t._hamt = n.beginMutation(),
            this._hamt = n.beginMutation()
        } else if (t)
            for (const [n,r] of t.entries())
                this._hamt.set(n, r)
    }
    keys() {
        return this._hamt.keys()
    }
    entries() {
        return this._hamt.entries()
    }
    get(t) {
        return this._hamt.get(t)
    }
    has(t) {
        return this._hamt.has(t)
    }
    set(t, n) {
        return this._hamt.set(t, n),
        this
    }
    delete(t) {
        return this._hamt.delete(t),
        this
    }
    clone() {
        return uc(this)
    }
    toMap() {
        return new Map(this._hamt)
    }
}
function uc(e) {
    return Se("recoil_hamt_2020") ? new sc(e) : new Vy(e)
}
var Fy = {
    persistentMap: uc
}
  , By = Fy.persistentMap
  , Uy = Object.freeze({
    __proto__: null,
    persistentMap: By
});
function Wy(e, ...t) {
    const n = new Set;
    e: for (const r of e) {
        for (const o of t)
            if (o.has(r))
                continue e;
        n.add(r)
    }
    return n
}
var xo = Wy;
function Hy(e, t) {
    const n = new Map;
    return e.forEach( (r, o) => {
        n.set(o, t(r, o))
    }
    ),
    n
}
var gl = Hy;
function Gy() {
    return {
        nodeDeps: new Map,
        nodeToNodeSubscriptions: new Map
    }
}
function Ky(e) {
    return {
        nodeDeps: gl(e.nodeDeps, t => new Set(t)),
        nodeToNodeSubscriptions: gl(e.nodeToNodeSubscriptions, t => new Set(t))
    }
}
function Ka(e, t, n, r) {
    const {nodeDeps: o, nodeToNodeSubscriptions: i} = n
      , l = o.get(e);
    if (l && r && l !== r.nodeDeps.get(e))
        return;
    o.set(e, t);
    const s = l == null ? t : xo(t, l);
    for (const a of s)
        i.has(a) || i.set(a, new Set),
        Ne(i.get(a)).add(e);
    if (l) {
        const a = xo(l, t);
        for (const u of a) {
            if (!i.has(u))
                return;
            const c = Ne(i.get(u));
            c.delete(e),
            c.size === 0 && i.delete(u)
        }
    }
}
function Qy(e, t, n, r) {
    var o, i, l, s;
    const a = n.getState();
    r === a.currentTree.version || r === ((o = a.nextTree) === null || o === void 0 ? void 0 : o.version) || ((i = a.previousTree) === null || i === void 0 || i.version);
    const u = n.getGraph(r);
    if (Ka(e, t, u),
    r === ((l = a.previousTree) === null || l === void 0 ? void 0 : l.version)) {
        const f = n.getGraph(a.currentTree.version);
        Ka(e, t, f, u)
    }
    if (r === ((s = a.previousTree) === null || s === void 0 ? void 0 : s.version) || r === a.currentTree.version) {
        var c;
        const f = (c = a.nextTree) === null || c === void 0 ? void 0 : c.version;
        if (f !== void 0) {
            const m = n.getGraph(f);
            Ka(e, t, m, u)
        }
    }
}
var Jo = {
    cloneGraph: Ky,
    graph: Gy,
    saveDepsToStore: Qy
};
let Yy = 0;
const Xy = () => Yy++;
let Zy = 0;
const qy = () => Zy++;
let Jy = 0;
const e1 = () => Jy++;
var Kl = {
    getNextTreeStateVersion: Xy,
    getNextStoreID: qy,
    getNextComponentID: e1
};
const {persistentMap: Of} = Uy
  , {graph: t1} = Jo
  , {getNextTreeStateVersion: Vh} = Kl;
function Fh() {
    const e = Vh();
    return {
        version: e,
        stateID: e,
        transactionMetadata: {},
        dirtyAtoms: new Set,
        atomValues: Of(),
        nonvalidatedAtoms: Of()
    }
}
function n1() {
    const e = Fh();
    return {
        currentTree: e,
        nextTree: null,
        previousTree: null,
        commitDepth: 0,
        knownAtoms: new Set,
        knownSelectors: new Set,
        transactionSubscriptions: new Map,
        nodeTransactionSubscriptions: new Map,
        nodeToComponentSubscriptions: new Map,
        queuedComponentCallbacks_DEPRECATED: [],
        suspendedComponentResolvers: new Set,
        graphsByVersion: new Map().set(e.version, t1()),
        retention: {
            referenceCounts: new Map,
            nodesRetainedByZone: new Map,
            retainablesToCheckForRelease: new Set
        },
        nodeCleanupFunctions: new Map
    }
}
var Bh = {
    makeEmptyTreeState: Fh,
    makeEmptyStoreState: n1,
    getNextTreeStateVersion: Vh
};
class Uh {
}
function r1() {
    return new Uh
}
var Ql = {
    RetentionZone: Uh,
    retentionZone: r1
};
function o1(e, t) {
    const n = new Set(e);
    return n.add(t),
    n
}
function i1(e, t) {
    const n = new Set(e);
    return n.delete(t),
    n
}
function l1(e, t, n) {
    const r = new Map(e);
    return r.set(t, n),
    r
}
function a1(e, t, n) {
    const r = new Map(e);
    return r.set(t, n(r.get(t))),
    r
}
function s1(e, t) {
    const n = new Map(e);
    return n.delete(t),
    n
}
function u1(e, t) {
    const n = new Map(e);
    return t.forEach(r => n.delete(r)),
    n
}
var Wh = {
    setByAddingToSet: o1,
    setByDeletingFromSet: i1,
    mapBySettingInMap: l1,
    mapByUpdatingInMap: a1,
    mapByDeletingFromMap: s1,
    mapByDeletingMultipleFromMap: u1
};
function *c1(e, t) {
    let n = 0;
    for (const r of e)
        t(r, n++) && (yield r)
}
var cc = c1;
function f1(e, t) {
    return new Proxy(e,{
        get: (r, o) => (!(o in r) && o in t && (r[o] = t[o]()),
        r[o]),
        ownKeys: r => Object.keys(r)
    })
}
var Hh = f1;
const {getNode: ei, getNodeMaybe: d1, recoilValuesForKeys: Af} = at
  , {RetentionZone: Mf} = Ql
  , {setByAddingToSet: p1} = Wh
  , h1 = Object.freeze(new Set);
class m1 extends Error {
}
function g1(e, t, n) {
    if (!Se("recoil_memory_managament_2020"))
        return () => {}
        ;
    const {nodesRetainedByZone: r} = e.getState().retention;
    function o(i) {
        let l = r.get(i);
        l || r.set(i, l = new Set),
        l.add(t)
    }
    if (n instanceof Mf)
        o(n);
    else if (Array.isArray(n))
        for (const i of n)
            o(i);
    return () => {
        if (!Se("recoil_memory_managament_2020"))
            return;
        const {retention: i} = e.getState();
        function l(s) {
            const a = i.nodesRetainedByZone.get(s);
            a == null || a.delete(t),
            a && a.size === 0 && i.nodesRetainedByZone.delete(s)
        }
        if (n instanceof Mf)
            l(n);
        else if (Array.isArray(n))
            for (const s of n)
                l(s)
    }
}
function fc(e, t, n, r) {
    const o = e.getState();
    if (o.nodeCleanupFunctions.has(n))
        return;
    const i = ei(n)
      , l = g1(e, n, i.retainedBy)
      , s = i.init(e, t, r);
    o.nodeCleanupFunctions.set(n, () => {
        s(),
        l()
    }
    )
}
function v1(e, t, n) {
    fc(e, e.getState().currentTree, t, n)
}
function y1(e, t) {
    var n;
    const r = e.getState();
    (n = r.nodeCleanupFunctions.get(t)) === null || n === void 0 || n(),
    r.nodeCleanupFunctions.delete(t)
}
function w1(e, t, n) {
    return fc(e, t, n, "get"),
    ei(n).get(e, t)
}
function Gh(e, t, n) {
    return ei(n).peek(e, t)
}
function S1(e, t, n) {
    var r;
    const o = d1(t);
    return o == null || (r = o.invalidate) === null || r === void 0 || r.call(o, e),
    {
        ...e,
        atomValues: e.atomValues.clone().delete(t),
        nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
        dirtyAtoms: p1(e.dirtyAtoms, t)
    }
}
function _1(e, t, n, r) {
    const o = ei(n);
    if (o.set == null)
        throw new m1(`Attempt to set read-only RecoilValue: ${n}`);
    const i = o.set;
    return fc(e, t, n, "set"),
    i(e, t, r)
}
function k1(e, t, n) {
    const r = e.getState()
      , o = e.getGraph(t.version)
      , i = ei(n).nodeType;
    return Hh({
        type: i
    }, {
        loadable: () => Gh(e, t, n),
        isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
        isSet: () => i === "selector" ? !1 : t.atomValues.has(n),
        isModified: () => t.dirtyAtoms.has(n),
        deps: () => {
            var l;
            return Af((l = o.nodeDeps.get(n)) !== null && l !== void 0 ? l : [])
        }
        ,
        subscribers: () => {
            var l, s;
            return {
                nodes: Af(cc(Kh(e, t, new Set([n])), a => a !== n)),
                components: Gl((l = (s = r.nodeToComponentSubscriptions.get(n)) === null || s === void 0 ? void 0 : s.values()) !== null && l !== void 0 ? l : [], ([a]) => ({
                    name: a
                }))
            }
        }
    })
}
function Kh(e, t, n) {
    const r = new Set
      , o = Array.from(n)
      , i = e.getGraph(t.version);
    for (let s = o.pop(); s; s = o.pop()) {
        var l;
        r.add(s);
        const a = (l = i.nodeToNodeSubscriptions.get(s)) !== null && l !== void 0 ? l : h1;
        for (const u of a)
            r.has(u) || o.push(u)
    }
    return r
}
var Cn = {
    getNodeLoadable: w1,
    peekNodeLoadable: Gh,
    setNodeValue: _1,
    initializeNode: v1,
    cleanUpNode: y1,
    setUnvalidatedAtomValue_DEPRECATED: S1,
    peekNodeInfo: k1,
    getDownstreamNodes: Kh
};
let Qh = null;
function x1(e) {
    Qh = e
}
function E1() {
    var e;
    (e = Qh) === null || e === void 0 || e()
}
var Yh = {
    setInvalidateMemoizedSnapshot: x1,
    invalidateMemoizedSnapshot: E1
};
const {getDownstreamNodes: R1, getNodeLoadable: Xh, setNodeValue: b1} = Cn
  , {getNextComponentID: C1} = Kl
  , {getNode: T1, getNodeMaybe: Zh} = at
  , {DefaultValue: dc} = at
  , {reactMode: N1} = qo
  , {AbstractRecoilValue: L1, RecoilState: P1, RecoilValueReadOnly: j1, isRecoilValue: O1} = Or
  , {invalidateMemoizedSnapshot: A1} = Yh;
function M1(e, {key: t}, n=e.getState().currentTree) {
    var r, o;
    const i = e.getState();
    n.version === i.currentTree.version || n.version === ((r = i.nextTree) === null || r === void 0 ? void 0 : r.version) || (n.version,
    (o = i.previousTree) === null || o === void 0 || o.version);
    const l = Xh(e, n, t);
    return l.state === "loading" && l.contents.catch( () => {}
    ),
    l
}
function I1(e, t) {
    const n = e.clone();
    return t.forEach( (r, o) => {
        r.state === "hasValue" && r.contents instanceof dc ? n.delete(o) : n.set(o, r)
    }
    ),
    n
}
function $1(e, t, {key: n}, r) {
    if (typeof r == "function") {
        const o = Xh(e, t, n);
        if (o.state === "loading") {
            const i = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
            throw se(i)
        } else if (o.state === "hasError")
            throw o.contents;
        return r(o.contents)
    } else
        return r
}
function D1(e, t, n) {
    if (n.type === "set") {
        const {recoilValue: o, valueOrUpdater: i} = n
          , l = $1(e, t, o, i)
          , s = b1(e, t, o.key, l);
        for (const [a,u] of s.entries())
            Qs(t, a, u)
    } else if (n.type === "setLoadable") {
        const {recoilValue: {key: o}, loadable: i} = n;
        Qs(t, o, i)
    } else if (n.type === "markModified") {
        const {recoilValue: {key: o}} = n;
        t.dirtyAtoms.add(o)
    } else if (n.type === "setUnvalidated") {
        var r;
        const {recoilValue: {key: o}, unvalidatedValue: i} = n
          , l = Zh(o);
        l == null || (r = l.invalidate) === null || r === void 0 || r.call(l, t),
        t.atomValues.delete(o),
        t.nonvalidatedAtoms.set(o, i),
        t.dirtyAtoms.add(o)
    } else
        ic(`Unknown action ${n.type}`)
}
function Qs(e, t, n) {
    n.state === "hasValue" && n.contents instanceof dc ? e.atomValues.delete(t) : e.atomValues.set(t, n),
    e.dirtyAtoms.add(t),
    e.nonvalidatedAtoms.delete(t)
}
function qh(e, t) {
    e.replaceState(n => {
        const r = Jh(n);
        for (const o of t)
            D1(e, r, o);
        return em(e, r),
        A1(),
        r
    }
    )
}
function Yl(e, t) {
    if (Eo.length) {
        const n = Eo[Eo.length - 1];
        let r = n.get(e);
        r || n.set(e, r = []),
        r.push(t)
    } else
        qh(e, [t])
}
const Eo = [];
function z1() {
    const e = new Map;
    return Eo.push(e),
    () => {
        for (const [t,n] of e)
            qh(t, n);
        Eo.pop()
    }
}
function Jh(e) {
    return {
        ...e,
        atomValues: e.atomValues.clone(),
        nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
        dirtyAtoms: new Set(e.dirtyAtoms)
    }
}
function em(e, t) {
    const n = R1(e, t, t.dirtyAtoms);
    for (const i of n) {
        var r, o;
        (r = Zh(i)) === null || r === void 0 || (o = r.invalidate) === null || o === void 0 || o.call(r, t)
    }
}
function tm(e, t, n) {
    Yl(e, {
        type: "set",
        recoilValue: t,
        valueOrUpdater: n
    })
}
function V1(e, t, n) {
    if (n instanceof dc)
        return tm(e, t, n);
    Yl(e, {
        type: "setLoadable",
        recoilValue: t,
        loadable: n
    })
}
function F1(e, t) {
    Yl(e, {
        type: "markModified",
        recoilValue: t
    })
}
function B1(e, t, n) {
    Yl(e, {
        type: "setUnvalidated",
        recoilValue: t,
        unvalidatedValue: n
    })
}
function U1(e, {key: t}, n, r=null) {
    const o = C1()
      , i = e.getState();
    i.nodeToComponentSubscriptions.has(t) || i.nodeToComponentSubscriptions.set(t, new Map),
    Ne(i.nodeToComponentSubscriptions.get(t)).set(o, [r ?? "<not captured>", n]);
    const l = N1();
    if (l.early && (l.mode === "LEGACY" || l.mode === "MUTABLE_SOURCE")) {
        const s = e.getState().nextTree;
        s && s.dirtyAtoms.has(t) && n(s)
    }
    return {
        release: () => {
            const s = e.getState()
              , a = s.nodeToComponentSubscriptions.get(t);
            a === void 0 || !a.has(o) || (a.delete(o),
            a.size === 0 && s.nodeToComponentSubscriptions.delete(t))
        }
    }
}
function W1(e, t) {
    var n;
    const {currentTree: r} = e.getState()
      , o = T1(t.key);
    (n = o.clearCache) === null || n === void 0 || n.call(o, e, r)
}
var It = {
    RecoilValueReadOnly: j1,
    AbstractRecoilValue: L1,
    RecoilState: P1,
    getRecoilValueAsLoadable: M1,
    setRecoilValue: tm,
    setRecoilValueLoadable: V1,
    markRecoilValueModified: F1,
    setUnvalidatedRecoilValue: B1,
    subscribeToRecoilValue: U1,
    isRecoilValue: O1,
    applyAtomValueWrites: I1,
    batchStart: z1,
    writeLoadableToTreeState: Qs,
    invalidateDownstreams: em,
    copyTreeState: Jh,
    refreshRecoilValue: W1
};
function H1(e, t, n) {
    const r = e.entries();
    let o = r.next();
    for (; !o.done; ) {
        const i = o.value;
        if (t.call(n, i[1], i[0], e))
            return !0;
        o = r.next()
    }
    return !1
}
var G1 = H1;
const {cleanUpNode: K1} = Cn
  , {deleteNodeConfigIfPossible: Q1, getNode: nm} = at
  , {RetentionZone: rm} = Ql
  , Y1 = 12e4
  , om = new Set;
function im(e, t) {
    const n = e.getState()
      , r = n.currentTree;
    if (n.nextTree)
        return;
    const o = new Set;
    for (const l of t)
        if (l instanceof rm)
            for (const s of J1(n, l))
                o.add(s);
        else
            o.add(l);
    const i = X1(e, o);
    for (const l of i)
        q1(e, r, l)
}
function X1(e, t) {
    const n = e.getState()
      , r = n.currentTree
      , o = e.getGraph(r.version)
      , i = new Set
      , l = new Set;
    return s(t),
    i;
    function s(a) {
        const u = new Set
          , c = Z1(e, r, a, i, l);
        for (const y of c) {
            var f;
            if (nm(y).retainedBy === "recoilRoot") {
                l.add(y);
                continue
            }
            if (((f = n.retention.referenceCounts.get(y)) !== null && f !== void 0 ? f : 0) > 0) {
                l.add(y);
                continue
            }
            if (lm(y).some(O => n.retention.referenceCounts.get(O))) {
                l.add(y);
                continue
            }
            const R = o.nodeToNodeSubscriptions.get(y);
            if (R && G1(R, O => l.has(O))) {
                l.add(y);
                continue
            }
            i.add(y),
            u.add(y)
        }
        const m = new Set;
        for (const y of u)
            for (const R of (x = o.nodeDeps.get(y)) !== null && x !== void 0 ? x : om) {
                var x;
                i.has(R) || m.add(R)
            }
        m.size && s(m)
    }
}
function Z1(e, t, n, r, o) {
    const i = e.getGraph(t.version)
      , l = []
      , s = new Set;
    for (; n.size > 0; )
        a(Ne(n.values().next().value));
    return l;
    function a(u) {
        if (r.has(u) || o.has(u)) {
            n.delete(u);
            return
        }
        if (s.has(u))
            return;
        const c = i.nodeToNodeSubscriptions.get(u);
        if (c)
            for (const f of c)
                a(f);
        s.add(u),
        n.delete(u),
        l.push(u)
    }
}
function q1(e, t, n) {
    if (!Se("recoil_memory_managament_2020"))
        return;
    K1(e, n);
    const r = e.getState();
    r.knownAtoms.delete(n),
    r.knownSelectors.delete(n),
    r.nodeTransactionSubscriptions.delete(n),
    r.retention.referenceCounts.delete(n);
    const o = lm(n);
    for (const a of o) {
        var i;
        (i = r.retention.nodesRetainedByZone.get(a)) === null || i === void 0 || i.delete(n)
    }
    t.atomValues.delete(n),
    t.dirtyAtoms.delete(n),
    t.nonvalidatedAtoms.delete(n);
    const l = r.graphsByVersion.get(t.version);
    if (l) {
        const a = l.nodeDeps.get(n);
        if (a !== void 0) {
            l.nodeDeps.delete(n);
            for (const u of a) {
                var s;
                (s = l.nodeToNodeSubscriptions.get(u)) === null || s === void 0 || s.delete(n)
            }
        }
        l.nodeToNodeSubscriptions.delete(n)
    }
    Q1(n)
}
function J1(e, t) {
    var n;
    return (n = e.retention.nodesRetainedByZone.get(t)) !== null && n !== void 0 ? n : om
}
function lm(e) {
    const t = nm(e).retainedBy;
    return t === void 0 || t === "components" || t === "recoilRoot" ? [] : t instanceof rm ? [t] : t
}
function ew(e, t) {
    const n = e.getState();
    n.nextTree ? n.retention.retainablesToCheckForRelease.add(t) : im(e, new Set([t]))
}
function tw(e, t, n) {
    var r;
    if (!Se("recoil_memory_managament_2020"))
        return;
    const o = e.getState().retention.referenceCounts
      , i = ((r = o.get(t)) !== null && r !== void 0 ? r : 0) + n;
    i === 0 ? am(e, t) : o.set(t, i)
}
function am(e, t) {
    if (!Se("recoil_memory_managament_2020"))
        return;
    e.getState().retention.referenceCounts.delete(t),
    ew(e, t)
}
function nw(e) {
    if (!Se("recoil_memory_managament_2020"))
        return;
    const t = e.getState();
    im(e, t.retention.retainablesToCheckForRelease),
    t.retention.retainablesToCheckForRelease.clear()
}
function rw(e) {
    return e === void 0 ? "recoilRoot" : e
}
var er = {
    SUSPENSE_TIMEOUT_MS: Y1,
    updateRetainCount: tw,
    updateRetainCountToZero: am,
    releaseScheduledRetainablesNow: nw,
    retainedByOptionWithDefault: rw
};
const {unstable_batchedUpdates: ow} = Z0;
var iw = {
    unstable_batchedUpdates: ow
};
const {unstable_batchedUpdates: lw} = iw;
var aw = {
    unstable_batchedUpdates: lw
};
const {batchStart: sw} = It
  , {unstable_batchedUpdates: uw} = aw;
let pc = uw || (e => e());
const cw = e => {
    pc = e
}
  , fw = () => pc
  , dw = e => {
    pc( () => {
        let t = () => {}
        ;
        try {
            t = sw(),
            e()
        } finally {
            t()
        }
    }
    )
}
;
var Xl = {
    getBatcher: fw,
    setBatcher: cw,
    batchUpdates: dw
};
function *pw(e) {
    for (const t of e)
        for (const n of t)
            yield n
}
var sm = pw;
const um = typeof Window > "u" || typeof window > "u"
  , hw = e => !um && (e === window || e instanceof Window)
  , mw = typeof navigator < "u" && navigator.product === "ReactNative";
var Zl = {
    isSSR: um,
    isReactNative: mw,
    isWindow: hw
};
function gw(e, t) {
    let n;
    return (...r) => {
        n || (n = {});
        const o = t(...r);
        return Object.hasOwnProperty.call(n, o) || (n[o] = e(...r)),
        n[o]
    }
}
function vw(e, t) {
    let n, r;
    return (...o) => {
        const i = t(...o);
        return n === i || (n = i,
        r = e(...o)),
        r
    }
}
function yw(e, t) {
    let n, r;
    return [ (...l) => {
        const s = t(...l);
        return n === s || (n = s,
        r = e(...l)),
        r
    }
    , () => {
        n = null
    }
    ]
}
var ww = {
    memoizeWithArgsHash: gw,
    memoizeOneWithArgsHash: vw,
    memoizeOneWithArgsHashAndInvalidation: yw
};
const {batchUpdates: Ys} = Xl
  , {initializeNode: Sw, peekNodeInfo: _w} = Cn
  , {graph: kw} = Jo
  , {getNextStoreID: xw} = Kl
  , {DEFAULT_VALUE: Ew, recoilValues: If, recoilValuesForKeys: $f} = at
  , {AbstractRecoilValue: Rw, getRecoilValueAsLoadable: bw, setRecoilValue: Df, setUnvalidatedRecoilValue: Cw} = It
  , {updateRetainCount: Ui} = er
  , {setInvalidateMemoizedSnapshot: Tw} = Yh
  , {getNextTreeStateVersion: Nw, makeEmptyStoreState: Lw} = Bh
  , {isSSR: Pw} = Zl
  , {memoizeOneWithArgsHashAndInvalidation: jw} = ww;
class ql {
    constructor(t, n) {
        ie(this, "_store", void 0),
        ie(this, "_refCount", 1),
        ie(this, "getLoadable", r => (this.checkRefCount_INTERNAL(),
        bw(this._store, r))),
        ie(this, "getPromise", r => (this.checkRefCount_INTERNAL(),
        this.getLoadable(r).toPromise())),
        ie(this, "getNodes_UNSTABLE", r => {
            if (this.checkRefCount_INTERNAL(),
            (r == null ? void 0 : r.isModified) === !0) {
                if ((r == null ? void 0 : r.isInitialized) === !1)
                    return [];
                const l = this._store.getState().currentTree;
                return $f(l.dirtyAtoms)
            }
            const o = this._store.getState().knownAtoms
              , i = this._store.getState().knownSelectors;
            return (r == null ? void 0 : r.isInitialized) == null ? If.values() : r.isInitialized === !0 ? $f(sm([o, i])) : cc(If.values(), ({key: l}) => !o.has(l) && !i.has(l))
        }
        ),
        ie(this, "getInfo_UNSTABLE", ({key: r}) => (this.checkRefCount_INTERNAL(),
        _w(this._store, this._store.getState().currentTree, r))),
        ie(this, "map", r => {
            this.checkRefCount_INTERNAL();
            const o = new Xs(this,Ys);
            return r(o),
            o
        }
        ),
        ie(this, "asyncMap", async r => {
            this.checkRefCount_INTERNAL();
            const o = new Xs(this,Ys);
            return o.retain(),
            await r(o),
            o.autoRelease_INTERNAL(),
            o
        }
        ),
        this._store = {
            storeID: xw(),
            parentStoreID: n,
            getState: () => t,
            replaceState: r => {
                t.currentTree = r(t.currentTree)
            }
            ,
            getGraph: r => {
                const o = t.graphsByVersion;
                if (o.has(r))
                    return Ne(o.get(r));
                const i = kw();
                return o.set(r, i),
                i
            }
            ,
            subscribeToTransactions: () => ({
                release: () => {}
            }),
            addTransactionMetadata: () => {
                throw se("Cannot subscribe to Snapshots")
            }
        };
        for (const r of this._store.getState().knownAtoms)
            Sw(this._store, r, "get"),
            Ui(this._store, r, 1);
        this.autoRelease_INTERNAL()
    }
    retain() {
        this._refCount <= 0,
        this._refCount++;
        let t = !1;
        return () => {
            t || (t = !0,
            this._release())
        }
    }
    autoRelease_INTERNAL() {
        Pw || window.setTimeout( () => this._release(), 10)
    }
    _release() {
        if (this._refCount--,
        this._refCount === 0) {
            if (this._store.getState().nodeCleanupFunctions.forEach(t => t()),
            this._store.getState().nodeCleanupFunctions.clear(),
            !Se("recoil_memory_managament_2020"))
                return
        } else
            this._refCount < 0
    }
    isRetained() {
        return this._refCount > 0
    }
    checkRefCount_INTERNAL() {
        Se("recoil_memory_managament_2020") && this._refCount <= 0
    }
    getStore_INTERNAL() {
        return this.checkRefCount_INTERNAL(),
        this._store
    }
    getID() {
        return this.checkRefCount_INTERNAL(),
        this._store.getState().currentTree.stateID
    }
    getStoreID() {
        return this.checkRefCount_INTERNAL(),
        this._store.storeID
    }
}
function cm(e, t, n=!1) {
    const r = e.getState()
      , o = n ? Nw() : t.version;
    return {
        currentTree: {
            version: n ? o : t.version,
            stateID: n ? o : t.stateID,
            transactionMetadata: {
                ...t.transactionMetadata
            },
            dirtyAtoms: new Set(t.dirtyAtoms),
            atomValues: t.atomValues.clone(),
            nonvalidatedAtoms: t.nonvalidatedAtoms.clone()
        },
        commitDepth: 0,
        nextTree: null,
        previousTree: null,
        knownAtoms: new Set(r.knownAtoms),
        knownSelectors: new Set(r.knownSelectors),
        transactionSubscriptions: new Map,
        nodeTransactionSubscriptions: new Map,
        nodeToComponentSubscriptions: new Map,
        queuedComponentCallbacks_DEPRECATED: [],
        suspendedComponentResolvers: new Set,
        graphsByVersion: new Map().set(o, e.getGraph(t.version)),
        retention: {
            referenceCounts: new Map,
            nodesRetainedByZone: new Map,
            retainablesToCheckForRelease: new Set
        },
        nodeCleanupFunctions: new Map(Gl(r.nodeCleanupFunctions.entries(), ([i]) => [i, () => {}
        ]))
    }
}
function Ow(e) {
    const t = new ql(Lw());
    return e != null ? t.map(e) : t
}
const [zf,fm] = jw( (e, t) => {
    var n;
    const r = e.getState()
      , o = t === "latest" ? (n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree : Ne(r.previousTree);
    return new ql(cm(e, o),e.storeID)
}
, (e, t) => {
    var n, r;
    return String(t) + String(e.storeID) + String((n = e.getState().nextTree) === null || n === void 0 ? void 0 : n.version) + String(e.getState().currentTree.version) + String((r = e.getState().previousTree) === null || r === void 0 ? void 0 : r.version)
}
);
Tw(fm);
function Aw(e, t="latest") {
    const n = zf(e, t);
    return n.isRetained() ? n : (fm(),
    zf(e, t))
}
class Xs extends ql {
    constructor(t, n) {
        super(cm(t.getStore_INTERNAL(), t.getStore_INTERNAL().getState().currentTree, !0), t.getStoreID()),
        ie(this, "_batch", void 0),
        ie(this, "set", (r, o) => {
            this.checkRefCount_INTERNAL();
            const i = this.getStore_INTERNAL();
            this._batch( () => {
                Ui(i, r.key, 1),
                Df(this.getStore_INTERNAL(), r, o)
            }
            )
        }
        ),
        ie(this, "reset", r => {
            this.checkRefCount_INTERNAL();
            const o = this.getStore_INTERNAL();
            this._batch( () => {
                Ui(o, r.key, 1),
                Df(this.getStore_INTERNAL(), r, Ew)
            }
            )
        }
        ),
        ie(this, "setUnvalidatedAtomValues_DEPRECATED", r => {
            this.checkRefCount_INTERNAL();
            const o = this.getStore_INTERNAL();
            Ys( () => {
                for (const [i,l] of r.entries())
                    Ui(o, i, 1),
                    Cw(o, new Rw(i), l)
            }
            )
        }
        ),
        this._batch = n
    }
}
var Jl = {
    Snapshot: ql,
    MutableSnapshot: Xs,
    freshSnapshot: Ow,
    cloneSnapshot: Aw
}
  , Mw = Jl.Snapshot
  , Iw = Jl.MutableSnapshot
  , $w = Jl.freshSnapshot
  , Dw = Jl.cloneSnapshot
  , ea = Object.freeze({
    __proto__: null,
    Snapshot: Mw,
    MutableSnapshot: Iw,
    freshSnapshot: $w,
    cloneSnapshot: Dw
});
function zw(...e) {
    const t = new Set;
    for (const n of e)
        for (const r of n)
            t.add(r);
    return t
}
var Vw = zw;
const {useRef: Fw} = ve;
function Bw(e) {
    const t = Fw(e);
    return t.current === e && typeof e == "function" && (t.current = e()),
    t
}
var Vf = Bw;
const {getNextTreeStateVersion: Uw, makeEmptyStoreState: dm} = Bh
  , {cleanUpNode: Ww, getDownstreamNodes: Hw, initializeNode: Gw, setNodeValue: Kw, setUnvalidatedAtomValue_DEPRECATED: Qw} = Cn
  , {graph: Yw} = Jo
  , {cloneGraph: Xw} = Jo
  , {getNextStoreID: pm} = Kl
  , {createMutableSource: Qa, reactMode: hm} = qo
  , {applyAtomValueWrites: Zw} = It
  , {releaseScheduledRetainablesNow: mm} = er
  , {freshSnapshot: qw} = ea
  , {useCallback: Jw, useContext: gm, useEffect: Zs, useMemo: e2, useRef: t2, useState: n2} = ve;
function ro() {
    throw se("This component must be used inside a <RecoilRoot> component.")
}
const vm = Object.freeze({
    storeID: pm(),
    getState: ro,
    replaceState: ro,
    getGraph: ro,
    subscribeToTransactions: ro,
    addTransactionMetadata: ro
});
let qs = !1;
function Ff(e) {
    if (qs)
        throw se("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");
    const t = e.getState();
    if (t.nextTree === null) {
        Se("recoil_memory_managament_2020") && Se("recoil_release_on_cascading_update_killswitch_2021") && t.commitDepth > 0 && mm(e);
        const n = t.currentTree.version
          , r = Uw();
        t.nextTree = {
            ...t.currentTree,
            version: r,
            stateID: r,
            dirtyAtoms: new Set,
            transactionMetadata: {}
        },
        t.graphsByVersion.set(r, Xw(Ne(t.graphsByVersion.get(n))))
    }
}
const ym = ve.createContext({
    current: vm
})
  , ta = () => gm(ym)
  , wm = ve.createContext(null);
function r2() {
    return gm(wm)
}
function hc(e, t, n) {
    const r = Hw(e, n, n.dirtyAtoms);
    for (const o of r) {
        const i = t.nodeToComponentSubscriptions.get(o);
        if (i)
            for (const [l,[s,a]] of i)
                a(n)
    }
}
function Sm(e) {
    const t = e.getState()
      , n = t.currentTree
      , r = n.dirtyAtoms;
    if (r.size) {
        for (const [o,i] of t.nodeTransactionSubscriptions)
            if (r.has(o))
                for (const [l,s] of i)
                    s(e);
        for (const [o,i] of t.transactionSubscriptions)
            i(e);
        (!hm().early || t.suspendedComponentResolvers.size > 0) && (hc(e, t, n),
        t.suspendedComponentResolvers.forEach(o => o()),
        t.suspendedComponentResolvers.clear())
    }
    t.queuedComponentCallbacks_DEPRECATED.forEach(o => o(n)),
    t.queuedComponentCallbacks_DEPRECATED.splice(0, t.queuedComponentCallbacks_DEPRECATED.length)
}
function o2(e) {
    const t = e.getState();
    t.commitDepth++;
    try {
        const {nextTree: n} = t;
        if (n == null)
            return;
        t.previousTree = t.currentTree,
        t.currentTree = n,
        t.nextTree = null,
        Sm(e),
        t.previousTree != null ? t.graphsByVersion.delete(t.previousTree.version) : ic("Ended batch with no previous state, which is unexpected", "recoil"),
        t.previousTree = null,
        Se("recoil_memory_managament_2020") && n == null && mm(e)
    } finally {
        t.commitDepth--
    }
}
function i2({setNotifyBatcherOfChange: e}) {
    const t = ta()
      , [,n] = n2([]);
    return e( () => n({})),
    Zs( () => (e( () => n({})),
    () => {
        e( () => {}
        )
    }
    ), [e]),
    Zs( () => {
        $y.enqueueExecution("Batcher", () => {
            o2(t.current)
        }
        )
    }
    ),
    null
}
function l2(e, t) {
    const n = dm();
    return t({
        set: (r, o) => {
            const i = n.currentTree
              , l = Kw(e, i, r.key, o)
              , s = new Set(l.keys())
              , a = i.nonvalidatedAtoms.clone();
            for (const u of s)
                a.delete(u);
            n.currentTree = {
                ...i,
                dirtyAtoms: Vw(i.dirtyAtoms, s),
                atomValues: Zw(i.atomValues, l),
                nonvalidatedAtoms: a
            }
        }
        ,
        setUnvalidatedAtomValues: r => {
            r.forEach( (o, i) => {
                n.currentTree = Qw(n.currentTree, i, o)
            }
            )
        }
    }),
    n
}
function a2(e) {
    const t = qw(e)
      , n = t.getStore_INTERNAL().getState();
    return t.retain(),
    n.nodeCleanupFunctions.forEach(r => r()),
    n.nodeCleanupFunctions.clear(),
    n
}
let Bf = 0;
function s2({initializeState_DEPRECATED: e, initializeState: t, store_INTERNAL: n, children: r}) {
    let o;
    const i = x => {
        const y = o.current.graphsByVersion;
        if (y.has(x))
            return Ne(y.get(x));
        const R = Yw();
        return y.set(x, R),
        R
    }
      , l = (x, y) => {
        if (y == null) {
            const {transactionSubscriptions: R} = f.current.getState()
              , O = Bf++;
            return R.set(O, x),
            {
                release: () => {
                    R.delete(O)
                }
            }
        } else {
            const {nodeTransactionSubscriptions: R} = f.current.getState();
            R.has(y) || R.set(y, new Map);
            const O = Bf++;
            return Ne(R.get(y)).set(O, x),
            {
                release: () => {
                    const v = R.get(y);
                    v && (v.delete(O),
                    v.size === 0 && R.delete(y))
                }
            }
        }
    }
      , s = x => {
        Ff(f.current);
        for (const y of Object.keys(x))
            Ne(f.current.getState().nextTree).transactionMetadata[y] = x[y]
    }
      , a = x => {
        Ff(f.current);
        const y = Ne(o.current.nextTree);
        let R;
        try {
            qs = !0,
            R = x(y)
        } finally {
            qs = !1
        }
        R !== y && (o.current.nextTree = R,
        hm().early && hc(f.current, o.current, R),
        Ne(u.current)())
    }
      , u = t2(null)
      , c = Jw(x => {
        u.current = x
    }
    , [u])
      , f = Vf( () => n ?? {
        storeID: pm(),
        getState: () => o.current,
        replaceState: a,
        getGraph: i,
        subscribeToTransactions: l,
        addTransactionMetadata: s
    });
    n != null && (f.current = n),
    o = Vf( () => e != null ? l2(f.current, e) : t != null ? a2(t) : dm());
    const m = e2( () => Qa == null ? void 0 : Qa(o, () => o.current.currentTree.version), [o]);
    return Zs( () => {
        const x = f.current;
        for (const y of new Set(x.getState().knownAtoms))
            Gw(x, y, "get");
        return () => {
            for (const y of x.getState().knownAtoms)
                Ww(x, y)
        }
    }
    , [f]),
    ve.createElement(ym.Provider, {
        value: f
    }, ve.createElement(wm.Provider, {
        value: m
    }, ve.createElement(i2, {
        setNotifyBatcherOfChange: c
    }), r))
}
function u2(e) {
    const {override: t, ...n} = e
      , r = ta();
    return t === !1 && r.current !== vm ? e.children : ve.createElement(s2, n)
}
function c2() {
    return ta().current.storeID
}
var qt = {
    RecoilRoot: u2,
    useStoreRef: ta,
    useRecoilMutableSource: r2,
    useRecoilStoreID: c2,
    notifyComponents_FOR_TESTING: hc,
    sendEndOfBatchNotifications_FOR_TESTING: Sm
};
function f2(e, t) {
    if (e === t)
        return !0;
    if (e.length !== t.length)
        return !1;
    for (let n = 0, r = e.length; n < r; n++)
        if (e[n] !== t[n])
            return !1;
    return !0
}
var d2 = f2;
const {useEffect: p2, useRef: h2} = ve;
function m2(e) {
    const t = h2();
    return p2( () => {
        t.current = e
    }
    ),
    t.current
}
var _m = m2;
const {useStoreRef: g2} = qt
  , {SUSPENSE_TIMEOUT_MS: v2} = er
  , {updateRetainCount: oo} = er
  , {RetentionZone: y2} = Ql
  , {useEffect: w2, useRef: S2} = ve
  , {isSSR: Uf} = Zl;
function _2(e) {
    if (Se("recoil_memory_managament_2020"))
        return k2(e)
}
function k2(e) {
    const n = (Array.isArray(e) ? e : [e]).map(l => l instanceof y2 ? l : l.key)
      , r = g2();
    w2( () => {
        if (!Se("recoil_memory_managament_2020"))
            return;
        const l = r.current;
        if (o.current && !Uf)
            window.clearTimeout(o.current),
            o.current = null;
        else
            for (const s of n)
                oo(l, s, 1);
        return () => {
            for (const s of n)
                oo(l, s, -1)
        }
    }
    , [r, ...n]);
    const o = S2()
      , i = _m(n);
    if (!Uf && (i === void 0 || !d2(i, n))) {
        const l = r.current;
        for (const s of n)
            oo(l, s, 1);
        if (i)
            for (const s of i)
                oo(l, s, -1);
        o.current && window.clearTimeout(o.current),
        o.current = window.setTimeout( () => {
            o.current = null;
            for (const s of n)
                oo(l, s, -1)
        }
        , v2)
    }
}
var mc = _2;
function x2() {
    return "<component name not available>"
}
var ti = x2;
const {batchUpdates: E2} = Xl
  , {DEFAULT_VALUE: km} = at
  , {currentRendererSupportsUseSyncExternalStore: R2, reactMode: Br, useMutableSource: b2, useSyncExternalStore: C2} = qo
  , {useRecoilMutableSource: T2, useStoreRef: $t} = qt
  , {AbstractRecoilValue: Js, getRecoilValueAsLoadable: ni, setRecoilValue: vl, setUnvalidatedRecoilValue: N2, subscribeToRecoilValue: Ar} = It
  , {useCallback: lt, useEffect: Mr, useMemo: xm, useRef: Ro, useState: gc} = ve
  , {setByAddingToSet: L2} = Wh
  , {isSSR: P2} = Zl;
function vc(e, t, n) {
    if (e.state === "hasValue")
        return e.contents;
    throw e.state === "loading" ? new Promise(o => {
        const i = n.current.getState().suspendedComponentResolvers;
        i.add(o),
        P2 && be(e.contents) && e.contents.finally( () => {
            i.delete(o)
        }
        )
    }
    ) : e.state === "hasError" ? e.contents : se(`Invalid value of loadable atom "${t.key}"`)
}
function j2() {
    const e = ti()
      , t = $t()
      , [,n] = gc([])
      , r = Ro(new Set);
    r.current = new Set;
    const o = Ro(new Set)
      , i = Ro(new Map)
      , l = lt(a => {
        const u = i.current.get(a);
        u && (u.release(),
        i.current.delete(a))
    }
    , [i])
      , s = lt( (a, u) => {
        i.current.has(u) && n([])
    }
    , []);
    return Mr( () => {
        const a = t.current;
        xo(r.current, o.current).forEach(u => {
            if (i.current.has(u))
                return;
            const c = Ar(a, new Js(u), m => s(m, u), e);
            i.current.set(u, c),
            a.getState().nextTree ? a.getState().queuedComponentCallbacks_DEPRECATED.push( () => {
                s(a.getState(), u)
            }
            ) : s(a.getState(), u)
        }
        ),
        xo(o.current, r.current).forEach(u => {
            l(u)
        }
        ),
        o.current = r.current
    }
    ),
    Mr( () => {
        const a = i.current;
        return xo(r.current, new Set(a.keys())).forEach(u => {
            const c = Ar(t.current, new Js(u), f => s(f, u), e);
            a.set(u, c)
        }
        ),
        () => a.forEach( (u, c) => l(c))
    }
    , [e, t, l, s]),
    xm( () => {
        function a(y) {
            return R => {
                vl(t.current, y, R)
            }
        }
        function u(y) {
            return () => vl(t.current, y, km)
        }
        function c(y) {
            var R;
            r.current.has(y.key) || (r.current = L2(r.current, y.key));
            const O = t.current.getState();
            return ni(t.current, y, Br().early && (R = O.nextTree) !== null && R !== void 0 ? R : O.currentTree)
        }
        function f(y) {
            const R = c(y);
            return vc(R, y, t)
        }
        function m(y) {
            return [f(y), a(y)]
        }
        function x(y) {
            return [c(y), a(y)]
        }
        return {
            getRecoilValue: f,
            getRecoilValueLoadable: c,
            getRecoilState: m,
            getRecoilStateLoadable: x,
            getSetRecoilState: a,
            getResetRecoilState: u
        }
    }
    , [r, t])
}
const O2 = {
    current: 0
};
function A2(e) {
    const t = $t()
      , n = ti()
      , r = lt( () => {
        var s;
        const a = t.current
          , u = a.getState()
          , c = Br().early && (s = u.nextTree) !== null && s !== void 0 ? s : u.currentTree;
        return {
            loadable: ni(a, e, c),
            key: e.key
        }
    }
    , [t, e])
      , o = lt(s => {
        let a;
        return () => {
            var u, c;
            const f = s();
            return (u = a) !== null && u !== void 0 && u.loadable.is(f.loadable) && ((c = a) === null || c === void 0 ? void 0 : c.key) === f.key ? a : (a = f,
            f)
        }
    }
    , [])
      , i = xm( () => o(r), [r, o])
      , l = lt(s => {
        const a = t.current;
        return Ar(a, e, s, n).release
    }
    , [t, e, n]);
    return C2(l, i, i).loadable
}
function M2(e) {
    const t = $t()
      , n = lt( () => {
        var u;
        const c = t.current
          , f = c.getState()
          , m = Br().early && (u = f.nextTree) !== null && u !== void 0 ? u : f.currentTree;
        return ni(c, e, m)
    }
    , [t, e])
      , r = lt( () => n(), [n])
      , o = ti()
      , i = lt( (u, c) => {
        const f = t.current;
        return Ar(f, e, () => {
            if (!Se("recoil_suppress_rerender_in_callback"))
                return c();
            const x = n();
            a.current.is(x) || c(),
            a.current = x
        }
        , o).release
    }
    , [t, e, o, n])
      , l = T2();
    if (l == null)
        throw se("Recoil hooks must be used in components contained within a <RecoilRoot> component.");
    const s = b2(l, r, i)
      , a = Ro(s);
    return Mr( () => {
        a.current = s
    }
    ),
    s
}
function eu(e) {
    const t = $t()
      , n = ti()
      , r = lt( () => {
        var a;
        const u = t.current
          , c = u.getState()
          , f = Br().early && (a = c.nextTree) !== null && a !== void 0 ? a : c.currentTree;
        return ni(u, e, f)
    }
    , [t, e])
      , o = lt( () => ({
        loadable: r(),
        key: e.key
    }), [r, e.key])
      , i = lt(a => {
        const u = o();
        return a.loadable.is(u.loadable) && a.key === u.key ? a : u
    }
    , [o]);
    Mr( () => {
        const a = Ar(t.current, e, u => {
            s(i)
        }
        , n);
        return s(i),
        a.release
    }
    , [n, e, t, i]);
    const [l,s] = gc(o);
    return l.key !== e.key ? o().loadable : l.loadable
}
function I2(e) {
    const t = $t()
      , [,n] = gc([])
      , r = ti()
      , o = lt( () => {
        var s;
        const a = t.current
          , u = a.getState()
          , c = Br().early && (s = u.nextTree) !== null && s !== void 0 ? s : u.currentTree;
        return ni(a, e, c)
    }
    , [t, e])
      , i = o()
      , l = Ro(i);
    return Mr( () => {
        l.current = i
    }
    ),
    Mr( () => {
        const s = t.current
          , a = s.getState()
          , u = Ar(s, e, f => {
            var m;
            if (!Se("recoil_suppress_rerender_in_callback"))
                return n([]);
            const x = o();
            (m = l.current) !== null && m !== void 0 && m.is(x) || n(x),
            l.current = x
        }
        , r);
        if (a.nextTree)
            s.getState().queuedComponentCallbacks_DEPRECATED.push( () => {
                l.current = null,
                n([])
            }
            );
        else {
            var c;
            if (!Se("recoil_suppress_rerender_in_callback"))
                return n([]);
            const f = o();
            (c = l.current) !== null && c !== void 0 && c.is(f) || n(f),
            l.current = f
        }
        return u.release
    }
    , [r, o, e, t]),
    i
}
function yc(e) {
    return Se("recoil_memory_managament_2020") && mc(e),
    {
        TRANSITION_SUPPORT: eu,
        SYNC_EXTERNAL_STORE: R2() ? A2 : eu,
        MUTABLE_SOURCE: M2,
        LEGACY: I2
    }[Br().mode](e)
}
function Em(e) {
    const t = $t()
      , n = yc(e);
    return vc(n, e, t)
}
function na(e) {
    const t = $t();
    return lt(n => {
        vl(t.current, e, n)
    }
    , [t, e])
}
function $2(e) {
    const t = $t();
    return lt( () => {
        vl(t.current, e, km)
    }
    , [t, e])
}
function D2(e) {
    return [Em(e), na(e)]
}
function z2(e) {
    return [yc(e), na(e)]
}
function V2() {
    const e = $t();
    return (t, n={}) => {
        E2( () => {
            e.current.addTransactionMetadata(n),
            t.forEach( (r, o) => N2(e.current, new Js(o), r))
        }
        )
    }
}
function Rm(e) {
    return Se("recoil_memory_managament_2020") && mc(e),
    eu(e)
}
function bm(e) {
    const t = $t()
      , n = Rm(e);
    return vc(n, e, t)
}
function F2(e) {
    return [bm(e), na(e)]
}
var B2 = {
    recoilComponentGetRecoilValueCount_FOR_TESTING: O2,
    useRecoilInterface: j2,
    useRecoilState: D2,
    useRecoilStateLoadable: z2,
    useRecoilValue: Em,
    useRecoilValueLoadable: yc,
    useResetRecoilState: $2,
    useSetRecoilState: na,
    useSetUnvalidatedAtomValues: V2,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Rm,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: bm,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: F2
};
function U2(e, t) {
    const n = new Map;
    for (const [r,o] of e)
        t(o, r) && n.set(r, o);
    return n
}
var W2 = U2;
function H2(e, t) {
    const n = new Set;
    for (const r of e)
        t(r) && n.add(r);
    return n
}
var G2 = H2;
function K2(...e) {
    const t = new Map;
    for (let n = 0; n < e.length; n++) {
        const r = e[n].keys();
        let o;
        for (; !(o = r.next()).done; )
            t.set(o.value, e[n].get(o.value))
    }
    return t
}
var Q2 = K2;
const {batchUpdates: Y2} = Xl
  , {DEFAULT_VALUE: X2, getNode: Cm, nodes: Z2} = at
  , {useStoreRef: wc} = qt
  , {AbstractRecoilValue: q2, setRecoilValueLoadable: J2} = It
  , {SUSPENSE_TIMEOUT_MS: eS} = er
  , {cloneSnapshot: yl} = ea
  , {useCallback: ra, useEffect: Tm, useRef: Wf, useState: tS} = ve
  , {isSSR: Hf} = Zl;
function oa(e) {
    const t = wc();
    Tm( () => t.current.subscribeToTransactions(e).release, [e, t])
}
function Gf(e) {
    const t = e.atomValues.toMap()
      , n = gl(W2(t, (r, o) => {
        const l = Cm(o).persistence_UNSTABLE;
        return l != null && l.type !== "none" && r.state === "hasValue"
    }
    ), r => r.contents);
    return Q2(e.nonvalidatedAtoms.toMap(), n)
}
function nS(e) {
    oa(ra(t => {
        let n = t.getState().previousTree;
        const r = t.getState().currentTree;
        n || (n = t.getState().currentTree);
        const o = Gf(r)
          , i = Gf(n)
          , l = gl(Z2, a => {
            var u, c, f, m;
            return {
                persistence_UNSTABLE: {
                    type: (u = (c = a.persistence_UNSTABLE) === null || c === void 0 ? void 0 : c.type) !== null && u !== void 0 ? u : "none",
                    backButton: (f = (m = a.persistence_UNSTABLE) === null || m === void 0 ? void 0 : m.backButton) !== null && f !== void 0 ? f : !1
                }
            }
        }
        )
          , s = G2(r.dirtyAtoms, a => o.has(a) || i.has(a));
        e({
            atomValues: o,
            previousAtomValues: i,
            atomInfo: l,
            modifiedAtoms: s,
            transactionMetadata: {
                ...r.transactionMetadata
            }
        })
    }
    , [e]))
}
function rS(e) {
    oa(ra(t => {
        const n = yl(t, "latest")
          , r = yl(t, "previous");
        e({
            snapshot: n,
            previousSnapshot: r
        })
    }
    , [e]))
}
function oS() {
    const e = wc()
      , [t,n] = tS( () => yl(e.current))
      , r = _m(t)
      , o = Wf()
      , i = Wf();
    if (oa(ra(s => n(yl(s)), [])),
    Tm( () => {
        const s = t.retain();
        if (o.current && !Hf) {
            var a;
            window.clearTimeout(o.current),
            o.current = null,
            (a = i.current) === null || a === void 0 || a.call(i),
            i.current = null
        }
        return () => {
            window.setTimeout(s, 10)
        }
    }
    , [t]),
    r !== t && !Hf) {
        if (o.current) {
            var l;
            window.clearTimeout(o.current),
            o.current = null,
            (l = i.current) === null || l === void 0 || l.call(i),
            i.current = null
        }
        i.current = t.retain(),
        o.current = window.setTimeout( () => {
            var s;
            o.current = null,
            (s = i.current) === null || s === void 0 || s.call(i),
            i.current = null
        }
        , eS)
    }
    return t
}
function Nm(e, t) {
    var n;
    const r = e.getState()
      , o = (n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree
      , i = t.getStore_INTERNAL().getState().currentTree;
    Y2( () => {
        const l = new Set;
        for (const u of [o.atomValues.keys(), i.atomValues.keys()])
            for (const c of u) {
                var s, a;
                ((s = o.atomValues.get(c)) === null || s === void 0 ? void 0 : s.contents) !== ((a = i.atomValues.get(c)) === null || a === void 0 ? void 0 : a.contents) && Cm(c).shouldRestoreFromSnapshots && l.add(c)
            }
        l.forEach(u => {
            J2(e, new q2(u), i.atomValues.has(u) ? Ne(i.atomValues.get(u)) : X2)
        }
        ),
        e.replaceState(u => ({
            ...u,
            stateID: t.getID()
        }))
    }
    )
}
function iS() {
    const e = wc();
    return ra(t => Nm(e.current, t), [e])
}
var Lm = {
    useRecoilSnapshot: oS,
    gotoSnapshot: Nm,
    useGotoRecoilSnapshot: iS,
    useRecoilTransactionObserver: rS,
    useTransactionObservation_DEPRECATED: nS,
    useTransactionSubscription_DEPRECATED: oa
};
const {peekNodeInfo: lS} = Cn
  , {useStoreRef: aS} = qt;
function sS() {
    const e = aS();
    return ({key: t}) => lS(e.current, e.current.getState().currentTree, t)
}
var uS = sS;
const {reactMode: cS} = qo
  , {RecoilRoot: fS, useStoreRef: dS} = qt
  , {useMemo: pS} = ve;
function hS() {
    cS().mode === "MUTABLE_SOURCE" && console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");
    const e = dS().current;
    return pS( () => {
        function t({children: n}) {
            return ve.createElement(fS, {
                store_INTERNAL: e
            }, n)
        }
        return t
    }
    , [e])
}
var mS = hS;
const {loadableWithValue: gS} = Zo
  , {initializeNode: vS} = Cn
  , {DEFAULT_VALUE: yS, getNode: wS} = at
  , {copyTreeState: SS, getRecoilValueAsLoadable: _S, invalidateDownstreams: kS, writeLoadableToTreeState: xS} = It;
function Kf(e) {
    return wS(e.key).nodeType === "atom"
}
class ES {
    constructor(t, n) {
        ie(this, "_store", void 0),
        ie(this, "_treeState", void 0),
        ie(this, "_changes", void 0),
        ie(this, "get", r => {
            if (this._changes.has(r.key))
                return this._changes.get(r.key);
            if (!Kf(r))
                throw se("Reading selectors within atomicUpdate is not supported");
            const o = _S(this._store, r, this._treeState);
            if (o.state === "hasValue")
                return o.contents;
            throw o.state === "hasError" ? o.contents : se(`Expected Recoil atom ${r.key} to have a value, but it is in a loading state.`)
        }
        ),
        ie(this, "set", (r, o) => {
            if (!Kf(r))
                throw se("Setting selectors within atomicUpdate is not supported");
            if (typeof o == "function") {
                const i = this.get(r);
                this._changes.set(r.key, o(i))
            } else
                vS(this._store, r.key, "set"),
                this._changes.set(r.key, o)
        }
        ),
        ie(this, "reset", r => {
            this.set(r, yS)
        }
        ),
        this._store = t,
        this._treeState = n,
        this._changes = new Map
    }
    newTreeState_INTERNAL() {
        if (this._changes.size === 0)
            return this._treeState;
        const t = SS(this._treeState);
        for (const [n,r] of this._changes)
            xS(t, n, gS(r));
        return kS(this._store, t),
        t
    }
}
function RS(e) {
    return t => {
        e.replaceState(n => {
            const r = new ES(e,n);
            return t(r),
            r.newTreeState_INTERNAL()
        }
        )
    }
}
var bS = {
    atomicUpdater: RS
}
  , CS = bS.atomicUpdater
  , Pm = Object.freeze({
    __proto__: null,
    atomicUpdater: CS
});
function TS(e, t) {
    if (!e)
        throw new Error(t)
}
var NS = TS
  , po = NS;
const {atomicUpdater: LS} = Pm
  , {batchUpdates: PS} = Xl
  , {DEFAULT_VALUE: jS} = at
  , {useStoreRef: OS} = qt
  , {refreshRecoilValue: AS, setRecoilValue: Qf} = It
  , {cloneSnapshot: MS} = ea
  , {gotoSnapshot: IS} = Lm
  , {useCallback: $S} = ve;
class jm {
}
const DS = new jm;
function Om(e, t, n, r) {
    let o = DS, i;
    if (PS( () => {
        const s = "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
        if (typeof t != "function")
            throw se(s);
        const a = Hh({
            ...r ?? {},
            set: (c, f) => Qf(e, c, f),
            reset: c => Qf(e, c, jS),
            refresh: c => AS(e, c),
            gotoSnapshot: c => IS(e, c),
            transact_UNSTABLE: c => LS(e)(c)
        }, {
            snapshot: () => {
                const c = MS(e);
                return i = c.retain(),
                c
            }
        })
          , u = t(a);
        if (typeof u != "function")
            throw se(s);
        o = u(...n)
    }
    ),
    o instanceof jm && po(!1),
    be(o))
        o = o.finally( () => {
            var s;
            (s = i) === null || s === void 0 || s()
        }
        );
    else {
        var l;
        (l = i) === null || l === void 0 || l()
    }
    return o
}
function zS(e, t) {
    const n = OS();
    return $S( (...r) => Om(n.current, e, r), t != null ? [...t, n] : void 0)
}
var Am = {
    recoilCallback: Om,
    useRecoilCallback: zS
};
const {useStoreRef: VS} = qt
  , {refreshRecoilValue: FS} = It
  , {useCallback: BS} = ve;
function US(e) {
    const t = VS();
    return BS( () => {
        const n = t.current;
        FS(n, e)
    }
    , [e, t])
}
var WS = US;
const {atomicUpdater: HS} = Pm
  , {useStoreRef: GS} = qt
  , {useMemo: KS} = ve;
function QS(e, t) {
    const n = GS();
    return KS( () => (...r) => {
        HS(n.current)(i => {
            e(i)(...r)
        }
        )
    }
    , t != null ? [...t, n] : void 0)
}
var YS = QS;
class XS {
    constructor(t) {
        ie(this, "value", void 0),
        this.value = t
    }
}
var ZS = {
    WrappedValue: XS
}
  , qS = ZS.WrappedValue
  , Mm = Object.freeze({
    __proto__: null,
    WrappedValue: qS
});
const {isFastRefreshEnabled: JS} = qo;
class Yf extends Error {
}
class e_ {
    constructor(t) {
        var n, r, o;
        ie(this, "_name", void 0),
        ie(this, "_numLeafs", void 0),
        ie(this, "_root", void 0),
        ie(this, "_onHit", void 0),
        ie(this, "_onSet", void 0),
        ie(this, "_mapNodeValue", void 0),
        this._name = t == null ? void 0 : t.name,
        this._numLeafs = 0,
        this._root = null,
        this._onHit = (n = t == null ? void 0 : t.onHit) !== null && n !== void 0 ? n : () => {}
        ,
        this._onSet = (r = t == null ? void 0 : t.onSet) !== null && r !== void 0 ? r : () => {}
        ,
        this._mapNodeValue = (o = t == null ? void 0 : t.mapNodeValue) !== null && o !== void 0 ? o : i => i
    }
    size() {
        return this._numLeafs
    }
    root() {
        return this._root
    }
    get(t, n) {
        var r;
        return (r = this.getLeafNode(t, n)) === null || r === void 0 ? void 0 : r.value
    }
    getLeafNode(t, n) {
        if (this._root == null)
            return;
        let r = this._root;
        for (; r; ) {
            if (n == null || n.onNodeVisit(r),
            r.type === "leaf")
                return this._onHit(r),
                r;
            const o = this._mapNodeValue(t(r.nodeKey));
            r = r.branches.get(o)
        }
    }
    set(t, n, r) {
        const o = () => {
            var i, l, s, a;
            let u, c;
            for (const [O,v] of t) {
                var f, m, x;
                const p = this._root;
                if ((p == null ? void 0 : p.type) === "leaf")
                    throw this.invalidCacheError();
                const g = u;
                if (u = g ? g.branches.get(c) : p,
                u = (f = u) !== null && f !== void 0 ? f : {
                    type: "branch",
                    nodeKey: O,
                    parent: g,
                    branches: new Map,
                    branchKey: c
                },
                u.type !== "branch" || u.nodeKey !== O)
                    throw this.invalidCacheError();
                g == null || g.branches.set(c, u),
                r == null || (m = r.onNodeVisit) === null || m === void 0 || m.call(r, u),
                c = this._mapNodeValue(v),
                this._root = (x = this._root) !== null && x !== void 0 ? x : u
            }
            const y = u ? (i = u) === null || i === void 0 ? void 0 : i.branches.get(c) : this._root;
            if (y != null && (y.type !== "leaf" || y.branchKey !== c))
                throw this.invalidCacheError();
            const R = {
                type: "leaf",
                value: n,
                parent: u,
                branchKey: c
            };
            (l = u) === null || l === void 0 || l.branches.set(c, R),
            this._root = (s = this._root) !== null && s !== void 0 ? s : R,
            this._numLeafs++,
            this._onSet(R),
            r == null || (a = r.onNodeVisit) === null || a === void 0 || a.call(r, R)
        }
        ;
        try {
            o()
        } catch (i) {
            if (i instanceof Yf)
                this.clear(),
                o();
            else
                throw i
        }
    }
    delete(t) {
        const n = this.root();
        if (!n)
            return !1;
        if (t === n)
            return this._root = null,
            this._numLeafs = 0,
            !0;
        let r = t.parent
          , o = t.branchKey;
        for (; r; ) {
            var i;
            if (r.branches.delete(o),
            r === n)
                return r.branches.size === 0 ? (this._root = null,
                this._numLeafs = 0) : this._numLeafs--,
                !0;
            if (r.branches.size > 0)
                break;
            o = (i = r) === null || i === void 0 ? void 0 : i.branchKey,
            r = r.parent
        }
        for (; r !== n; r = r.parent)
            if (r == null)
                return !1;
        return this._numLeafs--,
        !0
    }
    clear() {
        this._numLeafs = 0,
        this._root = null
    }
    invalidCacheError() {
        const t = JS() ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache." : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
        throw ic(t + (this._name != null ? ` - ${this._name}` : "")),
        new Yf
    }
}
var t_ = {
    TreeCache: e_
}
  , n_ = t_.TreeCache
  , Im = Object.freeze({
    __proto__: null,
    TreeCache: n_
});
class r_ {
    constructor(t) {
        var n;
        ie(this, "_maxSize", void 0),
        ie(this, "_size", void 0),
        ie(this, "_head", void 0),
        ie(this, "_tail", void 0),
        ie(this, "_map", void 0),
        ie(this, "_keyMapper", void 0),
        this._maxSize = t.maxSize,
        this._size = 0,
        this._head = null,
        this._tail = null,
        this._map = new Map,
        this._keyMapper = (n = t.mapKey) !== null && n !== void 0 ? n : r => r
    }
    head() {
        return this._head
    }
    tail() {
        return this._tail
    }
    size() {
        return this._size
    }
    maxSize() {
        return this._maxSize
    }
    has(t) {
        return this._map.has(this._keyMapper(t))
    }
    get(t) {
        const n = this._keyMapper(t)
          , r = this._map.get(n);
        if (r)
            return this.set(t, r.value),
            r.value
    }
    set(t, n) {
        const r = this._keyMapper(t);
        this._map.get(r) && this.delete(t);
        const i = this.head()
          , l = {
            key: t,
            right: i,
            left: null,
            value: n
        };
        i ? i.left = l : this._tail = l,
        this._map.set(r, l),
        this._head = l,
        this._size++,
        this._maybeDeleteLRU()
    }
    _maybeDeleteLRU() {
        this.size() > this.maxSize() && this.deleteLru()
    }
    deleteLru() {
        const t = this.tail();
        t && this.delete(t.key)
    }
    delete(t) {
        const n = this._keyMapper(t);
        if (!this._size || !this._map.has(n))
            return;
        const r = Ne(this._map.get(n))
          , o = r.right
          , i = r.left;
        o && (o.left = r.left),
        i && (i.right = r.right),
        r === this.head() && (this._head = o),
        r === this.tail() && (this._tail = i),
        this._map.delete(n),
        this._size--
    }
    clear() {
        this._size = 0,
        this._head = null,
        this._tail = null,
        this._map = new Map
    }
}
var o_ = {
    LRUCache: r_
}
  , i_ = o_.LRUCache
  , $m = Object.freeze({
    __proto__: null,
    LRUCache: i_
});
const {LRUCache: l_} = $m
  , {TreeCache: a_} = Im;
function s_({name: e, maxSize: t, mapNodeValue: n=r => r}) {
    const r = new l_({
        maxSize: t
    })
      , o = new a_({
        name: e,
        mapNodeValue: n,
        onHit: i => {
            r.set(i, !0)
        }
        ,
        onSet: i => {
            const l = r.tail();
            r.set(i, !0),
            l && o.size() > t && o.delete(l.key)
        }
    });
    return o
}
var Xf = s_;
function xt(e, t, n) {
    if (typeof e == "string" && !e.includes('"') && !e.includes("\\"))
        return `"${e}"`;
    switch (typeof e) {
    case "undefined":
        return "";
    case "boolean":
        return e ? "true" : "false";
    case "number":
    case "symbol":
        return String(e);
    case "string":
        return JSON.stringify(e);
    case "function":
        if ((t == null ? void 0 : t.allowFunctions) !== !0)
            throw se("Attempt to serialize function in a Recoil cache key");
        return `__FUNCTION(${e.name})__`
    }
    if (e === null)
        return "null";
    if (typeof e != "object") {
        var r;
        return (r = JSON.stringify(e)) !== null && r !== void 0 ? r : ""
    }
    if (be(e))
        return "__PROMISE__";
    if (Array.isArray(e))
        return `[${e.map( (o, i) => xt(o, t, i.toString()))}]`;
    if (typeof e.toJSON == "function")
        return xt(e.toJSON(n), t, n);
    if (e instanceof Map) {
        const o = {};
        for (const [i,l] of e)
            o[typeof i == "string" ? i : xt(i, t)] = l;
        return xt(o, t, n)
    }
    return e instanceof Set ? xt(Array.from(e).sort( (o, i) => xt(o, t).localeCompare(xt(i, t))), t, n) : Symbol !== void 0 && e[Symbol.iterator] != null && typeof e[Symbol.iterator] == "function" ? xt(Array.from(e), t, n) : `{${Object.keys(e).filter(o => e[o] !== void 0).sort().map(o => `${xt(o, t)}:${xt(e[o], t, o)}`).join(",")}}`
}
function u_(e, t={
    allowFunctions: !1
}) {
    return xt(e, t)
}
var ia = u_;
const {TreeCache: c_} = Im
  , Ei = {
    equality: "reference",
    eviction: "keep-all",
    maxSize: 1 / 0
};
function f_({equality: e=Ei.equality, eviction: t=Ei.eviction, maxSize: n=Ei.maxSize}=Ei, r) {
    const o = d_(e);
    return p_(t, n, o, r)
}
function d_(e) {
    switch (e) {
    case "reference":
        return t => t;
    case "value":
        return t => ia(t)
    }
    throw se(`Unrecognized equality policy ${e}`)
}
function p_(e, t, n, r) {
    switch (e) {
    case "keep-all":
        return new c_({
            name: r,
            mapNodeValue: n
        });
    case "lru":
        return Xf({
            name: r,
            maxSize: Ne(t),
            mapNodeValue: n
        });
    case "most-recent":
        return Xf({
            name: r,
            maxSize: 1,
            mapNodeValue: n
        })
    }
    throw se(`Unrecognized eviction policy ${e}`)
}
var h_ = f_;
function m_(e) {
    return () => null
}
var g_ = {
    startPerfBlock: m_
};
const {isLoadable: v_, loadableWithError: Ri, loadableWithPromise: y_, loadableWithValue: Ya} = Zo
  , {WrappedValue: Dm} = Mm
  , {getNodeLoadable: bi, peekNodeLoadable: w_, setNodeValue: S_} = Cn
  , {saveDepsToStore: __} = Jo
  , {DEFAULT_VALUE: k_, getConfigDeletionHandler: x_, getNode: E_, registerNode: Zf} = at
  , {isRecoilValue: R_} = Or
  , {markRecoilValueModified: qf} = It
  , {retainedByOptionWithDefault: b_} = er
  , {recoilCallback: C_} = Am
  , {startPerfBlock: T_} = g_;
class zm {
}
const io = new zm
  , lo = []
  , Ci = new Map
  , N_ = ( () => {
    let e = 0;
    return () => e++
}
)();
function Vm(e) {
    let t = null;
    const {key: n, get: r, cachePolicy_UNSTABLE: o} = e
      , i = e.set != null ? e.set : void 0
      , l = new Set
      , s = h_(o ?? {
        equality: "reference",
        eviction: "keep-all"
    }, n)
      , a = b_(e.retainedBy_UNSTABLE)
      , u = new Map;
    let c = 0;
    function f() {
        return !Se("recoil_memory_managament_2020") || c > 0
    }
    function m(E) {
        return E.getState().knownSelectors.add(n),
        c++,
        () => {
            c--
        }
    }
    function x() {
        return x_(n) !== void 0 && !f()
    }
    function y(E, A, M, Y, W) {
        he(A, Y, W),
        R(E, M)
    }
    function R(E, A) {
        ee(E, A) && re(E),
        v(A, !0)
    }
    function O(E, A) {
        ee(E, A) && (Ne(B(E)).stateVersions.clear(),
        v(A, !1))
    }
    function v(E, A) {
        const M = Ci.get(E);
        if (M != null) {
            for (const Y of M)
                qf(Y, Ne(t));
            A && Ci.delete(E)
        }
    }
    function p(E, A) {
        let M = Ci.get(A);
        M == null && Ci.set(A, M = new Set),
        M.add(E)
    }
    function g(E, A, M, Y, W, J) {
        return A.then(te => {
            if (!f())
                throw re(E),
                io;
            const X = Ya(te);
            return y(E, M, W, X, Y),
            te
        }
        ).catch(te => {
            if (!f())
                throw re(E),
                io;
            if (be(te))
                return T(E, te, M, Y, W, J);
            const X = Ri(te);
            throw y(E, M, W, X, Y),
            te
        }
        )
    }
    function T(E, A, M, Y, W, J) {
        return A.then(te => {
            if (!f())
                throw re(E),
                io;
            J.loadingDepKey != null && J.loadingDepPromise === A ? M.atomValues.set(J.loadingDepKey, Ya(te)) : E.getState().knownSelectors.forEach(ae => {
                M.atomValues.delete(ae)
            }
            );
            const X = j(E, M);
            if (X && X.state !== "loading") {
                if ((ee(E, W) || B(E) == null) && R(E, W),
                X.state === "hasValue")
                    return X.contents;
                throw X.contents
            }
            if (!ee(E, W)) {
                const ae = K(E, M);
                if (ae != null)
                    return ae.loadingLoadable.contents
            }
            const [ge,pe] = P(E, M, W);
            if (ge.state !== "loading" && y(E, M, W, ge, pe),
            ge.state === "hasError")
                throw ge.contents;
            return ge.contents
        }
        ).catch(te => {
            if (te instanceof zm)
                throw io;
            if (!f())
                throw re(E),
                io;
            const X = Ri(te);
            throw y(E, M, W, X, Y),
            te
        }
        )
    }
    function N(E, A, M, Y) {
        var W, J, te, X;
        if (ee(E, Y) || A.version === ((W = E.getState()) === null || W === void 0 || (J = W.currentTree) === null || J === void 0 ? void 0 : J.version) || A.version === ((te = E.getState()) === null || te === void 0 || (X = te.nextTree) === null || X === void 0 ? void 0 : X.version)) {
            var ge, pe, ae;
            __(n, M, E, (ge = (pe = E.getState()) === null || pe === void 0 || (ae = pe.nextTree) === null || ae === void 0 ? void 0 : ae.version) !== null && ge !== void 0 ? ge : E.getState().currentTree.version)
        }
        for (const ce of M)
            l.add(ce)
    }
    function P(E, A, M) {
        const Y = T_(n);
        let W = !0
          , J = !0;
        const te = () => {
            Y(),
            J = !1
        }
        ;
        let X, ge = !1, pe;
        const ae = {
            loadingDepKey: null,
            loadingDepPromise: null
        }
          , ce = new Map;
        function st({key: et}) {
            const He = bi(E, A, et);
            switch (ce.set(et, He),
            W || (N(E, A, new Set(ce.keys()), M),
            O(E, M)),
            He.state) {
            case "hasValue":
                return He.contents;
            case "hasError":
                throw He.contents;
            case "loading":
                throw ae.loadingDepKey = et,
                ae.loadingDepPromise = He.contents,
                He.contents
            }
            throw se("Invalid Loadable state")
        }
        const Dt = et => (...He) => {
            if (J)
                throw se("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");
            return t == null && po(!1),
            C_(E, et, He, {
                node: t
            })
        }
        ;
        try {
            X = r({
                get: st,
                getCallback: Dt
            }),
            X = R_(X) ? st(X) : X,
            v_(X) && (X.state === "hasError" && (ge = !0),
            X = X.contents),
            be(X) ? X = g(E, X, A, ce, M, ae).finally(te) : te(),
            X = X instanceof Dm ? X.value : X
        } catch (et) {
            X = et,
            be(X) ? X = T(E, X, A, ce, M, ae).finally(te) : (ge = !0,
            te())
        }
        return ge ? pe = Ri(X) : be(X) ? pe = y_(X) : pe = Ya(X),
        W = !1,
        le(E, M, ce),
        N(E, A, new Set(ce.keys()), M),
        [pe, ce]
    }
    function j(E, A) {
        let M = A.atomValues.get(n);
        if (M != null)
            return M;
        const Y = new Set;
        try {
            M = s.get(J => (typeof J != "string" && po(!1),
            bi(E, A, J).contents), {
                onNodeVisit: J => {
                    J.type === "branch" && J.nodeKey !== n && Y.add(J.nodeKey)
                }
            })
        } catch (J) {
            throw se(`Problem with cache lookup for selector "${n}": ${J.message}`)
        }
        if (M) {
            var W;
            A.atomValues.set(n, M),
            N(E, A, Y, (W = B(E)) === null || W === void 0 ? void 0 : W.executionID)
        }
        return M
    }
    function L(E, A) {
        const M = j(E, A);
        if (M != null)
            return re(E),
            M;
        const Y = K(E, A);
        if (Y != null) {
            var W;
            return ((W = Y.loadingLoadable) === null || W === void 0 ? void 0 : W.state) === "loading" && p(E, Y.executionID),
            Y.loadingLoadable
        }
        const J = N_()
          , [te,X] = P(E, A, J);
        return te.state === "loading" ? (q(E, J, te, X, A),
        p(E, J)) : (re(E),
        he(A, te, X)),
        te
    }
    function K(E, A) {
        const M = sm([u.has(E) ? [Ne(u.get(E))] : [], Gl(cc(u, ([W]) => W !== E), ([,W]) => W)]);
        function Y(W) {
            for (const [J,te] of W)
                if (!bi(E, A, J).is(te))
                    return !0;
            return !1
        }
        for (const W of M) {
            if (W.stateVersions.get(A.version) || !Y(W.depValuesDiscoveredSoFarDuringAsyncWork))
                return W.stateVersions.set(A.version, !0),
                W;
            W.stateVersions.set(A.version, !1)
        }
    }
    function B(E) {
        return u.get(E)
    }
    function q(E, A, M, Y, W) {
        u.set(E, {
            depValuesDiscoveredSoFarDuringAsyncWork: Y,
            executionID: A,
            loadingLoadable: M,
            stateVersions: new Map([[W.version, !0]])
        })
    }
    function le(E, A, M) {
        if (ee(E, A)) {
            const Y = B(E);
            Y != null && (Y.depValuesDiscoveredSoFarDuringAsyncWork = M)
        }
    }
    function re(E) {
        u.delete(E)
    }
    function ee(E, A) {
        var M;
        return A === ((M = B(E)) === null || M === void 0 ? void 0 : M.executionID)
    }
    function _e(E) {
        return Array.from(E.entries()).map( ([A,M]) => [A, M.contents])
    }
    function he(E, A, M) {
        E.atomValues.set(n, A);
        try {
            s.set(_e(M), A)
        } catch (Y) {
            throw se(`Problem with setting cache for selector "${n}": ${Y.message}`)
        }
    }
    function ke(E) {
        if (lo.includes(n)) {
            const A = `Recoil selector has circular dependencies: ${lo.slice(lo.indexOf(n)).join(" → ")}`;
            return Ri(se(A))
        }
        lo.push(n);
        try {
            return E()
        } finally {
            lo.pop()
        }
    }
    function F(E, A) {
        const M = A.atomValues.get(n);
        return M ?? s.get(Y => {
            var W;
            return typeof Y != "string" && po(!1),
            (W = w_(E, A, Y)) === null || W === void 0 ? void 0 : W.contents
        }
        )
    }
    function Q(E, A) {
        return ke( () => L(E, A))
    }
    function V(E) {
        E.atomValues.delete(n)
    }
    function H(E, A) {
        t == null && po(!1);
        for (const Y of l) {
            var M;
            const W = E_(Y);
            (M = W.clearCache) === null || M === void 0 || M.call(W, E, A)
        }
        l.clear(),
        V(A),
        s.clear(),
        qf(E, t)
    }
    return i != null ? t = Zf({
        key: n,
        nodeType: "selector",
        peek: F,
        get: Q,
        set: (A, M, Y) => {
            let W = !1;
            const J = new Map;
            function te({key: ae}) {
                if (W)
                    throw se("Recoil: Async selector sets are not currently supported.");
                const ce = bi(A, M, ae);
                if (ce.state === "hasValue")
                    return ce.contents;
                if (ce.state === "loading") {
                    const st = `Getting value of asynchronous atom or selector "${ae}" in a pending state while setting selector "${n}" is not yet supported.`;
                    throw se(st)
                } else
                    throw ce.contents
            }
            function X(ae, ce) {
                if (W)
                    throw se("Recoil: Async selector sets are not currently supported.");
                const st = typeof ce == "function" ? ce(te(ae)) : ce;
                S_(A, M, ae.key, st).forEach( (et, He) => J.set(He, et))
            }
            function ge(ae) {
                X(ae, k_)
            }
            const pe = i({
                set: X,
                get: te,
                reset: ge
            }, Y);
            if (pe !== void 0)
                throw be(pe) ? se("Recoil: Async selector sets are not currently supported.") : se("Recoil: selector set should be a void function.");
            return W = !0,
            J
        }
        ,
        init: m,
        invalidate: V,
        clearCache: H,
        shouldDeleteConfigOnRelease: x,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: a
    }) : t = Zf({
        key: n,
        nodeType: "selector",
        peek: F,
        get: Q,
        init: m,
        invalidate: V,
        clearCache: H,
        shouldDeleteConfigOnRelease: x,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: a
    })
}
Vm.value = e => new Dm(e);
var Ir = Vm;
const {isLoadable: L_, loadableWithError: Xa, loadableWithPromise: Za, loadableWithValue: ir} = Zo
  , {WrappedValue: Fm} = Mm
  , {peekNodeInfo: P_} = Cn
  , {DEFAULT_VALUE: $n, DefaultValue: an, getConfigDeletionHandler: Bm, registerNode: j_, setConfigDeletionHandler: O_} = at
  , {isRecoilValue: A_} = Or
  , {getRecoilValueAsLoadable: M_, markRecoilValueModified: I_, setRecoilValue: Jf, setRecoilValueLoadable: $_} = It
  , {retainedByOptionWithDefault: D_} = er
  , ao = e => e instanceof Fm ? e.value : e;
function z_(e) {
    const {key: t, persistence_UNSTABLE: n} = e
      , r = D_(e.retainedBy_UNSTABLE);
    let o = 0;
    function i(p) {
        return Za(p.then(g => (l = ir(g),
        g)).catch(g => {
            throw l = Xa(g),
            g
        }
        ))
    }
    let l = be(e.default) ? i(e.default) : L_(e.default) ? e.default.state === "loading" ? i(e.default.contents) : e.default : ir(ao(e.default));
    l.contents;
    let s;
    const a = new Map;
    function u(p) {
        return p
    }
    function c(p, g) {
        const T = g.then(N => {
            var P, j;
            return ((j = ((P = p.getState().nextTree) !== null && P !== void 0 ? P : p.getState().currentTree).atomValues.get(t)) === null || j === void 0 ? void 0 : j.contents) === T && Jf(p, v, N),
            N
        }
        ).catch(N => {
            var P, j;
            throw ((j = ((P = p.getState().nextTree) !== null && P !== void 0 ? P : p.getState().currentTree).atomValues.get(t)) === null || j === void 0 ? void 0 : j.contents) === T && $_(p, v, Xa(N)),
            N
        }
        );
        return T
    }
    function f(p, g, T) {
        var N;
        o++;
        const P = () => {
            var B;
            o--,
            (B = a.get(p)) === null || B === void 0 || B.forEach(q => q()),
            a.delete(p)
        }
        ;
        if (p.getState().knownAtoms.add(t),
        l.state === "loading") {
            const B = () => {
                var q;
                ((q = p.getState().nextTree) !== null && q !== void 0 ? q : p.getState().currentTree).atomValues.has(t) || I_(p, v)
            }
            ;
            l.contents.finally(B)
        }
        const j = (N = e.effects) !== null && N !== void 0 ? N : e.effects_UNSTABLE;
        if (j != null) {
            let B = function(V) {
                if (ee && V.key === t) {
                    const H = re;
                    return H instanceof an ? m(p, g) : be(H) ? Za(H.then(E => E instanceof an ? l.toPromise() : E)) : ir(H)
                }
                return M_(p, V)
            }
              , q = function(V) {
                return B(V).toPromise()
            }
              , le = function(V) {
                var H;
                const E = P_(p, (H = p.getState().nextTree) !== null && H !== void 0 ? H : p.getState().currentTree, V.key);
                return ee && V.key === t && !(re instanceof an) ? {
                    ...E,
                    isSet: !0,
                    loadable: B(V)
                } : E
            }
              , re = $n
              , ee = !0
              , _e = !1
              , he = null;
            const ke = V => H => {
                if (ee) {
                    const E = B(v)
                      , A = E.state === "hasValue" ? E.contents : $n;
                    re = typeof H == "function" ? H(A) : H,
                    be(re) && (re = re.then(M => (he = {
                        effect: V,
                        value: M
                    },
                    M)))
                } else {
                    if (be(H))
                        throw se("Setting atoms to async values is not implemented.");
                    typeof H != "function" && (he = {
                        effect: V,
                        value: ao(H)
                    }),
                    Jf(p, v, typeof H == "function" ? E => {
                        const A = ao(H(E));
                        return he = {
                            effect: V,
                            value: A
                        },
                        A
                    }
                    : ao(H))
                }
            }
              , F = V => () => ke(V)($n)
              , Q = V => H => {
                var E;
                const {release: A} = p.subscribeToTransactions(M => {
                    var Y;
                    let {currentTree: W, previousTree: J} = M.getState();
                    J || (J = W);
                    const te = (Y = W.atomValues.get(t)) !== null && Y !== void 0 ? Y : l;
                    if (te.state === "hasValue") {
                        var X, ge, pe, ae;
                        const ce = te.contents
                          , st = (X = J.atomValues.get(t)) !== null && X !== void 0 ? X : l
                          , Dt = st.state === "hasValue" ? st.contents : $n;
                        ((ge = he) === null || ge === void 0 ? void 0 : ge.effect) !== V || ((pe = he) === null || pe === void 0 ? void 0 : pe.value) !== ce ? H(ce, Dt, !W.atomValues.has(t)) : ((ae = he) === null || ae === void 0 ? void 0 : ae.effect) === V && (he = null)
                    }
                }
                , t);
                a.set(p, [...(E = a.get(p)) !== null && E !== void 0 ? E : [], A])
            }
            ;
            for (const V of j)
                try {
                    const H = V({
                        node: v,
                        storeID: p.storeID,
                        parentStoreID_UNSTABLE: p.parentStoreID,
                        trigger: T,
                        setSelf: ke(V),
                        resetSelf: F(V),
                        onSet: Q(V),
                        getPromise: q,
                        getLoadable: B,
                        getInfo_UNSTABLE: le
                    });
                    if (H != null) {
                        var L;
                        a.set(p, [...(L = a.get(p)) !== null && L !== void 0 ? L : [], H])
                    }
                } catch (H) {
                    re = H,
                    _e = !0
                }
            if (ee = !1,
            !(re instanceof an)) {
                var K;
                const V = _e ? Xa(re) : be(re) ? Za(c(p, re)) : ir(ao(re));
                V.contents,
                g.atomValues.set(t, V),
                (K = p.getState().nextTree) === null || K === void 0 || K.atomValues.set(t, V)
            }
        }
        return P
    }
    function m(p, g) {
        var T, N;
        return (T = (N = g.atomValues.get(t)) !== null && N !== void 0 ? N : s) !== null && T !== void 0 ? T : l
    }
    function x(p, g) {
        if (g.atomValues.has(t))
            return Ne(g.atomValues.get(t));
        if (g.nonvalidatedAtoms.has(t)) {
            if (s != null)
                return s;
            if (n == null)
                return l;
            const T = g.nonvalidatedAtoms.get(t)
              , N = n.validator(T, $n);
            return s = N instanceof an ? l : ir(N),
            s
        } else
            return l
    }
    function y() {
        s = void 0
    }
    function R(p, g, T) {
        if (g.atomValues.has(t)) {
            const N = Ne(g.atomValues.get(t));
            if (N.state === "hasValue" && T === N.contents)
                return new Map
        } else if (!g.nonvalidatedAtoms.has(t) && T instanceof an)
            return new Map;
        return s = void 0,
        new Map().set(t, ir(T))
    }
    function O() {
        return Bm(t) !== void 0 && o <= 0
    }
    const v = j_({
        key: t,
        nodeType: "atom",
        peek: m,
        get: x,
        set: R,
        init: f,
        invalidate: y,
        shouldDeleteConfigOnRelease: O,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        persistence_UNSTABLE: e.persistence_UNSTABLE ? {
            type: e.persistence_UNSTABLE.type,
            backButton: e.persistence_UNSTABLE.backButton
        } : void 0,
        shouldRestoreFromSnapshots: !0,
        retainedBy: r
    });
    return v
}
function Sc(e) {
    const {...t} = e
      , n = "default"in e ? e.default : new Promise( () => {}
    );
    return A_(n) ? V_({
        ...t,
        default: n
    }) : z_({
        ...t,
        default: n
    })
}
function V_(e) {
    const t = Sc({
        ...e,
        default: $n,
        persistence_UNSTABLE: e.persistence_UNSTABLE === void 0 ? void 0 : {
            ...e.persistence_UNSTABLE,
            validator: r => r instanceof an ? r : Ne(e.persistence_UNSTABLE).validator(r, $n)
        },
        effects: e.effects,
        effects_UNSTABLE: e.effects_UNSTABLE
    })
      , n = Ir({
        key: `${e.key}__withFallback`,
        get: ({get: r}) => {
            const o = r(t);
            return o instanceof an ? e.default : o
        }
        ,
        set: ({set: r}, o) => r(t, o),
        cachePolicy_UNSTABLE: {
            eviction: "most-recent"
        },
        dangerouslyAllowMutability: e.dangerouslyAllowMutability
    });
    return O_(n.key, Bm(e.key)),
    n
}
Sc.value = e => new Fm(e);
var Um = Sc;
class F_ {
    constructor(t) {
        var n;
        ie(this, "_map", void 0),
        ie(this, "_keyMapper", void 0),
        this._map = new Map,
        this._keyMapper = (n = t == null ? void 0 : t.mapKey) !== null && n !== void 0 ? n : r => r
    }
    size() {
        return this._map.size
    }
    has(t) {
        return this._map.has(this._keyMapper(t))
    }
    get(t) {
        return this._map.get(this._keyMapper(t))
    }
    set(t, n) {
        this._map.set(this._keyMapper(t), n)
    }
    delete(t) {
        this._map.delete(this._keyMapper(t))
    }
    clear() {
        this._map.clear()
    }
}
var B_ = {
    MapCache: F_
}
  , U_ = B_.MapCache
  , W_ = Object.freeze({
    __proto__: null,
    MapCache: U_
});
const {LRUCache: ed} = $m
  , {MapCache: H_} = W_
  , Ti = {
    equality: "reference",
    eviction: "none",
    maxSize: 1 / 0
};
function G_({equality: e=Ti.equality, eviction: t=Ti.eviction, maxSize: n=Ti.maxSize}=Ti) {
    const r = K_(e);
    return Q_(t, n, r)
}
function K_(e) {
    switch (e) {
    case "reference":
        return t => t;
    case "value":
        return t => ia(t)
    }
    throw se(`Unrecognized equality policy ${e}`)
}
function Q_(e, t, n) {
    switch (e) {
    case "keep-all":
        return new H_({
            mapKey: n
        });
    case "lru":
        return new ed({
            mapKey: n,
            maxSize: Ne(t)
        });
    case "most-recent":
        return new ed({
            mapKey: n,
            maxSize: 1
        })
    }
    throw se(`Unrecognized eviction policy ${e}`)
}
var Wm = G_;
const {setConfigDeletionHandler: Y_} = at;
function X_(e) {
    var t, n;
    const r = Wm({
        equality: (t = (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0 ? void 0 : n.equality) !== null && t !== void 0 ? t : "value",
        eviction: "keep-all"
    });
    return o => {
        var i, l;
        const s = r.get(o);
        if (s != null)
            return s;
        const {cachePolicyForParams_UNSTABLE: a, ...u} = e
          , c = "default"in e ? e.default : new Promise( () => {}
        )
          , f = Um({
            ...u,
            key: `${e.key}__${(i = ia(o)) !== null && i !== void 0 ? i : "void"}`,
            default: typeof c == "function" ? c(o) : c,
            retainedBy_UNSTABLE: typeof e.retainedBy_UNSTABLE == "function" ? e.retainedBy_UNSTABLE(o) : e.retainedBy_UNSTABLE,
            effects: typeof e.effects == "function" ? e.effects(o) : typeof e.effects_UNSTABLE == "function" ? e.effects_UNSTABLE(o) : (l = e.effects) !== null && l !== void 0 ? l : e.effects_UNSTABLE
        });
        return r.set(o, f),
        Y_(f.key, () => {
            r.delete(o)
        }
        ),
        f
    }
}
var Z_ = X_;
const {setConfigDeletionHandler: q_} = at;
let J_ = 0;
function e3(e) {
    var t, n;
    const r = Wm({
        equality: (t = (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0 ? void 0 : n.equality) !== null && t !== void 0 ? t : "value",
        eviction: "keep-all"
    });
    return o => {
        var i;
        let l;
        try {
            l = r.get(o)
        } catch (m) {
            throw se(`Problem with cache lookup for selector ${e.key}: ${m.message}`)
        }
        if (l != null)
            return l;
        const s = `${e.key}__selectorFamily/${(i = ia(o, {
            allowFunctions: !0
        })) !== null && i !== void 0 ? i : "void"}/${J_++}`
          , a = m => e.get(o)(m)
          , u = e.cachePolicy_UNSTABLE
          , c = typeof e.retainedBy_UNSTABLE == "function" ? e.retainedBy_UNSTABLE(o) : e.retainedBy_UNSTABLE;
        let f;
        if (e.set != null) {
            const m = e.set;
            f = Ir({
                key: s,
                get: a,
                set: (y, R) => m(o)(y, R),
                cachePolicy_UNSTABLE: u,
                dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                retainedBy_UNSTABLE: c
            })
        } else
            f = Ir({
                key: s,
                get: a,
                cachePolicy_UNSTABLE: u,
                dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                retainedBy_UNSTABLE: c
            });
        return r.set(o, f),
        q_(f.key, () => {
            r.delete(o)
        }
        ),
        f
    }
}
var Tn = e3;
const t3 = Tn({
    key: "__constant",
    get: e => () => e,
    cachePolicyForParams_UNSTABLE: {
        equality: "reference"
    }
});
function n3(e) {
    return t3(e)
}
var r3 = n3;
const o3 = Tn({
    key: "__error",
    get: e => () => {
        throw se(e)
    }
    ,
    cachePolicyForParams_UNSTABLE: {
        equality: "reference"
    }
});
function i3(e) {
    return o3(e)
}
var l3 = i3;
function a3(e) {
    return e
}
var s3 = a3;
const {loadableWithError: Hm, loadableWithPromise: Gm, loadableWithValue: Km} = Zo;
function la(e, t) {
    const n = Array(t.length).fill(void 0)
      , r = Array(t.length).fill(void 0);
    for (const [o,i] of t.entries())
        try {
            n[o] = e(i)
        } catch (l) {
            r[o] = l
        }
    return [n, r]
}
function u3(e) {
    return e != null && !be(e)
}
function aa(e) {
    return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map(t => e[t])
}
function tu(e, t) {
    return Array.isArray(e) ? t : Object.getOwnPropertyNames(e).reduce( (n, r, o) => ({
        ...n,
        [r]: t[o]
    }), {})
}
function Er(e, t, n) {
    const r = n.map( (o, i) => o == null ? Km(t[i]) : be(o) ? Gm(o) : Hm(o));
    return tu(e, r)
}
function c3(e, t) {
    return t.map( (n, r) => n === void 0 ? e[r] : n)
}
const f3 = Tn({
    key: "__waitForNone",
    get: e => ({get: t}) => {
        const n = aa(e)
          , [r,o] = la(t, n);
        return Er(e, r, o)
    }
    ,
    dangerouslyAllowMutability: !0
})
  , d3 = Tn({
    key: "__waitForAny",
    get: e => ({get: t}) => {
        const n = aa(e)
          , [r,o] = la(t, n);
        return o.some(i => !be(i)) ? Er(e, r, o) : new Promise(i => {
            for (const [l,s] of o.entries())
                be(s) && s.then(a => {
                    r[l] = a,
                    o[l] = void 0,
                    i(Er(e, r, o))
                }
                ).catch(a => {
                    o[l] = a,
                    i(Er(e, r, o))
                }
                )
        }
        )
    }
    ,
    dangerouslyAllowMutability: !0
})
  , p3 = Tn({
    key: "__waitForAll",
    get: e => ({get: t}) => {
        const n = aa(e)
          , [r,o] = la(t, n);
        if (o.every(l => l == null))
            return tu(e, r);
        const i = o.find(u3);
        if (i != null)
            throw i;
        return Promise.all(o).then(l => tu(e, c3(r, l)))
    }
    ,
    dangerouslyAllowMutability: !0
})
  , h3 = Tn({
    key: "__waitForAllSettled",
    get: e => ({get: t}) => {
        const n = aa(e)
          , [r,o] = la(t, n);
        return o.every(i => !be(i)) ? Er(e, r, o) : Promise.all(o.map( (i, l) => be(i) ? i.then(s => {
            r[l] = s,
            o[l] = void 0
        }
        ).catch(s => {
            r[l] = void 0,
            o[l] = s
        }
        ) : null)).then( () => Er(e, r, o))
    }
    ,
    dangerouslyAllowMutability: !0
})
  , m3 = Tn({
    key: "__noWait",
    get: e => ({get: t}) => {
        try {
            return Ir.value(Km(t(e)))
        } catch (n) {
            return Ir.value(be(n) ? Gm(n) : Hm(n))
        }
    }
    ,
    dangerouslyAllowMutability: !0
});
var g3 = {
    waitForNone: f3,
    waitForAny: d3,
    waitForAll: p3,
    waitForAllSettled: h3,
    noWait: m3
};
const {RecoilLoadable: v3} = Zo
  , {DefaultValue: y3} = at
  , {RecoilRoot: w3, useRecoilStoreID: S3} = qt
  , {isRecoilValue: _3} = Or
  , {retentionZone: k3} = Ql
  , {freshSnapshot: x3} = ea
  , {useRecoilState: E3, useRecoilState_TRANSITION_SUPPORT_UNSTABLE: R3, useRecoilStateLoadable: b3, useRecoilValue: C3, useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: T3, useRecoilValueLoadable: N3, useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: L3, useResetRecoilState: P3, useSetRecoilState: j3} = B2
  , {useGotoRecoilSnapshot: O3, useRecoilSnapshot: A3, useRecoilTransactionObserver: M3} = Lm
  , {useRecoilCallback: I3} = Am
  , {noWait: $3, waitForAll: D3, waitForAllSettled: z3, waitForAny: V3, waitForNone: F3} = g3;
var sa = {
    DefaultValue: y3,
    isRecoilValue: _3,
    RecoilLoadable: v3,
    RecoilEnv: Fr,
    RecoilRoot: w3,
    useRecoilStoreID: S3,
    useRecoilBridgeAcrossReactRoots_UNSTABLE: mS,
    atom: Um,
    selector: Ir,
    atomFamily: Z_,
    selectorFamily: Tn,
    constSelector: r3,
    errorSelector: l3,
    readOnlySelector: s3,
    noWait: $3,
    waitForNone: F3,
    waitForAny: V3,
    waitForAll: D3,
    waitForAllSettled: z3,
    useRecoilValue: C3,
    useRecoilValueLoadable: N3,
    useRecoilState: E3,
    useRecoilStateLoadable: b3,
    useSetRecoilState: j3,
    useResetRecoilState: P3,
    useGetRecoilValueInfo_UNSTABLE: uS,
    useRecoilRefresher_UNSTABLE: WS,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: L3,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: T3,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: R3,
    useRecoilCallback: I3,
    useRecoilTransaction_UNSTABLE: YS,
    useGotoRecoilSnapshot: O3,
    useRecoilSnapshot: A3,
    useRecoilTransactionObserver_UNSTABLE: M3,
    snapshot_UNSTABLE: x3,
    useRetain: mc,
    retentionZone: k3
}
  , B3 = sa.RecoilRoot
  , U3 = sa.atom
  , W3 = sa.useRecoilValue
  , H3 = sa.useSetRecoilState;
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Uo() {
    return Uo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Uo.apply(this, arguments)
}
var dn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(dn || (dn = {}));
const td = "popstate";
function G3(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let {pathname: i, search: l, hash: s} = r.location;
        return nu("", {
            pathname: i,
            search: l,
            hash: s
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function n(r, o) {
        return typeof o == "string" ? o : wl(o)
    }
    return Q3(t, n, null, e)
}
function Me(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Qm(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function K3() {
    return Math.random().toString(36).substr(2, 8)
}
function nd(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function nu(e, t, n, r) {
    return n === void 0 && (n = null),
    Uo({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? Ur(t) : t, {
        state: n,
        key: t && t.key || r || K3()
    })
}
function wl(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Ur(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function Q3(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: o=document.defaultView, v5Compat: i=!1} = r
      , l = o.history
      , s = dn.Pop
      , a = null
      , u = c();
    u == null && (u = 0,
    l.replaceState(Uo({}, l.state, {
        idx: u
    }), ""));
    function c() {
        return (l.state || {
            idx: null
        }).idx
    }
    function f() {
        s = dn.Pop;
        let O = c()
          , v = O == null ? null : O - u;
        u = O,
        a && a({
            action: s,
            location: R.location,
            delta: v
        })
    }
    function m(O, v) {
        s = dn.Push;
        let p = nu(R.location, O, v);
        u = c() + 1;
        let g = nd(p, u)
          , T = R.createHref(p);
        try {
            l.pushState(g, "", T)
        } catch (N) {
            if (N instanceof DOMException && N.name === "DataCloneError")
                throw N;
            o.location.assign(T)
        }
        i && a && a({
            action: s,
            location: R.location,
            delta: 1
        })
    }
    function x(O, v) {
        s = dn.Replace;
        let p = nu(R.location, O, v);
        u = c();
        let g = nd(p, u)
          , T = R.createHref(p);
        l.replaceState(g, "", T),
        i && a && a({
            action: s,
            location: R.location,
            delta: 0
        })
    }
    function y(O) {
        let v = o.location.origin !== "null" ? o.location.origin : o.location.href
          , p = typeof O == "string" ? O : wl(O);
        return p = p.replace(/ $/, "%20"),
        Me(v, "No window.location.(origin|href) available to create URL for href: " + p),
        new URL(p,v)
    }
    let R = {
        get action() {
            return s
        },
        get location() {
            return e(o, l)
        },
        listen(O) {
            if (a)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(td, f),
            a = O,
            () => {
                o.removeEventListener(td, f),
                a = null
            }
        },
        createHref(O) {
            return t(o, O)
        },
        createURL: y,
        encodeLocation(O) {
            let v = y(O);
            return {
                pathname: v.pathname,
                search: v.search,
                hash: v.hash
            }
        },
        push: m,
        replace: x,
        go(O) {
            return l.go(O)
        }
    };
    return R
}
var rd;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(rd || (rd = {}));
function Y3(e, t, n) {
    return n === void 0 && (n = "/"),
    X3(e, t, n, !1)
}
function X3(e, t, n, r) {
    let o = typeof t == "string" ? Ur(t) : t
      , i = $r(o.pathname || "/", n);
    if (i == null)
        return null;
    let l = Ym(e);
    Z3(l);
    let s = null;
    for (let a = 0; s == null && a < l.length; ++a) {
        let u = sk(i);
        s = lk(l[a], u, r)
    }
    return s
}
function Ym(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let o = (i, l, s) => {
        let a = {
            relativePath: s === void 0 ? i.path || "" : s,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: l,
            route: i
        };
        a.relativePath.startsWith("/") && (Me(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        a.relativePath = a.relativePath.slice(r.length));
        let u = _n([r, a.relativePath])
          , c = n.concat(a);
        i.children && i.children.length > 0 && (Me(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')),
        Ym(i.children, t, c, u)),
        !(i.path == null && !i.index) && t.push({
            path: u,
            score: ok(u, i.index),
            routesMeta: c
        })
    }
    ;
    return e.forEach( (i, l) => {
        var s;
        if (i.path === "" || !((s = i.path) != null && s.includes("?")))
            o(i, l);
        else
            for (let a of Xm(i.path))
                o(i, l, a)
    }
    ),
    t
}
function Xm(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , o = n.endsWith("?")
      , i = n.replace(/\?$/, "");
    if (r.length === 0)
        return o ? [i, ""] : [i];
    let l = Xm(r.join("/"))
      , s = [];
    return s.push(...l.map(a => a === "" ? i : [i, a].join("/"))),
    o && s.push(...l),
    s.map(a => e.startsWith("/") && a === "" ? "/" : a)
}
function Z3(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : ik(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const q3 = /^:[\w-]+$/
  , J3 = 3
  , ek = 2
  , tk = 1
  , nk = 10
  , rk = -2
  , od = e => e === "*";
function ok(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(od) && (r += rk),
    t && (r += ek),
    n.filter(o => !od(o)).reduce( (o, i) => o + (q3.test(i) ? J3 : i === "" ? tk : nk), r)
}
function ik(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function lk(e, t, n) {
    let {routesMeta: r} = e
      , o = {}
      , i = "/"
      , l = [];
    for (let s = 0; s < r.length; ++s) {
        let a = r[s]
          , u = s === r.length - 1
          , c = i === "/" ? t : t.slice(i.length) || "/"
          , f = Sl({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: u
        }, c)
          , m = a.route;
        if (!f && u && n && !r[r.length - 1].route.index && (f = Sl({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: !1
        }, c)),
        !f)
            return null;
        Object.assign(o, f.params),
        l.push({
            params: o,
            pathname: _n([i, f.pathname]),
            pathnameBase: dk(_n([i, f.pathnameBase])),
            route: m
        }),
        f.pathnameBase !== "/" && (i = _n([i, f.pathnameBase]))
    }
    return l
}
function Sl(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = ak(e.path, e.caseSensitive, e.end)
      , o = t.match(n);
    if (!o)
        return null;
    let i = o[0]
      , l = i.replace(/(.)\/+$/, "$1")
      , s = o.slice(1);
    return {
        params: r.reduce( (u, c, f) => {
            let {paramName: m, isOptional: x} = c;
            if (m === "*") {
                let R = s[f] || "";
                l = i.slice(0, i.length - R.length).replace(/(.)\/+$/, "$1")
            }
            const y = s[f];
            return x && !y ? u[m] = void 0 : u[m] = (y || "").replace(/%2F/g, "/"),
            u
        }
        , {}),
        pathname: i,
        pathnameBase: l,
        pattern: e
    }
}
function ak(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Qm(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (l, s, a) => (r.push({
        paramName: s,
        isOptional: a != null
    }),
    a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,t ? void 0 : "i"), r]
}
function sk(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return Qm(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function $r(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function uk(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: o=""} = typeof e == "string" ? Ur(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : ck(n, t) : t,
        search: pk(r),
        hash: hk(o)
    }
}
function ck(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(o => {
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function qa(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function fk(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function Zm(e, t) {
    let n = fk(e);
    return t ? n.map( (r, o) => o === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function qm(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string" ? o = Ur(e) : (o = Uo({}, e),
    Me(!o.pathname || !o.pathname.includes("?"), qa("?", "pathname", "search", o)),
    Me(!o.pathname || !o.pathname.includes("#"), qa("#", "pathname", "hash", o)),
    Me(!o.search || !o.search.includes("#"), qa("#", "search", "hash", o)));
    let i = e === "" || o.pathname === "", l = i ? "/" : o.pathname, s;
    if (l == null)
        s = n;
    else {
        let f = t.length - 1;
        if (!r && l.startsWith("..")) {
            let m = l.split("/");
            for (; m[0] === ".."; )
                m.shift(),
                f -= 1;
            o.pathname = m.join("/")
        }
        s = f >= 0 ? t[f] : "/"
    }
    let a = uk(o, s)
      , u = l && l !== "/" && l.endsWith("/")
      , c = (i || l === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (u || c) && (a.pathname += "/"),
    a
}
const _n = e => e.join("/").replace(/\/\/+/g, "/")
  , dk = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , pk = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , hk = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function mk(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const Jm = ["post", "put", "patch", "delete"];
new Set(Jm);
const gk = ["get", ...Jm];
new Set(gk);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Wo() {
    return Wo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Wo.apply(this, arguments)
}
const ua = $.createContext(null)
  , eg = $.createContext(null)
  , Nn = $.createContext(null)
  , ca = $.createContext(null)
  , Ln = $.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , tg = $.createContext(null);
function vk(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    ri() || Me(!1);
    let {basename: r, navigator: o} = $.useContext(Nn)
      , {hash: i, pathname: l, search: s} = da(e, {
        relative: n
    })
      , a = l;
    return r !== "/" && (a = l === "/" ? r : _n([r, l])),
    o.createHref({
        pathname: a,
        search: s,
        hash: i
    })
}
function ri() {
    return $.useContext(ca) != null
}
function Jt() {
    return ri() || Me(!1),
    $.useContext(ca).location
}
function ng(e) {
    $.useContext(Nn).static || $.useLayoutEffect(e)
}
function fa() {
    let {isDataRoute: e} = $.useContext(Ln);
    return e ? Pk() : yk()
}
function yk() {
    ri() || Me(!1);
    let e = $.useContext(ua)
      , {basename: t, future: n, navigator: r} = $.useContext(Nn)
      , {matches: o} = $.useContext(Ln)
      , {pathname: i} = Jt()
      , l = JSON.stringify(Zm(o, n.v7_relativeSplatPath))
      , s = $.useRef(!1);
    return ng( () => {
        s.current = !0
    }
    ),
    $.useCallback(function(u, c) {
        if (c === void 0 && (c = {}),
        !s.current)
            return;
        if (typeof u == "number") {
            r.go(u);
            return
        }
        let f = qm(u, JSON.parse(l), i, c.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : _n([t, f.pathname])),
        (c.replace ? r.replace : r.push)(f, c.state, c)
    }, [t, r, l, i, e])
}
function wk() {
    let {matches: e} = $.useContext(Ln)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function da(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = $.useContext(Nn)
      , {matches: o} = $.useContext(Ln)
      , {pathname: i} = Jt()
      , l = JSON.stringify(Zm(o, r.v7_relativeSplatPath));
    return $.useMemo( () => qm(e, JSON.parse(l), i, n === "path"), [e, l, i, n])
}
function Sk(e, t) {
    return _k(e, t)
}
function _k(e, t, n, r) {
    ri() || Me(!1);
    let {navigator: o} = $.useContext(Nn)
      , {matches: i} = $.useContext(Ln)
      , l = i[i.length - 1]
      , s = l ? l.params : {};
    l && l.pathname;
    let a = l ? l.pathnameBase : "/";
    l && l.route;
    let u = Jt(), c;
    if (t) {
        var f;
        let O = typeof t == "string" ? Ur(t) : t;
        a === "/" || (f = O.pathname) != null && f.startsWith(a) || Me(!1),
        c = O
    } else
        c = u;
    let m = c.pathname || "/"
      , x = m;
    if (a !== "/") {
        let O = a.replace(/^\//, "").split("/");
        x = "/" + m.replace(/^\//, "").split("/").slice(O.length).join("/")
    }
    let y = Y3(e, {
        pathname: x
    })
      , R = bk(y && y.map(O => Object.assign({}, O, {
        params: Object.assign({}, s, O.params),
        pathname: _n([a, o.encodeLocation ? o.encodeLocation(O.pathname).pathname : O.pathname]),
        pathnameBase: O.pathnameBase === "/" ? a : _n([a, o.encodeLocation ? o.encodeLocation(O.pathnameBase).pathname : O.pathnameBase])
    })), i, n, r);
    return t && R ? $.createElement(ca.Provider, {
        value: {
            location: Wo({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: dn.Pop
        }
    }, R) : R
}
function kk() {
    let e = Lk()
      , t = mk(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , o = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return $.createElement($.Fragment, null, $.createElement("h2", null, "Unexpected Application Error!"), $.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? $.createElement("pre", {
        style: o
    }, n) : null, null)
}
const xk = $.createElement(kk, null);
class Ek extends $.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? $.createElement(Ln.Provider, {
            value: this.props.routeContext
        }, $.createElement(tg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function Rk(e) {
    let {routeContext: t, match: n, children: r} = e
      , o = $.useContext(ua);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    $.createElement(Ln.Provider, {
        value: t
    }, r)
}
function bk(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var i;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let l = e
      , s = (o = n) == null ? void 0 : o.errors;
    if (s != null) {
        let c = l.findIndex(f => f.route.id && (s == null ? void 0 : s[f.route.id]) !== void 0);
        c >= 0 || Me(!1),
        l = l.slice(0, Math.min(l.length, c + 1))
    }
    let a = !1
      , u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < l.length; c++) {
            let f = l[c];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
            f.route.id) {
                let {loaderData: m, errors: x} = n
                  , y = f.route.loader && m[f.route.id] === void 0 && (!x || x[f.route.id] === void 0);
                if (f.route.lazy || y) {
                    a = !0,
                    u >= 0 ? l = l.slice(0, u + 1) : l = [l[0]];
                    break
                }
            }
        }
    return l.reduceRight( (c, f, m) => {
        let x, y = !1, R = null, O = null;
        n && (x = s && f.route.id ? s[f.route.id] : void 0,
        R = f.route.errorElement || xk,
        a && (u < 0 && m === 0 ? (y = !0,
        O = null) : u === m && (y = !0,
        O = f.route.hydrateFallbackElement || null)));
        let v = t.concat(l.slice(0, m + 1))
          , p = () => {
            let g;
            return x ? g = R : y ? g = O : f.route.Component ? g = $.createElement(f.route.Component, null) : f.route.element ? g = f.route.element : g = c,
            $.createElement(Rk, {
                match: f,
                routeContext: {
                    outlet: c,
                    matches: v,
                    isDataRoute: n != null
                },
                children: g
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0) ? $.createElement(Ek, {
            location: n.location,
            revalidation: n.revalidation,
            component: R,
            error: x,
            children: p(),
            routeContext: {
                outlet: null,
                matches: v,
                isDataRoute: !0
            }
        }) : p()
    }
    , null)
}
var rg = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(rg || {})
  , _l = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(_l || {});
function Ck(e) {
    let t = $.useContext(ua);
    return t || Me(!1),
    t
}
function Tk(e) {
    let t = $.useContext(eg);
    return t || Me(!1),
    t
}
function Nk(e) {
    let t = $.useContext(Ln);
    return t || Me(!1),
    t
}
function og(e) {
    let t = Nk()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Me(!1),
    n.route.id
}
function Lk() {
    var e;
    let t = $.useContext(tg)
      , n = Tk(_l.UseRouteError)
      , r = og(_l.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Pk() {
    let {router: e} = Ck(rg.UseNavigateStable)
      , t = og(_l.UseNavigateStable)
      , n = $.useRef(!1);
    return ng( () => {
        n.current = !0
    }
    ),
    $.useCallback(function(o, i) {
        i === void 0 && (i = {}),
        n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Wo({
            fromRouteId: t
        }, i)))
    }, [e, t])
}
function rn(e) {
    Me(!1)
}
function jk(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: o=dn.Pop, navigator: i, static: l=!1, future: s} = e;
    ri() && Me(!1);
    let a = t.replace(/^\/*/, "/")
      , u = $.useMemo( () => ({
        basename: a,
        navigator: i,
        static: l,
        future: Wo({
            v7_relativeSplatPath: !1
        }, s)
    }), [a, s, i, l]);
    typeof r == "string" && (r = Ur(r));
    let {pathname: c="/", search: f="", hash: m="", state: x=null, key: y="default"} = r
      , R = $.useMemo( () => {
        let O = $r(c, a);
        return O == null ? null : {
            location: {
                pathname: O,
                search: f,
                hash: m,
                state: x,
                key: y
            },
            navigationType: o
        }
    }
    , [a, c, f, m, x, y, o]);
    return R == null ? null : $.createElement(Nn.Provider, {
        value: u
    }, $.createElement(ca.Provider, {
        children: n,
        value: R
    }))
}
function Ok(e) {
    let {children: t, location: n} = e;
    return Sk(ru(t), n)
}
new Promise( () => {}
);
function ru(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return $.Children.forEach(e, (r, o) => {
        if (!$.isValidElement(r))
            return;
        let i = [...t, o];
        if (r.type === $.Fragment) {
            n.push.apply(n, ru(r.props.children, i));
            return
        }
        r.type !== rn && Me(!1),
        !r.props.index || !r.props.children || Me(!1);
        let l = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (l.children = ru(r.props.children, i)),
        n.push(l)
    }
    ),
    n
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function kl() {
    return kl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    kl.apply(this, arguments)
}
function ig(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), o, i;
    for (i = 0; i < r.length; i++)
        o = r[i],
        !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n
}
function Ak(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Mk(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Ak(e)
}
const Ik = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , $k = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"]
  , Dk = "6";
try {
    window.__reactRouterVersion = Dk
} catch {}
const zk = $.createContext({
    isTransitioning: !1
})
  , Vk = "startTransition"
  , id = Vg[Vk];
function Fk(e) {
    let {basename: t, children: n, future: r, window: o} = e
      , i = $.useRef();
    i.current == null && (i.current = G3({
        window: o,
        v5Compat: !0
    }));
    let l = i.current
      , [s,a] = $.useState({
        action: l.action,
        location: l.location
    })
      , {v7_startTransition: u} = r || {}
      , c = $.useCallback(f => {
        u && id ? id( () => a(f)) : a(f)
    }
    , [a, u]);
    return $.useLayoutEffect( () => l.listen(c), [l, c]),
    $.createElement(jk, {
        basename: t,
        children: n,
        location: s.location,
        navigationType: s.action,
        navigator: l,
        future: r
    })
}
const Bk = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Uk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , _c = $.forwardRef(function(t, n) {
    let {onClick: r, relative: o, reloadDocument: i, replace: l, state: s, target: a, to: u, preventScrollReset: c, viewTransition: f} = t, m = ig(t, Ik), {basename: x} = $.useContext(Nn), y, R = !1;
    if (typeof u == "string" && Uk.test(u) && (y = u,
    Bk))
        try {
            let g = new URL(window.location.href)
              , T = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u)
              , N = $r(T.pathname, x);
            T.origin === g.origin && N != null ? u = N + T.search + T.hash : R = !0
        } catch {}
    let O = vk(u, {
        relative: o
    })
      , v = Hk(u, {
        replace: l,
        state: s,
        target: a,
        preventScrollReset: c,
        relative: o,
        viewTransition: f
    });
    function p(g) {
        r && r(g),
        g.defaultPrevented || v(g)
    }
    return $.createElement("a", kl({}, m, {
        href: y || O,
        onClick: R || i ? r : p,
        ref: n,
        target: a
    }))
})
  , Ja = $.forwardRef(function(t, n) {
    let {"aria-current": r="page", caseSensitive: o=!1, className: i="", end: l=!1, style: s, to: a, viewTransition: u, children: c} = t
      , f = ig(t, $k)
      , m = da(a, {
        relative: f.relative
    })
      , x = Jt()
      , y = $.useContext(eg)
      , {navigator: R, basename: O} = $.useContext(Nn)
      , v = y != null && Gk(m) && u === !0
      , p = R.encodeLocation ? R.encodeLocation(m).pathname : m.pathname
      , g = x.pathname
      , T = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
    o || (g = g.toLowerCase(),
    T = T ? T.toLowerCase() : null,
    p = p.toLowerCase()),
    T && O && (T = $r(T, O) || T);
    const N = p !== "/" && p.endsWith("/") ? p.length - 1 : p.length;
    let P = g === p || !l && g.startsWith(p) && g.charAt(N) === "/", j = T != null && (T === p || !l && T.startsWith(p) && T.charAt(p.length) === "/"), L = {
        isActive: P,
        isPending: j,
        isTransitioning: v
    }, K = P ? r : void 0, B;
    typeof i == "function" ? B = i(L) : B = [i, P ? "active" : null, j ? "pending" : null, v ? "transitioning" : null].filter(Boolean).join(" ");
    let q = typeof s == "function" ? s(L) : s;
    return $.createElement(_c, kl({}, f, {
        "aria-current": K,
        className: B,
        ref: n,
        style: q,
        to: a,
        viewTransition: u
    }), typeof c == "function" ? c(L) : c)
});
var ou;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(ou || (ou = {}));
var ld;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(ld || (ld = {}));
function Wk(e) {
    let t = $.useContext(ua);
    return t || Me(!1),
    t
}
function Hk(e, t) {
    let {target: n, replace: r, state: o, preventScrollReset: i, relative: l, viewTransition: s} = t === void 0 ? {} : t
      , a = fa()
      , u = Jt()
      , c = da(e, {
        relative: l
    });
    return $.useCallback(f => {
        if (Mk(f, n)) {
            f.preventDefault();
            let m = r !== void 0 ? r : wl(u) === wl(c);
            a(e, {
                replace: m,
                state: o,
                preventScrollReset: i,
                relative: l,
                viewTransition: s
            })
        }
    }
    , [u, a, c, r, o, n, e, i, l, s])
}
function Gk(e, t) {
    t === void 0 && (t = {});
    let n = $.useContext(zk);
    n == null && Me(!1);
    let {basename: r} = Wk(ou.useViewTransitionState)
      , o = da(e, {
        relative: t.relative
    });
    if (!n.isTransitioning)
        return !1;
    let i = $r(n.currentLocation.pathname, r) || n.currentLocation.pathname
      , l = $r(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return Sl(o.pathname, l) != null || Sl(o.pathname, i) != null
}
var lg = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , ad = ve.createContext && ve.createContext(lg)
  , Kk = ["attr", "size", "title"];
function Qk(e, t) {
    if (e == null)
        return {};
    var n = Yk(e, t), r, o;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++)
            r = i[o],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function Yk(e, t) {
    if (e == null)
        return {};
    var n = {};
    for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0)
                continue;
            n[r] = e[r]
        }
    return n
}
function xl() {
    return xl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    xl.apply(this, arguments)
}
function sd(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(o) {
            return Object.getOwnPropertyDescriptor(e, o).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function El(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? sd(Object(n), !0).forEach(function(r) {
            Xk(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sd(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function Xk(e, t, n) {
    return t = Zk(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Zk(e) {
    var t = qk(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function qk(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function ag(e) {
    return e && e.map( (t, n) => ve.createElement(t.tag, El({
        key: n
    }, t.attr), ag(t.child)))
}
function en(e) {
    return t => ve.createElement(Jk, xl({
        attr: El({}, e.attr)
    }, t), ag(e.child))
}
function Jk(e) {
    var t = n => {
        var {attr: r, size: o, title: i} = e, l = Qk(e, Kk), s = o || n.size || "1em", a;
        return n.className && (a = n.className),
        e.className && (a = (a ? a + " " : "") + e.className),
        ve.createElement("svg", xl({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, l, {
            className: a,
            style: El(El({
                color: e.color || n.color
            }, n.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg"
        }), i && ve.createElement("title", null, i), e.children)
    }
    ;
    return ad !== void 0 ? ve.createElement(ad.Consumer, null, n => t(n)) : t(lg)
}
function ex(e) {
    return en({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "m12 19-7-7 7-7"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M19 12H5"
            },
            child: []
        }]
    })(e)
}
function tx(e) {
    return en({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M5 12h14"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "m12 5 7 7-7 7"
            },
            child: []
        }]
    })(e)
}
function sg(e) {
    return en({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "line",
            attr: {
                x1: "6",
                x2: "10",
                y1: "11",
                y2: "11"
            },
            child: []
        }, {
            tag: "line",
            attr: {
                x1: "8",
                x2: "8",
                y1: "9",
                y2: "13"
            },
            child: []
        }, {
            tag: "line",
            attr: {
                x1: "15",
                x2: "15.01",
                y1: "12",
                y2: "12"
            },
            child: []
        }, {
            tag: "line",
            attr: {
                x1: "18",
                x2: "18.01",
                y1: "10",
                y2: "10"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
            },
            child: []
        }]
    })(e)
}
function nx(e) {
    return en({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            },
            child: []
        }, {
            tag: "polyline",
            attr: {
                points: "9 22 9 12 15 12 15 22"
            },
            child: []
        }]
    })(e)
}
function rx(e) {
    return en({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M8 3H5a2 2 0 0 0-2 2v3"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M21 8V5a2 2 0 0 0-2-2h-3"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M3 16v3a2 2 0 0 0 2 2h3"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M16 21h3a2 2 0 0 0 2-2v-3"
            },
            child: []
        }]
    })(e)
}
function ox(e) {
    return en({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M21 3v5h-5"
            },
            child: []
        }]
    })(e)
}
function ug(e) {
    return en({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "circle",
            attr: {
                cx: "11",
                cy: "11",
                r: "8"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "m21 21-4.3-4.3"
            },
            child: []
        }]
    })(e)
}
function ix(e) {
    return en({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
            },
            child: []
        }, {
            tag: "circle",
            attr: {
                cx: "12",
                cy: "12",
                r: "3"
            },
            child: []
        }]
    })(e)
}
const cg = e => _.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 1080,
    height: 1080,
    viewBox: "0 0 1080 1080",
    xmlSpace: "preserve",
    ...e,
    children: [_.jsx("desc", {
        children: "Created with Fabric.js 5.2.4"
    }), _.jsx("defs", {}), _.jsx("g", {
        transform: "matrix(1 0 0 1 540 540)",
        id: "0b9b64be-6a09-4e1c-905f-119245b464bd",
        children: _.jsx("rect", {
            style: {
                stroke: "none",
                strokeWidth: 1,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeDashoffset: 0,
                strokeLinejoin: "miter",
                strokeMiterlimit: 4,
                fill: "rgb(255,255,255)",
                fillRule: "nonzero",
                opacity: 1,
                visibility: "hidden"
            },
            vectorEffect: "non-scaling-stroke",
            x: -540,
            y: -540,
            rx: 0,
            ry: 0,
            width: 1080,
            height: 1080
        })
    }), _.jsx("g", {
        transform: "matrix(1 0 0 1 540 540)",
        id: "0f2b92d8-ed63-491b-ae75-cb39563a0483"
    }), _.jsx("g", {
        transform: "matrix(2.37 0 0 2.37 540 540)",
        id: "a1c17265-dceb-446c-ac4b-f9bede57a19f",
        children: _.jsx("path", {
            style: {
                stroke: "rgb(0,0,0)",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeDashoffset: 0,
                strokeLinejoin: "miter",
                strokeMiterlimit: 4,
                fillRule: "nonzero",
                opacity: 1
            },
            vectorEffect: "non-scaling-stroke",
            className: "logo",
            transform: " translate(3.89, -202.53)",
            d: "M 0 0 C 4.0646969 2.08633428 5.73714326 3.41779229 7.63916016 7.63061523 C 8.08702278 9.12075113 8.51038725 10.61838546 8.9140625 12.12109375 C 9.15532867 12.94709579 9.39659485 13.77309784 9.64517212 14.62413025 C 10.45254419 17.41018317 11.22661092 20.20433692 12 23 C 12.5814141 25.04618919 13.16447033 27.09191237 13.74902344 29.13720703 C 15.96151406 36.90792932 18.16313813 44.68190191 20.31738281 52.46899414 C 24.21452545 66.52683342 28.51524181 79.91061157 35 93 C 35.45656982 93.92674278 35.45656982 93.92674278 35.92236328 94.87220764 C 41.98414776 107.09448818 49.75100686 117.93235088 59.046875 127.89453125 C 60.64060724 129.61257461 62.11458926 131.34865335 63.5625 133.1875 C 85.54671984 158.5539075 119.42918945 170.44056222 150.625 179.1875 C 153.0576495 179.87829843 155.48994364 180.57034952 157.921875 181.26367188 C 159.10658386 181.60117462 160.29129272 181.93867737 161.51190186 182.28640747 C 166.0165863 183.571929 170.51967464 184.86299655 175.02258301 186.15472412 C 177.70942733 186.91750767 180.40151293 187.6564823 183.09667969 188.38916016 C 184.53086497 188.79626455 185.96480943 189.20421895 187.3984375 189.61328125 C 188.57841309 189.93723877 189.75838867 190.26119629 190.97412109 190.5949707 C 194.95065353 192.44142416 196.4641025 194.44596292 199 198 C 199.6640625 200.125 199.6640625 200.125 199.625 202 C 199.63789063 202.61875 199.65078125 203.2375 199.6640625 203.875 C 198.43943803 207.79379829 195.85876643 211.02357278 192.22869873 212.93048096 C 190.11050656 213.69754359 187.99052434 214.32362072 185.81640625 214.9140625 C 184.99491592 215.15532867 184.1734256 215.39659485 183.32704163 215.64517212 C 180.55715694 216.45201104 177.77945785 217.22682841 175 218 C 172.95523791 218.58185464 170.91081408 219.16489908 168.86669922 219.74902344 C 161.09446485 221.96076207 153.31930068 224.16280545 145.53100586 226.31738281 C 131.47314174 230.21453233 118.08944537 234.51532569 105 241 C 104.38235275 241.30424393 103.76470551 241.60848785 103.12834167 241.92195129 C 74.04756464 256.34314921 51.2481699 280.05259196 36.125 308.5625 C 35.69711182 309.36349121 35.26922363 310.16448242 34.82836914 310.98974609 C 28.41232583 323.49312411 24.42024486 336.65179876 20.65234375 350.1328125 C 20.46150711 350.81533773 20.27067047 351.49786297 20.0740509 352.20107079 C 18.27890076 358.6327677 16.49892147 365.06860298 14.73803711 371.50976562 C 13.76512295 375.0656656 12.77722065 378.61712191 11.7800312 382.16628647 C 11.40712481 383.50502245 11.03991316 384.8453595 10.67878532 386.18732071 C 7.18224188 399.17295572 7.18224188 399.17295572 2 404 C -1.18070237 405.59035119 -4.58330451 405.78937448 -8 405 C -13.47492854 401.26077104 -15.20310897 398.11646015 -16.9140625 391.81640625 C -17.15532867 390.99491592 -17.39659485 390.1734256 -17.64517212 389.32704163 C -18.45201104 386.55715694 -19.22682841 383.77945785 -20 381 C -20.58185464 378.95523791 -21.16489908 376.91081408 -21.74902344 374.86669922 C -23.96076207 367.09446485 -26.16280545 359.31930068 -28.31738281 351.53100586 C -32.21452545 337.47316658 -36.51524181 324.08938843 -43 311 C -43.30437988 310.38217148 -43.60875977 309.76434296 -43.92236328 309.12779236 C -49.98414776 296.90551182 -57.75100686 286.06764912 -67.046875 276.10546875 C -68.64060724 274.38742539 -70.11458926 272.65134665 -71.5625 270.8125 C -87.17307486 252.80029824 -111.3530645 239.71017835 -133.6875 232.29296875 C -134.44363586 232.04140518 -135.19977173 231.78984161 -135.9788208 231.53065491 C -143.19419662 229.1799336 -150.48719561 227.12477954 -157.796875 225.08984375 C -159.61665863 224.58242645 -159.61665863 224.58242645 -161.47320557 224.0647583 C -166.51640711 222.66177855 -171.56005739 221.26079638 -176.61035156 219.88354492 C -180.34317257 218.86193826 -184.07022619 217.82120661 -187.796875 216.77734375 C -188.93437195 216.47199203 -190.0718689 216.16664032 -191.24383545 215.85203552 C -197.30449563 214.13761322 -201.59533519 212.57533388 -206 208 C -207.59035119 204.81929763 -207.78937448 201.41669549 -207 198 C -203.26077104 192.52507146 -200.11646015 190.79689103 -193.81640625 189.0859375 C -192.99491592 188.84467133 -192.1734256 188.60340515 -191.32704163 188.35482788 C -188.55715694 187.54798896 -185.77945785 186.77317159 -183 186 C -180.95523791 185.41814536 -178.91081408 184.83510092 -176.86669922 184.25097656 C -169.09446485 182.03923793 -161.31930068 179.83719455 -153.53100586 177.68261719 C -139.47316658 173.78547455 -126.08938843 169.48475819 -113 163 C -112.07325722 162.54343018 -112.07325722 162.54343018 -111.12779236 162.07763672 C -98.90476943 156.01548405 -88.05216899 148.24847101 -78.09765625 138.94140625 C -76 137 -76 137 -72.9375 134.625 C -68.38207945 130.55419866 -64.75702236 125.80202196 -61 121 C -59.86304688 119.56914062 -59.86304688 119.56914062 -58.703125 118.109375 C -48.07284717 104.39998221 -39.76523596 88.78834958 -34.29296875 72.31640625 C -34.04140518 71.56047684 -33.78984161 70.80454742 -33.53065491 70.02571106 C -31.17605682 62.79803602 -29.12337355 55.49138021 -27.08984375 48.16796875 C -26.58242645 46.34463516 -26.58242645 46.34463516 -26.0647583 44.48446655 C -24.66120002 39.43037438 -23.25910938 34.37599944 -21.88354492 29.31420898 C -20.86312872 25.57363236 -19.82198936 21.83933978 -18.77734375 18.10546875 C -18.47199203 16.96281052 -18.16664032 15.82015228 -17.85203552 14.64286804 C -16.18886296 8.76296306 -14.95043276 4.74229444 -10 1 C -6.83350487 -0.58324757 -3.42541806 -0.64374236 0 0 Z",
            strokeLinecap: "round"
        })
    })]
});
function lx() {
    return Jt().pathname === "/go" ? _.jsx(_.Fragment, {}) : _.jsxs("div", {
        className: "navbar m-3.5 bg-base-300 rounded-btn px-6 w-[calc(100vw-1.9rem)] background-filter transition-all sticky",
        children: [_.jsx("div", {
            className: "navbar-start",
            children: _.jsxs(_c, {
                to: "/",
                className: "btn btn-ghost normal-case text-xl items-center",
                children: [_.jsx(cg, {
                    width: "30px",
                    height: "30px"
                }), _.jsx("p", {
                    className: "sm:block hidden",
                    children: "Starlight"
                })]
            })
        }), _.jsxs("div", {
            className: "navbar-end gap-2",
            children: [_.jsxs(Ja, {
                to: "/science",
                className: ({isActive: t}) => `btn normal-case text-xl ${t ? "btn-primary" : "btn-ghost"}`,
                children: [_.jsx(sg, {
                    size: 24
                }), _.jsx("p", {
                    className: "sm:block hidden",
                    children: "Games"
                })]
            }), _.jsxs(Ja, {
                to: "/math",
                className: ({isActive: t}) => `btn normal-case text-xl ${t ? "btn-primary" : "btn-ghost"}`,
                children: [_.jsx(ug, {
                    size: 24
                }), _.jsx("p", {
                    className: "sm:block hidden",
                    children: "Search"
                })]
            }), _.jsxs(Ja, {
                to: "/settings",
                className: ({isActive: t}) => `btn normal-case text-xl ${t ? "btn-primary" : "btn-ghost"}`,
                children: [_.jsx(ix, {
                    size: 24
                }), _.jsx("p", {
                    className: "sm:block hidden",
                    children: "Settings"
                })]
            })]
        })]
    })
}
function ax(e) {
    return en({
        tag: "svg",
        attr: {
            viewBox: "0 0 496 512"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            },
            child: []
        }]
    })(e)
}
function pa() {
    const e = $.useRef(null)
      , t = Jt();
    return $.useEffect( () => (( () => {
        const r = {
            key: "e9298e6dbe64bae2b443c38bd2d0bb8c",
            format: "iframe",
            height: 90,
            width: 728,
            params: {}
        }
          , o = document.createElement("script");
        o.type = "text/javascript",
        o.innerHTML = `atOptions = ${JSON.stringify(r)};`;
        const i = document.createElement("script");
        i.type = "text/javascript",
        i.src = "//rethinkexercisesupplement.com/e9298e6dbe64bae2b443c38bd2d0bb8c/invoke.js",
        e.current && (e.current.innerHTML = "",
        e.current.appendChild(o),
        e.current.appendChild(i))
    }
    )(),
    () => {
        e.current && (e.current.innerHTML = "")
    }
    ), [t.key]),
    _.jsx("div", {
        ref: e,
        id: "starlight-ad",
        className: "m-5"
    }, t.key)
}
function sx() {
    const e = $.useRef(null)
      , t = Jt()
      , n = "container-e76624778e61e112831f9230df244d7e";
    return $.useEffect( () => {
        const r = document.getElementById(n);
        if (r && r !== e.current && r.remove(),
        document.querySelectorAll('script[src*="e76624778e61e112831f9230df244d7e"]').forEach(l => l.remove()),
        !e.current.hasChildNodes()) {
            const l = document.createElement("div");
            l.id = n,
            e.current.appendChild(l)
        }
        return setTimeout( () => {
            const l = document.createElement("script");
            l.async = !0,
            l.setAttribute("data-cfasync", "false"),
            l.src = "//rethinkexercisesupplement.com/e76624778e61e112831f9230df244d7e/invoke.js",
            document.body.appendChild(l)
        }
        , 50),
        () => {
            e.current && (e.current.innerHTML = ""),
            document.querySelectorAll('script[src*="e76624778e61e112831f9230df244d7e"]').forEach(s => s.remove())
        }
    }
    , [t.key]),
    _.jsx("div", {
        ref: e,
        className: "m-5"
    }, t.key)
}
function ux() {
    const e = $.useRef(null)
      , t = Jt();
    return $.useEffect( () => (( () => {
        const r = document.createElement("script");
        r.type = "text/javascript",
        r.src = "//rethinkexercisesupplement.com/66/a6/77/66a67752b43ac5e91458b1e7fba5c885.js",
        e.current && (e.current.innerHTML = "",
        e.current.appendChild(r))
    }
    )(),
    () => {
        e.current && (e.current.innerHTML = "")
    }
    ), [t.key]),
    _.jsx("div", {
        ref: e,
        id: "social-bar-ad"
    }, t.key)
}
const cx = "starlight"
  , fx = "2.1.0"
  , dx = "module"
  , px = {
    dev: "vite --host",
    build: "vite build",
    start: "vite build && node index.js",
    lint: "eslint .",
    preview: "vite preview"
}
  , hx = {
    chemicaljs: "^2.2.0",
    compression: "^1.7.4",
    express: "^4.21.1",
    "fuse.js": "^7.0.0",
    "http-proxy": "^1.18.1",
    "lucide-react": "^0.454.0",
    react: "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-lazy-load-image-component": "^1.6.2",
    "react-router-dom": "^6.27.0",
    recoil: "^0.7.7"
}
  , mx = {
    "@catppuccin/daisyui": "^1.2.1",
    "@eslint/js": "^9.13.0",
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    autoprefixer: "^10.4.20",
    daisyui: "^4.12.14",
    eslint: "^9.13.0",
    "eslint-plugin-react": "^7.37.1",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.13",
    globals: "^15.11.0",
    postcss: "^8.4.47",
    tailwindcss: "^3.4.14",
    vite: "^5.4.9",
    "vite-plugin-compression": "^0.5.1"
}
  , gx = "pnpm@9.15.3+sha512.1f79bc245a66eb0b07c5d4d83131240774642caaa86ef7d0434ab47c0d16f66b04e21e0c086eb61e62c77efc4d7f7ec071afad3796af64892fae66509173893a"
  , vx = {
    name: cx,
    private: !0,
    version: fx,
    type: dx,
    scripts: px,
    dependencies: hx,
    devDependencies: mx,
    packageManager: gx
};
function yx() {
    return _.jsxs("div", {
        className: "flex flex-col items-center justify-center text-center p-5 overflow-hidden",
        children: [_.jsx(cg, {
            width: "200px",
            height: "200px"
        }), _.jsx("h1", {
            className: "text-4xl font-bold my-5",
            children: "Welcome to Starlight!"
        }), _.jsx("p", {
            className: "text-lg mb-5",
            children: "Your favorite place for unblocked games! Enjoy a wide selection of fun and exciting games without any restrictions."
        }), _.jsx(_c, {
            to: "/science",
            children: _.jsxs("button", {
                className: "btn btn-primary ",
                children: [_.jsx(sg, {
                    size: 24
                }), "Start Playing"]
            })
        }), _.jsx(pa, {}), _.jsxs("footer", {
            className: "mt-10 fixed bottom-0 p-5",
            children: [_.jsxs("p", {
                children: ["© ", new Date().getFullYear(), " Parcoil Network. All rights reserved."]
            }), _.jsxs("div", {
                className: "gap-2 flex justify-center",
                children: [!1, _.jsx("p", {
                    className: "badge badge-primary p-3",
                    children: _.jsxs("p", {
                        className: "text-base",
                        children: ["v", vx.version]
                    })
                })]
            })]
        }), _.jsx("footer", {
            className: "mt-10 fixed bottom-0 left-0 p-5",
            children: _.jsx("a", {
                href: "https://github.com/Parcoil/starlight",
                className: "btn btn-ghost btn-circle text-3xl",
                "aria-label": "GitHub",
                children: _.jsx(ax, {})
            })
        })]
    })
}
const fg = U3({
    key: "theme",
    default: localStorage.getItem("theme") || "sunset"
});
function wx() {
    return _.jsx("div", {
        children: _.jsx("div", {
            className: "alert alert-error",
            children: _.jsx("h1", {
                children: "Page Not Found"
            })
        })
    })
}
function Sx() {
    const e = H3(fg)
      , [t,n] = $.useState("default")
      , [r,o] = $.useState(localStorage.getItem("searchEngine") || "google")
      , i = a => {
        const u = a.target.value;
        e(u),
        localStorage.setItem("theme", u)
    }
      , l = a => {
        n(a.target.value),
        localStorage.setItem("cloak", a.target.value)
    }
      , s = a => {
        const u = a.target.value;
        o(u),
        localStorage.setItem("searchEngine", u);
        const c = `/media/cloaks/${u}.png`;
        localStorage.setItem("searchEngineFavicon", c);
        const f = {
            google: "https://www.google.com/search?q=%s",
            bing: "https://www.bing.com/search?q=%s",
            ddg: "https://duckduckgo.com/?q=%s",
            brave: "https://search.brave.com/search?q=%s"
        };
        chemical.setStore("searchEngine", f[u])
    }
    ;
    return $.useEffect( () => {
        if (!localStorage.getItem("searchEngineFavicon") && r) {
            const u = `/media/cloaks/${r}.png`;
            localStorage.setItem("searchEngineFavicon", u)
        }
    }
    , []),
    $.useEffect( () => {
        if (t !== "default") {
            const a = cloaks.find(u => u.name === t);
            a && (window.cloak.setFavicon(a.icon),
            localStorage.setItem("cloakFavicon", a.icon),
            window.cloak.setTitle(a.title),
            localStorage.setItem("cloakTitle", a.title))
        }
    }
    , [t]),
    _.jsxs("div", {
        className: "flex flex-col justify-center items-center flex-wrap gap-3",
        children: [_.jsx("h1", {
            className: "text-3xl font-bold mb-3",
            children: "Settings"
        }), _.jsx(pa, {}), _.jsxs("div", {
            className: "flex flex-wrap gap-4 justify-center",
            children: [_.jsx(Ni, {
                title: "Themes",
                description: "Change the theme on Starlight.",
                children: _.jsxs("select", {
                    className: "select select-bordered w-full",
                    onChange: i,
                    value: localStorage.getItem("theme"),
                    children: [_.jsx("option", {
                        value: "sunset",
                        children: "Default"
                    }), _.jsx("option", {
                        value: "light",
                        children: "Light"
                    }), _.jsx("option", {
                        value: "youtube",
                        children: "Youtube"
                    }), _.jsx("option", {
                        value: "surfshark",
                        children: "Surfshark Blue"
                    }), _.jsx("option", {
                        value: "mocha",
                        children: "Catppuccin Mocha"
                    }), _.jsx("option", {
                        value: "macchiato",
                        children: "Catppuccin Macchiato"
                    }), _.jsx("option", {
                        value: "latte",
                        children: "Catppuccin Latte"
                    }), _.jsx("option", {
                        value: "frappe",
                        children: "Catppuccin Frappe"
                    }), _.jsx("option", {
                        value: "dark",
                        children: "Dark"
                    }), _.jsx("option", {
                        value: "cupcake",
                        children: "Cupcake"
                    }), _.jsx("option", {
                        value: "lunaar",
                        children: "Lunaar"
                    }), _.jsx("option", {
                        value: "bumblebee",
                        children: "Bumblebee"
                    }), _.jsx("option", {
                        value: "emerald",
                        children: "Emerald"
                    }), _.jsx("option", {
                        value: "corporate",
                        children: "Corporate"
                    }), _.jsx("option", {
                        value: "halloween",
                        children: "Halloween"
                    })]
                })
            }), _.jsx(Ni, {
                title: "About:blank",
                description: "Opens Starlight in an About:blank. page",
                children: _.jsx("button", {
                    className: "btn btn-primary w-full",
                    onClick: () => window.cloak.aboutBlank(),
                    children: "Launch"
                })
            }), _.jsxs(Ni, {
                title: "Cloak",
                description: "Change the cloak on Starlight.",
                children: [_.jsxs("select", {
                    name: "cloak",
                    defaultValue: "",
                    "data-cloak-select": "",
                    className: "select select-bordered w-full",
                    onChange: l,
                    value: localStorage.getItem("cloak"),
                    children: [_.jsx("option", {
                        selected: !0,
                        hidden: !0,
                        children: "Select a cloak"
                    }), _.jsx("option", {
                        value: "canvas",
                        children: "Canvas"
                    }), _.jsx("option", {
                        value: "wikipedia",
                        children: "Wikipedia"
                    }), _.jsx("option", {
                        value: "edpuzzle",
                        children: "Edpuzzle"
                    }), _.jsx("option", {
                        value: "drive",
                        children: "Google Drive"
                    }), _.jsx("option", {
                        value: "classroom",
                        children: "Google Classroom"
                    }), _.jsx("option", {
                        value: "zoom",
                        children: "Zoom"
                    }), _.jsx("option", {
                        value: "khan",
                        children: "Khan Academy"
                    }), _.jsx("option", {
                        value: "desmos",
                        children: "Desmos"
                    }), _.jsx("option", {
                        value: "gforms",
                        children: "Google Forms"
                    }), _.jsx("option", {
                        value: "quizlet",
                        children: "Quizlet"
                    })]
                }), _.jsx("div", {
                    className: "mt-3",
                    children: _.jsx("button", {
                        className: "btn btn-primary",
                        onClick: () => window.cloak.reset(),
                        children: "Reset Cloak"
                    })
                }), _.jsx("div", {
                    className: "mt-auto text-center pt-3",
                    children: _.jsx("a", {
                        className: "text-xs text-neutral-content opacity-40",
                        href: "https://github.com/parcoil/cloak",
                        children: "Powered by cloak.js"
                    })
                })]
            }), _.jsx(Ni, {
                title: "Search Engine",
                description: "Changes the search engine that Starlight uses",
                children: _.jsxs("select", {
                    className: "select select-bordered w-full",
                    onChange: s,
                    value: r,
                    children: [_.jsx("option", {
                        value: "google",
                        children: "Google"
                    }), _.jsx("option", {
                        value: "bing",
                        children: "Bing"
                    }), _.jsx("option", {
                        value: "ddg",
                        children: "DuckDuckGo"
                    }), _.jsx("option", {
                        value: "brave",
                        children: "Brave"
                    })]
                })
            })]
        })]
    })
}
function Ni({title: e, description: t, children: n, E: r}) {
    return _.jsx("div", {
        className: "bg-base-300 p-4 w-[300px] h-[300px] rounded-btn flex flex-col flex-wrap",
        children: _.jsxs("div", {
            children: [_.jsx("h2", {
                className: "text-2xl font-bold",
                children: e
            }), _.jsx("p", {
                children: t
            }), _.jsx("p", {
                className: "text-red-600",
                children: r
            }), _.jsx("div", {
                className: "justify-end pt-3",
                children: n
            })]
        })
    })
}
const Wi = [{
    name: "Request a game",
    image: "gforms.webp",
    url: "https://forms.gle/19kup3CDeHMgBw696",
    new: !0,
    proxy: !0
}, {
    name: "Monkey Mart",
    image: "monkey-mart-1-optimized.webp",
    url: "https://www.rapidwebapp.com/game/monkeymart/index.html",
    new: !0,
    proxy: !0
}, {
    name: "Sausage Flip",
    image: "sausageflip.webp",
    url: "https://b1d3aec5-9ce6-4594-a03c-b16800650df0.poki-gdn.com/5ca822fd-ad50-4b5a-8817-91a4e4f0e1c1/index.html?country=US&amp;ccpaApplies=0&amp;url_referrer=https%3A%2F%2Fpoki.com%2F&amp;tag=pg-f0e2210ee52f43a739fcb9af425ccdc48e0f4e6f&amp;site_id=3&amp;iso_lang=en&amp;poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fsausage-flip&amp;hoist=yes&amp;nonPersonalized=n&amp;familyFriendly=n&amp;categories=9%2C37%2C103%2C839%2C1013%2C1137%2C1139%2C1140%2C1141%2C1190&amp;ab=6b2076f9c2fa162199fe491f83ee1f2f273f2222&amp;experiment=a-d50e9ec5&amp;game_id=b1d3aec5-9ce6-4594-a03c-b16800650df0&amp;game_version_id=5ca822fd-ad50-4b5a-8817-91a4e4f0e1c1&amp;inspector=0&amp;csp=1",
    new: !0,
    proxy: !0
}, {
    name: "BuildNow GG",
    image: "buildnow-gg.webp",
    url: "https://cloudirector.is-a.dev/BuildNowGG/",
    new: !0,
    proxy: !0
}, {
    name: "Baby Sniper In Vietnam",
    image: "babysniper.webp",
    url: "https://html-classic.itch.zone/html/10450244/index.html",
    new: !0,
    top: !0,
    proxy: !0
}, {
    name: "Block Blast",
    image: "blockblast.webp",
    url: "https://block-blast.io/game/block-blast/",
    new: !0,
    proxy: !0
}, {
    name: "Snow Rider 3D",
    image: "snowrider3d.webp",
    url: "https://tylerpalko.github.io/gamehub/snowrider3d/",
    new: !0,
    proxy: !0
}, {
    name: "Free Simon",
    image: "freesimon.webp",
    url: "https://block-blast.io/game/block-blast/",
    new: !0,
    proxy: !0
}, {
    name: "Burrito Bison: Launcha Libre",
    image: "burritobisonlauncha.webp",
    url: "https://zayaruzostreetorgan.com/uploads/5/5/6/7/5567194/custom_themes/607721921917323670/burrito-bison-ll.html",
    new: !0,
    proxy: !0
}, {
    name: "Smashy Road",
    image: "smashyroad.webp",
    url: "https://smashy-road.io/smashy-road.embed",
    new: !0,
    proxy: !0
}, {
    name: "1v1.lol",
    image: "1v1.webp",
    url: "https://1v1.lol",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "1v1space",
    image: "splash.png",
    url: "1v1space",
    new: !1
}, {
    name: "10 Minutes Till Dawn",
    image: "splash.png",
    url: "10-minutes-till-dawn",
    new: !1
}, {
    name: "100ng",
    image: "100ng.jpg",
    url: "100ng",
    new: !1
}, {
    name: "2048",
    image: "2048.png",
    url: "2048",
    new: !1
}, {
    name: "2048 Multitask",
    image: "splash.png",
    url: "2048-multitask",
    new: !1
}, {
    name: "9007199254740992",
    image: "logo-4.png",
    url: "9007199254740992",
    new: !1
}, {
    name: "DogeMiner",
    image: "favicon.ico",
    url: "DogeMiner",
    new: !1
}, {
    name: "HexGL",
    image: "hexgl.webp",
    url: "https://hexgl.bkcore.com/play/",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Offline Paradise",
    image: "assets/icon.jpeg",
    url: "OfflineParadise",
    new: !1
}, {
    name: "A Dance of Fire and Ice",
    image: "splash.png",
    url: "a-dance-of-fire-and-ice",
    new: !1
}, {
    name: "Achievement Unlocked",
    image: "achievementunlocked.png",
    url: "achievementunlocked",
    new: !1
}, {
    name: "A Dark Room",
    image: "splash.png",
    url: "adarkroom",
    new: !1
}, {
    name: "Adrenaline Challenge",
    image: "adrenalinechallenge.jpg",
    url: "adrenalinechallenge",
    new: !1
}, {
    name: "Adventure Drivers",
    image: "addrivers.webp",
    url: "https://games.cdn.famobi.com/html5games/a/adventure-drivers/v060/?fg_domain=play.famobi.com&fg_aid=A-FAK0S&fg_uid=7adef9f1-9ddd-437a-b5ee-196da61ba5c7&fg_pid=21580307-9bb3-4130-84d6-32b3ec1c9c97&fg_beat=159&original_ref=https%3A%2F%2Fwww.gamepix.com%2Fplay%2Fadventure-drivers",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Ages of Conflict",
    image: "agesofconflict.webp",
    url: "https://html-classic.itch.zone/html/8495606/index.html",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Alien Hominid",
    image: "alienhominid.jpg",
    url: "alienhominid",
    new: !1
}, {
    name: "Align 4",
    image: "align4.webp",
    url: "https://ubg100.github.io/games/align4/align4host.html",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Amidst the Sky",
    image: "amidstthesky.webp",
    url: "https://www.coolmathgames.com/0-amidst-the-sky/play",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Among Us",
    image: "amongus.webp",
    url: "https://amongusplay.online/",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Angry Sharks",
    image: "assets/img/splash.png",
    url: "angry-sharks",
    new: !1
}, {
    name: "Aquapark Slides",
    image: "splash.png",
    url: "aquapark-slides",
    new: !1
}, {
    name: "Astray",
    image: "splash.png",
    url: "astray",
    new: !1
}, {
    name: "Avalanche",
    image: "avalanche.png",
    url: "avalanche",
    new: !1
}, {
    name: "Awesome Tanks 2",
    image: "awesometanks2.webp",
    url: "https://www.coolmathgames.com/0-awesome-tanks-2/play",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Backrooms",
    image: "backrooms.webp",
    url: "https://backroomsgame.io/game/backrooms/",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Bad Ice Cream",
    image: "badicecream.webp",
    url: "https://7fb1fd45-24ce-4ade-b5c4-9ee55ec99526.poki-gdn.com/403f9f7f-52b0-4fa1-a4c2-c46883d239b6/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fwww.nitrome.com%2F&game_id=7fb1fd45-24ce-4ade-b5c4-9ee55ec99526&game_version_id=403f9f7f-52b0-4fa1-a4c2-c46883d239b6&inspector=0",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Bad Ice Cream 2",
    image: "badicecream2.webp",
    url: "https://f1a2e68b-413f-4ed0-896c-e14bd97e30c3.poki-gdn.com/6dd890f7-a0fc-4b3f-94b0-5a72a476d61f/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fwww.nitrome.com%2F&game_id=f1a2e68b-413f-4ed0-896c-e14bd97e30c3&game_version_id=6dd890f7-a0fc-4b3f-94b0-5a72a476d61f&inspector=0",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Bad Ice Cream 3",
    image: "badicecream3.webp",
    url: "https://games.poki.com/458768/5b5f8af1-684b-4557-a71b-a865cf564b1d?tag=pg-f0e2210ee52f43a739fcb9af425ccdc48e0f4e6f&site_id=3&iso_lang=en&country=US&poki_url=https://poki.com/en/g/bad-ice-cream-3&hoist=yes&nonPersonalized=n&familyFriendly=n&categories=38,72,103,750,792,839,1154,1156,1180,1191,1194,1197,1201&ab=6b2076f9c2fa162199fe491f83ee1f2f273f2222&experiment=a-d50e9ec5&special_condition=landing",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Baldi's Basics",
    image: "baldi.webp",
    url: "https://gamepotty.com/games/baldis-basics/",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Basket Random",
    image: "basketrandom.webp",
    url: "https://files.twoplayergames.org/files/games/other/Basket_Random/index.html",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Basketball Stars",
    image: "basketballstars.webp",
    url: "https://5dd33196-015f-11ea-ad56-9cb6d0d995f7.poki-gdn.com/36935933-5052-4dad-80ac-ae6f13020276/index.html?country=US&ccpaApplies=0&url_referrer=https%3A%2F%2Fpoki.com%2F&tag=pg-f0e2210ee52f43a739fcb9af425ccdc48e0f4e6f&site_id=3&iso_lang=en&poki_url=https%3A%2F%2Fpoki.com%2Fen%2Fg%2Fbasketball-stars&hoist=yes&nonPersonalized=n&familyFriendly=n&categories=2%2C76%2C130%2C750%2C775%2C929%2C1103%2C1109%2C1123%2C1139%2C1140%2C1147%2C1168%2C1193%2C1201%2C1202&ab=6b2076f9c2fa162199fe491f83ee1f2f273f2222&experiment=a-d50e9ec5&special_condition=landing&game_id=5dd33196-015f-11ea-ad56-9cb6d0d995f7&game_version_id=36935933-5052-4dad-80ac-ae6f13020276&inspector=0&csp=1",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Basketbros.io",
    image: "baasketbros.webp",
    url: "https://basketbros.io/",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Battle for Gondor",
    image: "battleforgondor.JPG",
    url: "battleforgondor",
    new: !1
}, {
    name: "Big Red Button",
    image: "bigredbutton.png",
    url: "bigredbutton",
    new: !1
}, {
    name: "BitLife",
    image: "bitlife.webp",
    url: "https://bitlifesimulator.io/game/bitlife/",
    new: !1,
    proxy: !0,
    updated: !0
}, {
    name: "Black Hole Square",
    image: "icon.png",
    url: "blacholesquare",
    new: !1
}, {
    name: "Black Knight",
    image: "blackknight.png",
    url: "blackknight",
    new: !1
}, {
    name: "Bloons TD",
    image: "bloonstd.jpg",
    url: "bloonstd",
    new: !1
}, {
    name: "Bloons TD 2",
    image: "bloonstd2.png",
    url: "bloonstd2",
    new: !1
}, {
    name: "Bloxors",
    image: "title.png",
    url: "bloxors",
    new: !1
}, {
    name: "BNTTS",
    image: "icons/icon-256.png",
    url: "bntts",
    new: !1
}, {
    name: "Bob the Robber 2",
    image: "splash.jpeg",
    url: "bobtherobber2",
    new: !1
}, {
    name: "Boxhead 2 Play",
    image: "boxhead2play.jpg",
    url: "boxhead2play",
    new: !1
}, {
    name: "Boxing Random",
    image: "512x512.jpg",
    url: "boxing-random",
    new: !1
}, {
    name: "Breaking the Bank",
    image: "breakingthebank.png",
    url: "breakingthebank",
    new: !1
}, {
    name: "BTTS",
    image: "images.png",
    url: "btts",
    new: !1
}, {
    name: "Burger and Frights",
    image: "splash.png",
    url: "burger-and-frights",
    new: !1
}, {
    name: "Chibi Knight",
    image: "chibiknight.webp",
    url: "https://chibi-knight.game-files.crazygames.com/ruffle/chibiknight.html?v=1.307",
    new: !0,
    proxy: !0
}, {
    name: "Cannon Basketball 4",
    image: "img/splash.png",
    url: "cannon-basketball-4",
    new: !1
}, {
    name: "Canyon Defense",
    image: "canyondefense.png",
    url: "canyondefense",
    new: !1
}, {
    name: "Cars Simulator",
    image: "splash.png",
    url: "cars-simulator",
    new: !1
}, {
    name: "Cell Machine",
    image: "img/te9nDu.png",
    url: "cell-machine",
    new: !1
}, {
    name: "Champion Island",
    image: "splash.png",
    url: "champion-island",
    new: !1
}, {
    name: "Champion Archer",
    image: "championarcher.png",
    url: "championarcher",
    new: !1
}, {
    name: "Chill Radio",
    image: "img/chill-icon.png",
    url: "chill-radio",
    new: !1
}, {
    name: "Chrome Dino",
    image: "images/default_100_percent/offline/100-error-offline.png",
    url: "chrome-dino",
    new: !1
}, {
    name: "Circlo",
    image: "img/download.png",
    url: "circlo",
    new: !1
}, {
    name: "Cluster Rush",
    image: "splash.png",
    url: "cluster-rush",
    new: !1
}, {
    name: "CN Ping Pong",
    image: "tabletennisultimate.png",
    url: "cnpingpong",
    new: !1
}, {
    name: "Connect 3",
    image: "connect3.png",
    url: "connect3",
    new: !1
}, {
    name: "Cookie Clicker",
    image: "cookie1.jpeg",
    url: "cookie-clicker",
    new: !1
}, {
    name: "Core Ball",
    image: "pr_source.png",
    url: "core-ball",
    new: !1
}, {
    name: "Craftmine",
    image: "images/animal-sheet0.png",
    url: "craftmine",
    new: !1
}, {
    name: "Creative Kill Chamber",
    image: "creativekillchamber.jpg",
    url: "creativekillchamber",
    new: !1
}, {
    name: "Crossy Road",
    image: "crossyroad.png",
    url: "crossyroad",
    new: !1
}, {
    name: "CS:GO Clicker",
    image: "images/case1.png",
    url: "csgo-clicker",
    new: !1
}, {
    name: "CTR",
    image: "logo.png",
    url: "ctr",
    new: !1
}, {
    name: "CTR Holiday",
    image: "favicon.ico",
    url: "ctr-holiday",
    new: !1
}, {
    name: "CTR TR",
    image: "logo.png",
    url: "ctr-tr",
    new: !1
}, {
    name: "Cubefield",
    image: "assets/unnamed.png",
    url: "cubefield",
    new: !1
}, {
    name: "Cupcake 2048",
    image: "favicon.ico",
    url: "cupcake2048",
    new: !1
}, {
    name: "Dante",
    image: "splash.png",
    url: "dante",
    new: !1
}, {
    name: "Deal or No Deal",
    image: "index.jpg",
    url: "deal-or-no-deal",
    new: !1
}, {
    name: "Death Run 3D",
    image: "img/death.png",
    url: "death-run-3d",
    new: !1
}, {
    name: "Defend the Tank",
    image: "images/splash.jpg",
    url: "defend-the-tank",
    new: !1
}, {
    name: "Doctor Acorn 2",
    image: "splash.jpg",
    url: "doctor-acorn2",
    new: !1
}, {
    name: "Doge 2048",
    image: "doge1.jpeg",
    url: "doge2048",
    new: !1
}, {
    name: "Doodle Jump",
    image: "doodle.png",
    url: "doodle-jump",
    new: !1
}, {
    name: "Double Wires",
    image: "doublewires.png",
    url: "doublewires",
    new: !1
}, {
    name: "Dragon vs. Bricks",
    image: "splash.png",
    url: "dragon-vs-bricks",
    new: !1
}, {
    name: "Draw the Hill",
    image: "icons/icon-512.png",
    url: "draw-the-hill",
    new: !1
}, {
    name: "Drift Boss",
    image: "logo.png",
    url: "drift-boss",
    new: !1
}, {
    name: "Drift Hunters",
    image: "drift-hunters.png",
    url: "drift-hunters",
    new: !1
}, {
    name: "Drive Mad",
    image: "logo.jpg",
    url: "drive-mad",
    new: !1
}, {
    name: "Duck Life 1",
    image: "ducklife.png",
    url: "ducklife1",
    new: !1
}, {
    name: "Duck Life 2",
    image: "ducklife2.png",
    url: "ducklife2",
    new: !1
}, {
    name: "Duck Life 3",
    image: "duck.png",
    url: "ducklife3",
    new: !1
}, {
    name: "Duck Life 4",
    image: "splash.jpg",
    url: "ducklife4",
    new: !1
}, {
    name: "Edge Surf",
    image: "splash.png",
    url: "edge-surf",
    new: !1
}, {
    name: "Edge Not Found",
    image: "edge.png",
    url: "edgenotfound",
    new: !1
}, {
    name: "Eel Slap",
    image: "eel-slap.png",
    url: "eel-slap",
    new: !1
}, {
    name: "Elastic Man",
    image: "elasticman.jpg",
    url: "elasticman",
    new: !1
}, {
    name: "Endless War 3",
    image: "endlesswar3.png",
    url: "endlesswar3",
    new: !1
}, {
    name: "Escaping the Prison",
    image: "escapingtheprison.jpg",
    url: "escapingtheprison",
    new: !1
}, {
    name: "Evil Glitch",
    image: "evil.png",
    url: "evil-glitch",
    new: !1
}, {
    name: "Evolution",
    image: "splash.png",
    url: "evolution",
    new: !1
}, {
    name: "Exo",
    image: "img/small.jpg",
    url: "exo",
    new: !1
}, {
    name: "Factory Balls",
    image: "images/splash.png",
    url: "factoryballs",
    new: !1
}, {
    name: "Fairsquares",
    image: "index.icon.png",
    url: "fairsquares",
    new: !1
}, {
    name: "Fake Virus",
    image: "icon.png",
    url: "fake-virus",
    new: !1
}, {
    name: "Fancy Pants Adventures",
    image: "fancypantsadventure.png",
    url: "fancypantsadventures",
    new: !1
}, {
    name: "Fireboy and Watergirl: Forest Temple",
    image: "logo.jpeg",
    url: "fireboywatergirlforesttemple",
    new: !1
}, {
    name: "Flappy 2048",
    image: "favicon.ico",
    url: "flappy-2048",
    new: !1
}, {
    name: "Flappy Bird",
    image: "flappybird.jpg",
    url: "flappy-bird",
    new: !1
}, {
    name: "Flash Tetris",
    image: "flashtetris.png",
    url: "flashtetris",
    new: !1
}, {
    name: "Flippy Fish",
    image: "2022_10_28_0jt_Kleki.png",
    url: "flippy-fish",
    new: !1
}, {
    name: "Five Nights at Wario's (FNAW)",
    image: "splash.png",
    url: "fnaw",
    new: !1
}, {
    name: "Friday Night Funkin'",
    image: "fnf-icon.jpg",
    url: "fridaynightfunkin",
    new: !1
}, {
    name: "Froggy's Battle",
    image: "splash.png",
    url: "froggys-battle",
    new: !1
}, {
    name: "Fruit Ninja",
    image: "FruitNinjaTeaser.jpg",
    url: "fruitninja",
    new: !1
}, {
    name: "Frying Nemo",
    image: "splash.png",
    url: "frying-nemo",
    new: !1
}, {
    name: "Geoguessr",
    image: "geoguessr.webp",
    url: "https://www.geoguessr.com/",
    new: !0,
    proxy: !0
}, {
    name: "Game Inside",
    image: "img/display.png",
    url: "game-inside",
    new: !1
}, {
    name: "Generic Fishing Game",
    image: "splash.png",
    url: "generic-fishing-game",
    new: !1
}, {
    name: "Geo Dash",
    image: "geoscratchicon.png",
    url: "geodash",
    new: !1
}, {
    name: "George and the Printer",
    image: "img/SnDTEn.png",
    url: "georgeandtheprinter",
    new: !1
}, {
    name: "Getaway Shootout",
    image: "img/images.jpg",
    url: "getaway-shootout",
    new: !1
}, {
    name: "Gimme the Airpod",
    image: "img/logo.png",
    url: "gimme-the-airpod",
    new: !1
}, {
    name: "Glass City",
    image: "image.png",
    url: "glass-city",
    new: !1
}, {
    name: "Go Ball",
    image: "game.jpg",
    url: "go-ball",
    new: !1
}, {
    name: "Goodnight",
    image: "goodnight.jpg",
    url: "goodnight",
    new: !1
}, {
    name: "Google Feud",
    image: "splash.png",
    url: "google-feud",
    new: !1
}, {
    name: "Google Snake",
    image: "img/snake.png",
    url: "google-snake",
    new: !1
}, {
    name: "Gravity Soccer",
    image: "splash.png",
    url: "gravity-soccer",
    new: !1
}, {
    name: "Greybox",
    image: "ico.png",
    url: "greybox",
    new: !1
}, {
    name: "Grindcraft",
    image: "img/splash.png",
    url: "grindcraft",
    new: !1
}, {
    name: "Hacker Type",
    image: "logo192.png",
    url: "hackertype",
    new: !1
}, {
    name: "Handshakes",
    image: "splaher.png",
    url: "handshakes",
    new: !1
}, {
    name: "Happy Hop",
    image: "splash.png",
    url: "happy-hop",
    new: !1
}, {
    name: "HBA",
    image: "hoverbotarena.JPG",
    url: "hba",
    new: !1
}, {
    name: "Helicopter",
    image: "helicopter.png",
    url: "helicopter",
    new: !1
}, {
    name: "Hex Empire",
    image: "hexempire.jpg",
    url: "hexempire",
    new: !1
}, {
    name: "Hextris",
    image: "images/hextris-logo.png",
    url: "hextris",
    new: !1
}, {
    name: "Hungry Lamu",
    image: "splash.png",
    url: "hungry-lamu",
    new: !1
}, {
    name: "Idle Breakout",
    image: "img/thumbnail.png",
    url: "idle-breakout",
    new: !1
}, {
    name: "Idle Shark",
    image: "img/sharkgame.png",
    url: "idle-shark",
    new: !1
}, {
    name: "Impossible Quiz",
    image: "impossiblequiz.png",
    url: "impossiblequiz",
    new: !1
}, {
    name: "Interactive Buddy",
    image: "interactivebuddy.jpg",
    url: "interactivebuddy",
    new: !1
}, {
    name: "Jetpack Joyride",
    image: "splash.jpg",
    url: "jetpack-joyride",
    new: !1
}, {
    name: "Just Fall",
    image: "unnamed.png",
    url: "just-fall",
    new: !1
}, {
    name: "Just One Boss",
    image: "pv1Gr5.png",
    url: "just-one-boss",
    new: !1
}, {
    name: "Kitchen Gun Game",
    image: "splash.png",
    url: "kitchen-gun-game",
    new: !1
}, {
    name: "Kitten Cannon",
    image: "kittencannon.png",
    url: "kittencannon",
    new: !1
}, {
    name: "Knife Master",
    image: "512x512.jpg",
    url: "knife-master",
    new: !1
}, {
    name: "Krunker",
    image: "img/krunker-io.jpg",
    url: "krunker",
    new: !1
}, {
    name: "Learn to Fly",
    image: "learntofly.png",
    url: "learntofly",
    new: !1
}, {
    name: "Learn to Fly 2",
    image: "learn-to-fly-2.jpg",
    url: "learntofly2",
    new: !1
}, {
    name: "Madalin Stunt Cars 2",
    image: "img/logo.jpg",
    url: "madalin-stunt-cars-2",
    new: !1
}, {
    name: "Madalin Stunt Cars 3",
    image: "img/index.jpg",
    url: "madalin-stunt-cars-3",
    new: !1
}, {
    name: "Mario",
    image: "Theme/Mario.gif",
    url: "mario",
    new: !1
}, {
    name: "Marvin Spectrum",
    image: "marvinspectrum.png",
    url: "marvinspectrum",
    new: !1
}, {
    name: "Matrix Rampage",
    image: "matrixrampage.jpg",
    url: "matrixrampage",
    new: !1
}, {
    name: "Meme 2048",
    image: "img/hot.gif",
    url: "meme2048",
    new: !1
}, {
    name: "Merge Round Racers",
    image: "splash.png",
    url: "merge-round-racers",
    new: !1
}, {
    name: "Mine Blocks",
    image: "splash.png",
    url: "mineblocks",
    new: !1
}, {
    name: "Minecraft 1.5",
    image: "splash.jpeg",
    url: "minecraft-15",
    new: !1
}, {
    name: "Minecraft 1.8",
    image: "splash.png",
    url: "minecraft-18",
    new: !1
}, {
    name: "Minecraft Classic",
    image: "pack.png",
    url: "minecraft-classic",
    new: !1
}, {
    name: "Minecraft Beta",
    image: "bg_main.png",
    url: "minecraftbeta",
    new: !1
}, {
    name: "Minesweeper",
    image: "img/minesweeper.png",
    url: "minesweeper",
    new: !1
}, {
    name: "Mini Putt",
    image: "miniputt.png",
    url: "miniputt",
    new: !1
}, {
    name: "Missiles",
    image: "miss.png",
    url: "missiles",
    new: !1
}, {
    name: "Moto X3M",
    image: "splash.jpg",
    url: "motox3m",
    new: !1
}, {
    name: "Moto X3M Pool",
    image: "splash.jpg",
    url: "motox3m-pool",
    new: !1
}, {
    name: "Moto X3M Spooky",
    image: "splash.jpeg",
    url: "motox3m-spooky",
    new: !1
}, {
    name: "Moto X3M Winter",
    image: "download.jpeg",
    url: "motox3m-winter",
    new: !1
}, {
    name: "Moto X3M 2",
    image: "Moto-X3M-2.webp",
    url: "motox3m2",
    new: !1
}, {
    name: "My Rusty Submarine",
    image: "splash.png",
    url: "my-rusty-submarine",
    new: !1
}, {
    name: "N-Gon",
    image: "img/n-gonbot.png",
    url: "n-gon",
    new: !1
}, {
    name: "Ninja",
    image: "logo1.png",
    url: "ninja",
    new: !1
}, {
    name: "Ninja vs Evil Corp",
    image: "splash.png",
    url: "ninjavsevilcorp",
    new: !1
}, {
    name: "Noob Steve Parkour",
    image: "512x512.jpg",
    url: "noob-steve-parkour",
    new: !1
}, {
    name: "NS Shaft",
    image: "favicon.png",
    url: "ns-shaft",
    new: !1
}, {
    name: "NS Resurgence",
    image: "neon.png",
    url: "nsresurgence",
    new: !1
}, {
    name: "Om Bounce",
    image: "assets/icon.jpeg",
    url: "om-bounce",
    new: !1
}, {
    name: "OVO",
    image: "ovo3.png",
    url: "ovo",
    new: !1
}, {
    name: "Pandemic 2",
    image: "pandemic2.png",
    url: "pandemic2",
    new: !1
}, {
    name: "Papa's Burgeria",
    image: "splash.jpg",
    url: "papasburgeria",
    new: !1
}, {
    name: "Papa's Pizzeria",
    image: "papaspizzaria.jpg",
    url: "papaspizzaria",
    new: !1
}, {
    name: "Paper.io 2",
    image: "images/icon512.png",
    url: "paperio2",
    new: !1
}, {
    name: "Papery Planes",
    image: "splash.jpg",
    url: "papery-planes",
    new: !1
}, {
    name: "Particle Clicker",
    image: "assets/pc32@2x.png",
    url: "particle-clicker",
    new: !1
}, {
    name: "Pixel Gun Survival",
    image: "512x512.png",
    url: "pixel-gun-survival",
    new: !1
}, {
    name: "Polybranch",
    image: "img/pic1.png",
    url: "polybranch",
    new: !1
}, {
    name: "Popcat Classic",
    image: "android-chrome-512x512.png",
    url: "popcat-classic",
    new: !1
}, {
    name: "Portal Flash",
    image: "portaltheflashversion.jpg",
    url: "portalflash",
    new: !1
}, {
    name: "Precision Client",
    image: "logo.png",
    url: "precision-client",
    new: !1
}, {
    name: "Protektor",
    image: "splash.jpg",
    url: "protektor",
    new: !1
}, {
    name: "Push the Square",
    image: "img/splash.png",
    url: "push-the-square",
    new: !1
}, {
    name: "Push Your Luck",
    image: "assets/img/push.png",
    url: "push-your-luck",
    new: !1
}, {
    name: "Roblox (Now.gg)",
    image: "roblox.webp",
    url: "https://now.gg/apps/a/10020/b.html",
    new: !0,
    proxy: !0,
    top: !0,
    exp: !0
}, {
    name: "Rabbit Samurai",
    image: "splash.png",
    url: "rabbit-samurai",
    new: !1
}, {
    name: "Rabbit Samurai 2",
    image: "splash.png",
    url: "rabbit-samurai2",
    new: !1
}, {
    name: "Resent Client",
    image: "splash.jpg",
    url: "resent-client",
    new: !1
}, {
    name: "Retro Bowl",
    image: "retrobowl.webp",
    url: "https://retrobowlcollege.co/retro-bowl/",
    new: !1,
    updated: !0,
    top: !0,
    proxy: !0
}, {
    name: "Riddle School",
    image: "riddleschool.png",
    url: "riddleschool",
    new: !1
}, {
    name: "Riddle School 2",
    image: "riddleschool2.png",
    url: "riddleschool2",
    new: !1
}, {
    name: "Riddle School 3",
    image: "riddleschool3.png",
    url: "riddleschool3",
    new: !1
}, {
    name: "Riddle School 4",
    image: "riddleschool4.png",
    url: "riddleschool4",
    new: !1
}, {
    name: "Riddle School 5",
    image: "riddleschool5.png",
    url: "riddleschool5",
    new: !1
}, {
    name: "Riddle Transfer",
    image: "riddletransfer.png",
    url: "riddletransfer",
    new: !1
}, {
    name: "Riddle Transfer 2",
    image: "riddletransfer2.png",
    url: "riddletransfer2",
    new: !1
}, {
    name: "Rolling Forests",
    image: "icon.png",
    url: "rolling-forests",
    new: !1
}, {
    name: "Rolly Vortex",
    image: "icon-256.png",
    url: "rolly-vortex",
    new: !1
}, {
    name: "Rooftop Snipers",
    image: "img/thumb.png",
    url: "rooftop-snipers",
    new: !1
}, {
    name: "Ruffle",
    image: "splash.png",
    url: "ruffle",
    new: !1
}, {
    name: "Super Mario 64",
    image: "sm64.webp",
    url: "https://augustberchelmann.com/mario/",
    top: !0,
    proxy: !0
}, {
    name: "Stick Slasher",
    image: "stickslasher.webp",
    url: "https://html-classic.itch.zone/html/8532900/StickWeb/index.html",
    new: !0,
    proxy: !0
}, {
    name: "Slap The Monkey",
    image: "slap-the-monkey.jpg",
    url: "slap-the-monkey",
    new: !1
}, {
    name: "Sand Game",
    image: "sand-game.PNG",
    url: "sand-game",
    new: !1
}, {
    name: "Sandboxels",
    image: "sandboxels.jpg",
    url: "sandboxels",
    new: !1
}, {
    name: "Santy is Home",
    image: "splash.png",
    url: "santy-is-home",
    new: !1
}, {
    name: "Scrap Metal",
    image: "img/splash.png",
    url: "scrapmetal",
    new: !1
}, {
    name: "Shell Shockers",
    image: "img/favicon.png",
    url: "shellshockers",
    new: !1
}, {
    name: "Shot in the Dark",
    image: "shot.png",
    url: "shotinthedark",
    new: !1
}, {
    name: "Shuttle Deck",
    image: "splash.png",
    url: "shuttledeck",
    new: !1
}, {
    name: "Sky Car Stunt",
    image: "512x512.jpg",
    url: "sky-car-stunt",
    new: !1
}, {
    name: "Sleeping Beauty",
    image: "splash.png",
    url: " sleepingbeauty",
    new: !1
}, {
    name: "Slime Rush TD",
    image: "splash.png",
    url: "slime-rush-td",
    new: !1
}, {
    name: "Slope",
    image: "slope4.jpeg",
    url: "slope",
    new: !1,
    top: !0
}, {
    name: "Slope 2",
    image: "slope-2-logo.png",
    url: "slope-2",
    new: !1
}, {
    name: "Slope Ball",
    image: "icon.jpg",
    url: "slope-ball",
    new: !1
}, {
    name: "Smash Karts",
    image: "images/icon-512.png",
    url: "smashkarts",
    new: !1
}, {
    name: "Smoking Barrels",
    image: "smokingbarrels.jpg",
    url: "smokingbarrels",
    new: !1
}, {
    name: "Snow Battle",
    image: "img/logo.png",
    url: "snowbattle",
    new: !1
}, {
    name: "Soccer Random",
    image: "splash.png",
    url: "soccer-random",
    new: !1
}, {
    name: "Soccer Skills",
    image: "splash.png",
    url: "soccer-skills",
    new: !1
}, {
    name: "Soldier Legend",
    image: "images/logo.jpg",
    url: "soldier-legend",
    new: !1
}, {
    name: "Solitaire",
    image: "img/hover.jpg",
    url: "solitaire",
    new: !1
}, {
    name: "Sort the Court",
    image: "img/splash.png",
    url: "sort-the-court",
    new: !1
}, {
    name: "Soundboard",
    image: "img/mlg-favicon.png",
    url: "soundboard",
    new: !1
}, {
    name: "Space Company",
    image: "whiteLogo.png",
    url: "space-company",
    new: !1
}, {
    name: "Space Garden",
    image: "spl.png",
    url: "spacegarden",
    new: !1
}, {
    name: "Spinning Rat",
    image: "favicon-32x32.png",
    url: "spinningrat",
    new: !1
}, {
    name: "Stack",
    image: "stack.png",
    url: "stack",
    new: !1
}, {
    name: "Stack Bump 3D",
    image: "thumbnail.jpg",
    url: "stack-bump-3d",
    new: !1
}, {
    name: "Starve",
    image: "img/favicon.png",
    url: "starve",
    new: !1
}, {
    name: "Station 141",
    image: "75wxYs.png",
    url: "station-141",
    new: !1
}, {
    name: "Stealing the Diamond",
    image: "stealingthediamond.jpg",
    url: "stealingthediamond",
    new: !1
}, {
    name: "Stick Archers",
    image: "splash.jpg",
    url: "stick-archers",
    new: !1
}, {
    name: "Stick Duel Battle",
    image: "512x512.jpg",
    url: "stick-duel-battle",
    new: !1
}, {
    name: "Stick Merge",
    image: "splash.png",
    url: "stick-merge",
    new: !1
}, {
    name: "Stickman Boost",
    image: "icon-256.png",
    url: "stickman-boost",
    new: !1
}, {
    name: "Stickman Golf",
    image: "splash.png",
    url: "stickman-golf",
    new: !1
}, {
    name: "Stickman Hook",
    image: "unnamed.jpg",
    url: "stickman-hook",
    new: !1
}, {
    name: "Stick War",
    image: "stickwar.jpg",
    url: "stickwar",
    new: !1
}, {
    name: "Storm the House 2",
    image: "stormthehouse2.jpg",
    url: "stormthehouse2",
    new: !1
}, {
    name: "Subway Surfers",
    image: "img/splash.jpg",
    url: "subway-surfers",
    new: !1
}, {
    name: "Subway Surfers NY",
    image: "NewYorkIcon.png",
    url: "subway-surfers-ny",
    new: !1
}, {
    name: "Superhot",
    image: "hot.jpg",
    url: "superhot",
    new: !1
}, {
    name: "Super Mario Construct",
    image: "icons/icon-256.png",
    url: "supermarioconstruct",
    new: !1
}, {
    name: "Surviv",
    image: "img/favicon.png",
    url: "surviv",
    new: !1
}, {
    name: "Sushi Unroll",
    image: "favicon.png",
    url: "sushi-unroll",
    new: !1
}, {
    name: "Swerve",
    image: "img/favicon.jpg",
    url: "swerve",
    new: !1
}, {
    name: "Synesthesia",
    image: "index.splash.png",
    url: "synesthesia",
    new: !1
}, {
    name: "Tactical Weapon Pack 2",
    image: "splash.jpg",
    url: "tactical-weapon-pack-2",
    new: !1
}, {
    name: "Tactical Assassin 2",
    image: "tacticalassassin2.png",
    url: "tacticalassasin2",
    new: !1
}, {
    name: "Tank Trouble 2",
    image: "tank.jpeg",
    url: "tank-trouble-2",
    new: !1
}, {
    name: "Tanuki Sunset",
    image: "img/logo.png",
    url: "tanuki-sunset",
    new: !1
}, {
    name: "Temple Run 2",
    image: "img/temple-run-2-256.png",
    url: "temple-run-2",
    new: !1
}, {
    name: "The Final Earth",
    image: "images.png",
    url: "the-final-earth",
    new: !1
}, {
    name: "The Hotel",
    image: "splash.png",
    url: "the-hotel",
    new: !1
}, {
    name: "The Battle",
    image: "thebattle.png",
    url: "thebattle",
    new: !1
}, {
    name: "The Heist",
    image: "theheist.jpg",
    url: "theheist",
    new: !1
}, {
    name: "There Is No Game",
    image: "logo.png",
    url: "there-is-no-game",
    new: !1
}, {
    name: "This Is the Only Level",
    image: "thisistheonlylevel.png",
    url: "thisistheonlylevel",
    new: !1
}, {
    name: "Tiny Fishing",
    image: "tiny-fishing.png",
    url: "tiny-fishing",
    new: !1
}, {
    name: "Tiny Islands",
    image: "splash.png",
    url: "tiny-islands",
    new: !1
}, {
    name: "Toss the Turtle",
    image: "tosstheturtle.png",
    url: "tosstheturtle",
    new: !1
}, {
    name: "Townscaper",
    image: "img/cover.jpg",
    url: "townscaper",
    new: !1
}, {
    name: "Tube Jumpers",
    image: "img/icon.jpg",
    url: "tube-jumpers",
    new: !1
}, {
    name: "Tunnel Rush",
    image: "img/tunnel.jpg",
    url: "tunnel-rush",
    new: !1
}, {
    name: "TV Static",
    image: "static.png",
    url: "tv-static",
    new: !1
}, {
    name: "Twitch Tetris",
    image: "logo.png",
    url: "twitch-tetris",
    new: !1
}, {
    name: "Veloce",
    image: "qN6zkD.png",
    url: "veloce",
    new: !1
}, {
    name: "Vex 3",
    image: "vex3.png",
    url: "vex3",
    new: !1
}, {
    name: "Vex 4",
    image: "vex4.png",
    url: "vex4",
    new: !1
}, {
    name: "Vex 5",
    image: "vex.jpeg",
    url: "vex5",
    new: !1
}, {
    name: "Vex 6",
    image: "assets/icon.png",
    url: "vex6",
    new: !1
}, {
    name: "Vex 7",
    image: "assets/icon.png",
    url: "vex7",
    new: !1
}, {
    name: "Wall Smash",
    image: "thumb.png",
    url: "wallsmash",
    new: !1
}, {
    name: "Waterworks",
    image: "square.png",
    url: "waterworks",
    new: !1
}, {
    name: "WeaveSilk",
    image: "thumb.png",
    url: "weavesilk",
    new: !1
}, {
    name: "WebGL Fluid Simulation",
    image: "promo_back.png",
    url: "webgl-fluid-simulation",
    new: !1
}, {
    name: "WebRetro",
    image: "assets/icons/iconm256.png",
    url: "webretro",
    new: !1
}, {
    name: "Win the White House",
    image: "splash.png",
    url: "win-the-whitehouse",
    new: !1
}, {
    name: "Wolf 3D",
    image: "art/wolf3d.png",
    url: "wolf3d",
    new: !1
}, {
    name: "Wordle",
    image: "img/logo_512x512.png",
    url: "wordle",
    new: !1
}, {
    name: "World's Hardest Game",
    image: "images/splash.jpg",
    url: "worlds-hardest-game",
    new: !1
}, {
    name: "World's Hardest Game 2",
    image: "the-worlds-hardest-game-2.jpg",
    url: "worlds-hardest-game-2",
    new: !1
}, {
    name: "X-Trial Racing",
    image: "splash.png",
    url: "x-trial-racing",
    new: !1
}, {
    name: "xx142-B2.exe",
    image: "splash.png",
    url: "xx142-b2exe",
    new: !1
}, {
    name: "Yoshi Fabrication",
    image: "icons/icon-512.png",
    url: "yoshifabrication",
    new: !1
}, {
    name: "You Are Bezos",
    image: "img/banner.png",
    url: "you-are-bezos",
    new: !1
}, {
    name: "Zombs Royale",
    image: "zomb.png",
    url: "zombs-royale",
    new: !1
}];
function Xt(e) {
    return Array.isArray ? Array.isArray(e) : hg(e) === "[object Array]"
}
const _x = 1 / 0;
function kx(e) {
    if (typeof e == "string")
        return e;
    let t = e + "";
    return t == "0" && 1 / e == -_x ? "-0" : t
}
function xx(e) {
    return e == null ? "" : kx(e)
}
function Ot(e) {
    return typeof e == "string"
}
function dg(e) {
    return typeof e == "number"
}
function Ex(e) {
    return e === !0 || e === !1 || Rx(e) && hg(e) == "[object Boolean]"
}
function pg(e) {
    return typeof e == "object"
}
function Rx(e) {
    return pg(e) && e !== null
}
function ct(e) {
    return e != null
}
function es(e) {
    return !e.trim().length
}
function hg(e) {
    return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
}
const bx = "Incorrect 'index' type"
  , Cx = e => `Invalid value for key ${e}`
  , Tx = e => `Pattern length exceeds max of ${e}.`
  , Nx = e => `Missing ${e} property in key`
  , Lx = e => `Property 'weight' in key '${e}' must be a positive integer`
  , ud = Object.prototype.hasOwnProperty;
class Px {
    constructor(t) {
        this._keys = [],
        this._keyMap = {};
        let n = 0;
        t.forEach(r => {
            let o = mg(r);
            this._keys.push(o),
            this._keyMap[o.id] = o,
            n += o.weight
        }
        ),
        this._keys.forEach(r => {
            r.weight /= n
        }
        )
    }
    get(t) {
        return this._keyMap[t]
    }
    keys() {
        return this._keys
    }
    toJSON() {
        return JSON.stringify(this._keys)
    }
}
function mg(e) {
    let t = null
      , n = null
      , r = null
      , o = 1
      , i = null;
    if (Ot(e) || Xt(e))
        r = e,
        t = cd(e),
        n = iu(e);
    else {
        if (!ud.call(e, "name"))
            throw new Error(Nx("name"));
        const l = e.name;
        if (r = l,
        ud.call(e, "weight") && (o = e.weight,
        o <= 0))
            throw new Error(Lx(l));
        t = cd(l),
        n = iu(l),
        i = e.getFn
    }
    return {
        path: t,
        id: n,
        weight: o,
        src: r,
        getFn: i
    }
}
function cd(e) {
    return Xt(e) ? e : e.split(".")
}
function iu(e) {
    return Xt(e) ? e.join(".") : e
}
function jx(e, t) {
    let n = []
      , r = !1;
    const o = (i, l, s) => {
        if (ct(i))
            if (!l[s])
                n.push(i);
            else {
                let a = l[s];
                const u = i[a];
                if (!ct(u))
                    return;
                if (s === l.length - 1 && (Ot(u) || dg(u) || Ex(u)))
                    n.push(xx(u));
                else if (Xt(u)) {
                    r = !0;
                    for (let c = 0, f = u.length; c < f; c += 1)
                        o(u[c], l, s + 1)
                } else
                    l.length && o(u, l, s + 1)
            }
    }
    ;
    return o(e, Ot(t) ? t.split(".") : t, 0),
    r ? n : n[0]
}
const Ox = {
    includeMatches: !1,
    findAllMatches: !1,
    minMatchCharLength: 1
}
  , Ax = {
    isCaseSensitive: !1,
    includeScore: !1,
    keys: [],
    shouldSort: !0,
    sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}
  , Mx = {
    location: 0,
    threshold: .6,
    distance: 100
}
  , Ix = {
    useExtendedSearch: !1,
    getFn: jx,
    ignoreLocation: !1,
    ignoreFieldNorm: !1,
    fieldNormWeight: 1
};
var ne = {
    ...Ax,
    ...Ox,
    ...Mx,
    ...Ix
};
const $x = /[^ ]+/g;
function Dx(e=1, t=3) {
    const n = new Map
      , r = Math.pow(10, t);
    return {
        get(o) {
            const i = o.match($x).length;
            if (n.has(i))
                return n.get(i);
            const l = 1 / Math.pow(i, .5 * e)
              , s = parseFloat(Math.round(l * r) / r);
            return n.set(i, s),
            s
        },
        clear() {
            n.clear()
        }
    }
}
class kc {
    constructor({getFn: t=ne.getFn, fieldNormWeight: n=ne.fieldNormWeight}={}) {
        this.norm = Dx(n, 3),
        this.getFn = t,
        this.isCreated = !1,
        this.setIndexRecords()
    }
    setSources(t=[]) {
        this.docs = t
    }
    setIndexRecords(t=[]) {
        this.records = t
    }
    setKeys(t=[]) {
        this.keys = t,
        this._keysMap = {},
        t.forEach( (n, r) => {
            this._keysMap[n.id] = r
        }
        )
    }
    create() {
        this.isCreated || !this.docs.length || (this.isCreated = !0,
        Ot(this.docs[0]) ? this.docs.forEach( (t, n) => {
            this._addString(t, n)
        }
        ) : this.docs.forEach( (t, n) => {
            this._addObject(t, n)
        }
        ),
        this.norm.clear())
    }
    add(t) {
        const n = this.size();
        Ot(t) ? this._addString(t, n) : this._addObject(t, n)
    }
    removeAt(t) {
        this.records.splice(t, 1);
        for (let n = t, r = this.size(); n < r; n += 1)
            this.records[n].i -= 1
    }
    getValueForItemAtKeyId(t, n) {
        return t[this._keysMap[n]]
    }
    size() {
        return this.records.length
    }
    _addString(t, n) {
        if (!ct(t) || es(t))
            return;
        let r = {
            v: t,
            i: n,
            n: this.norm.get(t)
        };
        this.records.push(r)
    }
    _addObject(t, n) {
        let r = {
            i: n,
            $: {}
        };
        this.keys.forEach( (o, i) => {
            let l = o.getFn ? o.getFn(t) : this.getFn(t, o.path);
            if (ct(l)) {
                if (Xt(l)) {
                    let s = [];
                    const a = [{
                        nestedArrIndex: -1,
                        value: l
                    }];
                    for (; a.length; ) {
                        const {nestedArrIndex: u, value: c} = a.pop();
                        if (ct(c))
                            if (Ot(c) && !es(c)) {
                                let f = {
                                    v: c,
                                    i: u,
                                    n: this.norm.get(c)
                                };
                                s.push(f)
                            } else
                                Xt(c) && c.forEach( (f, m) => {
                                    a.push({
                                        nestedArrIndex: m,
                                        value: f
                                    })
                                }
                                )
                    }
                    r.$[i] = s
                } else if (Ot(l) && !es(l)) {
                    let s = {
                        v: l,
                        n: this.norm.get(l)
                    };
                    r.$[i] = s
                }
            }
        }
        ),
        this.records.push(r)
    }
    toJSON() {
        return {
            keys: this.keys,
            records: this.records
        }
    }
}
function gg(e, t, {getFn: n=ne.getFn, fieldNormWeight: r=ne.fieldNormWeight}={}) {
    const o = new kc({
        getFn: n,
        fieldNormWeight: r
    });
    return o.setKeys(e.map(mg)),
    o.setSources(t),
    o.create(),
    o
}
function zx(e, {getFn: t=ne.getFn, fieldNormWeight: n=ne.fieldNormWeight}={}) {
    const {keys: r, records: o} = e
      , i = new kc({
        getFn: t,
        fieldNormWeight: n
    });
    return i.setKeys(r),
    i.setIndexRecords(o),
    i
}
function Li(e, {errors: t=0, currentLocation: n=0, expectedLocation: r=0, distance: o=ne.distance, ignoreLocation: i=ne.ignoreLocation}={}) {
    const l = t / e.length;
    if (i)
        return l;
    const s = Math.abs(r - n);
    return o ? l + s / o : s ? 1 : l
}
function Vx(e=[], t=ne.minMatchCharLength) {
    let n = []
      , r = -1
      , o = -1
      , i = 0;
    for (let l = e.length; i < l; i += 1) {
        let s = e[i];
        s && r === -1 ? r = i : !s && r !== -1 && (o = i - 1,
        o - r + 1 >= t && n.push([r, o]),
        r = -1)
    }
    return e[i - 1] && i - r >= t && n.push([r, i - 1]),
    n
}
const Dn = 32;
function Fx(e, t, n, {location: r=ne.location, distance: o=ne.distance, threshold: i=ne.threshold, findAllMatches: l=ne.findAllMatches, minMatchCharLength: s=ne.minMatchCharLength, includeMatches: a=ne.includeMatches, ignoreLocation: u=ne.ignoreLocation}={}) {
    if (t.length > Dn)
        throw new Error(Tx(Dn));
    const c = t.length
      , f = e.length
      , m = Math.max(0, Math.min(r, f));
    let x = i
      , y = m;
    const R = s > 1 || a
      , O = R ? Array(f) : [];
    let v;
    for (; (v = e.indexOf(t, y)) > -1; ) {
        let j = Li(t, {
            currentLocation: v,
            expectedLocation: m,
            distance: o,
            ignoreLocation: u
        });
        if (x = Math.min(j, x),
        y = v + c,
        R) {
            let L = 0;
            for (; L < c; )
                O[v + L] = 1,
                L += 1
        }
    }
    y = -1;
    let p = []
      , g = 1
      , T = c + f;
    const N = 1 << c - 1;
    for (let j = 0; j < c; j += 1) {
        let L = 0
          , K = T;
        for (; L < K; )
            Li(t, {
                errors: j,
                currentLocation: m + K,
                expectedLocation: m,
                distance: o,
                ignoreLocation: u
            }) <= x ? L = K : T = K,
            K = Math.floor((T - L) / 2 + L);
        T = K;
        let B = Math.max(1, m - K + 1)
          , q = l ? f : Math.min(m + K, f) + c
          , le = Array(q + 2);
        le[q + 1] = (1 << j) - 1;
        for (let ee = q; ee >= B; ee -= 1) {
            let _e = ee - 1
              , he = n[e.charAt(_e)];
            if (R && (O[_e] = +!!he),
            le[ee] = (le[ee + 1] << 1 | 1) & he,
            j && (le[ee] |= (p[ee + 1] | p[ee]) << 1 | 1 | p[ee + 1]),
            le[ee] & N && (g = Li(t, {
                errors: j,
                currentLocation: _e,
                expectedLocation: m,
                distance: o,
                ignoreLocation: u
            }),
            g <= x)) {
                if (x = g,
                y = _e,
                y <= m)
                    break;
                B = Math.max(1, 2 * m - y)
            }
        }
        if (Li(t, {
            errors: j + 1,
            currentLocation: m,
            expectedLocation: m,
            distance: o,
            ignoreLocation: u
        }) > x)
            break;
        p = le
    }
    const P = {
        isMatch: y >= 0,
        score: Math.max(.001, g)
    };
    if (R) {
        const j = Vx(O, s);
        j.length ? a && (P.indices = j) : P.isMatch = !1
    }
    return P
}
function Bx(e) {
    let t = {};
    for (let n = 0, r = e.length; n < r; n += 1) {
        const o = e.charAt(n);
        t[o] = (t[o] || 0) | 1 << r - n - 1
    }
    return t
}
class vg {
    constructor(t, {location: n=ne.location, threshold: r=ne.threshold, distance: o=ne.distance, includeMatches: i=ne.includeMatches, findAllMatches: l=ne.findAllMatches, minMatchCharLength: s=ne.minMatchCharLength, isCaseSensitive: a=ne.isCaseSensitive, ignoreLocation: u=ne.ignoreLocation}={}) {
        if (this.options = {
            location: n,
            threshold: r,
            distance: o,
            includeMatches: i,
            findAllMatches: l,
            minMatchCharLength: s,
            isCaseSensitive: a,
            ignoreLocation: u
        },
        this.pattern = a ? t : t.toLowerCase(),
        this.chunks = [],
        !this.pattern.length)
            return;
        const c = (m, x) => {
            this.chunks.push({
                pattern: m,
                alphabet: Bx(m),
                startIndex: x
            })
        }
          , f = this.pattern.length;
        if (f > Dn) {
            let m = 0;
            const x = f % Dn
              , y = f - x;
            for (; m < y; )
                c(this.pattern.substr(m, Dn), m),
                m += Dn;
            if (x) {
                const R = f - Dn;
                c(this.pattern.substr(R), R)
            }
        } else
            c(this.pattern, 0)
    }
    searchIn(t) {
        const {isCaseSensitive: n, includeMatches: r} = this.options;
        if (n || (t = t.toLowerCase()),
        this.pattern === t) {
            let y = {
                isMatch: !0,
                score: 0
            };
            return r && (y.indices = [[0, t.length - 1]]),
            y
        }
        const {location: o, distance: i, threshold: l, findAllMatches: s, minMatchCharLength: a, ignoreLocation: u} = this.options;
        let c = []
          , f = 0
          , m = !1;
        this.chunks.forEach( ({pattern: y, alphabet: R, startIndex: O}) => {
            const {isMatch: v, score: p, indices: g} = Fx(t, y, R, {
                location: o + O,
                distance: i,
                threshold: l,
                findAllMatches: s,
                minMatchCharLength: a,
                includeMatches: r,
                ignoreLocation: u
            });
            v && (m = !0),
            f += p,
            v && g && (c = [...c, ...g])
        }
        );
        let x = {
            isMatch: m,
            score: m ? f / this.chunks.length : 1
        };
        return m && r && (x.indices = c),
        x
    }
}
class Pn {
    constructor(t) {
        this.pattern = t
    }
    static isMultiMatch(t) {
        return fd(t, this.multiRegex)
    }
    static isSingleMatch(t) {
        return fd(t, this.singleRegex)
    }
    search() {}
}
function fd(e, t) {
    const n = e.match(t);
    return n ? n[1] : null
}
class Ux extends Pn {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "exact"
    }
    static get multiRegex() {
        return /^="(.*)"$/
    }
    static get singleRegex() {
        return /^=(.*)$/
    }
    search(t) {
        const n = t === this.pattern;
        return {
            isMatch: n,
            score: n ? 0 : 1,
            indices: [0, this.pattern.length - 1]
        }
    }
}
class Wx extends Pn {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "inverse-exact"
    }
    static get multiRegex() {
        return /^!"(.*)"$/
    }
    static get singleRegex() {
        return /^!(.*)$/
    }
    search(t) {
        const r = t.indexOf(this.pattern) === -1;
        return {
            isMatch: r,
            score: r ? 0 : 1,
            indices: [0, t.length - 1]
        }
    }
}
class Hx extends Pn {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "prefix-exact"
    }
    static get multiRegex() {
        return /^\^"(.*)"$/
    }
    static get singleRegex() {
        return /^\^(.*)$/
    }
    search(t) {
        const n = t.startsWith(this.pattern);
        return {
            isMatch: n,
            score: n ? 0 : 1,
            indices: [0, this.pattern.length - 1]
        }
    }
}
class Gx extends Pn {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "inverse-prefix-exact"
    }
    static get multiRegex() {
        return /^!\^"(.*)"$/
    }
    static get singleRegex() {
        return /^!\^(.*)$/
    }
    search(t) {
        const n = !t.startsWith(this.pattern);
        return {
            isMatch: n,
            score: n ? 0 : 1,
            indices: [0, t.length - 1]
        }
    }
}
class Kx extends Pn {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "suffix-exact"
    }
    static get multiRegex() {
        return /^"(.*)"\$$/
    }
    static get singleRegex() {
        return /^(.*)\$$/
    }
    search(t) {
        const n = t.endsWith(this.pattern);
        return {
            isMatch: n,
            score: n ? 0 : 1,
            indices: [t.length - this.pattern.length, t.length - 1]
        }
    }
}
class Qx extends Pn {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "inverse-suffix-exact"
    }
    static get multiRegex() {
        return /^!"(.*)"\$$/
    }
    static get singleRegex() {
        return /^!(.*)\$$/
    }
    search(t) {
        const n = !t.endsWith(this.pattern);
        return {
            isMatch: n,
            score: n ? 0 : 1,
            indices: [0, t.length - 1]
        }
    }
}
class yg extends Pn {
    constructor(t, {location: n=ne.location, threshold: r=ne.threshold, distance: o=ne.distance, includeMatches: i=ne.includeMatches, findAllMatches: l=ne.findAllMatches, minMatchCharLength: s=ne.minMatchCharLength, isCaseSensitive: a=ne.isCaseSensitive, ignoreLocation: u=ne.ignoreLocation}={}) {
        super(t),
        this._bitapSearch = new vg(t,{
            location: n,
            threshold: r,
            distance: o,
            includeMatches: i,
            findAllMatches: l,
            minMatchCharLength: s,
            isCaseSensitive: a,
            ignoreLocation: u
        })
    }
    static get type() {
        return "fuzzy"
    }
    static get multiRegex() {
        return /^"(.*)"$/
    }
    static get singleRegex() {
        return /^(.*)$/
    }
    search(t) {
        return this._bitapSearch.searchIn(t)
    }
}
class wg extends Pn {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "include"
    }
    static get multiRegex() {
        return /^'"(.*)"$/
    }
    static get singleRegex() {
        return /^'(.*)$/
    }
    search(t) {
        let n = 0, r;
        const o = []
          , i = this.pattern.length;
        for (; (r = t.indexOf(this.pattern, n)) > -1; )
            n = r + i,
            o.push([r, n - 1]);
        const l = !!o.length;
        return {
            isMatch: l,
            score: l ? 0 : 1,
            indices: o
        }
    }
}
const lu = [Ux, wg, Hx, Gx, Qx, Kx, Wx, yg]
  , dd = lu.length
  , Yx = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/
  , Xx = "|";
function Zx(e, t={}) {
    return e.split(Xx).map(n => {
        let r = n.trim().split(Yx).filter(i => i && !!i.trim())
          , o = [];
        for (let i = 0, l = r.length; i < l; i += 1) {
            const s = r[i];
            let a = !1
              , u = -1;
            for (; !a && ++u < dd; ) {
                const c = lu[u];
                let f = c.isMultiMatch(s);
                f && (o.push(new c(f,t)),
                a = !0)
            }
            if (!a)
                for (u = -1; ++u < dd; ) {
                    const c = lu[u];
                    let f = c.isSingleMatch(s);
                    if (f) {
                        o.push(new c(f,t));
                        break
                    }
                }
        }
        return o
    }
    )
}
const qx = new Set([yg.type, wg.type]);
class Jx {
    constructor(t, {isCaseSensitive: n=ne.isCaseSensitive, includeMatches: r=ne.includeMatches, minMatchCharLength: o=ne.minMatchCharLength, ignoreLocation: i=ne.ignoreLocation, findAllMatches: l=ne.findAllMatches, location: s=ne.location, threshold: a=ne.threshold, distance: u=ne.distance}={}) {
        this.query = null,
        this.options = {
            isCaseSensitive: n,
            includeMatches: r,
            minMatchCharLength: o,
            findAllMatches: l,
            ignoreLocation: i,
            location: s,
            threshold: a,
            distance: u
        },
        this.pattern = n ? t : t.toLowerCase(),
        this.query = Zx(this.pattern, this.options)
    }
    static condition(t, n) {
        return n.useExtendedSearch
    }
    searchIn(t) {
        const n = this.query;
        if (!n)
            return {
                isMatch: !1,
                score: 1
            };
        const {includeMatches: r, isCaseSensitive: o} = this.options;
        t = o ? t : t.toLowerCase();
        let i = 0
          , l = []
          , s = 0;
        for (let a = 0, u = n.length; a < u; a += 1) {
            const c = n[a];
            l.length = 0,
            i = 0;
            for (let f = 0, m = c.length; f < m; f += 1) {
                const x = c[f]
                  , {isMatch: y, indices: R, score: O} = x.search(t);
                if (y) {
                    if (i += 1,
                    s += O,
                    r) {
                        const v = x.constructor.type;
                        qx.has(v) ? l = [...l, ...R] : l.push(R)
                    }
                } else {
                    s = 0,
                    i = 0,
                    l.length = 0;
                    break
                }
            }
            if (i) {
                let f = {
                    isMatch: !0,
                    score: s / i
                };
                return r && (f.indices = l),
                f
            }
        }
        return {
            isMatch: !1,
            score: 1
        }
    }
}
const au = [];
function e4(...e) {
    au.push(...e)
}
function su(e, t) {
    for (let n = 0, r = au.length; n < r; n += 1) {
        let o = au[n];
        if (o.condition(e, t))
            return new o(e,t)
    }
    return new vg(e,t)
}
const Rl = {
    AND: "$and",
    OR: "$or"
}
  , uu = {
    PATH: "$path",
    PATTERN: "$val"
}
  , cu = e => !!(e[Rl.AND] || e[Rl.OR])
  , t4 = e => !!e[uu.PATH]
  , n4 = e => !Xt(e) && pg(e) && !cu(e)
  , pd = e => ({
    [Rl.AND]: Object.keys(e).map(t => ({
        [t]: e[t]
    }))
});
function Sg(e, t, {auto: n=!0}={}) {
    const r = o => {
        let i = Object.keys(o);
        const l = t4(o);
        if (!l && i.length > 1 && !cu(o))
            return r(pd(o));
        if (n4(o)) {
            const a = l ? o[uu.PATH] : i[0]
              , u = l ? o[uu.PATTERN] : o[a];
            if (!Ot(u))
                throw new Error(Cx(a));
            const c = {
                keyId: iu(a),
                pattern: u
            };
            return n && (c.searcher = su(u, t)),
            c
        }
        let s = {
            children: [],
            operator: i[0]
        };
        return i.forEach(a => {
            const u = o[a];
            Xt(u) && u.forEach(c => {
                s.children.push(r(c))
            }
            )
        }
        ),
        s
    }
    ;
    return cu(e) || (e = pd(e)),
    r(e)
}
function r4(e, {ignoreFieldNorm: t=ne.ignoreFieldNorm}) {
    e.forEach(n => {
        let r = 1;
        n.matches.forEach( ({key: o, norm: i, score: l}) => {
            const s = o ? o.weight : null;
            r *= Math.pow(l === 0 && s ? Number.EPSILON : l, (s || 1) * (t ? 1 : i))
        }
        ),
        n.score = r
    }
    )
}
function o4(e, t) {
    const n = e.matches;
    t.matches = [],
    ct(n) && n.forEach(r => {
        if (!ct(r.indices) || !r.indices.length)
            return;
        const {indices: o, value: i} = r;
        let l = {
            indices: o,
            value: i
        };
        r.key && (l.key = r.key.src),
        r.idx > -1 && (l.refIndex = r.idx),
        t.matches.push(l)
    }
    )
}
function i4(e, t) {
    t.score = e.score
}
function l4(e, t, {includeMatches: n=ne.includeMatches, includeScore: r=ne.includeScore}={}) {
    const o = [];
    return n && o.push(o4),
    r && o.push(i4),
    e.map(i => {
        const {idx: l} = i
          , s = {
            item: t[l],
            refIndex: l
        };
        return o.length && o.forEach(a => {
            a(i, s)
        }
        ),
        s
    }
    )
}
class Wr {
    constructor(t, n={}, r) {
        this.options = {
            ...ne,
            ...n
        },
        this.options.useExtendedSearch,
        this._keyStore = new Px(this.options.keys),
        this.setCollection(t, r)
    }
    setCollection(t, n) {
        if (this._docs = t,
        n && !(n instanceof kc))
            throw new Error(bx);
        this._myIndex = n || gg(this.options.keys, this._docs, {
            getFn: this.options.getFn,
            fieldNormWeight: this.options.fieldNormWeight
        })
    }
    add(t) {
        ct(t) && (this._docs.push(t),
        this._myIndex.add(t))
    }
    remove(t= () => !1) {
        const n = [];
        for (let r = 0, o = this._docs.length; r < o; r += 1) {
            const i = this._docs[r];
            t(i, r) && (this.removeAt(r),
            r -= 1,
            o -= 1,
            n.push(i))
        }
        return n
    }
    removeAt(t) {
        this._docs.splice(t, 1),
        this._myIndex.removeAt(t)
    }
    getIndex() {
        return this._myIndex
    }
    search(t, {limit: n=-1}={}) {
        const {includeMatches: r, includeScore: o, shouldSort: i, sortFn: l, ignoreFieldNorm: s} = this.options;
        let a = Ot(t) ? Ot(this._docs[0]) ? this._searchStringList(t) : this._searchObjectList(t) : this._searchLogical(t);
        return r4(a, {
            ignoreFieldNorm: s
        }),
        i && a.sort(l),
        dg(n) && n > -1 && (a = a.slice(0, n)),
        l4(a, this._docs, {
            includeMatches: r,
            includeScore: o
        })
    }
    _searchStringList(t) {
        const n = su(t, this.options)
          , {records: r} = this._myIndex
          , o = [];
        return r.forEach( ({v: i, i: l, n: s}) => {
            if (!ct(i))
                return;
            const {isMatch: a, score: u, indices: c} = n.searchIn(i);
            a && o.push({
                item: i,
                idx: l,
                matches: [{
                    score: u,
                    value: i,
                    norm: s,
                    indices: c
                }]
            })
        }
        ),
        o
    }
    _searchLogical(t) {
        const n = Sg(t, this.options)
          , r = (s, a, u) => {
            if (!s.children) {
                const {keyId: f, searcher: m} = s
                  , x = this._findMatches({
                    key: this._keyStore.get(f),
                    value: this._myIndex.getValueForItemAtKeyId(a, f),
                    searcher: m
                });
                return x && x.length ? [{
                    idx: u,
                    item: a,
                    matches: x
                }] : []
            }
            const c = [];
            for (let f = 0, m = s.children.length; f < m; f += 1) {
                const x = s.children[f]
                  , y = r(x, a, u);
                if (y.length)
                    c.push(...y);
                else if (s.operator === Rl.AND)
                    return []
            }
            return c
        }
          , o = this._myIndex.records
          , i = {}
          , l = [];
        return o.forEach( ({$: s, i: a}) => {
            if (ct(s)) {
                let u = r(n, s, a);
                u.length && (i[a] || (i[a] = {
                    idx: a,
                    item: s,
                    matches: []
                },
                l.push(i[a])),
                u.forEach( ({matches: c}) => {
                    i[a].matches.push(...c)
                }
                ))
            }
        }
        ),
        l
    }
    _searchObjectList(t) {
        const n = su(t, this.options)
          , {keys: r, records: o} = this._myIndex
          , i = [];
        return o.forEach( ({$: l, i: s}) => {
            if (!ct(l))
                return;
            let a = [];
            r.forEach( (u, c) => {
                a.push(...this._findMatches({
                    key: u,
                    value: l[c],
                    searcher: n
                }))
            }
            ),
            a.length && i.push({
                idx: s,
                item: l,
                matches: a
            })
        }
        ),
        i
    }
    _findMatches({key: t, value: n, searcher: r}) {
        if (!ct(n))
            return [];
        let o = [];
        if (Xt(n))
            n.forEach( ({v: i, i: l, n: s}) => {
                if (!ct(i))
                    return;
                const {isMatch: a, score: u, indices: c} = r.searchIn(i);
                a && o.push({
                    score: u,
                    key: t,
                    value: i,
                    idx: l,
                    norm: s,
                    indices: c
                })
            }
            );
        else {
            const {v: i, n: l} = n
              , {isMatch: s, score: a, indices: u} = r.searchIn(i);
            s && o.push({
                score: a,
                key: t,
                value: i,
                norm: l,
                indices: u
            })
        }
        return o
    }
}
Wr.version = "7.0.0";
Wr.createIndex = gg;
Wr.parseIndex = zx;
Wr.config = ne;
Wr.parseQuery = Sg;
e4(Jx);
var _g = {
    exports: {}
};
( () => {
    var e = {
        181: (o, i, l) => {
            var s = /^\s+|\s+$/g
              , a = /^[-+]0x[0-9a-f]+$/i
              , u = /^0b[01]+$/i
              , c = /^0o[0-7]+$/i
              , f = parseInt
              , m = typeof l.g == "object" && l.g && l.g.Object === Object && l.g
              , x = typeof self == "object" && self && self.Object === Object && self
              , y = m || x || Function("return this")()
              , R = Object.prototype.toString
              , O = Math.max
              , v = Math.min
              , p = function() {
                return y.Date.now()
            };
            function g(N) {
                var P = typeof N;
                return !!N && (P == "object" || P == "function")
            }
            function T(N) {
                if (typeof N == "number")
                    return N;
                if (function(L) {
                    return typeof L == "symbol" || function(K) {
                        return !!K && typeof K == "object"
                    }(L) && R.call(L) == "[object Symbol]"
                }(N))
                    return NaN;
                if (g(N)) {
                    var P = typeof N.valueOf == "function" ? N.valueOf() : N;
                    N = g(P) ? P + "" : P
                }
                if (typeof N != "string")
                    return N === 0 ? N : +N;
                N = N.replace(s, "");
                var j = u.test(N);
                return j || c.test(N) ? f(N.slice(2), j ? 2 : 8) : a.test(N) ? NaN : +N
            }
            o.exports = function(N, P, j) {
                var L, K, B, q, le, re, ee = 0, _e = !1, he = !1, ke = !0;
                if (typeof N != "function")
                    throw new TypeError("Expected a function");
                function F(A) {
                    var M = L
                      , Y = K;
                    return L = K = void 0,
                    ee = A,
                    q = N.apply(Y, M)
                }
                function Q(A) {
                    var M = A - re;
                    return re === void 0 || M >= P || M < 0 || he && A - ee >= B
                }
                function V() {
                    var A = p();
                    if (Q(A))
                        return H(A);
                    le = setTimeout(V, function(M) {
                        var Y = P - (M - re);
                        return he ? v(Y, B - (M - ee)) : Y
                    }(A))
                }
                function H(A) {
                    return le = void 0,
                    ke && L ? F(A) : (L = K = void 0,
                    q)
                }
                function E() {
                    var A = p()
                      , M = Q(A);
                    if (L = arguments,
                    K = this,
                    re = A,
                    M) {
                        if (le === void 0)
                            return function(Y) {
                                return ee = Y,
                                le = setTimeout(V, P),
                                _e ? F(Y) : q
                            }(re);
                        if (he)
                            return le = setTimeout(V, P),
                            F(re)
                    }
                    return le === void 0 && (le = setTimeout(V, P)),
                    q
                }
                return P = T(P) || 0,
                g(j) && (_e = !!j.leading,
                B = (he = "maxWait"in j) ? O(T(j.maxWait) || 0, P) : B,
                ke = "trailing"in j ? !!j.trailing : ke),
                E.cancel = function() {
                    le !== void 0 && clearTimeout(le),
                    ee = 0,
                    L = re = K = le = void 0
                }
                ,
                E.flush = function() {
                    return le === void 0 ? q : H(p())
                }
                ,
                E
            }
        }
        ,
        858: (o, i, l) => {
            var s = "Expected a function"
              , a = NaN
              , u = "[object Symbol]"
              , c = /^\s+|\s+$/g
              , f = /^[-+]0x[0-9a-f]+$/i
              , m = /^0b[01]+$/i
              , x = /^0o[0-7]+$/i
              , y = parseInt
              , R = typeof l.g == "object" && l.g && l.g.Object === Object && l.g
              , O = typeof self == "object" && self && self.Object === Object && self
              , v = R || O || Function("return this")()
              , p = Object.prototype.toString
              , g = Math.max
              , T = Math.min
              , N = function() {
                return v.Date.now()
            };
            function P(L) {
                var K = typeof L;
                return !!L && (K == "object" || K == "function")
            }
            function j(L) {
                if (typeof L == "number")
                    return L;
                if (function(q) {
                    return typeof q == "symbol" || function(le) {
                        return !!le && typeof le == "object"
                    }(q) && p.call(q) == u
                }(L))
                    return a;
                if (P(L)) {
                    var K = typeof L.valueOf == "function" ? L.valueOf() : L;
                    L = P(K) ? K + "" : K
                }
                if (typeof L != "string")
                    return L === 0 ? L : +L;
                L = L.replace(c, "");
                var B = m.test(L);
                return B || x.test(L) ? y(L.slice(2), B ? 2 : 8) : f.test(L) ? a : +L
            }
            o.exports = function(L, K, B) {
                var q = !0
                  , le = !0;
                if (typeof L != "function")
                    throw new TypeError(s);
                return P(B) && (q = "leading"in B ? !!B.leading : q,
                le = "trailing"in B ? !!B.trailing : le),
                function(re, ee, _e) {
                    var he, ke, F, Q, V, H, E = 0, A = !1, M = !1, Y = !0;
                    if (typeof re != "function")
                        throw new TypeError(s);
                    function W(pe) {
                        var ae = he
                          , ce = ke;
                        return he = ke = void 0,
                        E = pe,
                        Q = re.apply(ce, ae)
                    }
                    function J(pe) {
                        var ae = pe - H;
                        return H === void 0 || ae >= ee || ae < 0 || M && pe - E >= F
                    }
                    function te() {
                        var pe = N();
                        if (J(pe))
                            return X(pe);
                        V = setTimeout(te, function(ae) {
                            var ce = ee - (ae - H);
                            return M ? T(ce, F - (ae - E)) : ce
                        }(pe))
                    }
                    function X(pe) {
                        return V = void 0,
                        Y && he ? W(pe) : (he = ke = void 0,
                        Q)
                    }
                    function ge() {
                        var pe = N()
                          , ae = J(pe);
                        if (he = arguments,
                        ke = this,
                        H = pe,
                        ae) {
                            if (V === void 0)
                                return function(ce) {
                                    return E = ce,
                                    V = setTimeout(te, ee),
                                    A ? W(ce) : Q
                                }(H);
                            if (M)
                                return V = setTimeout(te, ee),
                                W(H)
                        }
                        return V === void 0 && (V = setTimeout(te, ee)),
                        Q
                    }
                    return ee = j(ee) || 0,
                    P(_e) && (A = !!_e.leading,
                    F = (M = "maxWait"in _e) ? g(j(_e.maxWait) || 0, ee) : F,
                    Y = "trailing"in _e ? !!_e.trailing : Y),
                    ge.cancel = function() {
                        V !== void 0 && clearTimeout(V),
                        E = 0,
                        he = H = ke = V = void 0
                    }
                    ,
                    ge.flush = function() {
                        return V === void 0 ? Q : X(N())
                    }
                    ,
                    ge
                }(L, K, {
                    leading: q,
                    maxWait: K,
                    trailing: le
                })
            }
        }
        ,
        694: (o, i, l) => {
            var s = l(925);
            function a() {}
            function u() {}
            u.resetWarningCache = a,
            o.exports = function() {
                function c(x, y, R, O, v, p) {
                    if (p !== s) {
                        var g = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw g.name = "Invariant Violation",
                        g
                    }
                }
                function f() {
                    return c
                }
                c.isRequired = c;
                var m = {
                    array: c,
                    bigint: c,
                    bool: c,
                    func: c,
                    number: c,
                    object: c,
                    string: c,
                    symbol: c,
                    any: c,
                    arrayOf: f,
                    element: c,
                    elementType: c,
                    instanceOf: f,
                    node: c,
                    objectOf: f,
                    oneOf: f,
                    oneOfType: f,
                    shape: f,
                    exact: f,
                    checkPropTypes: u,
                    resetWarningCache: a
                };
                return m.PropTypes = m,
                m
            }
        }
        ,
        556: (o, i, l) => {
            o.exports = l(694)()
        }
        ,
        925: o => {
            o.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        }
    }
      , t = {};
    function n(o) {
        var i = t[o];
        if (i !== void 0)
            return i.exports;
        var l = t[o] = {
            exports: {}
        };
        return e[o](l, l.exports, n),
        l.exports
    }
    n.n = o => {
        var i = o && o.__esModule ? () => o.default : () => o;
        return n.d(i, {
            a: i
        }),
        i
    }
    ,
    n.d = (o, i) => {
        for (var l in i)
            n.o(i, l) && !n.o(o, l) && Object.defineProperty(o, l, {
                enumerable: !0,
                get: i[l]
            })
    }
    ,
    n.g = function() {
        if (typeof globalThis == "object")
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch {
            if (typeof window == "object")
                return window
        }
    }(),
    n.o = (o, i) => Object.prototype.hasOwnProperty.call(o, i),
    n.r = o => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(o, "__esModule", {
            value: !0
        })
    }
    ;
    var r = {};
    ( () => {
        n.r(r),
        n.d(r, {
            LazyLoadComponent: () => Gr,
            LazyLoadImage: () => C,
            trackWindowScroll: () => A
        });
        const o = $;
        var i = n.n(o)
          , l = n(556);
        function s() {
            return typeof window < "u" && "IntersectionObserver"in window && "isIntersecting"in window.IntersectionObserverEntry.prototype
        }
        function a(d) {
            return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
                return typeof h
            }
            : function(h) {
                return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h
            }
            ,
            a(d)
        }
        function u(d, h) {
            var w = Object.keys(d);
            if (Object.getOwnPropertySymbols) {
                var k = Object.getOwnPropertySymbols(d);
                h && (k = k.filter(function(S) {
                    return Object.getOwnPropertyDescriptor(d, S).enumerable
                })),
                w.push.apply(w, k)
            }
            return w
        }
        function c(d, h, w) {
            return (h = m(h))in d ? Object.defineProperty(d, h, {
                value: w,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : d[h] = w,
            d
        }
        function f(d, h) {
            for (var w = 0; w < h.length; w++) {
                var k = h[w];
                k.enumerable = k.enumerable || !1,
                k.configurable = !0,
                "value"in k && (k.writable = !0),
                Object.defineProperty(d, m(k.key), k)
            }
        }
        function m(d) {
            var h = function(w, k) {
                if (a(w) != "object" || !w)
                    return w;
                var S = w[Symbol.toPrimitive];
                if (S !== void 0) {
                    var b = S.call(w, "string");
                    if (a(b) != "object")
                        return b;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(w)
            }(d);
            return a(h) == "symbol" ? h : h + ""
        }
        function x(d, h, w) {
            return h = R(h),
            function(k, S) {
                if (S && (a(S) == "object" || typeof S == "function"))
                    return S;
                if (S !== void 0)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(b) {
                    if (b === void 0)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return b
                }(k)
            }(d, y() ? Reflect.construct(h, w || [], R(d).constructor) : h.apply(d, w))
        }
        function y() {
            try {
                var d = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch {}
            return (y = function() {
                return !!d
            }
            )()
        }
        function R(d) {
            return R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(h) {
                return h.__proto__ || Object.getPrototypeOf(h)
            }
            ,
            R(d)
        }
        function O(d, h) {
            return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(w, k) {
                return w.__proto__ = k,
                w
            }
            ,
            O(d, h)
        }
        var v = function(d) {
            d.forEach(function(h) {
                h.isIntersecting && h.target.onVisible()
            })
        }
          , p = {}
          , g = function(d) {
            function h(S) {
                var b;
                if (function(I, U) {
                    if (!(I instanceof U))
                        throw new TypeError("Cannot call a class as a function")
                }(this, h),
                (b = x(this, h, [S])).supportsObserver = !S.scrollPosition && S.useIntersectionObserver && s(),
                b.supportsObserver) {
                    var D = S.threshold;
                    b.observer = function(I) {
                        return p[I] = p[I] || new IntersectionObserver(v,{
                            rootMargin: I + "px"
                        }),
                        p[I]
                    }(D)
                }
                return b
            }
            return function(S, b) {
                if (typeof b != "function" && b !== null)
                    throw new TypeError("Super expression must either be null or a function");
                S.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: S,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(S, "prototype", {
                    writable: !1
                }),
                b && O(S, b)
            }(h, d),
            w = h,
            k = [{
                key: "componentDidMount",
                value: function() {
                    this.placeholder && this.observer && (this.placeholder.onVisible = this.props.onVisible,
                    this.observer.observe(this.placeholder)),
                    this.supportsObserver || this.updateVisibility()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.observer && this.placeholder && this.observer.unobserve(this.placeholder)
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.supportsObserver || this.updateVisibility()
                }
            }, {
                key: "getPlaceholderBoundingBox",
                value: function() {
                    var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props.scrollPosition
                      , b = this.placeholder.getBoundingClientRect()
                      , D = this.placeholder.style
                      , I = parseInt(D.getPropertyValue("margin-left"), 10) || 0
                      , U = parseInt(D.getPropertyValue("margin-top"), 10) || 0;
                    return {
                        bottom: S.y + b.bottom + U,
                        left: S.x + b.left + I,
                        right: S.x + b.right + I,
                        top: S.y + b.top + U
                    }
                }
            }, {
                key: "isPlaceholderInViewport",
                value: function() {
                    if (typeof window > "u" || !this.placeholder)
                        return !1;
                    var S = this.props
                      , b = S.scrollPosition
                      , D = S.threshold
                      , I = this.getPlaceholderBoundingBox(b)
                      , U = b.y + window.innerHeight
                      , Z = b.x
                      , fe = b.x + window.innerWidth
                      , oe = b.y;
                    return oe - D <= I.bottom && U + D >= I.top && Z - D <= I.right && fe + D >= I.left
                }
            }, {
                key: "updateVisibility",
                value: function() {
                    this.isPlaceholderInViewport() && this.props.onVisible()
                }
            }, {
                key: "render",
                value: function() {
                    var S = this
                      , b = this.props
                      , D = b.className
                      , I = b.height
                      , U = b.placeholder
                      , Z = b.style
                      , fe = b.width;
                    if (U && typeof U.type != "function")
                        return i().cloneElement(U, {
                            ref: function(ue) {
                                return S.placeholder = ue
                            }
                        });
                    var oe = function(ue) {
                        for (var ye = 1; ye < arguments.length; ye++) {
                            var Ee = arguments[ye] != null ? arguments[ye] : {};
                            ye % 2 ? u(Object(Ee), !0).forEach(function(Oe) {
                                c(ue, Oe, Ee[Oe])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(ue, Object.getOwnPropertyDescriptors(Ee)) : u(Object(Ee)).forEach(function(Oe) {
                                Object.defineProperty(ue, Oe, Object.getOwnPropertyDescriptor(Ee, Oe))
                            })
                        }
                        return ue
                    }({
                        display: "inline-block"
                    }, Z);
                    return fe !== void 0 && (oe.width = fe),
                    I !== void 0 && (oe.height = I),
                    i().createElement("span", {
                        className: D,
                        ref: function(ue) {
                            return S.placeholder = ue
                        },
                        style: oe
                    }, U)
                }
            }],
            k && f(w.prototype, k),
            Object.defineProperty(w, "prototype", {
                writable: !1
            }),
            w;
            var w, k
        }(i().Component);
        g.propTypes = {
            onVisible: l.PropTypes.func.isRequired,
            className: l.PropTypes.string,
            height: l.PropTypes.oneOfType([l.PropTypes.number, l.PropTypes.string]),
            placeholder: l.PropTypes.element,
            threshold: l.PropTypes.number,
            useIntersectionObserver: l.PropTypes.bool,
            scrollPosition: l.PropTypes.shape({
                x: l.PropTypes.number.isRequired,
                y: l.PropTypes.number.isRequired
            }),
            width: l.PropTypes.oneOfType([l.PropTypes.number, l.PropTypes.string])
        },
        g.defaultProps = {
            className: "",
            placeholder: null,
            threshold: 100,
            useIntersectionObserver: !0
        };
        const T = g;
        var N = n(181)
          , P = n.n(N)
          , j = n(858)
          , L = n.n(j)
          , K = function(d) {
            var h = getComputedStyle(d, null);
            return h.getPropertyValue("overflow") + h.getPropertyValue("overflow-y") + h.getPropertyValue("overflow-x")
        };
        const B = function(d) {
            if (!(d instanceof HTMLElement))
                return window;
            for (var h = d; h && h instanceof HTMLElement; ) {
                if (/(scroll|auto)/.test(K(h)))
                    return h;
                h = h.parentNode
            }
            return window
        };
        function q(d) {
            return q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
                return typeof h
            }
            : function(h) {
                return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h
            }
            ,
            q(d)
        }
        var le = ["delayMethod", "delayTime"];
        function re() {
            return re = Object.assign ? Object.assign.bind() : function(d) {
                for (var h = 1; h < arguments.length; h++) {
                    var w = arguments[h];
                    for (var k in w)
                        ({}).hasOwnProperty.call(w, k) && (d[k] = w[k])
                }
                return d
            }
            ,
            re.apply(null, arguments)
        }
        function ee(d, h) {
            for (var w = 0; w < h.length; w++) {
                var k = h[w];
                k.enumerable = k.enumerable || !1,
                k.configurable = !0,
                "value"in k && (k.writable = !0),
                Object.defineProperty(d, _e(k.key), k)
            }
        }
        function _e(d) {
            var h = function(w, k) {
                if (q(w) != "object" || !w)
                    return w;
                var S = w[Symbol.toPrimitive];
                if (S !== void 0) {
                    var b = S.call(w, "string");
                    if (q(b) != "object")
                        return b;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(w)
            }(d);
            return q(h) == "symbol" ? h : h + ""
        }
        function he(d, h, w) {
            return h = Q(h),
            ke(d, F() ? Reflect.construct(h, w || [], Q(d).constructor) : h.apply(d, w))
        }
        function ke(d, h) {
            if (h && (q(h) == "object" || typeof h == "function"))
                return h;
            if (h !== void 0)
                throw new TypeError("Derived constructors may only return object or undefined");
            return function(w) {
                if (w === void 0)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return w
            }(d)
        }
        function F() {
            try {
                var d = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch {}
            return (F = function() {
                return !!d
            }
            )()
        }
        function Q(d) {
            return Q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(h) {
                return h.__proto__ || Object.getPrototypeOf(h)
            }
            ,
            Q(d)
        }
        function V(d, h) {
            return V = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(w, k) {
                return w.__proto__ = k,
                w
            }
            ,
            V(d, h)
        }
        var H = function() {
            return typeof window > "u" ? 0 : window.scrollX || window.pageXOffset
        }
          , E = function() {
            return typeof window > "u" ? 0 : window.scrollY || window.pageYOffset
        };
        const A = function(d) {
            var h = function(w) {
                function k(D) {
                    var I;
                    if (function(Z, fe) {
                        if (!(Z instanceof fe))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, k),
                    (I = he(this, k, [D])).useIntersectionObserver = D.useIntersectionObserver && s(),
                    I.useIntersectionObserver)
                        return ke(I);
                    var U = I.onChangeScroll.bind(I);
                    return D.delayMethod === "debounce" ? I.delayedScroll = P()(U, D.delayTime) : D.delayMethod === "throttle" && (I.delayedScroll = L()(U, D.delayTime)),
                    I.state = {
                        scrollPosition: {
                            x: H(),
                            y: E()
                        }
                    },
                    I.baseComponentRef = i().createRef(),
                    I
                }
                return function(D, I) {
                    if (typeof I != "function" && I !== null)
                        throw new TypeError("Super expression must either be null or a function");
                    D.prototype = Object.create(I && I.prototype, {
                        constructor: {
                            value: D,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(D, "prototype", {
                        writable: !1
                    }),
                    I && V(D, I)
                }(k, w),
                S = k,
                b = [{
                    key: "componentDidMount",
                    value: function() {
                        this.addListeners()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.removeListeners()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        typeof window > "u" || this.useIntersectionObserver || B(this.baseComponentRef.current) !== this.scrollElement && (this.removeListeners(),
                        this.addListeners())
                    }
                }, {
                    key: "addListeners",
                    value: function() {
                        typeof window > "u" || this.useIntersectionObserver || (this.scrollElement = B(this.baseComponentRef.current),
                        this.scrollElement.addEventListener("scroll", this.delayedScroll, {
                            passive: !0
                        }),
                        window.addEventListener("resize", this.delayedScroll, {
                            passive: !0
                        }),
                        this.scrollElement !== window && window.addEventListener("scroll", this.delayedScroll, {
                            passive: !0
                        }))
                    }
                }, {
                    key: "removeListeners",
                    value: function() {
                        typeof window > "u" || this.useIntersectionObserver || (this.scrollElement.removeEventListener("scroll", this.delayedScroll),
                        window.removeEventListener("resize", this.delayedScroll),
                        this.scrollElement !== window && window.removeEventListener("scroll", this.delayedScroll))
                    }
                }, {
                    key: "onChangeScroll",
                    value: function() {
                        this.useIntersectionObserver || this.setState({
                            scrollPosition: {
                                x: H(),
                                y: E()
                            }
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var D = this.props
                          , I = (D.delayMethod,
                        D.delayTime,
                        function(Z, fe) {
                            if (Z == null)
                                return {};
                            var oe, ue, ye = function(Oe, Vt) {
                                if (Oe == null)
                                    return {};
                                var tn = {};
                                for (var li in Oe)
                                    if ({}.hasOwnProperty.call(Oe, li)) {
                                        if (Vt.indexOf(li) >= 0)
                                            continue;
                                        tn[li] = Oe[li]
                                    }
                                return tn
                            }(Z, fe);
                            if (Object.getOwnPropertySymbols) {
                                var Ee = Object.getOwnPropertySymbols(Z);
                                for (ue = 0; ue < Ee.length; ue++)
                                    oe = Ee[ue],
                                    fe.indexOf(oe) >= 0 || {}.propertyIsEnumerable.call(Z, oe) && (ye[oe] = Z[oe])
                            }
                            return ye
                        }(D, le))
                          , U = this.useIntersectionObserver ? null : this.state.scrollPosition;
                        return i().createElement(d, re({
                            forwardRef: this.baseComponentRef,
                            scrollPosition: U
                        }, I))
                    }
                }],
                b && ee(S.prototype, b),
                Object.defineProperty(S, "prototype", {
                    writable: !1
                }),
                S;
                var S, b
            }(i().Component);
            return h.propTypes = {
                delayMethod: l.PropTypes.oneOf(["debounce", "throttle"]),
                delayTime: l.PropTypes.number,
                useIntersectionObserver: l.PropTypes.bool
            },
            h.defaultProps = {
                delayMethod: "throttle",
                delayTime: 300,
                useIntersectionObserver: !0
            },
            h
        };
        function M(d) {
            return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
                return typeof h
            }
            : function(h) {
                return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h
            }
            ,
            M(d)
        }
        function Y(d, h) {
            for (var w = 0; w < h.length; w++) {
                var k = h[w];
                k.enumerable = k.enumerable || !1,
                k.configurable = !0,
                "value"in k && (k.writable = !0),
                Object.defineProperty(d, W(k.key), k)
            }
        }
        function W(d) {
            var h = function(w, k) {
                if (M(w) != "object" || !w)
                    return w;
                var S = w[Symbol.toPrimitive];
                if (S !== void 0) {
                    var b = S.call(w, "string");
                    if (M(b) != "object")
                        return b;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(w)
            }(d);
            return M(h) == "symbol" ? h : h + ""
        }
        function J(d, h, w) {
            return h = X(h),
            function(k, S) {
                if (S && (M(S) == "object" || typeof S == "function"))
                    return S;
                if (S !== void 0)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(b) {
                    if (b === void 0)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return b
                }(k)
            }(d, te() ? Reflect.construct(h, w || [], X(d).constructor) : h.apply(d, w))
        }
        function te() {
            try {
                var d = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch {}
            return (te = function() {
                return !!d
            }
            )()
        }
        function X(d) {
            return X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(h) {
                return h.__proto__ || Object.getPrototypeOf(h)
            }
            ,
            X(d)
        }
        function ge(d, h) {
            return ge = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(w, k) {
                return w.__proto__ = k,
                w
            }
            ,
            ge(d, h)
        }
        var pe = function(d) {
            function h(S) {
                return function(b, D) {
                    if (!(b instanceof D))
                        throw new TypeError("Cannot call a class as a function")
                }(this, h),
                J(this, h, [S])
            }
            return function(S, b) {
                if (typeof b != "function" && b !== null)
                    throw new TypeError("Super expression must either be null or a function");
                S.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: S,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(S, "prototype", {
                    writable: !1
                }),
                b && ge(S, b)
            }(h, d),
            w = h,
            (k = [{
                key: "render",
                value: function() {
                    return i().createElement(T, this.props)
                }
            }]) && Y(w.prototype, k),
            Object.defineProperty(w, "prototype", {
                writable: !1
            }),
            w;
            var w, k
        }(i().Component);
        const ae = A(pe);
        function ce(d) {
            return ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
                return typeof h
            }
            : function(h) {
                return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h
            }
            ,
            ce(d)
        }
        function st(d, h) {
            for (var w = 0; w < h.length; w++) {
                var k = h[w];
                k.enumerable = k.enumerable || !1,
                k.configurable = !0,
                "value"in k && (k.writable = !0),
                Object.defineProperty(d, Dt(k.key), k)
            }
        }
        function Dt(d) {
            var h = function(w, k) {
                if (ce(w) != "object" || !w)
                    return w;
                var S = w[Symbol.toPrimitive];
                if (S !== void 0) {
                    var b = S.call(w, "string");
                    if (ce(b) != "object")
                        return b;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(w)
            }(d);
            return ce(h) == "symbol" ? h : h + ""
        }
        function et(d, h, w) {
            return h = jn(h),
            function(k, S) {
                if (S && (ce(S) == "object" || typeof S == "function"))
                    return S;
                if (S !== void 0)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(b) {
                    if (b === void 0)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return b
                }(k)
            }(d, He() ? Reflect.construct(h, w || [], jn(d).constructor) : h.apply(d, w))
        }
        function He() {
            try {
                var d = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch {}
            return (He = function() {
                return !!d
            }
            )()
        }
        function jn(d) {
            return jn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(h) {
                return h.__proto__ || Object.getPrototypeOf(h)
            }
            ,
            jn(d)
        }
        function Hr(d, h) {
            return Hr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(w, k) {
                return w.__proto__ = k,
                w
            }
            ,
            Hr(d, h)
        }
        var On = function(d) {
            function h(S) {
                var b;
                (function(fe, oe) {
                    if (!(fe instanceof oe))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this, h),
                b = et(this, h, [S]);
                var D = S.afterLoad
                  , I = S.beforeLoad
                  , U = S.scrollPosition
                  , Z = S.visibleByDefault;
                return b.state = {
                    visible: Z
                },
                Z && (I(),
                D()),
                b.onVisible = b.onVisible.bind(b),
                b.isScrollTracked = !!(U && Number.isFinite(U.x) && U.x >= 0 && Number.isFinite(U.y) && U.y >= 0),
                b
            }
            return function(S, b) {
                if (typeof b != "function" && b !== null)
                    throw new TypeError("Super expression must either be null or a function");
                S.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: S,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(S, "prototype", {
                    writable: !1
                }),
                b && Hr(S, b)
            }(h, d),
            w = h,
            (k = [{
                key: "componentDidUpdate",
                value: function(S, b) {
                    b.visible !== this.state.visible && this.props.afterLoad()
                }
            }, {
                key: "onVisible",
                value: function() {
                    this.props.beforeLoad(),
                    this.setState({
                        visible: !0
                    })
                }
            }, {
                key: "render",
                value: function() {
                    if (this.state.visible)
                        return this.props.children;
                    var S = this.props
                      , b = S.className
                      , D = S.delayMethod
                      , I = S.delayTime
                      , U = S.height
                      , Z = S.placeholder
                      , fe = S.scrollPosition
                      , oe = S.style
                      , ue = S.threshold
                      , ye = S.useIntersectionObserver
                      , Ee = S.width;
                    return this.isScrollTracked || ye && s() ? i().createElement(T, {
                        className: b,
                        height: U,
                        onVisible: this.onVisible,
                        placeholder: Z,
                        scrollPosition: fe,
                        style: oe,
                        threshold: ue,
                        useIntersectionObserver: ye,
                        width: Ee
                    }) : i().createElement(ae, {
                        className: b,
                        delayMethod: D,
                        delayTime: I,
                        height: U,
                        onVisible: this.onVisible,
                        placeholder: Z,
                        style: oe,
                        threshold: ue,
                        width: Ee
                    })
                }
            }]) && st(w.prototype, k),
            Object.defineProperty(w, "prototype", {
                writable: !1
            }),
            w;
            var w, k
        }(i().Component);
        On.propTypes = {
            afterLoad: l.PropTypes.func,
            beforeLoad: l.PropTypes.func,
            useIntersectionObserver: l.PropTypes.bool,
            visibleByDefault: l.PropTypes.bool
        },
        On.defaultProps = {
            afterLoad: function() {
                return {}
            },
            beforeLoad: function() {
                return {}
            },
            useIntersectionObserver: !0,
            visibleByDefault: !1
        };
        const Gr = On;
        function zt(d) {
            return zt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
                return typeof h
            }
            : function(h) {
                return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h
            }
            ,
            zt(d)
        }
        var ha = ["afterLoad", "beforeLoad", "delayMethod", "delayTime", "effect", "placeholder", "placeholderSrc", "scrollPosition", "threshold", "useIntersectionObserver", "visibleByDefault", "wrapperClassName", "wrapperProps"];
        function tr(d, h) {
            var w = Object.keys(d);
            if (Object.getOwnPropertySymbols) {
                var k = Object.getOwnPropertySymbols(d);
                h && (k = k.filter(function(S) {
                    return Object.getOwnPropertyDescriptor(d, S).enumerable
                })),
                w.push.apply(w, k)
            }
            return w
        }
        function nr(d) {
            for (var h = 1; h < arguments.length; h++) {
                var w = arguments[h] != null ? arguments[h] : {};
                h % 2 ? tr(Object(w), !0).forEach(function(k) {
                    ma(d, k, w[k])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(w)) : tr(Object(w)).forEach(function(k) {
                    Object.defineProperty(d, k, Object.getOwnPropertyDescriptor(w, k))
                })
            }
            return d
        }
        function ma(d, h, w) {
            return (h = oi(h))in d ? Object.defineProperty(d, h, {
                value: w,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : d[h] = w,
            d
        }
        function rr() {
            return rr = Object.assign ? Object.assign.bind() : function(d) {
                for (var h = 1; h < arguments.length; h++) {
                    var w = arguments[h];
                    for (var k in w)
                        ({}).hasOwnProperty.call(w, k) && (d[k] = w[k])
                }
                return d
            }
            ,
            rr.apply(null, arguments)
        }
        function ga(d, h) {
            for (var w = 0; w < h.length; w++) {
                var k = h[w];
                k.enumerable = k.enumerable || !1,
                k.configurable = !0,
                "value"in k && (k.writable = !0),
                Object.defineProperty(d, oi(k.key), k)
            }
        }
        function oi(d) {
            var h = function(w, k) {
                if (zt(w) != "object" || !w)
                    return w;
                var S = w[Symbol.toPrimitive];
                if (S !== void 0) {
                    var b = S.call(w, "string");
                    if (zt(b) != "object")
                        return b;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(w)
            }(d);
            return zt(h) == "symbol" ? h : h + ""
        }
        function va(d, h, w) {
            return h = An(h),
            function(k, S) {
                if (S && (zt(S) == "object" || typeof S == "function"))
                    return S;
                if (S !== void 0)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(b) {
                    if (b === void 0)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return b
                }(k)
            }(d, ii() ? Reflect.construct(h, w || [], An(d).constructor) : h.apply(d, w))
        }
        function ii() {
            try {
                var d = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch {}
            return (ii = function() {
                return !!d
            }
            )()
        }
        function An(d) {
            return An = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(h) {
                return h.__proto__ || Object.getPrototypeOf(h)
            }
            ,
            An(d)
        }
        function Kr(d, h) {
            return Kr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(w, k) {
                return w.__proto__ = k,
                w
            }
            ,
            Kr(d, h)
        }
        var Qr = function(d) {
            function h(S) {
                var b;
                return function(D, I) {
                    if (!(D instanceof I))
                        throw new TypeError("Cannot call a class as a function")
                }(this, h),
                (b = va(this, h, [S])).state = {
                    loaded: !1
                },
                b
            }
            return function(S, b) {
                if (typeof b != "function" && b !== null)
                    throw new TypeError("Super expression must either be null or a function");
                S.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: S,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(S, "prototype", {
                    writable: !1
                }),
                b && Kr(S, b)
            }(h, d),
            w = h,
            k = [{
                key: "onImageLoad",
                value: function() {
                    var S = this;
                    return this.state.loaded ? null : function(b) {
                        S.props.onLoad(b),
                        S.props.afterLoad(),
                        S.setState({
                            loaded: !0
                        })
                    }
                }
            }, {
                key: "getImg",
                value: function() {
                    var S = this.props
                      , b = (S.afterLoad,
                    S.beforeLoad,
                    S.delayMethod,
                    S.delayTime,
                    S.effect,
                    S.placeholder,
                    S.placeholderSrc,
                    S.scrollPosition,
                    S.threshold,
                    S.useIntersectionObserver,
                    S.visibleByDefault,
                    S.wrapperClassName,
                    S.wrapperProps,
                    function(D, I) {
                        if (D == null)
                            return {};
                        var U, Z, fe = function(ue, ye) {
                            if (ue == null)
                                return {};
                            var Ee = {};
                            for (var Oe in ue)
                                if ({}.hasOwnProperty.call(ue, Oe)) {
                                    if (ye.indexOf(Oe) >= 0)
                                        continue;
                                    Ee[Oe] = ue[Oe]
                                }
                            return Ee
                        }(D, I);
                        if (Object.getOwnPropertySymbols) {
                            var oe = Object.getOwnPropertySymbols(D);
                            for (Z = 0; Z < oe.length; Z++)
                                U = oe[Z],
                                I.indexOf(U) >= 0 || {}.propertyIsEnumerable.call(D, U) && (fe[U] = D[U])
                        }
                        return fe
                    }(S, ha));
                    return i().createElement("img", rr({}, b, {
                        onLoad: this.onImageLoad()
                    }))
                }
            }, {
                key: "getLazyLoadImage",
                value: function() {
                    var S = this.props
                      , b = S.beforeLoad
                      , D = S.className
                      , I = S.delayMethod
                      , U = S.delayTime
                      , Z = S.height
                      , fe = S.placeholder
                      , oe = S.scrollPosition
                      , ue = S.style
                      , ye = S.threshold
                      , Ee = S.useIntersectionObserver
                      , Oe = S.visibleByDefault
                      , Vt = S.width;
                    return i().createElement(Gr, {
                        beforeLoad: b,
                        className: D,
                        delayMethod: I,
                        delayTime: U,
                        height: Z,
                        placeholder: fe,
                        scrollPosition: oe,
                        style: ue,
                        threshold: ye,
                        useIntersectionObserver: Ee,
                        visibleByDefault: Oe,
                        width: Vt
                    }, this.getImg())
                }
            }, {
                key: "getWrappedLazyLoadImage",
                value: function(S) {
                    var b = this.props
                      , D = b.effect
                      , I = b.height
                      , U = b.placeholderSrc
                      , Z = b.width
                      , fe = b.wrapperClassName
                      , oe = b.wrapperProps
                      , ue = this.state.loaded
                      , ye = ue ? " lazy-load-image-loaded" : ""
                      , Ee = ue || !U ? {} : {
                        backgroundImage: "url(".concat(U, ")"),
                        backgroundSize: "100% 100%"
                    };
                    return i().createElement("span", rr({
                        className: fe + " lazy-load-image-background " + D + ye,
                        style: nr(nr({}, Ee), {}, {
                            color: "transparent",
                            display: "inline-block",
                            height: I,
                            width: Z
                        })
                    }, oe), S)
                }
            }, {
                key: "render",
                value: function() {
                    var S = this.props
                      , b = S.effect
                      , D = S.placeholderSrc
                      , I = S.visibleByDefault
                      , U = S.wrapperClassName
                      , Z = S.wrapperProps
                      , fe = this.getLazyLoadImage();
                    return (b || D) && !I || U || Z ? this.getWrappedLazyLoadImage(fe) : fe
                }
            }],
            k && ga(w.prototype, k),
            Object.defineProperty(w, "prototype", {
                writable: !1
            }),
            w;
            var w, k
        }(i().Component);
        Qr.propTypes = {
            onLoad: l.PropTypes.func,
            afterLoad: l.PropTypes.func,
            beforeLoad: l.PropTypes.func,
            delayMethod: l.PropTypes.string,
            delayTime: l.PropTypes.number,
            effect: l.PropTypes.string,
            placeholderSrc: l.PropTypes.string,
            threshold: l.PropTypes.number,
            useIntersectionObserver: l.PropTypes.bool,
            visibleByDefault: l.PropTypes.bool,
            wrapperClassName: l.PropTypes.string,
            wrapperProps: l.PropTypes.object
        },
        Qr.defaultProps = {
            onLoad: function() {},
            afterLoad: function() {
                return {}
            },
            beforeLoad: function() {
                return {}
            },
            delayMethod: "throttle",
            delayTime: 300,
            effect: "",
            placeholderSrc: null,
            threshold: 100,
            useIntersectionObserver: !0,
            visibleByDefault: !1,
            wrapperClassName: ""
        };
        const C = Qr
    }
    )(),
    _g.exports = r
}
)();
var a4 = _g.exports;
function s4() {
    const e = fa()
      , [t,n] = $.useState("")
      , o = new Wr(Wi,{
        keys: ["name"]
    }).search(t)
      , i = t ? o.map(a => a.item) : Wi;
    function l(a) {
        n(a.target.value)
    }
    async function s(a) {
        if (a.proxy) {
            const u = await chemical.encode(a.url, {
                service: "uv",
                autoHttps: !0
            });
            sessionStorage.setItem("lpurl", u),
            sessionStorage.setItem("rawurl", a.name),
            e("/go")
        } else
            e(`/play/${a.url}`)
    }
    return _.jsx(_.Fragment, {
        children: _.jsxs("div", {
            className: "flex flex-col justify-center items-center",
            children: [_.jsx("h1", {
                className: "text-3xl font-bold",
                children: "Games"
            }), _.jsx("input", {
                type: "text",
                className: "input input-bordered mt-5 transition-width duration-300 w-[300px] focus:w-[320px] focus:input-primary",
                placeholder: `Search ${Wi.length} Games`,
                value: t,
                onChange: l
            }), _.jsx(pa, {}), _.jsx("div", {
                className: "games flex flex-wrap m-0 justify-center gap-4 mt-5",
                children: i.map(a => {
                    const u = a.proxy ? `/media/games/${a.image}` : `/cdn/${a.url}/${a.image}`;
                    return _.jsxs("div", {
                        className: "game card  flex flex-col justify-center items-center",
                        children: [_.jsx(a4.LazyLoadImage, {
                            src: u,
                            alt: a.name,
                            width: "200px",
                            loading: "lazy",
                            effect: "opacity",
                            height: "200px",
                            onClick: () => s(a),
                            className: `rounded-3xl min-h-[200px] min-w-[200px] transition-all hover:scale-95
`
                        }), _.jsx("p", {
                            className: "mt-2 font-bold",
                            children: a.name
                        }), _.jsxs("div", {
                            className: "flex flex-row gap-2",
                            children: [a.new && _.jsx("p", {
                                className: "badge badge-primary",
                                children: "NEW"
                            }), a.top && _.jsx("p", {
                                className: "badge badge-primary",
                                children: "🔥"
                            }), a.exp && _.jsx("p", {
                                className: "badge badge-primary",
                                children: "🧪"
                            }), a.updated && _.jsx("p", {
                                className: "badge badge-primary",
                                children: "🆕 Updated"
                            })]
                        })]
                    }, a.name)
                }
                )
            })]
        })
    })
}
function u4() {
    const e = fa()
      , [t,n] = $.useState("")
      , [r,o] = $.useState(new Date().toLocaleTimeString())
      , i = [{
        name: "Chess",
        image: "/media/apps/chess.png",
        link: "https://www.chess.com"
    }, {
        name: "Discord",
        image: "/media/apps/discord.jpeg",
        link: "https://discord.com/app"
    }, {
        name: "GFN",
        image: "/media/apps/GFN.png",
        link: "https://www.geforce.com"
    }, {
        name: "Google",
        image: "/media/apps/google.png",
        link: "https://www.google.com"
    }, {
        name: "Netflix",
        image: "/media/apps/netflix.png",
        link: "https://www.netflix.com"
    }, {
        name: "Now.gg",
        image: "/media/apps/nowgg.png",
        link: "https://now.gg"
    }, {
        name: "Reddit",
        image: "/media/apps/reddit.png",
        link: "https://www.reddit.com"
    }, {
        name: "Sflix",
        image: "/media/apps/sflix.png",
        link: "https://www.sflix.to"
    }, {
        name: "Spotify",
        image: "/media/apps/spotify.png",
        link: "https://www.spotify.com"
    }, {
        name: "Telegram",
        image: "/media/apps/Telegram.png",
        link: "https://telegram.org"
    }, {
        name: "TikTok",
        image: "/media/apps/tiktok.jpg",
        link: "https://www.tiktok.com"
    }, {
        name: "X",
        image: "/media/apps/x.jpg",
        link: "https://x.com"
    }, {
        name: "YouTube",
        image: "/media/apps/youtube.jpg",
        link: "https://www.youtube.com"
    }];
    function l() {
        o(new Date().toLocaleTimeString())
    }
    $.useEffect( () => {
        const c = setInterval(l, 1e3);
        return () => clearInterval(c)
    }
    , []);
    async function s() {
        const c = await chemical.encode(t, {
            service: "uv",
            autoHttps: !0,
            searchEngine: chemical.getStore("searchEngine")
        });
        e("/go"),
        sessionStorage.setItem("lpurl", c)
    }
    function a(c) {
        c.preventDefault(),
        sessionStorage.setItem("rawurl", t),
        s()
    }
    async function u(c) {
        const f = await chemical.encode(c, {
            service: "uv",
            autoHttps: !0,
            searchEngine: chemical.getStore("searchEngine")
        });
        e("/go"),
        sessionStorage.setItem("rawurl", c),
        sessionStorage.setItem("lpurl", f)
    }
    return _.jsxs("div", {
        className: "flex flex-col justify-center items-center",
        children: [_.jsx(pa, {}), _.jsx("h1", {
            className: "text-7xl font-bold transition-all",
            children: r
        }), _.jsxs("form", {
            onSubmit: a,
            className: "join items-center mt-5",
            children: [_.jsx("div", {
                className: "join-item btn btn-lg btn-primary",
                children: _.jsx("img", {
                    src: localStorage.getItem("searchEngineFavicon") || "/media/apps/google.png",
                    alt: "",
                    className: "w-10"
                })
            }), _.jsx("input", {
                value: t,
                onChange: c => n(c.target.value),
                type: "text",
                className: "input input-bordered input-lg transition-width duration-300 w-[500px] focus:w-[520px] focus:input-primary join-item ",
                placeholder: "Search The web"
            }), _.jsx("button", {
                className: "btn btn-lg btn-primary join-item border-l-0",
                type: "submit",
                children: _.jsx(ug, {
                    size: 24
                })
            })]
        }), _.jsx("div", {
            className: "flex mt-6 flex-wrap justify-center gap-5 w-[700px]",
            children: i.map( (c, f) => _.jsx("button", {
                onClick: () => u(c.link),
                className: "btn flex flex-col btn-ghost justify-center items-center h-[100px] w-[100px]",
                children: _.jsxs("div", {
                    className: "flex flex-col justify-center items-center",
                    children: [_.jsx("img", {
                        src: `${c.image}`,
                        alt: "",
                        className: "w-7 mb-3"
                    }), c.name]
                })
            }, f))
        })]
    })
}
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c4 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , kg = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var f4 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d4 = $.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: l, ...s}, a) => $.createElement("svg", {
    ref: a,
    ...f4,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: kg("lucide", o),
    ...s
}, [...l.map( ([u,c]) => $.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xg = (e, t) => {
    const n = $.forwardRef( ({className: r, ...o}, i) => $.createElement(d4, {
        ref: i,
        iconNode: t,
        className: kg(`lucide-${c4(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p4 = xg("Fullscreen", [["path", {
    d: "M3 7V5a2 2 0 0 1 2-2h2",
    key: "aa7l1z"
}], ["path", {
    d: "M17 3h2a2 2 0 0 1 2 2v2",
    key: "4qcy5o"
}], ["path", {
    d: "M21 17v2a2 2 0 0 1-2 2h-2",
    key: "6vwrx8"
}], ["path", {
    d: "M7 21H5a2 2 0 0 1-2-2v-2",
    key: "ioqczr"
}], ["rect", {
    width: "10",
    height: "8",
    x: "7",
    y: "8",
    rx: "1",
    key: "vys8me"
}]]);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h4 = xg("SquareMousePointer", [["path", {
    d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
    key: "xwnzip"
}], ["path", {
    d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",
    key: "14rsvq"
}]]);
function m4() {
    const e = $.useRef(null)
      , {game: t} = wk()
      , n = Wi.find(o => o.url === t);
    if (!n)
        return _.jsx("div", {
            children: "Game not found."
        });
    const r = `/cdn/${n.url}/`;
    return console.log(r),
    _.jsx("div", {
        className: "flex flex-col items-center aspect-video overflow-hidden",
        children: _.jsxs("div", {
            className: "card bg-base-300 w-[calc(100vw-9.9rem)] h-[calc(100vh-9.9rem)]  shadow-xl flex overflow-hidden",
            children: [_.jsx("iframe", {
                ref: e,
                src: r,
                title: n.name || "Game",
                allowFullScreen: !0,
                className: "w-full h-full",
                frameBorder: "0"
            }), _.jsxs("div", {
                className: "flex flex-row items-center p-4 justify-between",
                children: [_.jsx("img", {
                    src: r + n.image,
                    alt: "",
                    className: "w-10 rounded-2xl"
                }), _.jsx("h1", {
                    className: "text-lg font-bold mt-2",
                    children: n.name || t
                }), _.jsx("button", {
                    className: "btn btn-primary",
                    onClick: () => {
                        e.current.requestFullscreen()
                    }
                    ,
                    children: _.jsx(p4, {})
                })]
            })]
        })
    })
}
function g4() {
    const e = fa()
      , t = sessionStorage.getItem("lpurl")
      , [n,r] = $.useState("")
      , o = $.useRef(null)
      , [i,l] = $.useState(!1)
      , s = () => {
        if (o.current) {
            const y = o.current;
            y.requestFullscreen ? y.requestFullscreen() : y.mozRequestFullScreen ? y.mozRequestFullScreen() : y.webkitRequestFullscreen ? y.webkitRequestFullscreen() : y.msRequestFullscreen && y.msRequestFullscreen()
        }
    }
    ;
    async function a(y) {
        r(y.target.value);
        const R = await chemical.encode(y.target.value, {
            service: "uv",
            autoHttps: !0,
            searchEngine: "https://www.google.com/search?q=%s"
        });
        sessionStorage.setItem("lpurl", R)
    }
    async function u(y) {
        y.preventDefault(),
        await a(y)
    }
    const c = () => {
        o.current && o.current.contentWindow && o.current.contentWindow.history.back()
    }
      , f = () => {
        o.current && o.current.contentWindow && o.current.contentWindow.history.forward()
    }
      , m = () => {
        if (o.current) {
            const y = o.current;
            y.src = y.src
        }
    }
      , x = () => {
        i === !1 ? (window.eruda.init(),
        window.eruda.show(),
        l(!0)) : (eruda.destroy(),
        l(!1))
    }
    ;
    return _.jsxs(_.Fragment, {
        children: [_.jsxs("div", {
            className: "navbar bg-base-300 background-filter z-[2] relative transition-all",
            children: [_.jsxs("div", {
                className: "navbar-start gap-2 flex justify-end mr-5",
                children: [_.jsx("button", {
                    className: "btn btn-circle btn-primary",
                    onClick: c,
                    children: _.jsx(ex, {
                        size: 24
                    })
                }), _.jsx("button", {
                    className: "btn btn-circle btn-primary",
                    onClick: f,
                    children: _.jsx(tx, {
                        size: 24
                    })
                }), _.jsx("button", {
                    className: "btn btn-circle btn-primary",
                    onClick: m,
                    children: _.jsx(ox, {
                        size: 24
                    })
                })]
            }), _.jsx("div", {
                className: "navbar-center gap-2 ",
                children: _.jsx("form", {
                    onSubmit: u,
                    children: _.jsx("input", {
                        type: "text",
                        className: "input input-bordered transition-width duration-300 w-[400px] focus:w-[420px] focus:input-primary",
                        placeholder: "Search For Something",
                        value: n || sessionStorage.getItem("rawurl"),
                        onChange: a
                    })
                })
            }), _.jsxs("div", {
                className: "navbar-end justify-start ml-5 gap-2",
                children: [_.jsx("button", {
                    className: "btn btn-circle btn-primary",
                    onClick: () => e("/"),
                    children: _.jsx(nx, {
                        size: 24
                    })
                }), _.jsx("button", {
                    className: "btn btn-circle btn-primary",
                    onClick: s,
                    children: _.jsx(rx, {
                        size: 24
                    })
                }), _.jsx("button", {
                    className: "btn btn-circle btn-primary",
                    onClick: x,
                    children: _.jsx(h4, {})
                })]
            })]
        }), _.jsxs("div", {
            className: "w-screen h-screen fixed",
            children: [_.jsx("iframe", {
                ref: o,
                src: t,
                frameBorder: "0",
                className: "w-full h-full z-[1] fixed"
            }), _.jsxs("div", {
                className: "flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 flex-col",
                children: [_.jsx("span", {
                    className: "loading loading-spinner text-primary text-7xl w-16"
                }), _.jsx("h1", {
                    className: "text-3xl mt-3",
                    children: "Loading"
                })]
            })]
        })]
    })
}
function v4() {
    const e = W3(fg);
    return $.useEffect( () => {
        const t = localStorage.getItem("cloakTitle")
          , n = localStorage.getItem("cloakFavicon");
        t && n && window.cloak.setCloak(t, n),
        localStorage.getItem("searchEngine") || chemical.setStore("searchEngine", "https://www.google.com/search?q=%s"),
        document.documentElement.setAttribute("data-theme", e)
    }
    , [e]),
    _.jsxs(_.Fragment, {
        children: [_.jsx(ux, {}), _.jsx(lx, {}), _.jsxs(Ok, {
            children: [_.jsx(rn, {
                path: "/",
                element: _.jsx(yx, {})
            }), _.jsx(rn, {
                path: "/science",
                element: _.jsx(s4, {})
            }), _.jsx(rn, {
                path: "/math",
                element: _.jsx(u4, {})
            }), _.jsx(rn, {
                path: "/go",
                element: _.jsx(g4, {})
            }), _.jsx(rn, {
                path: "/settings",
                element: _.jsx(Sx, {})
            }), _.jsx(rn, {
                path: "/play/:game",
                element: _.jsx(m4, {})
            }), _.jsx(rn, {
                path: "*",
                element: _.jsx(wx, {})
            })]
        }), _.jsx(sx, {})]
    })
}
Th(document.getElementById("root")).render(_.jsx($.StrictMode, {
    children: _.jsx(B3, {
        children: _.jsx(Fk, {
            children: _.jsx(v4, {})
        })
    })
}));
