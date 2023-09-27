import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TechNoteService } from '../../services/techNote/tech-note.service';
import { TechNote } from '../../Models/TechNote.model';
import { AuthService } from '../../services/auth.service';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-tech-note',
  templateUrl: './tech-note.component.html',
  styleUrls: ['./tech-note.component.scss'],
})
export class TechNoteComponent {
  techNote: TechNote | null = null;
  user: any = null;
  isAdmin: boolean = false;
  newComment: string = '';
  comments: any[] = [];
  techNoteId: any = '';
  constructor(
    private techNoteService: TechNoteService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private commentService: CommentService
  ) {
    this.techNoteId = this.route.snapshot.paramMap.get('id');
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

  ngOnInit() {
    if (this.techNoteId) {
      // Check if id is not null or undefined
      this.techNoteService.getOneTechNote(this.techNoteId).subscribe({
        next: (response) => {
          this.techNote = response;
          const dateObject = new Date(this.techNote.date * 1000);
          const humanDateFormat = `${
            dateObject.getMonth() + 1
          }/${dateObject.getDate()}/${dateObject.getFullYear()}`;
          this.techNote.formattedDate = humanDateFormat;
          if (this.techNote && this.techNote.title) {
            console.log('Title:', this.techNote.title);
          } else {
            console.log('Title is undefined');
          }
          this.getAllComments();
        },
        error: (error) => {
          console.error('Error during techNote retrieval:', error);
        },
      });
    } else {
      console.error('Invalid techNote ID:', this.techNoteId);
    }
  }

  async deleteTechNote() {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        const addTechNoteServiceObservable =
          await this.techNoteService.deleteOneTechNote(id);

        addTechNoteServiceObservable.subscribe({
          next: (response) => {
            console.log(response);
            this.router.navigate(['/techNote']);
          },
          error: (error) => {
            console.error('Error adding techNote:', error);
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  goBack() {
    this.router.navigate(['/techNote']);
  }

  async addOneComment() {
    if (this.newComment.trim() === '') {
      return;
    }

    const addCommentObservable = await this.commentService.addOneComment(
      this.techNoteId,
      'TechNotes',
      this.newComment,
      false
    );

    addCommentObservable.subscribe({
      next: (response) => {
        this.getAllComments();
        this.newComment = '';
      },
      error: (error) => {
        console.error('Error adding techNote:', error);
      },
    });
  }

  getAllComments() {
    this.commentService.getAllComments(this.techNoteId, 'TechNotes').subscribe(
      (data: any[]) => {
        this.comments = data
          .map((comment) => {
            console.log('this is comment', comment);
            const dateObject = new Date(comment.date * 1000);
            const humanDateFormat = `${
              dateObject.getMonth() + 1
            }/${dateObject.getDate()}/${dateObject.getFullYear()}`;
            return { ...comment, formattedDate: humanDateFormat };
          })
          .sort((a, b) => b.date - a.date);
        console.log(this.comments);
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );
  }
}
