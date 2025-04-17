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


const bankAcc : BankAccount ={
    accountHolderName: "Saijal Gupta",
    acountNo:9999805640,
    balance:45044,
    isActive:true,
    transactions : []
}