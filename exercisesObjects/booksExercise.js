let bookLibrary =[];

function Books(title,author,pages,state){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.state = state;
  this.info =function(){
      return  `${title} by ${author}, ${pages}, ${state} `
  }
}

function addBookToLibrary(title,author,pages,state){
  let book = new Books (title,author,pages,state);
  bookLibrary.push(book);
}

function render(){
  div.innerHTML = '';
  for (let i = 0; i < bookLibrary.length ; i++){
    let row = document.createElement('tr');
    div.appendChild(row);
    row.innerHTML =   `<td>${bookLibrary[i].title}</td>
                       <td>${bookLibrary[i].author}</td>
                       <td>${bookLibrary[i].pages}</td>
                       <td>${bookLibrary[i].state}</td>`;
  }
  
}

const div = document.createElement('table');
document.querySelector(".books-display").appendChild(div);
div.innerHTML = "<th>Title</th> <th>Author</th> <th>Pages</th> <th>Read / Unread</th>"
div.style.cssText = "margin:0 auto;text-align:center; color:blue; font-size:1.2em";


const newBookButton = document.querySelector('.buttons-style');
newBookButton.addEventListener('click', ()=> {
  let bookForm = document.createElement('form');
  document.querySelector(".bform").appendChild(bookForm);
  bookForm.innerHTML = `<input type = 'text' id = 'title' name = 'title' placeholder ='Book title'>
                        <input type = 'text' id = 'author' name = 'author' placeholder ='Author name'>
                        <input type = 'text' id = 'pages' name = 'pages' placeholder ='Number of pages'> 
                        <input type = 'text' id = 'state' name = 'state'  placeholder ='Is it read or unread'>
                        `
  
  addBookToLibrary(document.getElementById('title').value,document.getElementById('author').value,document.getElementById('pages').value,document.getElementById('state').value);
  return render();
})



addBookToLibrary('The Hobbit',' J.R.R. Tolkien', '295 pages', 'not read yet');
addBookToLibrary('The Diary',' lkien', '885 pages', 'not read yet');
render();
console.log(bookLibrary);
