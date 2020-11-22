const removeFromArray = function(array,...args) {
    let newArray=[];
    let i=0;
    
    while (i<array.length){

            if (array[i]!==args[0]&& array[i]!==args[1] && array[i]!==args[2] && array[i]!==args[3] ) {
                
                newArray.push(array[i]);   
            }
        
         
        i++;
    }    

    return newArray;
}

module.exports = removeFromArray
