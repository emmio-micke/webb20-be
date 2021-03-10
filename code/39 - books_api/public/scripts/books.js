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
                        <a href="#" class="btn btn-primary">View details</a>
                    </div>
                </div>`

                book_list.innerHTML += book_element
            }
        })
}

loadBooks()
