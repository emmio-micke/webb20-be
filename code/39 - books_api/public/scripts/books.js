const loadBooks = () => {
    fetch('/books')
        .then(response => response.json())
        .then(books => {
            let book_list = document.getElementById('books')

            for (let book of books) {
                let book_element = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">${book.description}</p>
                        <a href="#" class="btn btn-primary">View details</a>
                    </div>
                </div>`

                book_list.innerHTML += book_element
            }
        })
}

loadBooks()
