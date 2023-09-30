import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JourneyService } from '../../services/journey/journey.service';
import { Journey } from '../../Models/Journey.model';
import { AuthService } from '../../services/auth.service';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss'],
})
export class JourneyComponent {
  journey: Journey | null = null;
  user: any = null;
  isAdmin: boolean = false;
  newComment: string = '';
  comments: any[] = [];
  journeyId: any = '';
  constructor(
    private journeyService: JourneyService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private commentService: CommentService
  ) {
    this.journeyId = this.route.snapshot.paramMap.get('id');
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
    if (this.journeyId) {
      // Check if id is not null or undefined
      this.journeyService.getOneJourney(this.journeyId).subscribe({
        next: (response) => {
          this.journey = response;
          const dateObject = new Date(this.journey.date * 1000);
          const humanDateFormat = `${
            dateObject.getMonth() + 1
          }/${dateObject.getDate()}/${dateObject.getFullYear()}`;
          this.journey.formattedDate = humanDateFormat;
          if (this.journey && this.journey.title) {
            console.log('Title:', this.journey.title);
          } else {
            console.log('Title is undefined');
          }
          this.getAllComments();
        },
        error: (error) => {
          console.error('Error during journey retrieval:', error);
        },
      });
    } else {
      console.error('Invalid journey ID:', this.journeyId);
    }
  }

  async deleteJourney() {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        const addJourneyObservable = await this.journeyService.deleteOneJourney(
          id
        );

        addJourneyObservable.subscribe({
          next: (response) => {
            console.log(response);
            this.router.navigate(['/journey']);
          },
          error: (error) => {
            console.error('Error adding journey:', error);
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  goBack() {
    this.router.navigate(['/journey']);
  }

  async addOneComment() {
    if (this.newComment.trim() === '') {
      return;
    }

    const addCommentObservable = await this.commentService.addOneComment(
      this.journeyId,
      'Journeys',
      this.newComment,
      false
    );

    addCommentObservable.subscribe({
      next: (response) => {
        this.getAllComments();
        this.newComment = '';
      },
      error: (error) => {
        console.error('Error adding Journey:', error);
      },
    });
  }

  getAllComments() {
    this.commentService.getAllComments(this.journeyId, 'Journeys').subscribe(
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
