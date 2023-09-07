import { Component } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };
  constructor(private contactService: ContactService, private router: Router) {}

  submitContactForm() {
    this.contactService
      .sendEmail(
        this.contact.email,
        this.contact.name,
        this.contact.phone,
        this.contact.message
      )
      .subscribe(
        (response) => {
          console.log('Email sent successfully!', response);
          this.router.navigate(['/contact']);
        },
        (error) => console.log('Failed to send email', error)
      );
  }
}
