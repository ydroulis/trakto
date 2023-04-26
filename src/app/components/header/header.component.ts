import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() dark: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  headerClass() {
    if (this.dark) {
      return 'header-dark'
    }
    return 'header'
  }

}
