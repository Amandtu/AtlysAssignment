import * as ACTION_TYPES from "../actionTypes/feed";

export const fetchFeed = data => ({
  type: ACTION_TYPES.FETCH_FEED_DATA,
  payload: data,
});

export const addNewFeed = data => ({
  type: ACTION_TYPES.SET_FEED_DATA,
  payload: data,
});
