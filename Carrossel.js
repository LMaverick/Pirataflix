const movie1 = document.getElementById('movie1');
const movie2 = document.getElementById('movie2');

const info1 = document.getElementById('info1');
const info2 = document.getElementById('info2');

const close1 = document.getElementById('close1');
const close2 = document.getElementById('close2');

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
