// Navigation Modal functionality
// Open mobile navigation modal
const toggleBtn = document.getElementById("menu-toggle");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const modal = document.getElementById("mobile-modal");

toggleBtn.addEventListener("click", () => {
  modal.classList.toggle("show");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Close modal navigation modalwhen a link is clicked
modal.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    modal.classList.remove("show");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
});
