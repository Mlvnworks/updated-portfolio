const serviceSection = document.querySelector('#service-section');
const firstService = document.querySelector('#first-service');
const lastService = document.querySelector('#last-service');

window.addEventListener('scroll', () => {
    const located = () => {
        const distance = window.scrollY - serviceSection.offsetTop;
        const x = distance
            .toString()
            .split('')
            .filter(num => num !== '-')
            .join('');
        return x * 1;
    };

    if (window.innerWidth > 800) {
        firstService.style.transform = `translateX(-${located()}px)`;
        lastService.style.transform = `translateX(${located()}px)`;
    }
});
