import "./Button.scss";

function Button({ className, disabled, ...attrs }) {
  return <button {...attrs} className={`${className}`} disabled={disabled} />;
}

export default Button;
