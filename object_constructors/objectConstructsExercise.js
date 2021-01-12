function Account(name,balance){
    this.name = name;
    number = Math.random()*100000;
    this.iban = (`GR0000${Math.round(number)}`);
    if (balance === undefined){
        this.balance = 0;
    }else{this.balance = balance;}
}

Account.prototype.deposit = function(amount){
      if(amount < 0 || !typeof(amount) === 'number'){
          return "Error 'Invalid amount'";
       }
       this.balance += amount;
       return `Deposit of ${amount} is made by ${this.name}`;
}


Account.prototype.withdraw = function(amount){
    if(amount < 0 || !typeof(amount) === 'number'){
        return 'Please retype';
    }
    if(amount > this.balance){
        return "Error 'Insufficient balance!'"
    }
    this.balance -= amount;
    return `Withdraw of ${amount} is made by ${this.name}`;
}

Account.prototype.getBalance = function(){
    return `Current balance is : ${this.balance}`;
}



const newAccount = new Account( "Kostas Minaidis" );    
// New account created for: Kostas Minaidis
// IBAN: GR00010003

console.log(newAccount.getBalance())     // 0
console.log(newAccount.deposit( 100 ))  
console.log(newAccount.getBalance())     // 100
console.log(newAccount.withdraw( 50 ))  
console.log(newAccount.getBalance())     // 50

console.log(newAccount.withdraw( 500 ))  // Error 'Insufficient balance!'
console.log(newAccount.withdraw( "50" ))  // Error 'Invalid amount'
