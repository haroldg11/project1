import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from './../video.service';
import { Subscription } from 'rxjs';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import { SubscribeEmailService } from '../subscribe-email.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  providers: [VideoService]
})

export class VideosComponent implements OnInit {
  private subscript: Subscription;
  videos: Array<Video>;
  selectedVideo: Video;

  constructor(private _videoService: VideoService, private subscribedemailservice: SubscribeEmailService, private formB: FormBuilder) { }

  subForm = this.formB.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]
    ]
  });

  get email() { return this.subForm.get('email'); }

  sendSubMail() {
    console.log(this.subForm.value);
    this.subscript = this.subscribedemailservice.subscribedEmail(this.subForm.value).
    subscribe(data => {
      const msg = data['message']
      alert(msg);
      // console.log(data, "success");
    }, error => {
      console.error(error, 'error');
    } );
  }

  ngOnInit() {
    this._videoService.getVideos()
      .subscribe(resVideoData => this.videos = resVideoData);
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
