
fetch("https://cdn.jsdelivr.net/gh/CoolDude2349/test1/EaglercraftX1.8.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("content").innerHTML = data;

        // Extract and execute scripts
        document.querySelectorAll("#content script").forEach(oldScript => {
            const newScript = document.createElement("script");
            newScript.textContent = oldScript.textContent;
            document.body.appendChild(newScript); // Append script to execute
        });
    })
    .catch(error => console.error("Error loading HTML:", error));
