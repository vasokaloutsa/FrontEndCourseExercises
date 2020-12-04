const palindromes = function(str) {
    const lettersOnly=str.split('').filter(function (letter){
       if (letter.charCodeAt()>=65 && letter.charCodeAt()<=90 ||letter.charCodeAt()>=97 && letter.charCodeAt()<=122 ){
          return true;
       }
     });
  const regularString = lettersOnly.join('').toLowerCase(); 
  const reversedString = lettersOnly.reverse().join('').toLowerCase();
    
  if(regularString===reversedString){
        return true;
    }
          
return false;
   

    
}

module.exports = palindromes
