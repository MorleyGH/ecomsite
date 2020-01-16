var slides = document.querySelectorAll('.slide');
var next = document.querySelector('#right');
var prev = document.querySelector('#left');

// true to enable automatic slideshow
var autoPlay = true;

var slideTime = 4500;
let intervalTime;

const prevSlide = () => {

    // grab present class
    var present = document.querySelector('.present');

    // remove present from the class
    present.classList.remove('present');

    // add present to the previous slide or to last slide
    if(present.previousElementSibling) {
        present.previousElementSibling.classList.add('present');
    } else {
        slides[slide.length - 1].classList.add('present');
    }

    setTimeout(() => currrent.classList.remove('present'));
}

const nextSlide = () => {

    // grab present class
    var present = document.querySelector('.present');

    // remove present from the class
    present.classList.remove('present');

    // add present to the previous slide or to last slide
    if(present.nextElementSibling) {
        present.nextElementSibling.classList.add('present');
    } else {
        slides[0].classList.add('present');
    }

    setTimeout(() => currrent.classList.remove('present'));
}

// events for buttons when clicked
next.addEventListener('click', e => {
    nextSlide();

    // resets automatic timer if arrows are triggered
    if(autoPlay) {
        clearInterval(intervalTime);
        intervalTime = setInterval(nextSlide, slideTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();

    // resets automatic timer if arrows are triggered
    if(autoPlay) {
        clearInterval(intervalTime);
        intervalTime = setInterval(nextSlide, slideTime);
    }
});

// automatically play slideshow
if(autoPlay) {
    intervalTime = setInterval(nextSlide, slideTime);
}