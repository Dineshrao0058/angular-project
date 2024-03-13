import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsListComponent } from './admin/products-list/products-list.component';
import { ProductsDetailsComponent } from './admin/products-details/products-details.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { ProductDeleteComponent } from './admin/product-delete/product-delete.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { LoginPageComponent } from './admin/login-page/login-page.component';
import { SignuppageComponent } from './admin/signup-page/signup-page.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsDetailsComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    AddProductComponent,
    LoginPageComponent,
    SignuppageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
