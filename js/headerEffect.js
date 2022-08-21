// header opening
let headerState = false;
const btnTrigger = document.getElementById('trigger-btn');
const headerCloser = document.getElementById('header-closer');

const reactHeader = state => {
    const header = document.getElementById('main-header');
    switch (state) {
        case true:
            header.classList.remove('slide-left');
            break;
        case false:
            header.classList.add('slide-left');
        default:
            break;
    }
};

btnTrigger.addEventListener('click', () => {
    headerState = !headerState;
    reactHeader(headerState);
});

headerCloser.addEventListener('click', () => {
    headerState = !headerState;
    reactHeader(headerState);
});
