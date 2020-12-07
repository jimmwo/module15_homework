const button = document.querySelector('.click-btn');
const status = document.querySelector('.status');
const mapLink = document.querySelector('.map');

// const error = () => {
// 	status.textContent = 'Невозмоожно получить координаты';
// };
//
// const success = position => {
// 	const latitude = position.coords.latitude;
// 	const longitude = position.coords.longitude;
//
// 	const statusText = `Широта: ${latitude} Долгота: ${longitude}`;
// 	status.textContent = statusText;
//
// 	mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
// 	mapLink.textContent = 'Ссылка на карту';
// };
//
// button.addEventListener('click', () => {
// 	status.textContent = '';
// 	mapLink.textContent = '';
// 	mapLink.href = '';
//
// 	if ("geolocation" in navigator) {
// 		navigator.geolocation.getCurrentPosition(success, error);
// 	} else {
// 		status.textContent = 'Голокация не поддерживается';
// 	}
// });

button.addEventListener('click', () => {
	const width = document.documentElement.clientWidth;
	const height = document.documentElement.clientHeight;

	alert(`Ширина: ${width} Высота: ${height}`);
});
