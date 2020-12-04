// === DOM ELEMENTS ===
const menuBtnEl = document.querySelector(".menu-bar");
const menuBarEl = document.querySelector("#menu-hide");
const navbarEl = document.querySelector(".nav-bar");

// === Global Variables ===
let menuOpen = false;
let sticky = navbarEl.offsetTop;

// === Functions ===
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarFunction() {
    if (window.pageYOffset >= sticky) {
        navbarEl.classList.add("sticky")
    } 
    else {
        navbarEl.classList.remove("sticky");
    }
}

// === Event Listeners ===
// When the user scrolls the page, navbarFunction will invoke
window.onscroll = function() {navbarFunction()};

// Button for Hamburger
menuBtnEl.addEventListener("click", function(){
    
    if(!menuOpen){
        menuBtnEl.classList.add("open");
        menuBarEl.classList.add("unhide");
        menuBarEl.classList.remove("smoothhide");
        menuOpen = true;
    }
    else {
        menuBtnEl.classList.remove("open");
        menuBarEl.classList.remove("unhide");
        menuBarEl.classList.add("smoothhide");
        menuOpen = false;
    }
});

