//your JS code here. If required.
// Get Modal Elements
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".close-modal");

// Open Modal when button is clicked
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close Modal when close button is clicked
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close Modal when clicking outside modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
