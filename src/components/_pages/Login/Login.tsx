import Link from "next/link";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../Input";
import { Button } from "../../Button";
import { ButtonName, Page, ILoginFormData } from "../../../types";
import { loginValidationSchema } from "../../../utils";

import styles from "./login.module.scss";

function Login(): ReactElement {
  const router = useRouter();

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
          <h2 className={styles.login__header_title}>Hello again 👋</h2>
          <p className={styles.login__header_subtitle}>
            Please, log in to use GraphiQL Playground.
          </p>
        </div>
        <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.login__form_inputs}>
            <Input inputName="email" type="text" errors={errors} {...register("email")} />
            <Input inputName="password" type="text" errors={errors} {...register("password")} />
          </div>
          <Button
            name={ButtonName.LOGIN}
            type="submit"
            className={styles.login__form_button}
            disabled={isSubmitting}
          />
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
