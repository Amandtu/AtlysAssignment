import React, { useCallback, useMemo } from "react";

import { MODAL_CONFIG } from "./loginModal.constants";

import styles from "./loginModal.module.css";

function Modal({ actions, loginType }) {
  const {
    title,
    subText,
    footerText,
    footerCTAText,
    FormRenderer,
    toggleType,
  } = useMemo(() => MODAL_CONFIG[loginType], [loginType]);

  const onToggle = useCallback(
    () => actions.toggleSignIn(toggleType),
    [actions, toggleType]
  );

  const onSuccessCb = useCallback(() => actions.onLoginSuccess(), [actions]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.modalContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subText}>{subText}</div>
        <FormRenderer onSuccessCb={onSuccessCb} />
        <div>
          <span style={{ color: "#7f8083" }}>
            {footerText}
            <button className={styles.cta} onClick={onToggle}>
              {footerCTAText} &rarr;
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export const LoginModal = React.memo(Modal);
