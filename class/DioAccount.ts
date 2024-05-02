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
    console.log('Nome alterado com sucesso! O nome da sua conta agora é ' + this.name + '.')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.changingBalance(value, true)
      console.log(`${this.name} depositou R$ ${value}. Saldo disponível: R$ ${this.balance}.`);  
      return
    }
    console.log(`${this.name} está desativada. Depósito não permitido.`);    
  }

  withdraw = (value: number): void => {
    if (this.status && this.balance >= value) {
      this.changingBalance(value, false)
      console.log(`${this.name} sacou R$ ${value}. Saldo disponível: R$ ${this.balance}.`)
      return
    }
    if (!this.status) {
      console.log(`${this.name} está desativada. Saque não permitido.`);    
      return
    }
    console.log(`${this.name} não possui saldo suficiente para o valor de R$ ${value} de saque solicitado.`);    
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
