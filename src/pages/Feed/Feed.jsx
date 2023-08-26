import { useCallback, useEffect, useMemo } from "react";
import { connect } from "react-redux";

import { addNewFeed, fetchFeed, resetFeed } from "../../actions/feed";
import { FeedCard } from "../../components/FeedCard/FeedCard";
import CreateFeed from "../../components/CreateFeed/CreateFeed";
import { FEED_DATA } from "../../mockData";

import styles from "./feed.module.css";
import { logOutAction } from "../../actions/login";

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

  const onLogout = useCallback(() => {
    actions.onLogout();
    actions.onReset();
  }, [actions]);

  const renderWelcomeMessage = useMemo(
    () => (
      <div className={styles.welcomeContainer}>
        <div>
          <div className={styles.welcome}>Welcome {username}</div>
          <div className={styles.subTitle}>
            How are you doing today? Would you like to share something with the
            community
          </div>
        </div>
        <div>
          <button
            className={styles.logoutButton}
            type="button"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    ),
    [username, onLogout]
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
    onLogout: () => dispatch(logOutAction()),
    onReset: () => dispatch(resetFeed()),
  },
});

const mapStateToProps = state => ({
  data: state.feed.data,
  username: state.auth.username,
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
