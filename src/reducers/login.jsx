import * as ACTION_TYPES from "../actionTypes/login";

const initialState = {
  isLoggedIn: false,
  loginType: "SIGN_IN",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SIGN_IN:
      return {
        isLoggedIn: true,
      };
    case ACTION_TYPES.SIGN_OUT:
      return {
        isLoggedIn: false,
      };
    case ACTION_TYPES.TOGGLE_SIGN_IN_TYPE:
      return {
        loginType: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
