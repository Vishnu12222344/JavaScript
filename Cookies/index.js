const first = document.getElementById("firstText");
const last = document.getElementById("lastText");
const btn = document.getElementById("btn");
const updatebtn = document.getElementById("updatebtn");
const cookiebtn = document.getElementById("cookiebtn");
const deletebtn = document.getElementById("deletebtn");

// Save cookies
btn.addEventListener("click", () => {
    setCookie("firstname", first.value, 365);
    setCookie("lastname", last.value, 365);
    alert("Cookies saved successfully!");
});

// Update cookies
updatebtn.addEventListener("click", () => {
    if (getCookie("firstname") || getCookie("lastname")) {
        setCookie("firstname", first.value, 365);
        setCookie("lastname", last.value, 365);
        alert("Cookies updated successfully!");
    } else {
        alert("No cookies found. Please save first!");
    }
});

// Get cookies
cookiebtn.addEventListener("click", () => {
    first.value = getCookie("firstname") || "";
    last.value = getCookie("lastname") || "";
});

// Delete cookies
deletebtn.addEventListener("click", () => {
    deleteCookie("firstname");
    deleteCookie("lastname");
    alert("Cookies deleted successfully!");
});

// Helper functions
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
}

function getCookie(name) {
    const decoded = decodeURIComponent(document.cookie);
    const cookies = decoded.split("; ");
    for (let c of cookies) {
        if (c.startsWith(name + "=")) {
            return c.substring(name.length + 1);
        }
    }
    return null;
}

function deleteCookie(name) {
    setCookie(name, "", -1);
}
