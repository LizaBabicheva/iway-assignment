import "./Input.scss";

function Input({
  id,
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  errors,
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
        onChange={onChange}
      ></input>
      {errors?.length > 0 &&
        errors?.map((error, index) => (
          <span className="error" key={index}>
            {error}
          </span>
        ))}
    </label>
  );
}

export default Input;
