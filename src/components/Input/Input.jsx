import "./Input.scss";

function Input({
  id,
  name,
  label,
  type,
  placeholder,
  minLength,
  maxLength,
  error,
}) {
  return (
    <label className="label" htmlFor={id}>
      {label}
      <input
        className="input"
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        minLength={minLength}
        maxLength={maxLength}
      ></input>
      <span className="error">{error}</span>
    </label>
  );
}

export default Input;
