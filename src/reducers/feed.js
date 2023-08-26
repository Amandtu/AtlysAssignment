import * as ACTION_TYPES from "../actionTypes/feed";

const initialState = {
  data: [],
};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_FEED_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ACTION_TYPES.SET_FEED_DATA:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    default:
      return state;
  }
};

export default feedReducer;
