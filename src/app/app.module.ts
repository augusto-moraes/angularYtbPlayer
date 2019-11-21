import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoViewComponent } from './video-view/video-view.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HistoryComponent } from './history/history.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { FtFooterComponent } from './ft-footer/ft-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoViewComponent,
    SidebarComponent,
    HistoryComponent,
    BookmarksComponent,
    FtFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    EmbedVideo.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
