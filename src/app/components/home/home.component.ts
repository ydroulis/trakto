import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentDate = new Date();
  isModalOpen = false;
  avatarUrl = window.localStorage.getItem('imageProfile');

  constructor(
    private service: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.service.isLogged()) {
      this.router.navigate(['/'])
    }
  }

  logOut() {
    this.closeModal();
    this.service.logOut();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
