import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ObjForList } from '../../Models/ObjForList.model';
import { Journey } from '../../Models/Journey.model';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class JourneyService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllJourney(): Observable<ObjForList[]> {
    return this.http
      .get<any>(`${environment.backendUrl}/journey/journeyList`)
      .pipe(map((response) => response.journeyList));
  }

  getOneJourney(journeyId: string): Observable<Journey> {
    return this.http
      .get<any>(`${environment.backendUrl}/journey/id/${journeyId}`)
      .pipe(map((response) => response.journey));
  }

  async addOneJourney(title: string, content: string) {
    const email = await this.authService.getUserEmail();
    if (email !== environment.adminEmail) {
      throw new Error('User not authenticated');
    }
    const token = await this.authService.getUserToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    };
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);

    return this.http.post<any>(
      `${environment.backendUrl}/journey/add`,
      {
        title: title,
        content: content,
        date: currentTimeInSeconds,
      },
      httpOptions
    );
  }

  async deleteOneJourney(journeyId: string) {
    const email = await this.authService.getUserEmail();
    if (email !== environment.adminEmail) {
      throw new Error('User not authenticated');
    }
    const token = await this.authService.getUserToken();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.http.post<any>(
      `${environment.backendUrl}/journey/delete`,
      {
        journeyId: journeyId,
      },
      httpOptions
    );
  }
}
