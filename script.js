let myLibrary = [];
let index = 0;

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
    readBtn.addEventListener('click', toggleRead)
    removeBtn.addEventListener('click', removeBook)

    title.textContent = `"${book.title}"`
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`
    removeBtn.textContent = 'Remove'

    removeBtn.value = index;
    index++;

    

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

//remove the book from the array and update the grid
function removeBook(removeBtn) {
    let retrieveBookToRemove = removeBtn.value;
    myLibrary.splice(parseInt(retrieveBookToRemove),1)
    index--;
    arrayItems();
}

function toggleRead() {
    if(this.textContent == 'Read')
    {
        this.textContent = 'Not read'
        this.classList.replace('btn-light-green','btn-light-red')
    }
    else 
    {
        this.textContent = 'Read'
        this.classList.replace('btn-light-red', 'btn-light-green')
    }
}

function showForm() {
    formDiv.classList.toggle('unhide');
}

//Read the data input from the user and display it
function getFormData() {
    let Title = document.getElementById('Title').value;
    let Author = document.getElementById('Author').value;
    let Pages = document.getElementById('Pages').value;
    let Read = document.getElementById('Read').checked;

    if ((Title == "") || (Author == "") || (Pages == "") || (Read === ""))
    {
        return;
    }

    addBookToLibrary(Title,Author,Pages,Read)

    clearForm();
}

//Clears the form inputs
function clearForm() {
    document.getElementById("add-book").reset();
}

