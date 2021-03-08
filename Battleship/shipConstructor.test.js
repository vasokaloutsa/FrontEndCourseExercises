const { expect } = require('@jest/globals')
const Ship = require ('./shipConstructor')

test ('construct a ship with length 2 boxes',()=>{
    expect(new Ship(2).info()).toEqual(["fine","fine"])
})

test ('construct a ship with 4 boxes and hit box 2', ()=>{
    expect(new Ship(4).hitBox(2)).toEqual(["fine","hit","fine","fine"])
})

test ('construct a ship with 1 box and hit box and see if sunk', ()=>{
    expect((new Ship(1).hitBox(1)).isSunk).toEqual(true)
})