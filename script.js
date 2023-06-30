const formElement = document.getElementById('creature-form');
const side = document.getElementById('side');
const clear = document.getElementById('clear');

formElement.addEventListener('submit', function (event) {
	event.preventDefault();
	if (formElement.checkValidity()) {
		const name = document.getElementById('Name').value;
		const location = document.getElementById('Location').value;
		const price = document.getElementById('Price').value;
		const type = document.getElementById('Type').value;
		const bounty = document.getElementById('Bounty').value;

		const containmentGroup = document.createElement('div');
		containmentGroup.classList.add('containment-group');

		const newData = `
    <img src="img/unavailable.gif">
    <h4>${name}</h4>
    <h5>${type} | ${location}</h5>
    <p>$${price}.00</p>
    <input type="button" value = "${
			bounty === 'Yes' ? 'Bounty Available' : 'No Bounty'
		}" disabled>
    <input type="button" value= "Remove" class="remove-button">`;

		containmentGroup.innerHTML = newData;
		side.append(containmentGroup);
		resetInputs();
	} else {
		formElement.reportValidity();
	}
});

side.addEventListener('click', function (event) {
	const remove = event.target;
	if (remove.classList.contains('remove-button')) {
		const containmentGroup = remove.closest('.containment-group');
		if (containmentGroup) {
			containmentGroup.remove();
		}
	}
});

clear.addEventListener('click', function (event) {
	event.preventDefault();
	resetInputs();
});

function resetInputs() {
	const inputs = formElement.querySelectorAll(
		'input[type="text"], input[type="number"]'
	);
	const selects = formElement.querySelectorAll('select');
	inputs.forEach((input) => {
		input.value = '';
	});
	selects.forEach((select) => {
		select.selectedIndex = 0;
	});
}
