
function ScrollSmooth(link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        //Scroll back to top
        if (href === "#")
            widow: scrollTo({
                top: 0,
                behavior: "smooth",
            });
        //Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionE1 = document.querySelector(href);
            sectionE1.scrollIntoView({ behavior: "smooth" });
        }
    })
}
var alllinks = document.querySelectorAll("a:link");
alllinks.forEach(ScrollSmooth);


