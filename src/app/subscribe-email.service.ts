import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeEmailService {

  constructor(private httP: HttpClient) { }
  subscribedEmail(obj): Observable<any> {
    return this.httP.post<any>('http://localhost:3000/sendSubData', obj);
  }
}
