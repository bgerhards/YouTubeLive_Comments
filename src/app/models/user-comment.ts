import { CommentState } from './user-comment-state.enum'

export class UserComment {
  public userName: string
  public posted: string
  public comment: string
  public state: CommentState
}
