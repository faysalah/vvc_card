import { Component, Input, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-temp-card',
  templateUrl: './temp-card.component.html',
  styleUrls: ['./temp-card.component.css']
})
export class TempCardComponent implements OnInit {
@Input() name = 'Name';
@Input() mobile = 'Mobile';
@Input() email = 'Email';
@Input() designation = 'Designation';
@Input() address = 'Address';

constructor() { }

ngOnInit() {
}

}
