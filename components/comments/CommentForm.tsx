import React, { useState } from "react";

interface CommentFormProps {
  handleSubmit: (text: string) => void;
  submitLabel: string;
  hasCancelButton?: boolean;
  handleCancel?: () => void;
  initialText?: string;
}

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}: CommentFormProps) => {
  const [text, setText] = useState<string>(initialText);
  const visitorName = localStorage.getItem("visitorName") || "Anonymous"; // Default to "Anonymous"

  const isTextareaDisabled = text.length === 0;

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(`${visitorName}: ${text}`); // Include the name with the comment text
    setText(""); // Clear the comment text field
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your comment here..."
      />
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;
