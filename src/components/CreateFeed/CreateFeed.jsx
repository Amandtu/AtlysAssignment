import React, { useCallback, useState } from "react";

import styles from "./createFeed.module.css";
import { createFeedPayload } from "./createFeed.factory";

const emoticon = "0x1F4AC";

function CreateFeed({ username, onSuccessCb }) {
  const [comment, setComment] = useState("");

  const handleChange = useCallback(e => {
    setComment(e.target.value);
  }, []);

  const renderContent = () => (
    <div className={styles.contentContainer}>
      <div className={styles.emoticonContainer}>
        {String.fromCodePoint(emoticon)}
      </div>
      <input
        className={styles.content}
        type="text"
        value={comment}
        placeholder="How are you feeling today?"
        onChange={handleChange}
      />
    </div>
  );

  const onSubmit = useCallback(() => {
    if (comment?.length) {
      const payload = createFeedPayload({ username, emoticon, comment });
      setComment("");
      onSuccessCb(payload);
    }
  }, [username, comment, onSuccessCb]);

  return (
    <div className={styles.cardContainer}>
      <div>Create Post</div>
      {renderContent()}
      <div className={styles.buttonContainer}>
        <button className={styles.button} type="button" onClick={onSubmit}>
          Post
        </button>
      </div>
    </div>
  );
}

export default React.memo(CreateFeed);
