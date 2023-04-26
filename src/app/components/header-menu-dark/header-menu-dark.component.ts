import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header-menu-dark',
  templateUrl: './header-menu-dark.component.html',
  styleUrls: ['./header-menu-dark.component.css']
})
export class HeaderMenuDarkComponent implements OnInit {
  currentDate = new Date();
  isModalOpen = false;
  avatarUrl = window.localStorage.getItem('imageProfile');

  constructor(
    private service: LoginService,
  ) { }

  ngOnInit(): void {
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
