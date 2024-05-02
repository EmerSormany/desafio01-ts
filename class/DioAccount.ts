export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean

  constructor(name: string, accountNumber: number, status: boolean){
    this.name = name
    this.accountNumber = accountNumber
    this.status = status
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.changingBalance(value, true)
      console.log(`Você depositou R$ ${value}. Saldo disponível: R$ ${this.balance}.`);  
      return
    }
    console.log("Depósito não permitido. Conta desativada.");    
  }

  withdraw = (value: number): void => {
    if (this.status && this.balance >= value) {
      this.changingBalance(value, false)
      console.log(`Você sacou R$ ${value}. Saldo disponível: R$ ${this.balance}.`)
      return
    }
    if (!this.status) {
      console.log("Saque não permitido. Conta desativada.");
      return
    }
    console.log("Saldo insuficiente para o valor solicitado.")
  }

  getBalance = (): number => {
    return this.balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }    
    return this.status
  }

  changingBalance = (value:number, up:boolean): void => {
    if (up) {
      this.balance += value
      return
    }
    this.balance -= value
  }
}
