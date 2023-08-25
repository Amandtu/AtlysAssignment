import React from "react";

import styles from "./feedCard.module.css";

export const FeedCard = React.memo(function FeedCard({
  imgSrc,
  author,
  time,
  edited,
  feedContent,
  emoticon,
  commentCount,
}) {
  const renderHeader = () => (
    <div className={styles.headerContainer}>
      <div className={styles.authorAndAvatarContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={imgSrc} />
        </div>
        <div className={styles.authorContainer}>
          <div>{author}</div>
          <div>
            {time} {edited ? " &#x2022 Edited" : ""}
          </div>
        </div>
      </div>
      <div>...</div>
    </div>
  );

  const renderContent = () => (
    <div className={styles.contentContainer}>
      <div className={styles.emoticonContainer}>
        {String.fromCodePoint(emoticon)}
      </div>
      <div className={styles.content}>{feedContent}</div>
    </div>
  );

  const renderFooter = () =>
    commentCount ? (
      <div>
        <span>{String.fromCodePoint('0x1F5E8')}</span>
        <span>
          &nbsp; {commentCount} {commentCount > 1 ? "comments" : "comment"}
        </span>
      </div>
    ) : null;

  return (
    <div className={styles.cardContainer}>
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </div>
  );
});


