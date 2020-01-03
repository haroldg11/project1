import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.css'],
  // tslint:disable-next-line: no-inputs-metadata-property
  inputs: ['video']
})


export class VideodetailComponent implements OnInit {
  video: any;
  private editTitle: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.editTitle = false;
  }
  onTitleClick() {
    this.editTitle = true;
  }


}
