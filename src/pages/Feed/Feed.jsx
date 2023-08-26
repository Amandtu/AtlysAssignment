import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";

import { fetchFeed } from "../../actions/feed";
import { FeedCard } from "../../components/FeedCard/FeedCard";
import { FEED_DATA } from "../../mockData";

import styles from "./feed.module.css";

function Feed({ data, actions, username }) {
  useEffect(() => {
    setTimeout(() => actions.fetchFeed(FEED_DATA), 500);
  }, []);

  const renderWelcomeMessage = useMemo(
    () => (
      <div>
        <div className={styles.welcome}>Welcome {username}</div>
        <div className={styles.subTitle}>
          How are you doing today? Would you like to share something with the
          community
        </div>
      </div>
    ),
    [username]
  );
  return (
    <div className={styles.feedHome}>
      <div className={styles.fitContent}>
        {renderWelcomeMessage}
        {data.map(feedItem => (
          <FeedCard key={feedItem.id} {...feedItem} />
        ))}
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  actions: {
    fetchFeed: data => dispatch(fetchFeed(data)),
  },
});

const mapStateToProps = state => ({
  data: state.feed.data,
  username: state.auth.username,
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
