import { Component} from '@angular/core';
import { Subscription } from 'rxjs';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import { SubscribeEmailService } from '../subscribe-email.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent {
  private subscript: Subscription;
  constructor(private subscribedemailservice: SubscribeEmailService, private formB: FormBuilder) { }
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

}
