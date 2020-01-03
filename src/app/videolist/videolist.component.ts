import { Component, OnInit, EventEmitter } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
  inputs: ['videos'],
  // tslint:disable-next-line: no-outputs-metadata-property
  outputs: ['SelectVideo']
})
export class VideolistComponent implements OnInit {
  public SelectVideo = new EventEmitter();
  videos: Array<Video>;
  constructor() { }

  ngOnInit() {
    }

    onSelect(vid: Video) {
      this.SelectVideo.emit(vid);
  }

}
