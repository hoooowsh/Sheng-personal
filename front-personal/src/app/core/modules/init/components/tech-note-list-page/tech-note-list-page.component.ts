import { Component, OnInit } from '@angular/core';
import { TechNoteService } from '../../services/techNote/tech-note.service';
import { ObjForList } from '../../Models/ObjForList.model';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tech-note-list-page',
  templateUrl: './tech-note-list-page.component.html',
  styleUrls: ['./tech-note-list-page.component.scss'],
})
export class TechNoteListPageComponent {
  techNotes: ObjForList[] = [];
  displayedColumns: string[] = ['title', 'date'];
  user: any = null;
  isAdmin: boolean = false;

  constructor(
    private techNoteService: TechNoteService,
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.userState.subscribe(async (user) => {
      this.user = user;
      if (user) {
        this.isAdmin = await this.authService.isAdmin();
        console.log(this.isAdmin);
      } else {
        this.isAdmin = false;
      }
    });
  }

  async ngOnInit(): Promise<void> {
    this.techNoteService.getAllTechNote().subscribe((data: ObjForList[]) => {
      this.techNotes = data
        .map((techNote) => {
          const dateObject = new Date(techNote.date * 1000);
          const humanDateFormat = `${
            dateObject.getMonth() + 1
          }/${dateObject.getDate()}/${dateObject.getFullYear()}`;
          return { ...techNote, formattedDate: humanDateFormat };
        })
        .sort((a, b) => b.date - a.date);
    });
  }

  onRowClicked(techNote: ObjForList): void {
    this.router.navigate(['/techNote/id', techNote.id]);
  }

  createTechNote(): void {
    this.router.navigate(['/techNote/add']);
  }
}
