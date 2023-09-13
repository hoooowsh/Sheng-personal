import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ObjForList } from '../../Models/ObjForList.model';

@Injectable({
  providedIn: 'root',
})
export class TechNoteService {
  constructor() {}
}
