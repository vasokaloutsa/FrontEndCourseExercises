const getTheTitles = function(books) {
    let titl=[];
      books.forEach(function(titles){
          titl.push(titles.title);
      })
      return titl;
}

module.exports = getTheTitles;
