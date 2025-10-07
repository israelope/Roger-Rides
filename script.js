document.addEventListener("DOMContentLoaded", function () {
  
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

  // Initialize EmailJS
  emailjs.init("hWqBKEuyx-R7CYlvA");

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Send to owner (you)
      emailjs.sendForm("service_gu7opz7", "template_6ywkmqu", this)
        .then(function () {
          console.log("Message sent to site owner.");
        }, function (error) {
          console.error("Failed to send to owner:", error);
        });

      // Send auto-reply to user
      emailjs.sendForm("service_gu7opz7", "template_7ragj4j", this)
        .then(function () {
          alert("Request submitted successfully. Please check your email.");
          form.reset();
        }, function (error) {
          alert("Auto-reply failed. Please try again.");
          console.error("Auto-reply error:", error);
        });
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  
  // TIME SLOT HIGHLIGHT
  document.querySelectorAll('.time-slot').forEach(slot => {
    slot.addEventListener('click', () => {
      document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('active'));
      slot.classList.add('active');
    });
  });

  // DYNAMIC PACKAGE DETAILS FROM URL
  const urlParams = new URLSearchParams(window.location.search);
  const title = urlParams.get("title");
  const price = urlParams.get("price");
  const vehicles = urlParams.get("vehicles")?.split(",") || [];
  const durations = urlParams.get("duration")?.split(",") || [];

  if (title) document.getElementById("package-title").innerText = title;
  if (price) document.getElementById("package-price").innerText = `₦${Number(price).toLocaleString()}/hour`;


  const vehicleSelect = document.getElementById("vehicle-options");
  vehicles.forEach(vehicle => {
    const option = document.createElement("option");
    option.value = option.text = vehicle.trim();
    vehicleSelect.appendChild(option);
  });

  const durationSelect = document.getElementById("duration-options");
  durations.forEach(duration => {
    const option = document.createElement("option");
    option.value = option.text = duration.trim();
    durationSelect.appendChild(option);
  });
});

//card details page
const ProductButton = document.querySelector(".book-but");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

ProductButton.addEventListener("click", ()=>{
    payment.style.display="flex"
});

close.addEventListener("click", ()=>{
    payment.style.display="none"
});