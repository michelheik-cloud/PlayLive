const signupForm = document.querySelector('.signup-form');
const message = document.querySelector('.form-message');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(signupForm);
  const email = formData.get('email');

  message.textContent = `${email}, você está na lista de novidades da PlayLive.`;
  signupForm.reset();
});
