import React, { useCallback, useState } from "react";

import styles from "./form.module.css";

export const Form = React.memo(function Form({
  formConfig,
  onSubmit,
  validationError,
  handleErrorOnChange,
}) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {
    username: usernameConfig,
    password: passwordConfig,
    email: emailConfig,
    submitCTAText,
  } = formConfig;

  const handleEmailChange = useCallback(
    e => {
      setEmail(e.target.value);
      handleErrorOnChange("email");
    },
    [handleErrorOnChange]
  );

  const handleUsernameChange = useCallback(
    e => {
      setUsername(e.target.value);
      handleErrorOnChange("username");
    },
    [handleErrorOnChange]
  );

  const handlePasswordChange = useCallback(
    e => {
      setPassword(e.target.value);
      handleErrorOnChange("password");
    },
    [handleErrorOnChange]
  );

  const renderErrorMessage = useCallback(
    name =>
      validationError[name] ? (
        <div className={styles.error}>{validationError[name]}</div>
      ) : null,
    [validationError]
  );

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      onSubmit({ username, email, password });
    },
    [username, email, password, onSubmit]
  );

  const renderEmail = useCallback(
    () => (
      <div className={styles.inputContainer}>
        <label className={styles.label}>{emailConfig.label}</label>
        <br />
        <input
          className={styles.input}
          type="text"
          value={email}
          placeholder={emailConfig.placeholder}
          onChange={handleEmailChange}
        />
        {renderErrorMessage("email")}
      </div>
    ),
    [emailConfig, email, handleEmailChange, renderErrorMessage]
  );

  const renderUsername = useCallback(
    () => (
      <div className={styles.inputContainer}>
        <label className={styles.label}>{usernameConfig.label}</label>
        <br />
        <input
          className={styles.input}
          type="text"
          value={username}
          placeholder={usernameConfig.placeholder}
          onChange={handleUsernameChange}
        />
        {renderErrorMessage("username")}
      </div>
    ),
    [username, usernameConfig, handleUsernameChange, renderErrorMessage]
  );

  const renderPassword = useCallback(
    () => (
      <div className={styles.inputContainer}>
        <label className={styles.label}>{passwordConfig.label}</label>
        <br />
        <input
          className={styles.input}
          type="password"
          value={password}
          placeholder={passwordConfig.placeholder}
          onChange={handlePasswordChange}
        />
        {renderErrorMessage("password")}
      </div>
    ),
    [password, passwordConfig, handlePasswordChange, renderErrorMessage]
  );

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        {emailConfig ? renderEmail() : null}
        {renderUsername()}
        {renderPassword()}
        <div>
          <button className={styles.submitCTA} type="submit">
            {submitCTAText}
          </button>
        </div>
      </form>
    </div>
  );
});
