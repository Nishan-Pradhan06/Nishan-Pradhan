let hamMenu = document.querySelector(".container");
hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
});



let container = document.querySelector(".menu");
let navBar = document.querySelector(".navbar");

container.onclick = function(){
    container.style.opacity = "0";
    container.style.pointerEvents = "none";
    navBar.classList.add("active")
}