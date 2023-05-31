// Write your code here
import './index.css'

const CommentItem = props => {
  const {commentDetails, onClickDelete, toggleIsLiked} = props

  const {
    id,
    userName,
    userComment,
    date,
    isLiked,
    initialClassName,
  } = commentDetails
  const initial = userName.slice(0, 1)
  const likedImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeText = isLiked ? 'liked' : ''

  const onLikeComment = () => {
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    onClickDelete(id)
  }

  return (
    <>
      <li className="comment-item">
        <div className="name-container">
          <p className="username">
            <span className={initialClassName}>{initial}</span>
            {userName}
          </p>
          <p className="date">{date}</p>
        </div>
        <p className="comment">{userComment}</p>
        <div className="like-delete-btn-container">
          <div className="like-container">
            <button className="like-btn" type="button" onClick={onLikeComment}>
              <img src={likedImg} className="like-img" alt="like" />
            </button>
            <p className={`like ${likeText}`}>Like</p>
          </div>

          <div>
            <button
              className="delete-btn"
              type="button"
              data-testid="delete"
              onClick={onDeleteComment}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                className="delete-img"
                alt="delete"
              />
            </button>
          </div>
        </div>
        <hr className="hr-line" />
      </li>
    </>
  )
}

export default CommentItem


