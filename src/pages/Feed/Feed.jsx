import { useCallback, useEffect, useMemo } from "react";
import { connect } from "react-redux";

import { addNewFeed, fetchFeed } from "../../actions/feed";
import { FeedCard } from "../../components/FeedCard/FeedCard";
import CreateFeed from "../../components/CreateFeed/CreateFeed";
import { FEED_DATA } from "../../mockData";

import styles from "./feed.module.css";

function Feed({ data, actions, username }) {
  useEffect(() => {
    setTimeout(() => actions.fetchFeed(FEED_DATA), 500);
  }, []);

  const onFeedCreate = useCallback(
    feedData => {
      actions.addNewFeed(feedData);
    },
    [actions]
  );

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
        <CreateFeed username={username} onSuccessCb={onFeedCreate} />
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
    addNewFeed: data => dispatch(addNewFeed(data)),
  },
});

const mapStateToProps = state => ({
  data: state.feed.data,
  username: state.auth.username,
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
