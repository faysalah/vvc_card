import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  wallet = [
    {'name':'Nahid Hasan','mobile':'01675996843','email':'nahid@mail.com','designation':'student','address':'danmondi,dhaka'},
    {'name':'Ripon sarker','mobile':'01675996843','email':'nahid@mail.com','designation':'student','address':'danmondi,dhaka'},
    {'name':'Partha Deb','mobile':'01675996843','email':'nahid@mail.com','designation':'student','address':'danmondi,dhaka'},
    {'name':'Jk Rayhan','mobile':'01675996843','email':'nahid@mail.com','designation':'student','address':'danmondi,dhaka'},
    {'name':'zahid hasan','mobile':'01675996843','email':'nahid@mail.com','designation':'student','address':'danmondi,dhaka'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
