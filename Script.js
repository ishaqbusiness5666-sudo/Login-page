const form = document.querySelector('#registration-form');
const message = document.querySelector('#form-message');
const password = document.querySelector('#password');
const passwordToggle = document.querySelector('.password-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const links = document.querySelector('#site-links');

passwordToggle.addEventListener('click', () => {
	const isHidden = password.type === 'password';
	password.type = isHidden ? 'text' : 'password';
	passwordToggle.setAttribute('aria-label', isHidden ? 'Hide password' : 'Show password');
	passwordToggle.innerHTML = `<i class="fa-regular fa-eye${isHidden ? '-slash' : ''}"></i>`;
});

menuToggle.addEventListener('click', () => {
	const isOpen = links.classList.toggle('open');
	menuToggle.setAttribute('aria-expanded', isOpen);
	menuToggle.innerHTML = `<i class="fa-solid fa-${isOpen ? 'xmark' : 'bars'}"></i>`;
});

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const email = document.querySelector('#email');
	const confirmPassword = document.querySelector('#confirm-password');
	message.classList.remove('error');

	if (!email.checkValidity()) {
		message.textContent = 'Please enter a valid email address.';
		message.classList.add('error');
		email.focus();
		return;
	}
	if (password.value.length < 8) {
		message.textContent = 'Your password needs at least 8 characters.';
		message.classList.add('error');
		password.focus();
		return;
	}
	if (password.value !== confirmPassword.value) {
		message.textContent = 'Passwords do not match yet.';
		message.classList.add('error');
		confirmPassword.focus();
		return;
	}

	message.textContent = 'Membership request received. Welcome to the station.';
	form.reset();
});
