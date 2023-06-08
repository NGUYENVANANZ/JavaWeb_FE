import {Component} from '@angular/core';
import {Product} from "../../model/Product";
import {JavaWebService} from "../../java-web.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent {
  products: Product[] = [];
  S: number = 1
  p: Product = {
    idProduct: 0,
    nameSP: "",
    price: 0,
    img: "",
    amount: 0,
    productType: 0
  }

  constructor(private javaWebService: JavaWebService) {
  }


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(page: number = 0, size: number = 6): void {
    this.javaWebService.getProducts(page, size)
      .subscribe(products => this.products = products);
  }

  deleteProduct(id: number) {
    this.javaWebService.deleteProduct(id).subscribe(data => {
      this.getProducts()
      console.log("xóa sp")
    })
  }

  get(product: any) {
    this.p.idProduct = product.idProduct;
    this.p.nameSP = product.nameSP;
    this.p.price = product.price;
    this.p.img = product.img;
    this.p.amount = product.amount;
    this.p.productType = product.productType;
  }

  close() {
    this.p.idProduct = 0;
    this.p.nameSP = "";
    this.p.price = 0;
    this.p.img = "";
    this.p.amount = 0;
    this.p.productType = 0;
  }

  updateProduct() {
    this.javaWebService.updateProduct(this.p.idProduct, this.p)
      .subscribe(product => {
        this.getProducts()
        // Xử lý kết quả trả về ở đây nếu cần
      }, error => {
        console.error(error);
      });
  }

  creatProduct() {
    this.javaWebService.addProduct(this.p)
      .subscribe(product => {
        this.getProducts()
        // Xử lý kết quả trả về ở đây nếu cần
      }, error => {
        console.error(error);
      });
  }
}
