const buttonMessage = document.querySelector('.message-btn');
const buttonGeo = document.querySelector('.geo-btn');
const input = document.querySelector('#message');
const chat = document.querySelector('#chatBlock');
const socket = new WebSocket('wss://echo.websocket.org/');

const template = (messageEl, isRequest = false) => {
	const classType = isRequest === true ? 'request' : 'response';
	const blockMessage = document.createElement("div");

	const messageDiv = document.createElement("div");
	messageDiv.classList.add("message");
	messageDiv.classList.add(classType);

	messageDiv.appendChild(messageEl);

	const clearfix = document.createElement("div");
	clearfix.classList.add("clearfix");

	blockMessage.appendChild(messageDiv);
	blockMessage.appendChild(clearfix);

	return blockMessage;
};

const messageEl = (message) => {
	return document.createTextNode(message);
};

const messageGeoEl = (latitude, longitude) => {
	const linkEl = document.createElement("a");
	linkEl.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
	linkEl.target = '_blank';

	const messageText = document.createTextNode('Моя геопозиция');
	linkEl.appendChild(messageText);

	return linkEl;
};

const errorGeo = () => {
	alert('Невозмоожно получить координаты');
};

const successGeo = position => {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;

	socket.send(`Мои координаты: ${latitude} ${longitude}`);

	const linkEl = messageGeoEl(latitude, longitude);
	const message = template(linkEl, true);
	chat.append(message);
};

const ready = () => {
	socket.onerror = (error) => {
		alert(`Ошибка сокета ${error.data}`);
	};

	socket.onmessage = (message) => {
		if (message.data.indexOf('Мои координаты: ') !== 0) {
			const messageElement = messageEl(message.data);
			const messageBlock = template(messageElement);
			chat.append(messageBlock);
		}
	};
};

buttonMessage.addEventListener('click', () => {
	if (input.value === '') {
		return;
	}

	socket.send(input.value);

	const messageElement = messageEl(input.value);
	const messageBlock = template(messageElement, true);
	chat.append(messageBlock);

	input.value = '';
});

buttonGeo.addEventListener('click', () => {
	if ("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition(successGeo, errorGeo);
	} else {
		alert('Голокация не поддерживается');
	}
});

document.addEventListener("DOMContentLoaded", ready);
