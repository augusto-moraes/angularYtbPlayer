import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() youtubeUrl;
  history = this.getHistory();
  constructor() { 
  
  }
  getHistory(){
    let localStorageItem = JSON.parse(localStorage.getItem('history'));
    return localStorageItem == null ? [] : localStorageItem;
  }
  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  ngOnInit() {
  }

}
