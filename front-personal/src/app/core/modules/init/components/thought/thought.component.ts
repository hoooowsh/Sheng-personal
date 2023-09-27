import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ThoughtService } from '../../services/thought/thought.service';
import { Thought } from '../../Models/Thought.model';
import { AuthService } from '../../services/auth.service';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss'],
})
export class ThoughtComponent {
  thought: Thought | null = null;
  user: any = null;
  isAdmin: boolean = false;
  newComment: string = '';
  comments: any[] = [];
  thoughtId: any = '';
  constructor(
    private thoughtService: ThoughtService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private commentService: CommentService,
    private location: Location
  ) {
    this.thoughtId = this.route.snapshot.paramMap.get('id');
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
    if (this.thoughtId) {
      // Check if id is not null or undefined
      this.thoughtService.getOneThought(this.thoughtId).subscribe({
        next: (response) => {
          this.thought = response;
          const dateObject = new Date(this.thought.date * 1000);
          const humanDateFormat = `${
            dateObject.getMonth() + 1
          }/${dateObject.getDate()}/${dateObject.getFullYear()}`;
          this.thought.formattedDate = humanDateFormat;
          if (this.thought && this.thought.title) {
            console.log('Title:', this.thought.title);
          } else {
            console.log('Title is undefined');
          }
          this.getAllComments();
        },
        error: (error) => {
          console.error('Error during thought retrieval:', error);
        },
      });
    } else {
      console.error('Invalid thought ID:', this.thoughtId);
    }
  }

  async deleteThought() {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        const addThoughtObservable = await this.thoughtService.deleteOneThought(
          id
        );

        addThoughtObservable.subscribe({
          next: (response) => {
            console.log(response);
            this.router.navigate(['/thought']);
          },
          error: (error) => {
            console.error('Error adding thought:', error);
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  goBack() {
    this.router.navigate(['/thought']);
  }

  async addOneComment() {
    if (this.newComment.trim() === '') {
      return;
    }

    const addCommentObservable = await this.commentService.addOneComment(
      this.thoughtId,
      'Thoughts',
      this.newComment,
      false
    );

    addCommentObservable.subscribe({
      next: (response) => {
        this.getAllComments();
        this.newComment = '';
      },
      error: (error) => {
        console.error('Error adding thought:', error);
      },
    });
  }

  getAllComments() {
    this.commentService.getAllComments(this.thoughtId, 'Thoughts').subscribe(
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
