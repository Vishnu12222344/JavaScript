 const first = document.getElementById("firstText");
const last = document.getElementById("lastText");
const btn = document.getElementById("btn");
const cookiebtn = document.getElementById("cookiebtn");

btn.addEventListener("click", ()=>{
    setCookie("firstname", first.value, 365);
    setCookie("lastname", last.value, 365);
    alert("Cookies Saved!");
});

cookiebtn.addEventListener("click", ()=>{
    first.value = getCookie("firstname") || "";
    last.value = getCookie("lastname") || "";
});

function setCookie(name, value, days) {
     const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name) {
    const dCode = decodeURIComponent(document.cookie);
    const arr = dCode.split("; ");
    let res = null;
    arr.forEach(element => {
        if (element.startsWith(name + "=")) {
            res = element.substring(name.length + 1);
        }
    });
    return res;
}
function deleteCookie(name) {
    setCookie(name, "", -1);
}