var form = document.getElementById('my-form');

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.querySelector('.web-msg');
    var data = new FormData(event.target);
    fetch('https://formspree.io/f/xjvdjalr', {
        method: 'POST',
        body: data,
        headers: {
            Accept: 'application/json',
        },
    })
        .then(response => {
            if (response.ok) {
                status.innerHTML = 'Successfuly Sent!';
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
form.addEventListener('submit', handleSubmit);
