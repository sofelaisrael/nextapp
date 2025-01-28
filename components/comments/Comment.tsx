import React from "react";
import CommentForm from "./CommentForm";

interface CommentType {
  id: string;
  body: string;
  username: string;
  userId: string;
  parentId: string | null;
  createdAt: string;
}

interface CommentProps {
  comment: CommentType;
  replies: CommentType[];
  setActiveComment: (
    activeComment: { id: string; type: string } | null
  ) => void;
  activeComment: { id: string; type: string } | null;
  updateComment: (text: string, commentId: string) => void;
  deleteComment: (commentId: string) => void;
  addComment: (text: string, parentId: string | null) => void;
  parentId: string | null;
  currentUserId: string;
  replyTo: string;
}

const Comment = ({
  comment,
  replies,
  setActiveComment,
  replyTo,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}: CommentProps) => {
  console.log(comment);

  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";

  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";

  const canEdit = currentUserId === comment.userId;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();

  return (
    <div key={comment.id} className="comment">
      <div className="comment-content">
        <div className="comment-author">{comment.username || "Anonymous"}</div>
        <div className="comment-date">{createdAt}</div>
        {replyTo && <div className="replyto">To {replyTo}</div>}
        {!isEditing && <div className="comment-text">{comment.body}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            hasCancelButton
            handleCancel={() => setActiveComment(null)}
          />
        )}
        <div className="comment-actions">
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
            >
              Delete
            </div>
          )}
          <div
            className="comment-action"
            onClick={() =>
              setActiveComment({ id: comment.id, type: "replying" })
            }
          >
            Reply
          </div>
        </div>
      </div>
      {isReplying && (
        <CommentForm
          submitLabel="Reply"
          handleSubmit={(text) => addComment(text, comment.id)}
          hasCancelButton
          handleCancel={() => setActiveComment(null)}
        />
      )}
      {replies.length > 0 && (
        <div className="replies">
          {replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              replies={[]}
              setActiveComment={setActiveComment}
              activeComment={activeComment}
              updateComment={updateComment}
              deleteComment={deleteComment}
              addComment={addComment}
              parentId={comment.id}
              replyTo={comment.username}
              currentUserId={currentUserId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
