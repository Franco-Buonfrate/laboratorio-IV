import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor()
  {
    this.emailHTML = "";
    this.password = "";
    this.loggedIn = false;
  }
  emailHTML: string;
  password : string;
  loggedIn : boolean;

  getCredentials()
  {
    const user  = localStorage.getItem('user') as string;
    return JSON.parse(user);
  }

  login()
  {
    const storedCredentials = this.getCredentials();
    if(this.emailHTML == storedCredentials.email && this.password == storedCredentials.password)
    {
      const showAlert = () => { 
        Swal.fire('Ingreso correctamente', `Bienvenido ${this.emailHTML}`, 'success')
      };
      showAlert();
    }
    else
    {
      const showAlert = () => { 
        Swal.fire('Fail', "", 'error')
      };
      showAlert();
    }
  }
}
