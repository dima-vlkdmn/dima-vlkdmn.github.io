let link = document.getElementById("theme");
let btn = document.getElementById("change-btn");
btn.addEventListener("click", function() {changeTheme();});


function changeTheme() {
    let firstTheme = "/css/style.css";
    let secondTheme = "/css/dark.css";

    let currTheme = link.getAttribute("href");
    if (currTheme == firstTheme) {
        currTheme = secondTheme;
    } else {
        currTheme = firstTheme;
    }
    link.setAttribute("href", currTheme);
}