const button = document.getElementById("button");
const menu = document.getElementById("menu");

button.onclick = function () {
    menu.classList.toggle("show");
    // if(!(menu.classList.contains("show"))) {
    //     menu.classList.add("show");
    //     alert('test');
    // } else {
    //     alert("test2");
    //     menu.classList.remove("show")
    // }
};