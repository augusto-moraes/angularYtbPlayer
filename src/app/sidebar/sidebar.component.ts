import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() youtubeUrl;
  count = this.getBookmarksSize();
  constructor() { }
  getBookmarksSize(){
    let localStorageItem = JSON.parse(localStorage.getItem('bookmark'));
    return localStorageItem == null ? 0 : localStorageItem.length;
  }

  ngOnInit() {
  }

}
