import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }  from '@angular/forms';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { NombresComponent } from './nombres/nombres.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"", component: BienvenidaComponent},
  {path: "login", component: LoginComponent},
  {path: "nombres", component: NombresComponent},
  {path: "signup", component: SignupComponent},
  {path: "**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { 
  
}
