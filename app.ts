import { CompanyAccount } from "./class/CompanyAccount";
import { EmployeeAccount } from "./class/EmployeeAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Jonas", 1, 10, true);
console.log(peopleAccount);
peopleAccount.deposit(10);
console.log(peopleAccount);
peopleAccount.withdraw(5);
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 2, 50, true);
console.log(companyAccount);
companyAccount.deposit(50);
console.log(companyAccount);
companyAccount.withdraw(25);
console.log(companyAccount);
companyAccount.getLoan(100);
console.log(companyAccount);

const employeeAccount: EmployeeAccount = new EmployeeAccount("Souza", 1, 25, true);
console.log(employeeAccount);
employeeAccount.deposit(100);
console.log(employeeAccount);
employeeAccount.withdraw(25);
console.log(employeeAccount);
