const movie1 = document.getElementById('movie1');
const movie2 = document.getElementById('movie2');
const movie3 = document.getElementById('movie3');
const movie4 = document.getElementById('movie4');
const movie5 = document.getElementById('movie5');

const info1 = document.getElementById('info1');
const info2 = document.getElementById('info2');
const info3 = document.getElementById('info3');
const info4 = document.getElementById('info4');
const info5 = document.getElementById('info5');

const close1 = document.getElementById('close1');
const close2 = document.getElementById('close2');
const close3 = document.getElementById('close3');
const close4 = document.getElementById('close4');
const close5 = document.getElementById('close5');




movie1.addEventListener('click', () => {
	info1.classList.toggle('show');
});

movie2.addEventListener('click', () => {
	info2.classList.toggle('show');
});



close1.addEventListener('click', () => {
info1.classList.remove('show');
});

close2.addEventListener('click', () => {
info2.classList.remove('show');
});
