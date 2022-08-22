var form = document.getElementById('my-form');

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById('my-form-status');
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: 'application/json',
        },
    })
        .then(response => {
            if (response.ok) {
                status.innerHTML = 'Thank you!';
                status.classList.add('status-success');
                setTimeout(() => {
                    status.classList.remove('status-success');
                }, 5000);
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data['errors'].map(error => error['message']).join(', ');
                        status.classList.add('status-error');
                        setTimeout(() => {
                            status.classList.remove('status-error');
                        }, 5000);
                    } else {
                        status.innerHTML = 'Oops! There was a problem submitting your message';
                        status.classList.add('status-error');
                        setTimeout(() => {
                            status.classList.remove('status-error');
                        }, 5000);
                    }
                });
            }
        })
        .catch(error => {
            status.innerHTML = 'Oops! There was a problem submitting your message';
            status.classList.add('status-error');
            setTimeout(() => {
                status.classList.remove('status-error');
            }, 5000);
        });
}
form.addEventListener('submit', handleSubmit);
