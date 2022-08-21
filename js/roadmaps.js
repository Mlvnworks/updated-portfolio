const roadmapSection = document.querySelector('#roadmap-section');
const frontendRoadmap = document.querySelector('#fontend-roadmap');
const backendRoadmap = document.querySelector('#backend-roadmap');

window.addEventListener('scroll', () => {
    const located = () => {
        const distance = window.scrollY - roadmapSection.offsetTop;
        const x = distance
            .toString()
            .split('')
            .filter(num => num !== '-')
            .join('');
        return x * 1;
    };
    if (window.innerWidth > 800) {
        frontendRoadmap.style.transform = `translateX(-${located()}px)`;
        backendRoadmap.style.transform = `translateX(${located()}px)`;
    }
});
