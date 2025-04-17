// type alias created similar to datatype like number string boolean etc. 
type User = {
    firstName : string,
    lastName : string ,
    age: number,
    email: string,
    id?: number // for making optional it will be number or undefined
}
 // user defined datatype
const user : User = {
    firstName : "Rishabh",
    lastName: "Gupta",
    age: 22,
    email:"25f1002822@ds.study.iitm.ac.in",
    
}

console.log(user?.firstName + user.id)


