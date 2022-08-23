const showcaseImg = document.querySelector('#laptop-for-desktop');
const hireBtn = document.querySelector('#hire-btn');

// image slide effect
window.addEventListener('scroll', () => {
    showcaseImg.style.transform = `translateX(${window.scrollY}px)`;
});

hireBtn.addEventListener('click', () => window.open('../pages/hire-page.html'));
