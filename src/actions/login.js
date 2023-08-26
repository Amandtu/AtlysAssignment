import * as ACTION_TYPES from "../actionTypes/login";

export const toggleSignInType = loginType => ({
  type: ACTION_TYPES.TOGGLE_SIGN_IN_TYPE,
  payload: loginType,
});

export const logInAction = username => ({
  type: ACTION_TYPES.SIGN_IN,
  payload: username,
});

export const logOutAction = () => ({
  type: ACTION_TYPES.SIGN_OUT,
});
