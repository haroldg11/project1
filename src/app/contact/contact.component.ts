import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import { SendEmailService } from '../send-email.service';
import { SubscribeEmailService } from '../subscribe-email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public subscription: Subscription;
  constructor(private sendmailservice: SendEmailService, private fb: FormBuilder, private subscribedemailservice: SubscribeEmailService) { }

  infoForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(1)
    ]
    ],
    email: ['', [
      Validators.required,
      Validators.email
    ]
    ],
    text: ['', [
      Validators.required
    ]
    ]
  });

  subForm = this.fb.group({
    Email: ['', [
      Validators.required,
      Validators.email
    ]
    ]
  });

  get name() { return this.infoForm.get('name'); }
  get email() { return this.infoForm.get('email'); }
  get text() { return this.infoForm.get('text'); }
  get Email() { return this.subForm.get('email'); }


  sendMail() {
    console.log(this.infoForm.value);
    this.subscription = this.sendmailservice.sendEmail(this.infoForm.value).
    subscribe(data => {
      const msg = data['message']
      alert(msg);
      // console.log(data, "success");
    }, error => {
      console.error(error, 'error');
    } );
  }
  sendSubMail() {
    console.log(this.subForm.value);
    this.subscription = this.subscribedemailservice.subscribedEmail(this.subForm.value).
    subscribe(data => {
      const msg = data['message']
      alert(msg);
      // console.log(data, "success");
    }, error => {
      console.error(error, 'error');
    } );
  }


}
