import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number, balance: number, status: boolean) {
    super(name, accountNumber, balance, status);
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      let newBalance = this.getBalance() + amount;
      this.setBalance(newBalance);
      console.log("You took a loan", amount);
    }
  };
}
