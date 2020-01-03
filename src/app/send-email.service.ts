import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private http: HttpClient) { }
  sendEmail(obj): Observable<any> {
    return this.http.post<any>('http://localhost:3000/sendFormData', obj);
  }
}
