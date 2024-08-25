import "./LoginPage.scss";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginUser } from "../../redux/slices/authSlice.js";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/rides");
    }
  }, [isAuthenticated, navigate]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ login, password }));
  };

  return (
    <section className="login-page">
      <LoginForm
        onLogin={formSubmitHandler}
        loginValue={login}
        loginInputHandler={(e) => setLogin(e.target.value)}
        passwordValue={password}
        passwordInputHandler={(e) => setPassword(e.target.value)}
      />
    </section>
  );
}

export default LoginPage;
