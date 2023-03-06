
function ScrollSmooth(link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        if (href !== "#" && href.startsWith("#")) {
            const sellectionEl = document.querySelector(href);
            sellectionEl.scrollIntoView({ behavior: "smooth" })
        }
    })
}
var allLinks = document.querySelectorAll("a:link")
allLinks.forEach(ScrollSmooth);

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky");
    }
}