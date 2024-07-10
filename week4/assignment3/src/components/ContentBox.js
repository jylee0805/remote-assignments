import React from "react";

const ContentBox = ({ text }) => {
  return (
    <div className="content_item">
      <p className="content_text">{text}</p>
    </div>
  );
};
export default ContentBox;
