import { BussinessService } from './../bussiness.service';
import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applycard',
  templateUrl: './applycard.component.html',
  styleUrls: ['./applycard.component.css']
})
export class ApplycardComponent implements OnInit {
  organizations = [];
  Field1;
  Field2;
  Field3;
  Field4;
  Field5;
  Field6;
  Field7;
  constructor(private bussinessService: BussinessService,
    private router: Router) { }

  ngOnInit() {
    this.bussinessService.getOrganization()
      .subscribe(res => this.organizations = res);
  }

  onCardSubmit() {
    const body = {
      'Field1': this.Field1,
      'Field2': this.Field2,
      'Field3': this.Field3,
      'Field4': this.Field4,
      'Field5': this.Field5,
      'Field6': this.Field6,
      'Field7': this.Field7
    };

    this.bussinessService.addCardDetail(body)
      .subscribe(
      response => {
        alert('Card Detail submitted sucessfully');
        this.router.navigate(['card']);

      },
      error => {
        alert('Card Detail not submitted. Try again');
      }
      );
  }
}
