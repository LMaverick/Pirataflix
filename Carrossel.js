const  carrossel = document.querySelector(".carrossel"),
firstImg  = carrossel.querySelector("img")[0];
setas = document.querySelectorAll(".carrossel i"); 

let firstImgWidth = firstImg.clientWidth +  14;

setas.forEach(icon => {
    icon.addEventListener("click",  () => {
        carrossel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth; 
    });
    
});



let isDragStart = false, prevPageX,  prevScrollLeft;

const dragStart = (e) => {   

    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft= carrossel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff =  e.pageX - prevPageX;
    carrossel.scrollLeft = prevScrollLeft - positionDiff;

}

const dragStop = () => {

    isDragStart = false;
}


carrossel.addEventListener("mousedown",  dragStart);
carrossel.addEventListener("mousemove",  dragging);
carrossel.addEventListener("mouseup",  dragStop);

