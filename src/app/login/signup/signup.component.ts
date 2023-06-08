import {Component} from '@angular/core';
import {JavaWebService} from "../../java-web.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private javaWebService: JavaWebService, private router: Router) {
  }

  signupForm = new FormGroup({
    name: new FormControl("", Validators.required),
    userName: new FormControl("", Validators.required),
    passWord: new FormControl("", Validators.required),
    passWord_X: new FormControl("", Validators.required)
  })

  onSubmit() {
    const password = this.signupForm.value.passWord;
    const passwordX = this.signupForm.value.passWord_X;

    if (password === passwordX) {
      const account = {
        name: this.signupForm.value.name,
        userName: this.signupForm.value.userName,
        passWord: password
      };
      this.javaWebService.createAccount(account).subscribe(data => {
        this.router.navigate(["/"]);
      },(error)=> {
        Swal.fire(
          ' ',
          '<h2 style="color: red; font-size: 32px">Tài khoản đã tồn tại</h2>',
          'error'
        )
      });
    } else {
      Swal.fire(
        ' ',
        '<h2 style="color: red; font-size: 32px">Xác nhận mật khẩu thất bại !!!</h2>',
        'error'
      )
    }
  }
}
