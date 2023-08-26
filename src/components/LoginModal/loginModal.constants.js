import { SignInForm } from "./components/SignInForm/SignInForm";
import { SignUpForm } from "./components/SignUpForm";

export const MODAL_TYPES = {
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP",
};

export const MODAL_CONFIG = {
  [MODAL_TYPES.SIGN_IN]: {
    title: "WELCOME BACK",
    subText: "Log into your account",
    footerText: "Not registered yet?",
    submitCTAText: "Login now",
    footerCTAText: "Register",
    FormRenderer: SignInForm,
  },
  [MODAL_TYPES.SIGN_UP]: {
    title: "SIGN UP",
    subText: "Create an account to continue",
    footerText: "Already have an account?",
    submitCTAText: "Continue",
    footerCTAText: "Login",
    FormRenderer: SignUpForm,
  },
};

export const FORM_ERRORS = {
  username: "Incorrect username",
  password: "Incorrect password",
};
