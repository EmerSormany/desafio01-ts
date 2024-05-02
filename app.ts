import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10, true)
// console.log(peopleAccount)
peopleAccount.deposit(100)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20, true)
companyAccount.deposit(100)
// console.log(companyAccount)
peopleAccount.withdraw(100)
companyAccount.withdraw(100)
const companyTeste: CompanyAccount = new CompanyAccount('dio 2', 3, false)
companyTeste.deposit(10)
companyTeste.withdraw(2)
companyAccount.getLoan(1000)
companyTeste.getLoan(1000)

