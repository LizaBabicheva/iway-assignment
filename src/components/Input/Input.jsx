import "./Input.scss";

function Input({
  id,
  name,
  label,
  type,
  placeholder,
  value,
  minLength,
  maxLength,
  onChange,
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
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        onChange={onChange}
      ></input>
      <span className="error">{error}</span>
    </label>
  );
}

export default Input;
