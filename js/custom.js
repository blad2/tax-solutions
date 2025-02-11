// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

/* $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})*/

// Get the location where the name of the website needs to change
const siteTitle = document.querySelectorAll(".siteName");

// Adding the new name to the website
siteTitle.forEach(
    e => {
        e.innerHTML = "Tax Solutions";
    }
)

// todo
// add the new images to the products using js.
// 1. create a list of the links for the images, and the description. Object format
// 2 modify the box-detail class for each item to match each object description.

