import React, { useMemo } from "react";

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
  const renderAvatar = useMemo(
    () => (
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imgSrc} />
      </div>
    ),
    [imgSrc]
  );

  const renderAuthor = useMemo(
    () => (
      <div className={styles.authorContainer}>
        <div>{author}</div>
        <div style={{ color: "#7f8083" }}>
          {time}
          {edited ? <span> &#x2022; Edited</span> : ""}
        </div>
      </div>
    ),
    [author, time, edited]
  );

  const renderHeader = () => (
    <div className={styles.headerContainer}>
      <div className={styles.authorAndAvatarContainer}>
        {renderAvatar}
        {renderAuthor}
      </div>
      <div role="button">...</div>
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
        <span>{String.fromCodePoint("0x1F4AC")}</span>
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
