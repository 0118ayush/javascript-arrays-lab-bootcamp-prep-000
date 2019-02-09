var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
}

// Test 2

var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

// Test 3 

var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyRemoveLastKitten(){
  kittens.pop()
}


//Test 4 

var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}


//Test 5

var kittens = ["Milo", "Otis", "Garfield"]; 

function appendKitten(name){
  var newKittens = [...kittens, name]
  return newKittens
}


/*
var kittens = ["Milo", "Otis", "Garfield"]; 

function removeLastKitten(){
  newKittens = kittens.slice(0, 2)
  return newKittens 

}


*/









