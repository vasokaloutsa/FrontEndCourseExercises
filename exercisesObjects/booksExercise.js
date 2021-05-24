let bookLibrary =[];


//functions I use ----------------------

//Books: creates 1 book
function Books(title,author,pages,state){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.state = state;
  this.info =function(){
      return  `${title} by ${author}, ${pages}, ${state} `;
  };
}

// addBookToLibrary pushes the created book to library list
function addBookToLibrary(title,author,pages,state){
  const book = new Books(title,author,pages,state);
  bookLibrary.push(book);
}


//render iterates through all array items and displays on window all the books of the list
function render(){
  div.innerHTML = '';
  div.innerHTML = "<th>Title</th> <th>Author</th> <th>Pages</th> <th>Read / Not read yet</th>"
  div.style.cssText = "margin:0 auto;text-align:center; color:blue; font-size:1.2em";
  for (let i = 0; i < bookLibrary.length ; i++){
    let row = document.createElement('tr');
    div.appendChild(row);
    row.innerHTML =   `<td>${bookLibrary[i].title}</td>
                       <td>${bookLibrary[i].author}</td>
                       <td>${bookLibrary[i].pages}</td>
                       <td><button id = "stateBtn${i}" class = "state-btn" >${bookLibrary[i].state}</button></td>
                       <button id = "removebtn${i}" class = "remove-btn" > Remove </button>`;

    let removeButton = document.querySelector(`#removebtn${i}`);
    removeButton.addEventListener('click', ()=>{
        removeBook(i);
        render();
    })

    let stateBtn = document.querySelector(`#stateBtn${i}`);
    stateBtn.addEventListener('click', ()=>{
        toggleState(i);  
        render(); 
    })
  }
  
}

function removeBook(index){
    bookLibrary.splice(index,1);
}


function toggleState(ind){
  //alert(`do you want to change '${bookLibrary[ind].state}'?`);
  if (window.confirm(`do you want to change '${bookLibrary[ind].state}'?`)){
      if (bookLibrary[ind].state.toLowerCase() === 'not read yet'){
        bookLibrary[ind].state = 'read';
      
      }else if(bookLibrary[ind].state.toLowerCase() === 'read') {
        bookLibrary[ind].state = 'not read yet';
      }else {
        bookLibrary[ind].state = 'not read yet';
      }
      return bookLibrary[ind].state;
  }else{
    return;
  }
    
}
// DOM elements -------------------------

// table element that displays all books
const div = document.createElement('table');
document.querySelector(".books-display").appendChild(div);
div.innerHTML = "<th>Title</th> <th>Author</th> <th>Pages</th> <th>Read / Not read yet</th>"
div.style.cssText = "margin:0 auto;text-align:center; color:blue; font-size:1.2em";


//new Book Button used to add new Books to list
const newBookButton = document.querySelector('.buttons-style');
newBookButton.addEventListener('click', ()=> {
    let bookForm = document.createElement('form');
    document.querySelector(".bform").appendChild(bookForm);
    bookForm.innerHTML = `<section class = "form-inputs"><input type = 'text' id = 'title' class = 'formEl' name = 'title' placeholder ='Book title'>
                          <input type = 'text' id = 'author' class = 'formEl' name = 'author' placeholder ='Author name'>
                          <input type = 'number' id = 'pages' class = 'formEl' name = 'pages' placeholder ='Number of pages'> 
                          <input type = 'text' id = 'state' class = 'formEl' name = 'state'  placeholder ='Is it read or unread'>
                          <button type = 'submit' id ='submit-book' >Submit book</button></section>`
    bookForm.style.cssText = " display: block;   margin:0 auto;  margin-top:20px;  width:80%;  min-height: 40px;  border:1px solid green;"
                          
  // addBookToLibrary(document.getElementById('title').value,document.getElementById('author').value,document.getElementById('pages').value,document.getElementById('state').value);
    let  submitBtn = document.querySelector('#submit-book');
    submitBtn.addEventListener('click' , ()=>{
      addBookToLibrary(
         document.getElementById('title').value,
         document.getElementById('author').value,
         document.getElementById('pages').value,
         document.getElementById('state').value
      );
      bookForm.innerHTML = '';
      bookForm.style.cssText = 'style:none';
      render();
    })
})

//Remove book button
document.querySelector('button').value



addBookToLibrary('To Kill a Mockingbird',' Harper Lee', '295 pages', 'not read yet');
addBookToLibrary('1984','George Orwell', '885 pages', 'read');
addBookToLibrary('The Lord of the Rings','J.R.R. Tolkien', '895 pages', 'not read');
render();
console.log(bookLibrary);
