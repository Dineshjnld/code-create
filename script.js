const menuButton = document.querySelector(".logo");
const menuList = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
    menuList.classList.toggle("active");
});
