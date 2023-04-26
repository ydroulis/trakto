import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header-menu-light',
  templateUrl: './header-menu-light.component.html',
  styleUrls: ['./header-menu-light.component.css']
})
export class HeaderMenuLightComponent implements OnInit {
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
