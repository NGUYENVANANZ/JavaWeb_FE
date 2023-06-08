import {Cart} from "./Cart";
import {Product} from "./Product";

export class DetailCart {
  id: number;
  cart: Cart;
  product: Product;
  amountProduct: number;

  constructor(id: number, cart: Cart, product: Product, amountProduct: number) {
    this.id = id;
    this.cart = cart;
    this.product = product;
    this.amountProduct = amountProduct;
  }
}
