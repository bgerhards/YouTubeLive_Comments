import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCommentComponent } from './user-comment.component';
import { UserComment } from '../models/user-comment';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('UserCommentComponent', () => {
  let component: UserCommentComponent;
  let fixture: ComponentFixture<UserCommentComponent>;
  let userComment: UserComment;
  let nativeElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCommentComponent ],
     imports: [MatCardModule, MatIconModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCommentComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    userComment = new UserComment();
    userComment.userName = 'Brian Gerhards';
    userComment.posted ='04-05-1988';

    component.userComment = userComment;

    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show name of user that commented', () => {
    fixture.detectChanges();

    const userName = nativeElement.querySelector('.userName').textContent;
    expect(userName).toBe('Brian Gerhards');
  })

  it('should unknown as name of user that commented if one is not provided', () => {
    userComment.userName = '';
    fixture.detectChanges();

    const userName = nativeElement.querySelector('.userName').textContent;
    expect(userName).toBe('Unknown');
  })

  it('should display date/time when comment was made', () => {

    userComment.userName = '';
    fixture.detectChanges();

    const posted = nativeElement.querySelector('.posted').textContent;
    expect(posted).toBe('04-05-1988');
  })
});
