import { ReactElement, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppContext, useAuthContext, useLocale } from "../../../hooks";
import { handleAuthError } from "../../../utils";
import { registerUser, registerSchema } from "../../../services";
import { Page, IRegisterFormData } from "../../../types";
import { Button, Input, ErrorMessage, PasswordStrength } from "../..";

import styles from "./Register.module.scss";

function Register(): ReactElement {
  const router = useRouter();

  const { register: registerPage } = useLocale();
  const { lang } = useAppContext();
  const { user } = useAuthContext();

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
      await registerUser(data.name, data.email, data.password);

      router.replace(Page.PLAYGROUND);
      setAuthError("");
    } catch (error) {
      handleAuthError({ lang, error, setAuthError });
    }
  }

  return (
    <div className={styles.register}>
      <div className={styles.register__container}>
        <div className={styles.register__header}>
          <h2 className={styles.register__header_title}>{registerPage.title}</h2>
          <p className={styles.register__header_subtitle}>{registerPage.subtitle}</p>
        </div>
        <form className={styles.register__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.register__form_inputs}>
            <Input inputName="name" type="text" errors={errors} {...register("name")} />
            <Input inputName="email" type="text" errors={errors} {...register("email")} />
            <Input inputName="password" type="password" errors={errors} {...register("password")} />
          </div>

          <PasswordStrength inputValue={passwordInputValue} />

          <Button
            name={registerPage.button}
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
          {registerPage.note}{" "}
          <Link href={Page.LOGIN} className={styles.register__footer_link}>
            {registerPage.link}
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
