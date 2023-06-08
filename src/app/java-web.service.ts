import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "./model/Account";
import {DetailCart} from "./model/DetailCart";
import {Product} from "./model/Product";
import {Cart} from "./model/Cart";
import {BillDTO} from "./model/DTO/BillDTO";
import {DetailCartDTO} from "./model/DTO/DetailCartDTO";
import {Bill} from "./model/Bill";

@Injectable({
  providedIn: 'root'
})
export class JavaWebService {


  constructor(private http: HttpClient) {
  }

  //====================================================================================================================
  private accounts = 'http://localhost:8080/accounts';

  getAccountById(id: number): Observable<Account> {
    return this.http.get<Account>(`${this.accounts}/${id}`);
  }

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.accounts}/`);
  }

  createAccount(account: any): Observable<Account> {
    return this.http.post<Account>(`${this.accounts}/`, account);
  }

  updateAccount(id: number, account: Account): Observable<Account> {
    return this.http.put<Account>(`${this.accounts}/${id}`, account);
  }

  deleteAccount(id: number): Observable<any> {
    return this.http.delete(`${this.accounts}/${id}`, {responseType: 'text'});
  }

  login(account: Account): Observable<Account> {
    return this.http.post<Account>(`${this.accounts}/login`, account);
  }

  //====================================================================================================================
  private bill = 'http://localhost:8080/bill';

  getBillsByAccountId(accountId: any): Observable<BillDTO[]> {
    return this.http.get<BillDTO[]>(`${this.bill}/${accountId}`);
  }

  getBills(): Observable<BillDTO[]> {
    return this.http.get<BillDTO[]>(`${this.bill}/getAll`);
  }

    createBill(idAccount: any, idCart: any, totalBill: any) {
      return this.http.get<Bill>(`${this.bill}/create?idAccount=${idAccount}&idCart=${idCart}&totalBill=${totalBill}`);
    }

  //====================================================================================================================
  private detailCart = 'http://localhost:8080/detailCart';

  addProductToCart(idCart: any, idProduct: number, amount: number): Observable<DetailCartDTO> {
    return this.http.get<DetailCartDTO>(`${this.detailCart}/${idCart}/${idProduct}/${amount}`);
  }

  updateProductAmount(idDetail : any, amount : any): Observable<DetailCartDTO> {
    return this.http.get<DetailCartDTO>(`${this.detailCart}/${idDetail}/${amount}` );
  }

  deleteProductFromCart(id: number): Observable<any> {
    return this.http.delete(`${this.detailCart}/${id}`);
  }

  getDetailsByCartId(cartId: any): Observable<DetailCartDTO[]> {
    return this.http.get<DetailCartDTO[]>(`${this.detailCart}/${cartId}`);
  }

  //====================================================================================================================
  private products = 'http://localhost:8080/products';

  getProducts(page: number = 0, size: number = 6): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.products}/?page=${page}&size=${size}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.products}/`, product);
  }

  updateProduct(id: number, product: any): Observable<Product> {
    return this.http.put<Product>(`${this.products}/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.products}/${id}`);
  }

  //====================================================================================================================
  private cart = 'http://localhost:8080/cart';

  updateCartStatus(id: number): Observable<Cart> {
    return this.http.put<Cart>(`${this.cart}/${id}`, id);
  }

  createNewCart(id: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.cart}/${id}`);
  }

  getCartByAccountIdAndStatus(accountId: any): Observable<Cart> {
    return this.http.get<Cart>(`${this.cart}/buy/${accountId}`);
  }

}
