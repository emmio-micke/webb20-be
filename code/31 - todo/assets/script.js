document.addEventListener('DOMContentLoaded', e => {
    let table = document.getElementById('tasklist')

    if (typeof table !== 'undefined') {
        table.addEventListener('click', e => {
            let id = e.target.getAttribute('data-id')
            let input = document.createElement('input')
            input.value = e.target.textContent.trim()
            input.addEventListener('blur', e => {
                let url = `/edit/${id}`
                let data = `todo_item=${encodeURIComponent(input.value)}`;

                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: data
                })
                    .then(response => {
                        window.location = '/';
                    })
            })

            e.target.innerHTML = ''
            e.target.appendChild(input)
            input.focus()
        })
    }
})