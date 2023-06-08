import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./home/product/product.component";
import {HistoryComponent} from "./home/history/history.component";
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import  {SigninComponent} from "./login/signin/signin.component";
import  {SignupComponent} from "./login/signup/signup.component";
import {InformationComponent} from "./home/information/information.component";
import {HistoryAdminComponent} from "./admin/history-admin/history-admin.component";
import {ProductAdminComponent} from "./admin/product-admin/product-admin.component";
import {InformationAdminComponent} from "./admin/information-admin/information-admin.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'info',
        component: InformationComponent
      }
    ]
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: '',
        component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'productAdmin',

        component: ProductAdminComponent
      },
      {
        path: 'historyAdmin',
        component: HistoryAdminComponent
      },
      {
        path: 'infoAdmin',
        component: InformationAdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
