const showcaseImg = document.querySelector('#laptop-for-desktop');

// image slide effect
window.addEventListener('scroll', () => {
    showcaseImg.style.transform = `translateX(${window.scrollY}px)`;
});
