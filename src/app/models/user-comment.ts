import { CommentState } from './user-comment-state.enum'

export class UserComment {
  public userName: string
  public posted: Date
  public comment: string
  public state: CommentState
}
