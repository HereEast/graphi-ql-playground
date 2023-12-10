import Link from "next/link";
import { ReactElement, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppContext } from "../../../hooks";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { ErrorMessage } from "../../ErrorMessage";
import { PasswordStrength } from "../../PasswordStrength";
import { Page, IRegisterFormData } from "../../../types";
import { registerSchema } from "../../../services";
import { FORM, FORM_ERROR } from "../../../constants/locale";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../services";

import styles from "./register.module.scss";

function Register(): ReactElement {
  const router = useRouter();

  const { lang } = useAppContext();

  const [user] = useAuthState(auth);
  const [authError, setAuthError] = useState("");

  const validationSchema = registerSchema[lang as keyof typeof registerSchema];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    resolver: yupResolver(validationSchema),
  });

  const passwordInputValue = watch("password");

  useEffect(() => {
    if (user) {
      router.replace(Page.PLAYGROUND);
    }
  }, [router, user]);

  async function onSubmit(data: IRegisterFormData): Promise<void> {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);

      router.replace(Page.PLAYGROUND);
      setAuthError("");
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("email-already-in-use")) {
          setAuthError(FORM_ERROR[lang].auth_email_in_use);
        } else {
          setAuthError(FORM_ERROR[lang].auth_something_wrong);
        }
      }
    }
  }

  return (
    <div className={styles.register}>
      <div className={styles.register__container}>
        <div className={styles.register__header}>
          <h2 className={styles.register__header_title}>{FORM[lang].registerTitle}</h2>
          <p className={styles.register__header_subtitle}>{FORM[lang].registerSubtitle}</p>
        </div>
        <form className={styles.register__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.register__form_inputs}>
            <Input inputName="name" type="text" errors={errors} {...register("name")} />
            <Input inputName="email" type="text" errors={errors} {...register("email")} />
            <Input inputName="password" type="password" errors={errors} {...register("password")} />
          </div>

          <PasswordStrength inputValue={passwordInputValue} />

          <Button
            name={FORM[lang].registerButton}
            type="submit"
            className={styles.register__form_button}
            disabled={isSubmitting}
          />
        </form>

        {/* Auth Error */}
        {authError && <ErrorMessage message={authError} className={styles.register__error} />}
      </div>
      <div className={styles.register__footer}>
        <span>
          {FORM[lang].registerNote} <Link href={Page.LOGIN}>{FORM[lang].registerLink}</Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
