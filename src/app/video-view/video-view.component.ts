import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { Input } from '@angular/core';

@Component({
  selector: 'videoView',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {
  iframe_html: any;
  @Input() youtubeUrl = 'https://www.youtube.com/watch?v=gfiqW1WaGbw';
  
  constructor(private embedService: EmbedVideoService) {
    this.iframe_html = this.embedService.embed(this.youtubeUrl, {
      query: { portrait: 0, color: '333' },
      attr: { width: 800, height: 400 }
    });
  }
  runUrl(){
    this.iframe_html = this.embedService.embed(this.youtubeUrl, {
      query: { portrait: 0, color: '333' },
      attr: { width: 800, height: 400 }
    });
  }

  ngOnInit() {
  }

}
