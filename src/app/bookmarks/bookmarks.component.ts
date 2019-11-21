import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  @Input() youtubeUrl;
  bookmarks = this.getBookmarks();
  constructor() { 
    
  }
  getBookmarks(){
    let localStorageItem = JSON.parse(localStorage.getItem('bookmark'));
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
