const button = document.getElementById("button");
const button2 = document.getElementById("button2");
const menu = document.getElementById("menu");
const menu2 = document.getElementById("menu2");

button.onclick = function () {
    if(menu2.classList.contains("show")) {
        menu2.classList.remove("show");
    }
    menu.classList.toggle("show");
};

button2.onclick = function () {
    if(menu.classList.contains("show")) {
        menu.classList.remove("show");
    }
    menu2.classList.toggle("show");
}