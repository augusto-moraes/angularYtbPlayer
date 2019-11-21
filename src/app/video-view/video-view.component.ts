import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { ToastrService } from 'ngx-toastr';
import { Input } from '@angular/core';

@Component({
  selector: 'videoView',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {
  iframe_html: any;
  hNextId;
  bNextId;
  @Input() youtubeUrl = 'https://www.youtube.com/watch?v=gfiqW1WaGbw';
  history = [];
  bookmarks = [];
  
  constructor(private embedService: EmbedVideoService, private toastr: ToastrService) {
    this.iframe_html = this.embedService.embed(this.youtubeUrl, {
      query: { portrait: 0, color: '333' },
      attr: { width: 800, height: 400 }
    });
    if(this.history.length == 0) this.hNextId = 0;
    if(this.bookmarks.length == 0) this.bNextId = 0;
  }
  runUrl(){
    if(this.youtubeUrl == null){
      return;
    }
    this.iframe_html = this.embedService.embed(this.youtubeUrl, {
      query: { portrait: 0, color: '333' },
      attr: { width: 800, height: 400 }
    });
    this.history[this.hNextId] = this.youtubeUrl;
    localStorage.setItem('history',JSON.stringify(this.history));
    this.hNextId = this.hNextId+1;
  }

  bookmarkIt(){
    if (this.youtubeUrl == null)
      return;
    this.bookmarks[this.bNextId] = this.youtubeUrl;
    localStorage.setItem('bookmark',JSON.stringify(this.bookmarks));
    this.bNextId = this.bNextId+1;
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) 
      this.runUrl();
  }

  successToast(){
    this.toastr.success("Video successfully bookmarked.","",{timeOut:3000})
  }

  ngOnInit() {
  }

}
