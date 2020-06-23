import { Component, OnInit, Input } from '@angular/core';
import { UserComment } from '../models/user-comment';

@Component({
  selector: 'app-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit {
  @Input() userComment: UserComment;

  constructor() { }

  ngOnInit(): void {}

  getUserName = () => this.userComment.userName || 'Unknown';
  getPosted = () => this.userComment.posted;
  getCommentText = () => this.userComment.commentText;


}
