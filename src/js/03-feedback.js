import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storageKey = "feedback-form-state";
document.addEventListener("DOMContentLoaded", () => {
  const formData = JSON.parse(localStorage.getItem(storageKey));
  if (formData) {
    emailInput.value = formData.email || "";
    messageInput.value = formData.message || "";
  }
});
form.addEventListener("input", (event) => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
  emailInput.value = "";
  messageInput.value = "";
  localStorage.removeItem(storageKey);
});
form.addEventListener("input", throttle(inStorage, 500));
