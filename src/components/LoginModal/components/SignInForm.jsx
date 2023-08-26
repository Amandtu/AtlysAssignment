import React, { useCallback, useState } from "react";

import { Form } from "./Form/Form";

const FORM_CONFIG = {
  username: {
    label: "Email or Username",
    placeholder: "Enter your email or username",
  },
  password: {
    label: "Password",
    placeholder: "Enter your password",
  },
  submitCTAText: "Login now",
};

export const SignInForm = React.memo(function SignInForm({ onSuccessCb }) {
  const [validationError, setValidationError] = useState({});

  const handleErrorOnChange = useCallback(key => {
    setValidationError(prevError => ({
      ...prevError,
      [key]: "",
    }));
  }, []);

  const onSubmit = useCallback(
    formData => {
      const { username, password } = formData || {};
      if (username?.length && password?.length) {
        onSuccessCb(username);
        return;
      }

      let error = {};
      if (!username?.length) {
        error = {
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
