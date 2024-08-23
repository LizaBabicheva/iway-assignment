import "./LoginForm.scss";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

function LoginForm({
  onLogin,
  loginValue,
  passwordValue,
  loginInputHandler,
  passwordInputHandler,
}) {
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
        minLength={3}
        maxLength={20}
        onChange={loginInputHandler}
      />
      <Input
        id="password"
        name="password"
        label="Пароль"
        type="password"
        placeholder="Введите пароль"
        value={passwordValue}
        minLength={6}
        maxLength={20}
        onChange={passwordInputHandler}
      />
      <Button className="main-button" type="submit">
        Войти
      </Button>
    </form>
  );
}

export default LoginForm;
