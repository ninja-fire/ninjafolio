import '../scss/main.scss'
import * as url from "url";

//open and close the "work together" modal
//assign variables to the specific frame
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".btn-close");

//closeModal function that toggle the hidden class
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    document.body.classList.remove("no-scroll");

};

//event listener that triggers the closeModal function if the escape key is pressed and the modal is open
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

//event listener that catches the click event on all the CTA buttons and opens the modal by toggling the hidden class on specific frames
document.addEventListener('click', function (event) {

    if (event.target.matches('.btn-open')) {

        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        document.body.classList.add("no-scroll");
    }

});

//event listener that catches the click on the close modal button and trigger the closeModal function
closeModalBtn.addEventListener("click", closeModal);

//event listener that catches the click on the overlay and trigger the closeModal function
overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", closeModal);


const carousel = document.getElementById("carousel");
const workOverlay = document.querySelector(".workOverlay");
let cards = carousel.getElementsByClassName("car-card");
let leftCard, centerCard, rightCard;
const btnClose = document.createElement("div");

// let svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
// svg.style.height = "24px";
// svg.style.width = "24px";

// Initialize the values of the variables
leftCard = carousel.querySelector(".car-left");
centerCard = carousel.querySelector(".car-center");
rightCard = carousel.querySelector(".car-right");

// Helper function to switch the cards
const switchCards = (clickedCard) => {

    if (clickedCard === centerCard) {

        let clone = centerCard.cloneNode(true);
        document.body.classList.add("no-scroll");
        workOverlay.classList.remove("hidden");
        clone.classList.add('modalWork');
        clone.id = 'clone';
        clone.classList.remove("car-center");
        document.body.appendChild(clone);

        btnClose.classList.add("btn-close");

        btnClose.innerHTML =
            "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
            "<path d=\"M13.3327 2.66675L2.66602 13.3334M13.3327 13.3334L2.66602 2.66675\" stroke=\"url(#paint0_linear_1648_5831)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n" +
            "<defs>\n" +
            "<linearGradient id=\"paint0_linear_1648_5831\" x1=\"2.66602\" y1=\"2.66675\" x2=\"15.3653\" y2=\"9.62224\" gradientUnits=\"userSpaceOnUse\">\n" +
            "<stop stop-color=\"#FF6231\"/>\n" +
            "<stop offset=\"0.5\" stop-color=\"#FF7B31\"/>\n" +
            "<stop offset=\"1\" stop-color=\"#FFC700\"/>\n" +
            "</linearGradient>\n" +
            "</defs>\n" +
            "</svg>\n";

        // btnClose.appendChild(svg);
        clone.appendChild(btnClose);


    } else {
        let clickedCardParent = clickedCard.parentNode;
        clickedCardParent.removeChild(clickedCard);
        if (clickedCard === leftCard) {

            leftCard.classList.remove("car-left");
            leftCard.classList.add("car-center");
            carousel.insertBefore(leftCard, rightCard);

            centerCard.classList.remove("car-center");
            centerCard.classList.add("car-right");

            rightCard.classList.remove("car-right");
            rightCard.classList.add("car-left");

        } else if (clickedCard === rightCard) {

            rightCard.classList.remove("car-right");
            rightCard.classList.add("car-center");
            carousel.insertBefore(rightCard, centerCard);

            centerCard.classList.remove("car-center");
            centerCard.classList.add("car-left");

            leftCard.classList.remove("car-left");
            leftCard.classList.add("car-right");
        }

        // Update the variables after the order of the cards has changed
        cards = carousel.getElementsByClassName("car-card");
        leftCard = carousel.querySelector(".car-left");
        centerCard = carousel.querySelector(".car-center");
        rightCard = carousel.querySelector(".car-right");
    }
};

const closeWorkModal = function () {
    centerCard.classList.remove("modalWork");
    centerCard.classList.add("car-center");

    workOverlay.classList.add("hidden");
    document.body.classList.remove("no-scroll");

    document.getElementById("clone").remove();

    // svg.innerHTML = "";
};

btnClose.addEventListener("click", closeWorkModal);


// Add click event listeners to each card
carousel.addEventListener('click', function(event) {
    let target = event.target;
    while (target && !target.classList.contains('car-card')) {
        target = target.parentNode;
    }

    if (target) {
        switchCards(target);
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !centerCard.classList.contains("hidden")) {
        closeWorkModal();
    }
});

workOverlay.addEventListener("click", closeWorkModal);
