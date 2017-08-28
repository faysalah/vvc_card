import { BussinessService } from './../bussiness.service';
import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-applycard',
  templateUrl: './applycard.component.html',
  styleUrls: ['./applycard.component.css']
})
export class ApplycardComponent implements OnInit {
  org = [];
  //constructor(private bussinessService: BussinessService) { }
  
  ngOnInit() {
    // this.bussinessService.getOrganization()
    //   .subscribe(res => this.org = res );
  }

  hello(){
    console.log("hello");
  }

}
