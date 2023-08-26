import React, { useCallback, useState } from "react";

import { USER_CREDENTIALS } from "../../../../mockData";
import { FORM_ERRORS } from "../../loginModal.constants";

import styles from "./signInForm.module.css";

export const SignInForm = React.memo(function SignInForm({ ctaText }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState({});

  const handleUsernameChange = useCallback(e => {
    setUsername(e.target.value);
  }, []);
  const handlePasswordChange = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const renderErrorMessage = useCallback(
    name =>
      name === validationError.name ? (
        <div className="error">{validationError.message}</div>
      ) : null,
    [validationError]
  );

  const handleSubmit = event => {
    event.preventDefault();
    const userData = USER_CREDENTIALS.find(user => user.username === username);
    if (userData) {
      if (userData.password !== password) {
        // Incorrect password
        setValidationError({ name: "password", message: FORM_ERRORS.password });
      } else {
        // call parent set state
      }
    } else {
      // Username not exists
      setValidationError({ name: "username", message: FORM_ERRORS.username });
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Email or Username</label>
          <br />
          <input
            className={styles.input}
            type="text"
            value={username}
            placeholder="Enter your email or username"
            onChange={handleUsernameChange}
          />
          {renderErrorMessage("username")}
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.label}>Password</label>
          <br />
          <input
            className={styles.input}
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={handlePasswordChange}
          />
          {renderErrorMessage("password")}
        </div>
        <div className="button-container">
          <button className={styles.submitCTA} type="submit">
            {ctaText}
          </button>
        </div>
      </form>
    </div>
  );
});
