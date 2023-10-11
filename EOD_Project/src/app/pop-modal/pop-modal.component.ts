import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-modal',
  templateUrl: './pop-modal.component.html',
  styleUrls: ['./pop-modal.component.css']
})



export class PopModalComponent implements OnInit {

  todayDate: string | any;

  constructor() {
    //const currentDate = new Date();
    this.todayDate = new Date();
  }
  ngOnInit(): void {
   
  }
 

}
