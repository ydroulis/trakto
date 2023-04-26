import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesignList } from 'src/app/interfaces/designList';
import { DesignsService } from 'src/app/services/designs.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-courseware',
  templateUrl: './courseware.component.html',
  styleUrls: ['./courseware.component.css']
})
export class CoursewareComponent implements OnInit {
  listaDesign: DesignList = {
    data: []
  };


  constructor(
    private loginService: LoginService,
    private designsService: DesignsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.loginService.isLogged()) {
      this.router.navigate(['/'])
    } else {
      this.designsService.getDesigns().subscribe(
        (res) => {
          this.listaDesign.data = res.data;
          console.log(res.data);
        },
        err => console.error(err)
      )
    }
  }

}
