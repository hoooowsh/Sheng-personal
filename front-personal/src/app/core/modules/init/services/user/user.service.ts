import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  async registerUser() {
    const userDetails = await this.authService.getUserRegisterDetails();

    return this.http.post(
      `${environment.backendUrl}/user/registerUser`,
      userDetails
    );
  }
}
