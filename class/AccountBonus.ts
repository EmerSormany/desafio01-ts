import { DioAccount } from "./DioAccount"


export class AccountBonus extends DioAccount {
    constructor(name: string, accountNumber: number, status: boolean){
        super(name, accountNumber, status)
    }
    deposit = (value: number):void => {
        this.changingBalance(value+10, true)
        console.log(`Você depositou R$ ${value}. Saldo disponível: R$ ${this.getBalance()}.`)
    };
}