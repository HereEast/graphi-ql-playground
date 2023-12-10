import Link from "next/link";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppContext } from "../../../hooks";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { PasswordStrength } from "../../PasswordStrength";
import { Page, IRegisterFormData } from "../../../types";
import { registerSchema } from "../../../utils";
import { REGISTER } from "../../../constants/dictionary";

import styles from "./register.module.scss";

function Register(): ReactElement {
  const router = useRouter();
  const { lang } = useAppContext();

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

  const watchPassword = watch("password");

  function onSubmit(data: IRegisterFormData): void {
    console.log(data);

    router.replace(Page.HOME);
  }

  return (
    <div className={styles.register}>
      <div className={styles.register__container}>
        <div className={styles.register__header}>
          <h2 className={styles.register__header_title}>{REGISTER[lang].title}</h2>
          <p className={styles.register__header_subtitle}>{REGISTER[lang].subtitle}</p>
        </div>
        <form className={styles.register__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.register__form_inputs}>
            <Input inputName="name" type="text" errors={errors} {...register("name")} />
            <Input inputName="email" type="text" errors={errors} {...register("email")} />
            <Input inputName="password" type="password" errors={errors} {...register("password")} />
          </div>

          <PasswordStrength inputValue={watchPassword} />

          <Button
            name={REGISTER[lang].button}
            type="submit"
            className={styles.register__form_button}
            disabled={isSubmitting}
          />
        </form>
      </div>
      <div className={styles.register__footer}>
        <span>
          {REGISTER[lang].note} <Link href={Page.LOGIN}>{REGISTER[lang].link}</Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
