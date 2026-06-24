// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Project modal data
const projectDetails = {
  taskflow: {
    title: "TaskFlow Landing Page",
    description:
      "A clean and responsive landing page concept for a fictional productivity app. It focuses on layout structure, call-to-action sections, and modern UI design."
  },
  greenbite: {
    title: "GreenBite Café Website",
    description:
      "A responsive café website concept with sections for menu highlights, opening hours, location, and contact information."
  },
  travelmap: {
    title: "TravelMap Gallery",
    description:
      "A responsive travel gallery layout using CSS Grid to organize destination cards across desktop, tablet, and mobile screens."
  }
};

// Project modal functionality
const projectButtons = document.querySelectorAll(".project-btn");
const projectModal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectKey = button.dataset.project;
    const project = projectDetails[projectKey];

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;

    projectModal.classList.add("show");
  });
});

closeModal.addEventListener("click", () => {
  projectModal.classList.remove("show");
});

projectModal.addEventListener("click", (event) => {
  if (event.target === projectModal) {
    projectModal.classList.remove("show");
  }
});

// Contact form validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "#dc2626";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "#dc2626";
    return;
  }

  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "#16a34a";

  contactForm.reset();
});