import Link from "next/link";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { ButtonName, Page, IRegisterFormData } from "../../../types";
import { registerValidationSchema } from "../../../utils";

import styles from "./register.module.scss";

function Register(): ReactElement {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    resolver: yupResolver(registerValidationSchema),
  });

  const watchPassword = watch("password");

  console.log(watchPassword);

  function onSubmit(data: IRegisterFormData): void {
    console.log(data);

    router.replace(Page.HOME);
  }

  return (
    <div className={styles.register}>
      <div className={styles.register__container}>
        <div className={styles.register__header}>
          <h2 className={styles.register__header_title}>Register 🤓</h2>
          <p className={styles.register__header_subtitle}>
            Please, create account to use GraphiQL Playground.
          </p>
        </div>
        <form className={styles.register__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.register__form_inputs}>
            <Input inputName="name" type="text" errors={errors} {...register("name")} />
            <Input inputName="email" type="text" errors={errors} {...register("email")} />
            <Input inputName="password" type="password" errors={errors} {...register("password")} />
          </div>
          <Button
            name={ButtonName.REGISTER}
            type="submit"
            className={styles.register__form_button}
            disabled={isSubmitting}
          />
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
