import { DioAccount } from "./DioAccount"


export class AccountBonus extends DioAccount {
    constructor(name: string, accountNumber: number, status: boolean){
        super(name, accountNumber, status)
    }
    deposit = (value: number):void => {
        if(this.validateStatus()){
            this.changingBalance(value+10, true)
            console.log(`${this.getName()} depositou R$ ${value}. Saldo disponível: R$ ${this.getBalance()}.`)
            return
        }
        console.log(`${this.getName()} está desativada. Depósito não permitido.`);  
    };
}