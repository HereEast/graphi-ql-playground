import Link from "next/link";
import { ReactElement } from "react";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { ButtonName, Page } from "../../../types";

import styles from "./login.module.scss";

function Login(): ReactElement {
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__header}>
          <h2 className={styles.login__header_title}>Hello again 👋</h2>
          <p className={styles.login__header_subtitle}>
            Please, log in to use GraphiQL Playground.
          </p>
        </div>
        <form className={styles.login__form}>
          <Input inputName="Email" type="email" />
          <Input inputName="Password" type="text" />
          <Button name={ButtonName.LOGIN} className={styles.login__form_button} />
        </form>
      </div>
      <div className={styles.login__footer}>
        <span>
          Don't have an account? Please, <Link href={Page.REGISTER}>register.</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
