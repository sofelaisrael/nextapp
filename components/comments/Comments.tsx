"use client";
import { useState, useEffect, useCallback } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  getComments as fetchComments,
  createComment as addCommentApi,
  updateComment as editCommentApi,
  deleteComment as removeCommentApi,
} from "@/lib/data";

// Define TypeScript interfaces for types
interface CommentType {
  id: string;
  body: string;
  username: string;
  userId: string;
  parentId: string | null;
  createdAt: string;
}

interface ActiveComment {
  id: string;
  type: "replying" | "editing";
}

interface CommentsProps {
  commentsUrl: string;
  currentUserId: string;
}

const Comments = ({ commentsUrl, currentUserId }: CommentsProps) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [activeComment, setActiveComment] = useState<ActiveComment | null>(
    null
  );

  // Fetch comments from the backend API
  const loadComments = useCallback(async () => {
    try {
      const data = await fetchComments();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }, []);

  // Filter root comments (no parentId)
  const rootComments = comments.filter((comment) => comment.parentId === null || comment.parentId === undefined);

  // Get replies for a specific comment
  const getReplies = useCallback(
    (commentId: string) =>
      comments
        .filter((comment) => comment.parentId === commentId)
        .sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        ),
    [comments]
  );

  const addComment = (text: string, parentId: string | null) => {
    const newComment = {
      id: `${Date.now()}-${Math.random()}`, // Generate a unique ID using timestamp and random number
      body: text,
      username: localStorage.getItem("visitorName") || "Anonymous",
      userId: localStorage.getItem("visitorId") || `${Date.now()}-${Math.random()}`, // Generate a unique user ID if not already set
      parentId,
      createdAt: new Date().toISOString(),
    };
  
    setComments((prevComments) => [newComment, ...prevComments]);
    console.log(comments)
    setActiveComment(null);
  };
  

  const updateComment = (text: string, commentId: string) => {
    editCommentApi(text).then(() => {
      const updatedBackendComments = comments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  
  const deleteComment = (commentId: string) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      removeCommentApi().then(() => {
        const updatedBackendComments = comments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setComments(updatedBackendComments);
      });
    }
  };
  

  // Initial fetch of comments on component mount
  useEffect(() => {
    loadComments();
  }, [loadComments]);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write a comment</div>
      <CommentForm
        submitLabel="Write"
        handleSubmit={(text) => addComment(text, null)}
      />

      <div className="comments-container">
  {rootComments.map((rootComment) => (
    <Comment
      key={rootComment.id} // Unique ID as the key
      comment={rootComment}
      replies={getReplies(rootComment.id)}
      activeComment={activeComment}
      setActiveComment={setActiveComment}
      addComment={addComment}
      deleteComment={deleteComment}
      updateComment={updateComment}
      currentUserId={currentUserId}
    />
  ))}
</div>

    </div>
  );
};

export default Comments;
