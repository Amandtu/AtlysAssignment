import React, { useMemo } from "react";

import { MODAL_CONFIG } from "./loginModal.constants";

import styles from "./loginModal.module.css";

function Modal({ loginType }) {
  const {
    title,
    subText,
    footerText,
    footerCTAText,
    FormRenderer,
    submitCTAText,
  } = useMemo(() => MODAL_CONFIG[loginType], [loginType]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.modalContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subText}>{subText}</div>
        <FormRenderer ctaText={submitCTAText} />
        <div>
          <span>
            {footerText}
            <button className={styles.cta}>{footerCTAText} &rarr;</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export const LoginModal = React.memo(Modal);
