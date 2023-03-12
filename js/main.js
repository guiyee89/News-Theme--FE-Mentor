const menuOpen = document.querySelector("#mobile-menu-open");
const menuClose = document.querySelector("#mobile-menu-close");
const menuTrans= document.querySelector(".menu-trans")
const menu = document.querySelector("#mobile-menu");

menuOpen.addEventListener("click", () => {
    menu.classList.remove("disabled")
    menuTrans.classList.remove("disabled")
})

menuClose.addEventListener("click", () => {
    menu.classList.add("disabled")
    menuTrans.classList.add("disabled")
})