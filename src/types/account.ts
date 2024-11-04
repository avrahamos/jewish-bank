import Loan from "./loan"
import Transaction from "./transaction"

export default interface Account{
    balance:number
    id:string
    ioans:Loan[]
    tranactions:Transaction[]
}