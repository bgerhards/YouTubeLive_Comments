import { CommentState } from './user-comment-state.enum'

export class UserComment {
  public userName: string
  public posted: string
  public commentText: string
  public state: CommentState
}
