//WHEN THE USER SCROLLS THE PAGE, EXECUTE myFunction
window.onscroll = function () { myFunction() };

//GET THE NAVBAR
var navbar = document.getElementById("navbar");

//GET THE OFFSET POSITION OF THE NAVBAR
var sticky = navbar.offsetTop;

//ADD THE STICKY CLASS TO THE NAVBAR WHEN YOU REACH ITS SCROLL POSITION. REMOVE "STICKY" WHEN YOU LEAVE THE SCROLL POSITION
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}