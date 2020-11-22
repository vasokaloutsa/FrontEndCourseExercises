const sumAll = function(smallValue, bigValue) {
    let sum=0;
    if(smallValue<0 || bigValue<0 ||(typeof smallValue!='number' || typeof bigValue!='number')){
        return 'ERROR';
    }
    else if (smallValue<bigValue){
        for (let i=smallValue;i<=bigValue;i++){
            sum +=i;    
         }
           
    } else{
        for (let i=smallValue;i>=bigValue;i--){
            sum +=i;    
        }

    }

    return sum;
}


// const sumAll = function(bigValue, smallValue) {
//     let sum=0;
    
//     if (bigValue<0 || smallValue<0){
//         return "ERROR";
//     }
//     else{

//       for (let i=bigValue;i>=smallValue;i--){
//           sum =sum+i;    
//        }
//        return sum;
//     }
// }

module.exports = sumAll
