'use strict';
console.log(`Початок сьомої задачі ⬇`);

const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };

const account = {
    balance: 0,

    transactions: [],

    createTransaction(amount, type) {
        const createdTransaction = {
            currentAmount: amount,
            currentType: type
        };
        return createdTransaction;
    },

    deposit(amount) {
        if (Number.isNaN(+amount)){
            return console.log('Ви не ввели число');
        };
        this.transactions.push(
            this.createTransaction(amount, Transaction.DEPOSIT));
        this.balance += amount;
    },

    withdraw(amount) {
        if (Number.isNaN(+amount)){
            return console.log('Ви не ввели число');
        };
        if (amount > this.balance){
            return console.log('Не достатньо коштів на рахунку');
        }
        this.transactions.push(this.createTransaction(
            amount, Transaction.WITHDRAW));
        this.balance -= amount;
    },

    getBalance() {
        return this.balance;
    },

    getTransactionDetails(id) {
        return this.transactions[id];
    }, 

    getTransactionTotal(type) {
        let result = 0;
        for (const obj of this.transactions){
            const {currentAmount,currentType} = obj;
            if (type === currentType){
                result += currentAmount;
            }
        }
        return result;
    },
  };
account.deposit(123);
account.withdraw(147);
account.withdraw('money');
account.withdraw(23);

console.log(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log('Кінець всіх сьомої задачі ');