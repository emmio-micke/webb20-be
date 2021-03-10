const deleteBook = (isbn, element) => {
    fetch(`/books/${isbn}`, {
        method: 'DELETE'
    })
        .then(response => { })
        .then(data => {
            element.parentNode.parentNode.remove()
            alert('Removed the book')
        })
}

const editBook = isbn => {
    fetch(`/books/${isbn}`)
        .then(response => response.json())
        .then(book => {
            document.getElementById('isbn').value = book.isbn
            document.getElementById('title').value = book.title
            document.getElementById('subtitle').value = book.subtitle
            document.getElementById('author').value = book.author
            document.getElementById('published').value = book.published
            document.getElementById('publisher').value = book.publisher
            document.getElementById('pages').value = book.pages
            document.getElementById('description').value = book.description
            document.getElementById('website').value = book.website
        })
}

const loadBooks = () => {
    fetch('/books')
        .then(response => response.json())
        .then(books => {
            let book_list = document.getElementById('books')

            for (let book of books) {
                let book_element = `
                <div class="card col-4" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">${book.description}</p>
                        <button class="btn btn-danger" onclick="deleteBook('${book.isbn}', this)">Delete</button>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#edit_modal" onclick="editBook('${book.isbn}')">Edit</button>
                    </div>
                </div>`

                book_list.innerHTML += book_element
            }
        })
}

loadBooks()
