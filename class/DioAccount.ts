export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = false;

  constructor(name: string, accountNumber: number, balance: number, status: boolean) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.status = status;
  }

  getName = (): string => {
    return this.name;
  };

  getAccountNumber = (): number => {
    return this.accountNumber;
  }

  getBalance = (): number => {
    return this.balance;
  };

  setBalance = (balance: number): void => {
    this.balance = balance;
  };

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log('You deposited', amount);
    }
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus() && this.balance > amount) {
      this.balance -= amount;
      console.log('You withdrew', amount); 
    }
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Invalid account');
  };
}
