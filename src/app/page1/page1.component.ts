import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
pageName = 'Page 1';
  constructor() { }

  ngOnInit(){
    setTimeout(()=>{this.pageName='First Page'},5000);
  }

}
