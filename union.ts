type ID = number | string;

// const id1 : ID = 125

function getID(id: ID) {
  if (typeof id === "string") return console.log(id.toUpperCase);
  else return console.log(id)
}

// console.log(getID("222"))

function getFirstThree(x:string | number[]){
    return x.slice(0,2)
}

// let result = getFirstThree("Rishabh")
let result = getFirstThree([22 , 3 , 124 , 0])
console.log(result)