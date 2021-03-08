class Ship{
     
    constructor(name,length){
        this.name = name;
        this.length = length;
        // this.hitCoordinate = hitCoordinate;
        this.sunk = false;  
        this.coordinatesArray = [];
        for (let i = 0; i < this.length ; i++){
            this.coordinatesArray.push("fine") ;
        }
    }
    info(){
      return this.coordinatesArray
    }
    hitBox(hitBox){    
        this.coordinatesArray[hitBox-1] = 'hit'
        return this.coordinatesArray
    }
    isSunk(){
        let getState = this.coordinatesArray.filter(elements => elements.includes('fine'));
        if (getState.length === 0){
            this.sunk = true;
        }
        return this.sunk
    }

}

let test = new Ship(2,1)
//console.log(test.hitBox(1).isSunk())  giati den mporw na to kanw auto?afou kai ta 2  einai methodoi
console.log(test.isSunk())
console.log(test.hitBox(2))
console.log(test.isSunk())
module.exports = Ship