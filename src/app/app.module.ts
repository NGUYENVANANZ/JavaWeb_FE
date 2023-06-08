import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';
import { HistoryComponent } from './home/history/history.component';
import { AdminComponent } from './admin/admin.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { InformationComponent } from './home/information/information.component';
import { InformationAdminComponent } from './admin/information-admin/information-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { ProductAdminComponent } from './admin/product-admin/product-admin.component';
import { HistoryAdminComponent } from './admin/history-admin/history-admin.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    HistoryComponent,
    AdminComponent,
    SigninComponent,
    SignupComponent,
    InformationComponent,
    InformationAdminComponent,
    ProductAdminComponent,
    HistoryAdminComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
