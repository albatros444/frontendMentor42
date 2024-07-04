//   const signUpButton = document.querySelector(".signUpButton")
const form = document.querySelector(".form");
const emailField = document.querySelector(".emailField");
const errorMessage = document.querySelector(".errorMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.reset();
  errorMessage.style.display = "none";
});

emailField.addEventListener("invalid", (e) => {
  e.preventDefault();
  console.log("invalid email");
  errorMessage.style.display = "block";
});
