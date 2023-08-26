import { SignInForm } from "./components/SignInForm";
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
    footerCTAText: "Register",
    FormRenderer: SignInForm,
    toggleType: MODAL_TYPES.SIGN_UP,
  },
  [MODAL_TYPES.SIGN_UP]: {
    title: "SIGN UP",
    subText: "Create an account to continue",
    footerText: "Already have an account?",
    footerCTAText: "Login",
    FormRenderer: SignUpForm,
    toggleType: MODAL_TYPES.SIGN_IN,
  },
};
