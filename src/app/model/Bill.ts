import {Cart} from "./Cart";
import {Account} from "./Account";

export class Bill {
  id!: number;
  cart!: Cart;
  account!: Account;
  date!: Date;
  totalBill!: number;

  constructor(id: number, cart: Cart, account: Account, date: Date, totalBill: number) {
    this.id = id;
    this.cart = cart;
    this.account = account;
    this.date = date;
    this.totalBill = totalBill;
  }
}
