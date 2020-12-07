const button = document.querySelector('.click-btn');
const firstIcon = document.querySelector('.btn_icon_first');
const secondIcon = document.querySelector('.btn_icon_second');

button.addEventListener('click', () => {
	firstIcon.classList.toggle('hide');
	secondIcon.classList.toggle('hide');
});


