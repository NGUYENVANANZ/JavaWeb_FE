import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {JavaWebService} from "../../java-web.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {Account} from "../../model/Account";
import {Cart} from "../../model/Cart";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  account ?: Account;
  cart ?: Cart;

  constructor
  (
    private javaWebService: JavaWebService
    ,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    localStorage.setItem("id", "")
    localStorage.setItem("idCart", "")
    localStorage.setItem("search", "");
  }

  loginForm = new FormGroup({
    userName: new FormControl("", Validators.required),
    passWord: new FormControl("", Validators.required)
  })


  login() {
    // @ts-ignore
    this.javaWebService.login(this.loginForm.value).subscribe((data) => {
      this.checkLogin(data)
      Swal.fire(
        ' ',
        '<h2 style="color: green; font-size: 32px">Đăng nhập thành công!!!</h2>',
        'success'
      )
    }, (error) => {
      Swal.fire(
        ' ',
        '<h2 style="color: red; font-size: 32px">Tài khoản hoặc mật khẩu không đúng !!!</h2>',
        'error'
      )
    })

  }

  checkLogin(account: Account) {
    localStorage.setItem("id", String(account.id))
    this.javaWebService.getCartByAccountIdAndStatus(account.id).subscribe(data => {
      localStorage.setItem("idCart", String(data.idCart))
    });
    localStorage.setItem("search", "")
    if (account.role_User == 1) {
      this.router.navigate(["/admin/productAdmin"]);
      return;
    }
    this.router.navigate(["/home/product"]);
  }
}
