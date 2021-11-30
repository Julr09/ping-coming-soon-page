const form = document.getElementById('form');
const email = document.getElementById('email');
const message = document.getElementById('error-massage');

form.addEventListener('submit', (e) => {
	if (email.value === '') {
		email.nextElementSibling.classList.add('error');
		message.innerText = 'Whoops! It looks like you forgot to add your email'
		e.preventDefault()
	} else if (!validateEmail(email.value)) {
		email.nextElementSibling.classList.add('error');
		message.innerText = 'Please provide a valid email address'
		e.preventDefault()
	} else {
		email.nextElementSibling.classList.remove('error');
	}
})

const validateEmail = (email) => {
	const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!regex.test(email)) {
		return false;
	}
	return regex.test(email);
}