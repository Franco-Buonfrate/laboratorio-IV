import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor()
  {
    this.email="";
    this.password="";
  }
  email:string;
  password:string;

  signup()
  {
    if(this.email!="" && this.password!="")
    {
      const user = {
        email:this.email,
        password:this.password
      }
      localStorage.setItem("user" ,JSON.stringify(user));
    }
  }
}
