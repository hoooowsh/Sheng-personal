import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  async addOneComment(
    objId: string,
    objName: string,
    content: string,
    isAnonymous: boolean
  ) {
    const currentUser = await this.authService.getUser();
    if (currentUser) {
      const userName = currentUser.displayName;
      const token = await this.authService.getUserToken();
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      };
      const currentTimeInSeconds = Math.floor(Date.now() / 1000);
      return this.http.post<any>(
        `${environment.backendUrl}/comment/add`,
        {
          tokenUserName: userName,
          objId: objId,
          objName: objName,
          content: content,
          date: currentTimeInSeconds,
          isAnonymous: isAnonymous,
        },
        httpOptions
      );
    } else {
      throw new Error('User not login');
    }
  }

  getAllComments(objId: string, objName: string) {
    try {
      return this.http
        .post<any>(`${environment.backendUrl}/comment/commentList`, {
          objId: objId,
          objName: objName,
        })
        .pipe(map((response) => response.commentList));
    } catch (error) {
      throw new Error('Get all comments error');
    }
  }
}
