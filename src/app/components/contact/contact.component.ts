import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
firstName;
lastName;
email;
messages;
contactForm;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }


  onSubmit(contactForm) {
    alert('hai')
    if (contactForm.valid) {
      const email = contactForm.value;
      console.log(email.firstName);

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mbjpznap',
        { name: email.firstName, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }
  }

}
