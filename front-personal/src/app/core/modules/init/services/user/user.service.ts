import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  async signinUser() {
    const userDetails = await this.authService.getUserRegisterDetails();

    const token = await this.authService.getUserToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.http.post(
      `${environment.backendUrl}/user/login`,
      userDetails,
      httpOptions
    );
  }
}
