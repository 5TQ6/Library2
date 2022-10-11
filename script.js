let myLibrary = [];

const booksGrid = document.getElementById('booksGrid')
const formDiv = document.getElementById('add-book-div')

//object constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

//adds books to the library array
function addBookToLibrary(title,author,pages,isRead) {
    let book = new Book(title,author,pages,isRead);
    myLibrary.push(book)
    arrayItems()
}

//loop through the array books
function arrayItems() {
    resetBooksGrid();
    for (let book of myLibrary) {
        createBookCard(book);
    }
}

function resetBooksGrid() {
    booksGrid.innerHTML = "";
}

//create a book card displayed in a books grid div
function createBookCard(book) {
    const bookCard = document.createElement('div')    
    const title =  document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const readBtn = document.createElement('button')
    const removeBtn = document.createElement('button')

    bookCard.classList.add('book-card')
    readBtn.classList.add('button')
    removeBtn.classList.add('button')
    //readBtn.onclick = toggleRead
    //removeBtn.onclick = removeBook

    title.textContent = `"${book.title}"`
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`
    removeBtn.textContent = 'Remove'

    removeBtn.addEventListener('click', () => {
        
    })

    if (book.isRead) {
        readBtn.textContent = 'Read'
        readBtn.classList.add('btn-light-green')
    }
    else 
        {
         readBtn.textContent = 'Not read'
         readBtn.classList.add('btn-light-red')
        }

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    bookCard.appendChild(removeBtn)
    bookCard.appendChild(readBtn)
    booksGrid.appendChild(bookCard)
}

function showForm() {
    formDiv.classList.toggle('unhide');
}

function getFormData() {
    let Title = document.getElementById('Title').value;
    let Author = document.getElementById('Author').value;
    let Pages = document.getElementById('Pages').value;
    let Read = document.getElementById('Read').value;

    if ((Title == "") || (Author == "") || (Pages == "") || (Read == ""))
    {
        return;
    }

    addBookToLibrary(Title,Author,Pages,Read)

    clearForm();
}

function clearForm() {
    document.getElementById("add-book").reset();
}

