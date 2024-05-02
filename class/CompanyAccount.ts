import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, status:boolean){
    super(name, accountNumber, status)
  }
  getLoan = (value:number): void => {
    if (this.validateStatus()) {
      this.changingBalance(value, true)
      console.log(`${this.getName()} fez um empréstimo de R$ ${value}. Saldo disponível: R$ ${this.getBalance()}.`)
      return
    }
    console.log(`${this.getName()} está desativada. Empréstimo não permitido.`);
  }
}
