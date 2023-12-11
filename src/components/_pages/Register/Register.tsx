import { ReactElement, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { useAppContext } from "../../../hooks";
import { handleAuthError } from "../../../utils";
import { Page, IRegisterFormData } from "../../../types";
import { auth, registerSchema } from "../../../services";
import { LOCALE_FORM } from "../../../constants/locale";
import { Button, Input, ErrorMessage, PasswordStrength } from "../..";

import styles from "./Register.module.scss";

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
      handleAuthError({ error, setAuthError, lang });
    }
  }

  return (
    <div className={styles.register}>
      <div className={styles.register__container}>
        <div className={styles.register__header}>
          <h2 className={styles.register__header_title}>{LOCALE_FORM[lang].registerTitle}</h2>
          <p className={styles.register__header_subtitle}>{LOCALE_FORM[lang].registerSubtitle}</p>
        </div>
        <form className={styles.register__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.register__form_inputs}>
            <Input inputName="name" type="text" errors={errors} {...register("name")} />
            <Input inputName="email" type="text" errors={errors} {...register("email")} />
            <Input inputName="password" type="password" errors={errors} {...register("password")} />
          </div>

          <PasswordStrength inputValue={passwordInputValue} />

          <Button
            name={LOCALE_FORM[lang].registerButton}
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
          {LOCALE_FORM[lang].registerNote}{" "}
          <Link href={Page.LOGIN} className={styles.register__footer_link}>
            {LOCALE_FORM[lang].registerLink}
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
