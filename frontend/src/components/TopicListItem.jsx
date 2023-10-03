import React from "react";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   title: "Nature",
// };

const TopicListItem = ({topic}) => {
  // console.log("in TopicListItem topic is", topic)

  if (!topic) {
    return null; // Or some default content or loading indicator
  }
  
  const { id, slug, title } = topic;

  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <span className="topic-list__item span">{title}</span>
    </div>
  );
};


export default TopicListItem;
