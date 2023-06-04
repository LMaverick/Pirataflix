const movie1 = document.getElementById('movie1');
const movie2 = document.getElementById('movie2');
const movie3 = document.getElementById('movie3');
const movie4 = document.getElementById('movie4');
const movie5 = document.getElementById('movie5');

const movie6 = document.getElementById('movie6');
const movie7 = document.getElementById('movie7');
const movie8 = document.getElementById('movie8');
const movie9 = document.getElementById('movie9');
const movie10 = document.getElementById('movie10');

const movie11 = document.getElementById('movie11');
const movie12 = document.getElementById('movie12');
const movie13 = document.getElementById('movie13');
const movie14 = document.getElementById('movie14');
const movie15 = document.getElementById('movie15');

const movie16 = document.getElementById('movie16');
const movie17 = document.getElementById('movie17');
const movie18 = document.getElementById('movie18');
const movie19 = document.getElementById('movie19');
const movie20 = document.getElementById('movie20');


//=========================================================
const info1 = document.getElementById('info1');
const info2 = document.getElementById('info2');
const info3 = document.getElementById('info3');
const info4 = document.getElementById('info4');
const info5 = document.getElementById('info5');

const info6 = document.getElementById('info6');
const info7 = document.getElementById('info7');
const info8 = document.getElementById('info8');
const info9 = document.getElementById('info9');
const info10 = document.getElementById('info10');

const info11 = document.getElementById('info11');
const info12 = document.getElementById('info12');
const info13 = document.getElementById('info13');
const info14 = document.getElementById('info14');
const info15 = document.getElementById('info15');

const info16 = document.getElementById('info16');
const info17 = document.getElementById('info17');
const info18 = document.getElementById('info18');
const info19 = document.getElementById('info19');
const info20 = document.getElementById('info20');


//=========================================================


const close1 = document.getElementById('close1');
const close2 = document.getElementById('close2');
const close3 = document.getElementById('close3');
const close4 = document.getElementById('close4');
const close5 = document.getElementById('close5');

const close6 = document.getElementById('close6');
const close7 = document.getElementById('close7');
const close8 = document.getElementById('close8');
const close9 = document.getElementById('close9');
const close10 = document.getElementById('close10');

const close11 = document.getElementById('close11');
const close12 = document.getElementById('close12');
const close13 = document.getElementById('close13');
const close14 = document.getElementById('close14');
const close15 = document.getElementById('close15');

const close16 = document.getElementById('close16');
const close17 = document.getElementById('close17');
const close18 = document.getElementById('close18');
const close19 = document.getElementById('close19');
const close20 = document.getElementById('close20');



//=========================================================
movie1.addEventListener('click', () => {
	info1.classList.toggle('show');
  });
  
  movie2.addEventListener('click', () => {
	info2.classList.toggle('show');
  });
  
  movie3.addEventListener('click', () => {
	info3.classList.toggle('show');
  });
  
  movie4.addEventListener('click', () => {
	info4.classList.toggle('show');
  });
  
  movie5.addEventListener('click', () => {
	info5.classList.toggle('show');
  });
  
  movie6.addEventListener('click', () => {
	info6.classList.toggle('show');
  });
  
  movie7.addEventListener('click', () => {
	info7.classList.toggle('show');
  });
  
  movie8.addEventListener('click', () => {
	info8.classList.toggle('show');
  });
  
  movie9.addEventListener('click', () => {
	info9.classList.toggle('show');
  });
  
  movie10.addEventListener('click', () => {
	info10.classList.toggle('show');
  });
  
  movie11.addEventListener('click', () => {
	info11.classList.toggle('show');
  });
  
  movie12.addEventListener('click', () => {
	info12.classList.toggle('show');
  });
  
  movie13.addEventListener('click', () => {
	info13.classList.toggle('show');
  });
  
  movie14.addEventListener('click', () => {
	info14.classList.toggle('show');
  });
  
  movie15.addEventListener('click', () => {
	info15.classList.toggle('show');
  });
  
  movie16.addEventListener('click', () => {
	info16.classList.toggle('show');
  });
  
  movie17.addEventListener('click', () => {
	info17.classList.toggle('show');
  });
  
  movie18.addEventListener('click', () => {
	info18.classList.toggle('show');
  });
  
  movie19.addEventListener('click', () => {
	info19.classList.toggle('show');
  });
  
  movie20.addEventListener('click', () => {
	info20.classList.toggle('show');
  });
  

//=========================================================
movie1.addEventListener('click', () => {
	info1.classList.toggle('show');
  });
  
  movie2.addEventListener('click', () => {
	info2.classList.toggle('show');
  });
  
  movie3.addEventListener('click', () => {
	info3.classList.toggle('show');
  });
  
  movie4.addEventListener('click', () => {
	info4.classList.toggle('show');
  });
  
  movie5.addEventListener('click', () => {
	info5.classList.toggle('show');
  });
  
  movie6.addEventListener('click', () => {
	info6.classList.toggle('show');
  });
  
  movie7.addEventListener('click', () => {
	info7.classList.toggle('show');
  });
  
  movie8.addEventListener('click', () => {
	info8.classList.toggle('show');
  });
  
  movie9.addEventListener('click', () => {
	info9.classList.toggle('show');
  });
  
  movie10.addEventListener('click', () => {
	info10.classList.toggle('show');
  });
  
  movie11.addEventListener('click', () => {
	info11.classList.toggle('show');
  });
  
  movie12.addEventListener('click', () => {
	info12.classList.toggle('show');
  });
  
  movie13.addEventListener('click', () => {
	info13.classList.toggle('show');
  });
  
  movie14.addEventListener('click', () => {
	info14.classList.toggle('show');
  });
  
  movie15.addEventListener('click', () => {
	info15.classList.toggle('show');
  });
  
  movie16.addEventListener('click', () => {
	info16.classList.toggle('show');
  });
  
  movie17.addEventListener('click', () => {
	info17.classList.toggle('show');
  });
  
  movie18.addEventListener('click', () => {
	info18.classList.toggle('show');
  });
  
  movie19.addEventListener('click', () => {
	info19.classList.toggle('show');
  });
  
  movie20.addEventListener('click', () => {
	info20.classList.toggle('show');
  });
  


//=========================================================
//=========================================================

function abrirVideo() {
	var videoContainer = document.getElementById("videoContainer");
	videoContainer.innerHTML = `
	  <video id="video" controls autoplay width="100%" height="100%">
		<source src="imgs/video.mp4" type="video/mp4 ">
	  </video>
	`;
	var video = document.getElementById("video");
	video.addEventListener("ended", fecharVideo);
	videoContainer.style.display = "block";
  }
  
  function fecharVideo() {
	var videoContainer = document.getElementById("videoContainer");
	var video = document.getElementById("video");
	videoContainer.style.display = "none";
	video.pause();
	video.currentTime = 0;
  }
  