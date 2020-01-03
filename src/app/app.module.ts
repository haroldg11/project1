import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideodetailComponent } from './videodetail/videodetail.component';
import { TermsComponent } from './terms/terms.component';
import { VideoService } from './video.service';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    VideosComponent,
    VideolistComponent,
    VideodetailComponent,
    TermsComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
