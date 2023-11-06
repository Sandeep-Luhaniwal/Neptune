// ************Preloder*************
setTimeout(() => {
    const box = document.getElementById("box");

    box.style.display = "none";

    document.body.classList.remove("overflow-hidden");
}, 2000);


// ************ AOS Animation ************
AOS.init({
    duration: 1000,
    once: true,
});


// ************ Back to Top ************
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



function openNav() {
    document.getElementById("Menu").style.left = "0%";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";

}
function closeNav() {
    document.getElementById("Menu").style.left = "-103%";
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
}


// Accordian
let accordianitem = document.querySelectorAll(".accordian-item1");
accordianitem.forEach(function (item) {
    item.addEventListener("click", function () {
        const isitactive = item.classList.contains("active");
        accordianitem.forEach(function (item) {
            item.classList.remove("active");
        })
        if (!isitactive) {
            item.classList.toggle("active");
        }
    })
});



//Slider
$(".slick-slider03").slick({
    slidesToShow: 1,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: false,
    arrows: true,
    autoplaySpeed: 0,
    arrows: false,
    // fade: true,
});
