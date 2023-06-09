import {Component, Input} from '@angular/core';
import {JavaWebService} from "../../java-web.service";
import {Product} from "../../model/Product";
import {DetailCartDTO} from "../../model/DTO/DetailCartDTO";
import {DetailCart} from "../../model/DetailCart";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [];
  details: DetailCartDTO[] = [];
  amount: number = 1;
  S: number = 1
  sum: number = 0;
  idCart: any = localStorage.getItem("idCart");
  id: any = localStorage.getItem("id");

  constructor(private javaWebService: JavaWebService) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCartDetails();
    this.sumX();
  }

  ngAfterViewInit() {
    let search: any = localStorage.getItem("search");
    if (search != "") {
      this.javaWebService.searchProducts(search).subscribe(
        (products) => {
          this.products = products;
        })
    }
  }

  getProducts(page: number = 0, size: number = 6): void {
    this.javaWebService.getProducts(page, size)
      .subscribe(products => this.products = products);
  }

  getCartDetails(): void {
    this.javaWebService.getDetailsByCartId(this.idCart)
      .subscribe(details => this.details = details);
  }

  sumX(): number {
    let x = 0;
    for (let i = 0; i < this.details.length; i++) {
      x += this.details[i].price
    }
    return x;
  }


  deleteProduct(id: number, price: number) {
    this.javaWebService.deleteProductFromCart(id).subscribe(() => {
      const index = this.details.findIndex(detail => detail.id === id);
      if (index !== -1) {
        this.details.splice(index, 1);
        this.sumX()
      }
    });
  }

  addToCart(idProduct: number, amount: any) {
    this.javaWebService.addProductToCart(localStorage.getItem("idCart"), idProduct, amount).subscribe(detail => {
      this.getCartDetails();
      this.sumX()
      console.log('Thêm sản phẩm vào giỏ hàng thành công.');
    });
  }


  increment(x: any, y: any): any {
    let quantity: number = parseInt(x);
    let amount: number = parseInt(y);
    if (quantity < amount) {
      quantity++;
    }
    return quantity.toString();
  }

  decrement(x: any): any {
    let quantity: number = parseInt(x);
    if (quantity > 1) {
      quantity--;
    }
    return quantity.toString();
  }

  creatBill() {
    this.javaWebService.createBill(this.id, this.idCart, this.sumX()).subscribe(bill => {
      console.log('Bill created:', bill);
    });
    this.javaWebService.updateCartStatus(this.idCart).subscribe(cart => {
      console.log("update thành công")
    })
    this.javaWebService.createNewCart(this.id).subscribe(data => {
      localStorage.setItem("idCart", String(data.idCart))
    })
    this.details = [];
  }

  updateTotal(id: any, amount: any, i: any) {
    this.javaWebService.updateProductAmount(id, amount).subscribe(data => {
      this.details[i].price = data.price;
      this.sumX();
    })
  }
}
