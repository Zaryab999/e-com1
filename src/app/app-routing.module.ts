import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import{LoginComponent} from './login/login.component'
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'sign-up', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'product-detail', component: ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
