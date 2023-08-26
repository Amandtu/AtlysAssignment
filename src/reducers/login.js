import * as ACTION_TYPES from "../actionTypes/login";

const initialState = {
  isLoggedIn: false,
  username: "",
  loginType: "SIGN_IN",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SIGN_IN:
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
      };
    case ACTION_TYPES.SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
        username: "",
        loginType: "SIGN_IN",
      };
    case ACTION_TYPES.TOGGLE_SIGN_IN_TYPE:
      return {
        ...state,
        loginType: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
