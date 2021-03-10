document.addEventListener('DOMContentLoaded', e => {
    document
        .getElementById('submit_book')
        .addEventListener('click', e => {
            const book = {
                isbn: document.getElementById('isbn').value,
                title: document.getElementById('title').value,
                subtitle: document.getElementById('subtitle').value,
                author: document.getElementById('author').value,
                published: document.getElementById('published').value,
                publisher: document.getElementById('publisher').value,
                pages: document.getElementById('pages').value,
                description: document.getElementById('description').value,
                website: document.getElementById('website').value
            }

            fetch('/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            })
                .then(response => { })
                .then(data => {
                    window.location.href = '/';
                })
        })
})