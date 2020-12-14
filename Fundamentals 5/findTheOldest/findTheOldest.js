let findTheOldest = function(people) {
   const result=  people.reduce((accum,current)=>{
      if( current.yearOfDeath>01){
         if ((accum.yearOfDeath-accum.yearOfBirth)<(current.yearOfDeath-current.yearOfBirth)){
               accum=current;
               
            }
            return accum;
      }else{
         return accum;
      }
       
     
   });
   return result;}

module.exports = findTheOldest
