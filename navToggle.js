// NavBr Drop Down

// target the selectors
let burgerNav = document.querySelector(".burger");
let drop = document.querySelector("ul");

// add an event listener to toggle the class
burgerNav.addEventListener("click", function () {
    drop.classList.toggle('open');
});