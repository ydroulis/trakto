import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-courseware-section',
  templateUrl: './courseware-section.component.html',
  styleUrls: ['./courseware-section.component.css']
})
export class CoursewareSectionComponent implements OnInit {
  @Input() type: string = 'default';
  @Input() title: string = '';
  @Input() description: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  redirect() {
    window.open('https://www.youtube.com/c/Trakto', '_blank')
  }

}
