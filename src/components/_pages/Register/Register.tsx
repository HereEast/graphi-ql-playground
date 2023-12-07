import Link from "next/link";
import { ReactElement } from "react";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { ButtonName, Page } from "../../../types";

import styles from "./register.module.scss";

function Register(): ReactElement {
  return (
    <div className={styles.register}>
      <div className={styles.register__container}>
        <div className={styles.register__header}>
          <h2 className={styles.register__header_title}>Register 🤓</h2>
          <p className={styles.register__header_subtitle}>
            Please, create account to use GraphiQL Playground.
          </p>
        </div>
        <form className={styles.register__form}>
          <Input inputName="Name" type="text" />
          <Input inputName="Email" type="email" />
          <Input inputName="Password" type="text" />
          <Button name={ButtonName.REGISTER} className={styles.register__form_button} />
        </form>
      </div>
      <div className={styles.register__footer}>
        <span>
          Already have an account? Please, <Link href={Page.LOGIN}>log in.</Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
