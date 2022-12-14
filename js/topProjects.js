const projectThumbnail = document.querySelector('#project-thumbnail');
const projectLogo = document.querySelector('#project-logo');
const projectName = document.querySelector('#project-name');
const visitBtn = document.querySelector('#visit-btn');
const topProjects = document.querySelector('#top-projects-section');

const projects = [
    {
        name: 'Coincount',
        thumbnail: './assets/images/coincount-image.jpg',
        logo: './assets/images/showcase logo 1coincount-logo.png',
        link: 'https://coincount.mlvnworks.com',
    },
    {
        name: 'farmWebTool',
        thumbnail: './assets/images/fwt-thumbnail.png',
        logo: './assets/images/farmWebTool-logo.png',
        link: 'https://farmWebTool.mlvnworks.com',
    },
    {
        name: 'SWT writing Tools',
        thumbnail: './assets/images/SWT-image.jpg',
        logo: './assets/images/SWT-logo.png',
        link: 'https://swt.mlvnworks.com',
    },
    {
        name: 'img2txt',
        thumbnail: './assets/images/img2txt_thumbnail.png',
        logo: './assets/images/img2txt_logo.png',
        link: 'https://img2txt.netlify.app/',
    },
];

let count = 0;
let link = 'coincount.mlvnworks.com';

const changesShowProject = () => {
    let x = count;
    const currentName = projects[x].name;
    const currentThumbnail = projects[x].thumbnail;
    const currentLogo = projects[x].logo;
    link = projects[x].link;

    projectThumbnail.src = currentThumbnail;
    projectLogo.src = currentLogo;
    projectName.textContent = currentName;

    projectThumbnail.addEventListener('click', () => {
        window.open(link);
    });

    count = x + 1 >= projects.length ? 0 : x + 1;
};

changesShowProject();

const changes = setInterval(() => {
    changesShowProject();
}, 5000);

visitBtn.addEventListener('click', () => window.open(link));

window.addEventListener('scroll', () => {
    if (window.scrollY + 500 > topProjects.offsetTop) {
        topProjects.style.opacity = 1;
    }
});
