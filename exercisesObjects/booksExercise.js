function Books(title,author,pages,state){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = state;
  this.info =function(){
      return  `${title} by ${author}, ${pages}, ${state} `
  }
}

const book1 = new Books ('The Hobbit',' J.R.R. Tolkien', '295 pages', 'not read yet');
console.log(book1.info());
