import "./LoginPage.scss";
import { LoginForm } from "../../components/componentsImport.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginUser } from "../../redux/slices/authSlice.js";
import { validateInput } from "../../utils/validationOptions.js";
import {
  setButtonDisabled,
  setErrors,
  setInputValue,
} from "../../redux/slices/formSlice.js";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const { inputs, errors, isButtonDisabled } = useSelector(
    (state) => state.form
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/rides");
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    dispatch(setInputValue({ field, value }));
    const validationErrors = validateInput(field, value, true);
    dispatch(setErrors({ field, error: validationErrors }));
    updateButtonState(
      { ...inputs, [field]: value },
      { ...errors, [field]: validationErrors }
    );
  };

  const updateButtonState = (updatedInputs, updatedErrors) => {
    const hasErrors = Object.values(updatedErrors).some(
      (errArray) => Array.isArray(errArray) && errArray.length > 0
    );
    const isFormFilled = Object.values(updatedInputs).every(
      (input) => input !== ""
    );
    dispatch(setButtonDisabled(!isFormFilled || hasErrors));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const { login, password } = inputs;
    dispatch(loginUser({ login, password }));
  };

  return (
    <section className="login-page">
      <LoginForm
        onLogin={formSubmitHandler}
        loginValue={inputs.login}
        loginInputHandler={handleInputChange("login")}
        passwordValue={inputs.password}
        passwordInputHandler={handleInputChange("password")}
        isButtonDisabled={isButtonDisabled}
        errors={errors}
      />
    </section>
  );
}

export default LoginPage;
