import '../scss/main.scss'

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".btn-close");
const workClose = document.querySelector(".work-close");
const workModal = document.querySelector("#aramidModal")

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    document.body.classList.remove("no-scroll");

};

const closeWorkModal = function () {
    workModal.classList.add("hidden");
    overlay.classList.add("hidden");
    document.body.classList.remove("no-scroll");

};

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});

document.addEventListener('click', function (event) {

    if (event.target.matches('.btn-open')) {

        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        document.body.classList.add("no-scroll");
    }

});

closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", closeModal);