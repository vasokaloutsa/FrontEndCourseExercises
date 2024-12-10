const caesar = function(str,shiftFactor) {
    // const length=str.length;
    // let crypt;
    // let finalCrypt;
    // let result=[];
    // let letter;

    // for (let i=0;i<length;i++){
        
    //      crypt= str.charCodeAt(i);
    //      if (crypt>=65 && crypt<=90){
    //        finalCrypt=crypt+shiftFactor;
    //        if (finalCrypt>90){
    //            if(shiftFactor<0){
                
    //             remainShF=crypt-90;
    //             remainNo=shiftFactor-remainShF;
    //             finalCrypt=65+remainNo;
    //             letter=String.fromCharCode(finalCrypt);
    //             result.push(letter); 
    //            }else{
    //            remain=finalCrypt-90;}
    //            finalCrypt=64+remain;
    //            letter=String.fromCharCode(finalCrypt);
    //            result.push(letter); 
    //        }else{
    //            letter=String.fromCharCode(finalCrypt);
    //            result.push(letter);
    //         }
            
    //      }else if(crypt>=97 && crypt<=122){
    //         finalCrypt=crypt+shiftFactor;
    //          if (finalCrypt>122){
                 
    //             remain=finalCrypt-122;
    //             finalCrypt=97+remain;
    //             letter=String.fromCharCode(finalCrypt);
    //             result.push(letter); 
    //         }else{
                
    //             letter=String.fromCharCode(finalCrypt);
    //             result.push(letter);
    //         }

    //      }

    //      else{
    //          letter=String.fromCharCode(crypt);
    //          result.push(letter);
    //         }
         
    // }
    
    // return result.join('');


    //---------------------------------

    // //using higher order

     const crypt = str.split('').map(function(letter){
        if (shiftFactor>26 && shiftFactor>0){
            shiftFactor= - Math.round(shiftFactor/26);
        }
        if(shiftFactor>26 && shiftFactor<0 ){
            shiftFactor= Math.round(shiftFactor/26);
        }
        //exclude every character that is not letter
        if (letter.charCodeAt()<65 ||letter.charCodeAt()>=91 && letter.charCodeAt()<=96 ||letter.charCodeAt()>122 ){
            return letter.charCodeAt();
         } 
             //upper letters must begin from 65 again if +shift factor >90
         if (letter === letter.toUpperCase()){

                //do not extend upper limit
                 if (letter.charCodeAt()+shiftFactor>90){
                    let factor = shiftFactor - (90 - letter.charCodeAt());
                    return 64 + factor;
                 }
                
                 //do not extend lower limit
                 if (letter.charCodeAt()+shiftFactor<65){
                    let factor = shiftFactor - (65 - letter.charCodeAt());
                    return 91 + factor;
                 }
         }else if (letter === letter.toLowerCase()){
            if  (letter.charCodeAt()+shiftFactor>122){
                let factor = shiftFactor - (122 - letter.charCodeAt());
                return 96 + factor;
             }
            
             //do not extend lower limit
             if (letter.charCodeAt()+shiftFactor<97){
                let factor = shiftFactor - (97 - letter.charCodeAt());
                return 123+ factor;
             }
         }

         //prepei analoga me toplh8os twn grammatwn (26) na blepw poses fores to 75 xwraei sto 26 
             

            return letter.charCodeAt()+shiftFactor;
         
        
     });
    
     let final=[];
     for (let i=0; i<crypt.length;i++){
        final.push(String.fromCharCode(crypt[i]));
     }
   
     return final.join('');

}
module.exports = caesar
