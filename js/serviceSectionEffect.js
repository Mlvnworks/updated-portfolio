const serviceSection = document.querySelector('#service-section');
const firstService = document.querySelector('#first-service');
const secondService = document.querySelector('#second-service');
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

    // effects in desktop
    if (window.innerWidth > 800) {
        firstService.style.transform = `translateX(-${located()}px)`;
        lastService.style.transform = `translateX(${located()}px)`;
    } else {
        // effects in mobile
        if (window.scrollY + 500 > firstService.offsetTop) {
            firstService.style.transform = `translateX(0)`;
        }
        if (window.scrollY + 500 > secondService.offsetTop) {
            secondService.style.transform = `translateX(0)`;
        }
        if (window.scrollY + 500 > lastService.offsetTop) {
            lastService.style.transform = `translateX(0)`;
        }
    }
});
