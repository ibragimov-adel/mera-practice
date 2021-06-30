import { random } from './utils';

const request = (id) => {
	return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
};

document.addEventListener('DOMContentLoaded', () => {
	const randomId = random(1, 200);
	request(randomId)
		.then((response) => response.json())
		.then((json) => {
			const pre = document.createElement('pre');
			pre.innerText = JSON.stringify(json);
			document.body.appendChild(pre);
		})
		.catch((error) => alert(error));
});
