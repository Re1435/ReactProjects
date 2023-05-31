import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentsList = []

// Write your code here

class Comments extends Component {
  state = {
    count: 0,
    commentsList: initialCommentsList,
    userName: '',
    userComment: '',
  }

  onAddComment = event => {
    event.preventDefault()
    const {userName, userComment} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      userName,
      userComment,
      isLiked: false,
      date: formatDistanceToNow(new Date()),
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      count: prevState.count + 1,
      userName: '',
      userComment: '',
    }))
  }

  onChangeName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeComment = event => {
    this.setState({userComment: event.target.value})
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onClickDelete = id => {
    const {commentsList} = this.state
    const filteredComments = commentsList.filter(each => each.id !== id)

    this.setState(prevState => ({
      commentsList: filteredComments,
      count: prevState.count - 1,
    }))
  }

  render() {
    const {count, userName, userComment, commentsList} = this.state
    return (
      <div className="app-container">
        <div className="app-comments-container">
          <form
            className="comments-form-container"
            onSubmit={this.onAddComment}
          >
            <div className="comments-container">
              <h1 className="heading">Comments</h1>
              <p className="about-text">Say something about 4.0 Technologies</p>
              <input
                type="text"
                value={userName}
                onChange={this.onChangeName}
                placeholder="Your Name"
                className="user-input"
              />
              <textarea
                type="textarea"
                value={userComment}
                onChange={this.onChangeComment}
                rows="8"
                cols="30"
                placeholder="Your Comment"
                className="user-comments"
              />
              <button className="add-comment-btn" type="submit">
                Add Comment
              </button>
            </div>
            <div className="comments-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                className="comments-img"
                alt="comments"
              />
            </div>
          </form>
          <hr className="hr-line" />
          <div className="comments">
            <p className="comments-text">
              <span className="comments-count">{count}</span>
              Comments
            </p>
            <ul className="comments-list">
              {commentsList.map(eachComment => (
                <CommentItem
                  commentDetails={eachComment}
                  key={eachComment.id}
                  onClickDelete={this.onClickDelete}
                  toggleIsLiked={this.toggleIsLiked}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
