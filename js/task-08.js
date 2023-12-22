
const form = document.querySelector(".login-form");

const object = {}
const handlerFormSumbit = (event) => {
  event.preventDefault();
  const emailInputValue = event.currentTarget.elements.email.value;
  const passwordInputValue = event.currentTarget.elements.password.value;
  if (emailInputValue === "" || passwordInputValue === "") {
    alert("всі поля повинні бути заповнені.")
    return;
  }
  object.email = emailInputValue;
  object.password = passwordInputValue;
  console.log('object',object);
  event.currentTarget.reset();
};

form.addEventListener("submit", handlerFormSumbit);
