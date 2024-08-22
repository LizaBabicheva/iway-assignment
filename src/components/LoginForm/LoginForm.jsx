import "./LoginForm.scss";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

function LoginForm() {
  return (
    <form className="login-form">
      <h1 className="login-form-heading">Вход</h1>
      <Input
        id="login"
        name="login"
        label="Логин"
        type="text"
        placeholder="Введите логин"
        minLength={3}
        maxLength={20}
      />
      <Input
        id="password"
        name="password"
        label="Пароль"
        type="text"
        placeholder="Введите пароль"
        minLength={6}
        maxLength={20}
      />
      <Button className="main-button" type="submit">
        Войти
      </Button>
    </form>
  );
}

export default LoginForm;
