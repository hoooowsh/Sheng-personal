import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ThoughtForList } from '../../Models/ThoughtForList.model';
import { Thought } from '../../Models/Thought';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllThought(): Observable<ThoughtForList[]> {
    return this.http
      .get<any>(`${environment.backendUrl}/thought/thoughtList`)
      .pipe(map((response) => response.thoughtList));
  }

  getOneThought(thoughtId: string): Observable<Thought> {
    return this.http
      .get<any>(`${environment.backendUrl}/thought/id/${thoughtId}`)
      .pipe(map((response) => response.thought));
  }

  async addOneThought(title: string, content: string) {
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
      `${environment.backendUrl}/thought/add`,
      {
        title: title,
        content: content,
        date: currentTimeInSeconds,
      },
      httpOptions
    );
  }

  async deleteOneThought(thoughtId: string) {
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
      `${environment.backendUrl}/thought/delete`,
      {
        thoughtId: thoughtId,
      },
      httpOptions
    );
  }

  async getCommentsForThought(thoughtId: string) {}
}
