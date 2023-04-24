const requestCvModal = document.querySelector('.request-cv-modal');
const requestCvBtn = document.querySelector('#request-cv-btn');
const requestCvForm = document.querySelector('#request-cv-form');

async function requestCvHandleSubmit(event) {
    event.preventDefault();
    var status = document.querySelector('.web-msg');
    var data = new FormData(event.target);

    fetch('https://formspree.io/f/mdovywbd', {
        method: 'POST',
        body: data,
        headers: {
            Accept: 'application/json',
        },
    })
        .then(response => {
            if (response.ok) {
                status.innerHTML = 'Request Sent!';
                status.style.transform = 'translateX(0)';
                status.classList.add('success-msg');
                setTimeout(() => {
                    status.style.transform = 'translateX(-600px)';
                }, 5000);
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data['errors'].map(error => error['message']).join(', ');
                        status.style.transform = 'translateX(0)';
                        status.classList.add('error-msg');
                        setTimeout(() => {
                            status.style.transform = 'translateX(-600px)';
                        }, 5000);
                    } else {
                        status.innerHTML = 'Oops! There was a problem submitting your message';
                        status.style.transform = 'translateX(0)';
                        status.classList.add('error-msg');
                        setTimeout(() => {
                            status.style.transform = 'translateX(-600px)';
                        }, 5000);
                    }
                });
            }
        })
        .catch(error => {
            status.innerHTML = 'Oops! There was a problem submitting your message';
            status.style.transform = 'translateX(0)';
            status.classList.add('error-msg');
            setTimeout(() => {
                status.style.transform = 'translateX(-600px)';
            }, 5000);
        });
}
requestCvForm.addEventListener('submit', e => {
    // Hide modal
    requestCvModal.style.display = 'none';
    document.body.style.overflow = 'unset';
    handleSubmit(e);
});

// Close Modal
requestCvModal.addEventListener('click', e => {
    if (e.target.classList.contains('request-cv-modal')) {
        requestCvModal.style.display = 'none';
        document.body.style.overflow = 'unset';
    }
});

requestCvBtn.addEventListener('click', () => {
    // open modal && disable scroll
    document.body.style.overflow = 'hidden';
    requestCvModal.style.display = 'flex';
});
