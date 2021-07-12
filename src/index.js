import './style.css';

document.addEventListener('DOMContentLoaded', () => {
	const list = document.querySelector('#list ul');
	const nameInput = document.querySelector('input[name="name"]');
	const trafficInput = document.querySelector('input[name="traffic"]');
	const button = document.querySelector('#submit-form');

	const data = [];

	button.addEventListener('click', addElement);

	renderList();

	function addElement() {
		const name = nameInput.value;
		const traffic = trafficInput.value;

		if (!name) {
			nameInput.classList.add('error');
			return;
		}
		nameInput.classList.remove('error');

		if (!traffic) {
			trafficInput.classList.add('error');
			return;
		}
		trafficInput.classList.remove('error');

		data.push({ name, traffic });
		nameInput.value = '';
		trafficInput.value = '';
		renderList();
	}

	function renderList() {
		list.innerHTML = '';
		let li;
		if (!data.length) {
			li = document.createElement('li');
			li.textContent = 'Список пуст';
			list.append(li);
		} else {
			data.forEach((el) => {
				li = document.createElement('li');
				li.textContent = `${el.name} - ${el.traffic}Гб`;
				list.append(li);
			});
		}
	}
});
