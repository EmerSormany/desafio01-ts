import { AccountBonus } from './class/AccountBonus'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10, true)
console.log('\n');

peopleAccount.setName('Nathally')
peopleAccount.deposit(100)
peopleAccount.withdraw(100)
peopleAccount.withdraw(1)

console.log('\n');
console.log('-----------------------------------------------------');
console.log('\n');

const peopleDesableAccount: PeopleAccount = new PeopleAccount(10, 'Sormany', 2, false)
peopleDesableAccount.deposit(10)
peopleDesableAccount.withdraw(10)

console.log('\n');
console.log('-----------------------------------------------------');
console.log('\n');

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20, true)
companyAccount.setName('DIO 1')
companyAccount.deposit(100)
companyAccount.getLoan(1000)
companyAccount.withdraw(100)
companyAccount.withdraw(1001)

console.log('\n');
console.log('-----------------------------------------------------');
console.log('\n');

const companyDesableTeste: CompanyAccount = new CompanyAccount('DIO 2', 3, false)
companyDesableTeste.deposit(10)
companyDesableTeste.withdraw(2)
companyDesableTeste.getLoan(1000)

console.log('\n');
console.log('-----------------------------------------------------');
console.log('\n');

const bonusAccount: AccountBonus = new AccountBonus('Teste', 4, true)
bonusAccount.setName('Depósito Bônus')
bonusAccount.deposit(10)
bonusAccount.withdraw(20)
bonusAccount.withdraw(1)

