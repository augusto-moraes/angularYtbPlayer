import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarks = this.getBookmarks();
  constructor() { 
    
  }
  getBookmarks(){
    let localStorageItem = JSON.parse(localStorage.getItem('bookmark'));
    return localStorageItem == null ? [] : localStorageItem;
  }

  ngOnInit() {
  }

}
