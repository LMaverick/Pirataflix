const  carrossel = document.querySelector(".carrossel");

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

