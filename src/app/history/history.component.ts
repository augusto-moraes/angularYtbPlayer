import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history = this.getHistory();
  constructor() { 
  
  }
  getHistory(){
    let localStorageItem = JSON.parse(localStorage.getItem('history'));
    return localStorageItem == null ? [] : localStorageItem;
  }
  
  ngOnInit() {
  }

}
