document.addEventListener("DOMContentLoaded", function () { const form = document.getElementById("contact-form"); const button = document.getElementById("submit-button"); const status = document.getElementById("form-status");

if (!form || !button || !status) return;

form.addEventListener("submit", async function (event) { event.preventDefault();

if (!form.reportValidity()) return;

button.disabled = true; button.textContent = "Sending..."; status.textContent = "";

try { await emailjs.sendForm( "service_976igch", "template_6kbk8ym", form );

status.textContent = "Thank you! Your message has been sent successfully.";

form.reset();

} catch (error) { console.error("EmailJS error:", error);

status.textContent = "Sorry, your message could not be sent. Please try again.";

} finally { button.disabled = false; button.textContent = "Send Message"; } }); });
