let bookLibrary =[];


//functions I use ----------------------

//Books: creates 1 book
function Books(title,author,pages,state){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.state = state;
  this.info =function(){
      return  `${title} by ${author}, ${pages}, ${state} `
  }
}

// addBookToLibrary pushes the created book to library list
function addBookToLibrary(title,author,pages,state){
  let book = new Books (title,author,pages,state);
  bookLibrary.push(book);
}


//render iterates through all array items and displays on window all the books of the list
function render(){
  div.innerHTML = '';
  for (let i = 0; i < bookLibrary.length ; i++){
    let row = document.createElement('tr');
    div.appendChild(row);
    row.innerHTML =   `<td>${bookLibrary[i].title}</td>
                       <td>${bookLibrary[i].author}</td>
                       <td>${bookLibrary[i].pages}</td>
                       <td><button id = "stateBtn${i}" >${bookLibrary[i].state}</button></td>
                       <td><button id = "removebtn${i}" > Remove </button></td>`;

    let removeButton = document.querySelector(`#removebtn${i}`);
    removeButton.addEventListener('click', ()=>{
      removeBook(i);
      render();
    })

    let stateBtn = document.querySelector(`#stateBtn${i}`);
    stateBtn.addEventListener('click', ()=>{
    
    alert(bookLibrary[i].state);
    toggleState(bookLibrary[i].state);
    render();
    alert(bookLibrary[i].state);
    
    })
  }
  
}

function removeBook(index){
    bookLibrary.splice(index,1);
}


function toggleState(state){
    if (state === 'not read yet'){
       state = 'read';
     
    }else {
      state = 'not read yet';
    }
    return alert(state);
}
// DOM elements -------------------------

// table element that displays all books
const div = document.createElement('table');
document.querySelector(".books-display").appendChild(div);
div.innerHTML = "<th>Title</th> <th>Author</th> <th>Pages</th> <th>Read / Unread</th>"
div.style.cssText = "margin:0 auto;text-align:center; color:blue; font-size:1.2em";


//new Book Button used to add new Books to list
const newBookButton = document.querySelector('.buttons-style');
newBookButton.addEventListener('click', ()=> {
  let bookForm = document.createElement('form');
  document.querySelector(".bform").appendChild(bookForm);
  bookForm.innerHTML = `<input type = 'text' id = 'title' name = 'title' placeholder ='Book title'>
                        <input type = 'text' id = 'author' name = 'author' placeholder ='Author name'>
                        <input type = 'text' id = 'pages' name = 'pages' placeholder ='Number of pages'> 
                        <input type = 'text' id = 'state' name = 'state'  placeholder ='Is it read or unread'>
                        <button type = 'submit' id ='submit-book' >Submit book</button>`
  
                        
  // addBookToLibrary(document.getElementById('title').value,document.getElementById('author').value,document.getElementById('pages').value,document.getElementById('state').value);
  let  submitBtn = document.querySelector('#submit-book');
  submitBtn.addEventListener('click' , ()=>{
    addBookToLibrary(document.getElementById('title').value,document.getElementById('author').value,document.getElementById('pages').value,document.getElementById('state').value);
    bookForm.innerHTML = '';
    render();
  })
})

//Remove book button
document.querySelector('button').value



addBookToLibrary('The Hobbit',' J.R.R. Tolkien', '295 pages', 'not read yet');
addBookToLibrary('The Diary',' lkien', '885 pages', 'not read yet');
render();
console.log(bookLibrary);
