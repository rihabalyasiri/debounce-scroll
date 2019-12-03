

const sliderImages = document.querySelectorAll('img');

function slide() {
    sliderImages.forEach(sliderImage => {
        const slideIn = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        const isHalfShowed = slideIn > sliderImage.offsetTop;
        const bottomImage = sliderImage.offsetTop + sliderImage.height;
        const isNotScrollPast = bottomImage > window.scrollY;
        if (isHalfShowed && isNotScrollPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(slide));


function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};