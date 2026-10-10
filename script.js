const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰";
    });
  });
}

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
(function () {
  const contactForm = document.getElementById("contact-form");

  // Run only on pages containing the contact form.
  if (!contactForm) return;

  const status = document.getElementById("form-status");
  const submitButton = document.getElementById("submit-button");

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    status.textContent = "Sending your message...";
    submitButton.disabled = true;

    try {
      await emailjs.sendForm(
        "service_976igch",
        "template_a1093ix",
        contactForm
      );

      status.textContent =
        "Thank you! Your message has been sent successfully.";

      contactForm.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      status.textContent =
        "Sorry, your message could not be sent. Please try again.";
    } finally {
      submitButton.disabled = false;
    }
  });
})();
