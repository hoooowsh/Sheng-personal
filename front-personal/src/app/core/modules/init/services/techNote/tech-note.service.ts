import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ObjForList } from '../../Models/ObjForList.model';
import { TechNote } from '../../Models/TechNote.model';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class TechNoteService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllTechNote(): Observable<ObjForList[]> {
    return this.http
      .get<any>(`${environment.backendUrl}/techNote/techNoteList`)
      .pipe(map((response) => response.techNoteList));
  }

  getOneTechNote(techNoteId: string): Observable<TechNote> {
    return this.http
      .get<any>(`${environment.backendUrl}/techNote/id/${techNoteId}`)
      .pipe(map((response) => response.techNote));
  }

  async addOneTechNote(title: string, topic: string, content: string) {
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
      `${environment.backendUrl}/techNote/add`,
      {
        title: title,
        topic: topic,
        content: content,
        date: currentTimeInSeconds,
      },
      httpOptions
    );
  }

  async deleteOneTechNote(techNoteId: string) {
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
      `${environment.backendUrl}/techNote/delete`,
      {
        techNoteId: techNoteId,
      },
      httpOptions
    );
  }
}
