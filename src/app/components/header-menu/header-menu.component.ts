import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  @Input() dark: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
