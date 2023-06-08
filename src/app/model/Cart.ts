import {Account} from "./Account";

export class Cart {
  idCart!: number;
  account!: Account;
  status!: boolean;

  constructor(idCart: number, account: Account, status: boolean) {
    this.idCart = idCart;
    this.account = account;
    this.status = status;
  }
}
