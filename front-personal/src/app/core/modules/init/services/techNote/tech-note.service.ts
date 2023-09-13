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
      .get<any>(`${environment.backendUrl}/thought/thoughtList`)
      .pipe(map((response) => response.thoughtList));
  }
}
