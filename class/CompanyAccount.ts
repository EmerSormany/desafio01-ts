import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number, status:boolean){
    super(name, accountNumber, status)
  }

  getLoan = (): void => {
    console.log('Voce pegou um empréstimo')
  }
}
