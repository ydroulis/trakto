import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { AuthData } from '../../interfaces/authData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  authData: AuthData = {
    email: '',
    password: ''
  }

  constructor(
    private service: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  signIn() {
    this.loading = true;
    this.service.signin(this.authData.email, this.authData.password).subscribe(() => {
      this.loading = false;
      this.router.navigate(['/home']);
    });
  }

}
