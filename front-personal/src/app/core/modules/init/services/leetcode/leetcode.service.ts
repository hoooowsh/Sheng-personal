import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ObjForList } from '../../Models/ObjForList.model';
import { Leetcode } from '../../Models/Leetcode.model';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class LeetcodeService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllLeetcode(): Observable<ObjForList[]> {
    return this.http
      .get<any>(`${environment.backendUrl}/leetcode/leetcodeList`)
      .pipe(map((response) => response.leetcodeList));
  }

  getOneLeetcode(leetcodeId: string): Observable<Leetcode> {
    return this.http
      .get<any>(`${environment.backendUrl}/leetcode/id/${leetcodeId}`)
      .pipe(map((response) => response.leetcode));
  }

  async addOneLeetcode(title: string, topic: string, content: string) {
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
      `${environment.backendUrl}/leetcode/add`,
      {
        title: title,
        topic: topic,
        content: content,
        date: currentTimeInSeconds,
      },
      httpOptions
    );
  }

  async deleteOneLeetcode(leetcodeId: string) {
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
      `${environment.backendUrl}/leetcode/delete`,
      {
        leetcodeId: leetcodeId,
      },
      httpOptions
    );
  }
}
