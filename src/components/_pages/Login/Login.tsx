import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { useAppContext } from "../../../hooks";
import { handleAuthError } from "../../../utils";
import { Page, ILoginFormData } from "../../../types";
import { auth, loginSchema } from "../../../services";
import { FORM } from "../../../constants/locale";
import { Button, Input, ErrorMessage } from "../../";

import styles from "./Login.module.scss";

function Login(): ReactElement {
  const router = useRouter();
  const { lang } = useAppContext();

  const [user] = useAuthState(auth); // Handle loading and error
  const [authError, setAuthError] = useState("");

  const validationSchema = loginSchema[lang as keyof typeof loginSchema];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (user) {
      router.replace(Page.PLAYGROUND);
    }
  }, [router, user]);

  async function onSubmit(data: ILoginFormData): Promise<void> {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      router.push(Page.PLAYGROUND);
      setAuthError("");
    } catch (error) {
      handleAuthError({ error, setAuthError, lang });
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__header}>
          <h2 className={styles.login__header_title}>{FORM[lang].loginTitle}</h2>
          <p className={styles.login__header_subtitle}>{FORM[lang].loginSubtitle}</p>
        </div>
        <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.login__form_inputs}>
            <Input inputName="email" type="text" errors={errors} {...register("email")} />
            <Input inputName="password" type="password" errors={errors} {...register("password")} />
          </div>
          <Button
            name={FORM[lang].loginButton}
            type="submit"
            className={styles.login__form_button}
            disabled={isSubmitting}
          />
        </form>

        {/* Auth Error */}
        {authError && <ErrorMessage message={authError} className={styles.login__error} />}
      </div>
      <div className={styles.login__footer}>
        <span>
          {FORM[lang].loginNote}{" "}
          <Link href={Page.REGISTER} className={styles.login__footer_link}>
            {FORM[lang].loginLink}
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
