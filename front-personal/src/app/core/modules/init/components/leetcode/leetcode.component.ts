import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeetcodeService } from '../../services/leetcode/leetcode.service';
import { Leetcode } from '../../Models/Leetcode.model';
import { AuthService } from '../../services/auth.service';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-leetcode',
  templateUrl: './leetcode.component.html',
  styleUrls: ['./leetcode.component.scss'],
})
export class LeetcodeComponent {
  leetcode: Leetcode | null = null;
  user: any = null;
  isAdmin: boolean = false;
  newComment: string = '';
  comments: any[] = [];
  leetcodeId: any = '';
  constructor(
    private leetcodeService: LeetcodeService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private commentService: CommentService
  ) {
    this.leetcodeId = this.route.snapshot.paramMap.get('id');
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
    if (this.leetcodeId) {
      // Check if id is not null or undefined
      this.leetcodeService.getOneLeetcode(this.leetcodeId).subscribe({
        next: (response) => {
          this.leetcode = response;
          const dateObject = new Date(this.leetcode.date * 1000);
          const humanDateFormat = `${
            dateObject.getMonth() + 1
          }/${dateObject.getDate()}/${dateObject.getFullYear()}`;
          this.leetcode.formattedDate = humanDateFormat;
          if (this.leetcode && this.leetcode.title) {
            console.log('Title:', this.leetcode.title);
          } else {
            console.log('Title is undefined');
          }
          this.getAllComments();
        },
        error: (error) => {
          console.error('Error during leetcode retrieval:', error);
        },
      });
    } else {
      console.error('Invalid leetcode ID:', this.leetcodeId);
    }
  }

  async deleteLeetcode() {
    try {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        const addLeetcodeServiceObservable =
          await this.leetcodeService.deleteOneLeetcode(id);

        addLeetcodeServiceObservable.subscribe({
          next: (response) => {
            console.log(response);
            this.router.navigate(['/leetcode']);
          },
          error: (error) => {
            console.error('Error adding leetcode:', error);
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  goBack() {
    this.router.navigate(['/leetcode']);
  }

  async addOneComment() {
    if (this.newComment.trim() === '') {
      return;
    }

    const addCommentObservable = await this.commentService.addOneComment(
      this.leetcodeId,
      'Leetcodes',
      this.newComment,
      false
    );

    addCommentObservable.subscribe({
      next: (response) => {
        this.getAllComments();
        this.newComment = '';
      },
      error: (error) => {
        console.error('Error adding leetcode:', error);
      },
    });
  }

  getAllComments() {
    this.commentService.getAllComments(this.leetcodeId, 'Leetcodes').subscribe(
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
