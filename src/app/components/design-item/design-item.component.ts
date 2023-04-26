import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-design-item',
  templateUrl: './design-item.component.html',
  styleUrls: ['./design-item.component.css']
})
export class DesignItemComponent implements OnInit {
  @Input() title: string = '';
  @Input() coverImg: string = '';
  @Input() id: string = '';
  @Input() pages: number = 0;
  @Input() type: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  redirect() {
    if (this.type !== 'youtube') {
      window.open(`https://editor.trakto.io/presentation/p/${this.id}`, '_blank');
    }
  }

  customClass() {
    if (this.type === 'youtube') {
      return 'no-border-radius'
    }
    return 'with-border-radius'
  }
}
