import Link from "next/link";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { Page, ILoginFormData } from "../../../types";
import { loginValidationSchema } from "../../../utils";
import { LOGIN } from "../../../constants/dictionary";

import styles from "./login.module.scss";
import { useAppContext } from "../../../hooks";

function Login(): ReactElement {
  const router = useRouter();
  const { lang } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginValidationSchema),
  });

  function onSubmit(data: ILoginFormData): void {
    console.log(data);

    router.replace(Page.HOME);
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
