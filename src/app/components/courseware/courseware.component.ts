import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-courseware',
  templateUrl: './courseware.component.html',
  styleUrls: ['./courseware.component.css']
})
export class CoursewareComponent implements OnInit {

  constructor(
    private service: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.service.isLogged()) {
      this.router.navigate(['/'])
    }
  }

}
