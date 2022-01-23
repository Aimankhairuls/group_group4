var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });
// Purchase Button
var modal = document.getElementById('id01');

// Close when click outside the button
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// SlideShow
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const carousel = document.querySelector('.wrapper .carousel');

let size = 1;
let index = 0;

nextBtn.addEventListener('click', ()=>{
    if(index === 2){
        carousel.style.transform = 'translateX(' + 0 + 'px)';
        carousel.style.transition = 'none';
        index = 0;
        size = 1;
        return;
    }
    else if(index === 1){
        carousel.style.transform = 'translateX(' + -1100 + 'px)';
        carousel.style.transition = '.3s ease';
        index = 2;
        size = 2;
        return;
    }
    else{
        carousel.style.transform = 'translateX(' + -550 + 'px)';
        carousel.style.transition = '.3s ease';
        index = 1;
        size = 1;
        return;
    }
});

prevBtn.addEventListener('click', ()=>{
    if(index === 0){
        carousel.style.transform = 'translateX(' + -1100 + 'px)';
        carousel.style.transition = 'none';
        index = 2;
        size = 1;
        return;
    }
    else if(index === 1){
        carousel.style.transform = 'translateX(' + (0) + 'px)';
        carousel.style.transition = '.3s ease';
        index = 0;
        size = 1;
        return;
    }
    else{
        carousel.style.transform = 'translateX(' + (-550) + 'px)';
        carousel.style.transition = '.3s ease';
        index = 1;
        size = 2;
        return;
    }

});

// Sidebar Contact Form 
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
