document.addEventListener('DOMContentLoaded', e => {
    let table = document.getElementById('tasklist')

    if (typeof table !== 'undefined') {
        table.addEventListener('click', e => {
            let input = document.createElement('input')
            input.value = e.target.textContent.trim()
            input.addEventListener('blur', e => {
                let id = e.target.getAttribute('data-id')
                let new_value = input.value

                let url = `/edit/${id}`
                let data = { todo_item: new_value }

                fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data) // body data type must match "Content-Type" header
                })
                    .then(response => {
                        console.log(response)
                    })
            })

            e.target.innerHTML = ''
            e.target.appendChild(input)
            input.focus()
        })
    }
})