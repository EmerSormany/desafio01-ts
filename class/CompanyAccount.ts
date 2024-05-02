import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, status:boolean){
    super(name, accountNumber, status)
  }
  getLoan = (value:number): void => {
    if (this.validateStatus()) {
      this.balance += value
      console.log(`Você fez um empréstimo de R$ ${value}. Saldo disponível: R$ ${this.balance}.`)
      return
    }
    console.log("Empréstimo não permitido. Conta desativada.");
  }
}
