// Same as alias

interface Transaction {
    payerID : number;
    receiverID : number;
}

interface BankAccount {
   acountNo: number ;
   accountHolderName: string;
   balance : number;
   isActive: boolean;
   transactions: Array<Transaction>;

}
const transaction1 : Transaction ={
    payerID:5545,
    receiverID:1454
}
const transaction2 : Transaction ={
    payerID:54445,
    receiverID:2154
}

const bankAcc : BankAccount ={
    accountHolderName: "Saijal Gupta",
    acountNo:9999805640,
    balance:45044,
    isActive:true,
    transactions : [transaction1 , transaction2]
}