import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  sendEmail(
    name: string,
    email: string,
    phone: any,
    message: string
  ): Observable<any> {
    return this.http.post(`${environment.backendUrl}/email/sendContactEmail`, {
      email: email,
      name: name,
      phone: phone,
      message: message,
    });
  }
}
