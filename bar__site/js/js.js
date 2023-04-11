let offset = 0;
const SliderLine = document.querySelector('.slider__line');
document.querySelector('.slider-next').addEventListener('click', function() {
    offset = offset + 1920;
    if (offset === 0) {
        document.querySelector('.dot-1').classList.add('slider__dot-active');
        document.querySelector('.dot-2').classList.remove('slider__dot-active');
        document.querySelector('.dot-3').classList.remove('slider__dot-active');
    }
    if (offset === 1920) {
        document.querySelector('.dot-1').classList.remove('slider__dot-active');
        document.querySelector('.dot-2').classList.add('slider__dot-active');
        document.querySelector('.dot-3').classList.remove('slider__dot-active');

    }
    if (offset === 3840) {
        document.querySelector('.dot-1').classList.remove('slider__dot-active');
        document.querySelector('.dot-2').classList.remove('slider__dot-active');
        document.querySelector('.dot-3').classList.add('slider__dot-active');
    }
    if (offset > 3840) {
        offset = 0;
        document.querySelector('.dot-1').classList.add('slider__dot-active');
        document.querySelector('.dot-2').classList.remove('slider__dot-active');
        document.querySelector('.dot-3').classList.remove('slider__dot-active');

    }
    SliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function() {
    offset = offset - 1920;
    if (offset === 0) {
        document.querySelector('.dot-1').classList.add('slider__dot-active');
        document.querySelector('.dot-2').classList.remove('slider__dot-active');
        document.querySelector('.dot-3').classList.remove('slider__dot-active');
    };
    if (offset === 1920) {
        document.querySelector('.dot-1').classList.remove('slider__dot-active');
        document.querySelector('.dot-2').classList.add('slider__dot-active');
        document.querySelector('.dot-3').classList.remove('slider__dot-active');

    };
    if (offset === 3840) {
        document.querySelector('.dot-1').classList.remove('slider__dot-active');
        document.querySelector('.dot-2').classList.remove('slider__dot-active');
        document.querySelector('.dot-3').classList.add('slider__dot-active');
    };
    if (offset < 0) {
        offset = 3840;
        document.querySelector('.dot-1').classList.remove('slider__dot-active');
        document.querySelector('.dot-2').classList.remove('slider__dot-active');
        document.querySelector('.dot-3').classList.add('slider__dot-active');
    };
    SliderLine.style.left = -offset + 'px';
    
});










const SliderLineTwo = document.querySelector('.slider-2__line');
document.querySelector('.slider-2__next').addEventListener('click', function() {
    offset = offset + 1920;
    if (offset === 3840) {
        document.querySelector('.slider-2__prev').classList.add('slider-2__prev-active');
        document.querySelector('.slider-2__next').classList.remove('slider-2__next-active');
    }
    if (offset === 1920) {
        document.querySelector('.slider-2__prev').classList.add('slider-2__prev-active');
        document.querySelector('.slider-2__next').classList.add('slider-2__next-active');
    }
    if (offset > 3840) {

        offset = 3840;
    }
    SliderLineTwo.style.left = -offset + 'px';
});

document.querySelector('.slider-2__prev').addEventListener('click', function() {
    offset = offset - 1920;
    if (offset === 3840) {
        document.querySelector('.slider-2__prev').classList.add('slider-2__prev-active');
        document.querySelector('.slider-2__next').classList.remove('slider-2__next-active');
    }
    if (offset === 1920) {
        document.querySelector('.slider-2__prev').classList.add('slider-2__prev-active');
        document.querySelector('.slider-2__next').classList.add('slider-2__next-active');
    }
    if (offset === 0) {
        document.querySelector('.slider-2__prev').classList.remove('slider-2__prev-active');
        document.querySelector('.slider-2__next').classList.add('slider-2__next-active');
    }
    if (offset < 0) {
        offset = 0;
    } 
    SliderLineTwo.style.left = -offset + 'px';
    
});


   
