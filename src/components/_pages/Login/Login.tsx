import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppContext } from "../../../hooks";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { ErrorMessage } from "../../ErrorMessage";
import { Page, ILoginFormData } from "../../../types";
import { loginSchema } from "../../../utils";
import { LOGIN, FORM_ERROR } from "../../../constants/dictionary";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

import styles from "./login.module.scss";

function Login(): ReactElement {
  const router = useRouter();

  const { lang } = useAppContext();

  // Handle loading and error
  const [user] = useAuthState(auth);
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
      if (error instanceof Error) {
        if (error.message.includes("invalid-credential")) {
          setAuthError(FORM_ERROR[lang].auth_invalid_credentials);
        } else {
          setAuthError(FORM_ERROR[lang].auth_something_wrong);
        }
      }
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__header}>
          <h2 className={styles.login__header_title}>{LOGIN[lang].title}</h2>
          <p className={styles.login__header_subtitle}>{LOGIN[lang].subtitle}</p>
        </div>
        <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.login__form_inputs}>
            <Input inputName="email" type="text" errors={errors} {...register("email")} />
            <Input inputName="password" type="password" errors={errors} {...register("password")} />
          </div>
          <Button
            name={LOGIN[lang].button}
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
          {LOGIN[lang].note} <Link href={Page.REGISTER}>{LOGIN[lang].link}</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
