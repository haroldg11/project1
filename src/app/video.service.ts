import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Video } from './video';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private _getUrl = 'https://jussimpletrading.herokuapp.com//api/videos';

  constructor(private _http: HttpClient) { }

  getVideos() {
    return this._http.get<any>(this._getUrl);
  }

}
