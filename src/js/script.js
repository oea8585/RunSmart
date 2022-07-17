// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"</button>',
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                 dots: true,
//                 arrows: false
//             }
//         }
//         ]
//       });
//   });
const images = document.querySelectorAll('.slider .slider__line img');
const sliderLine = document.querySelector('.slider .slider__line');
let count = 0;
let width;

function init(){
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*images.length + 'px';
    images.forEach( item=> {
        item.style.width = width + 'px';
        item.style.height = width + 'auto';

    });
rollSlider();
    console.log(width);
}
window.addEventListener('resize', init);
init();

document.querySelector('.slider__button-prev').addEventListener('click', function(){
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});
function rollSlider(){
    sliderLine.style.transform = 'translate(' +count * width+ 'px)';
}

document.querySelector('.slider__button-next').addEventListener('click', function(){
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});
function rollSlider(){
    sliderLine.style.transform = 'translate(-' +count * width+ 'px)';
}