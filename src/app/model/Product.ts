export class Product {
  idProduct: number;
  nameSP: string;
  price: number;
  img: string;
  amount: number;
  productType: number;

  constructor(idProduct: number, nameSP: string, price: number, img: string, amount: number, productType: number) {
    this.idProduct = idProduct;
    this.nameSP = nameSP;
    this.price = price;
    this.img = img;
    this.amount = amount;
    this.productType = productType;
  }
}
