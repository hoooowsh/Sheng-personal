import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ThoughtForList } from '../../Models/ThoughtForList.model';
import { Thought } from '../../Models/Thought';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  constructor(private http: HttpClient) {}

  getAllThought(): Observable<ThoughtForList[]> {
    return this.http
      .get<any>(`${environment.backendUrl}/thought/thoughtList`)
      .pipe(map((response) => response.thoughtList));
  }

  getOneThought(thoughtId: string): Observable<Thought> {
    return this.http.get<Thought>(
      `${environment.backendUrl}/thought/id/${thoughtId}`
    );
  }
}
