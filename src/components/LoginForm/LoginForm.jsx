import "./LoginForm.scss";
import { Input, Button } from "../componentsImport.js";
import { useSelector } from "react-redux";

function LoginForm({
  onLogin,
  loginValue,
  passwordValue,
  loginInputHandler,
  passwordInputHandler,
  isButtonDisabled,
  errors,
}) {
  const loginUserError = useSelector((state) => state.user.loginUserError);

  return (
    <form className="login-form" onSubmit={onLogin}>
      <h1 className="login-form-heading">Вход</h1>
      <Input
        id="login"
        name="login"
        label="Логин"
        type="text"
        placeholder="Введите логин"
        value={loginValue}
        onChange={loginInputHandler}
        errors={errors?.login}
      />
      <Input
        id="password"
        name="password"
        label="Пароль"
        type="password"
        placeholder="Введите пароль"
        value={passwordValue}
        onChange={passwordInputHandler}
        errors={errors?.password}
      />
      <Button className="main-button" type="submit" disabled={isButtonDisabled}>
        Войти
      </Button>
      {loginUserError && (
        <p className="login-error">
          Не удалось авторизоваться.
          <br />
          Проверьте данные и повторите попытку.
        </p>
      )}
    </form>
  );
}

export default LoginForm;
