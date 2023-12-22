import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppContext, useAuthContext, useLocale } from "../../../hooks";
import { handleAuthError } from "../../../utils";
import { loginUser, generateLoginSchema } from "../../../services";
import { Page, ILoginFormData } from "../../../types";
import { Button, Input, ErrorMessage } from "../../";

import styles from "./Login.module.scss";

function Login(): ReactElement {
  const router = useRouter();

  const { login } = useLocale();
  const { lang } = useAppContext();
  const { user } = useAuthContext();

  const [authError, setAuthError] = useState("");

  const validationSchema = generateLoginSchema(lang);

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
      await loginUser(data.email, data.password);

      router.replace(Page.PLAYGROUND);
      setAuthError("");
    } catch (error) {
      handleAuthError({ error, setAuthError, lang });
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__header}>
          <h2 className={styles.login__header_title}>{login.title}</h2>
          <p className={styles.login__header_subtitle}>{login.subtitle}</p>
        </div>
        <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.login__form_inputs}>
            <Input inputName="email" type="text" errors={errors} {...register("email")} />
            <Input inputName="password" type="password" errors={errors} {...register("password")} />
          </div>
          <Button
            name={login.button}
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
          {login.note}{" "}
          <Link href={Page.REGISTER} className={styles.login__footer_link}>
            {login.link}
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
