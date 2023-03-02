import { DioAccount } from "./DioAccount";

export class EmployeeAccount extends DioAccount {
  constructor(name: string, accountNumber: number, balance: number, status: boolean) {
    super(name, accountNumber, balance, status);
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      let newBalance = this.getBalance() + (amount + 10);
      this.setBalance(newBalance);
      console.log("You deposited", amount);
    }
  };
}
