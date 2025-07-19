function clearCanvas() {
	document.getElementById('canvas').innerHTML = '';
}

function start() {
	let number = parseInt(document.getElementById('number').value);
	if (isNaN(number) || number < 1 || number > 100) return toast();

	const canvas = document.getElementById('canvas');
	clearCanvas();

	canvas.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
	canvas.style.gridTemplateRows = `repeat(${number}, 1fr)`;

	for (let i = 0; i < number * number; i++) {
		const tile = document.createElement('div');
		tile.classList.add('tile');

		tile.addEventListener('mouseover', () => {
			tile.style.backgroundColor = 'black';
		});

		canvas.append(tile);
	}
}

function toast() {
	alert('Please enter a number between 1 and 100!');
}

start();
