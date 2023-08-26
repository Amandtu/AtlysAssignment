import React, { useCallback, useState } from "react";

import { Form } from "./Form/Form";

const FORM_CONFIG = {
  email: {
    label: "Email",
    placeholder: "Enter your email",
  },
  username: {
    label: "Username",
    placeholder: "Choose a preferred username",
  },
  password: {
    label: "Password",
    placeholder: "Choose a strong password",
  },
  submitCTAText: "Continue",
};

export const SignUpForm = React.memo(function SignUpForm({ onSuccessCb }) {
  const [validationError, setValidationError] = useState({});

  const handleErrorOnChange = useCallback(key => {
    setValidationError(prevError => ({
      ...prevError,
      [key]: "",
    }));
  }, []);

  const onSubmit = useCallback(
    formData => {
      const { email, username, password } = formData || {};
      if (
        email?.length &&
        username?.length &&
        password?.length &&
        email?.indexOf("@") !== -1
      ) {
        onSuccessCb(username);
        return;
      }

      let error = {};
      if (email?.length) {
        if (email.indexOf("@") === -1) {
          error = {
            email: "Invalid Email",
          };
        }
      } else {
        error = {
          email: "Email cannot be empty",
        };
      }
      if (!username?.length) {
        error = {
          ...error,
          username: "Username cannot be empty",
        };
      }
      if (!password?.length) {
        error = {
          ...error,
          password: "Password cannot be empty",
        };
      }
      setValidationError({ ...error });
    },
    [onSuccessCb]
  );

  return (
    <Form
      onSubmit={onSubmit}
      formConfig={FORM_CONFIG}
      validationError={validationError}
      handleErrorOnChange={handleErrorOnChange}
    />
  );
});
