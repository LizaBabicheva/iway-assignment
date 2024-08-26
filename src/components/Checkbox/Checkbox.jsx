import "./Checkbox.scss";

function Checkbox({ name, checkboxValue, onCheckboxChange }) {
  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        value={checkboxValue}
        onChange={onCheckboxChange}
      />
      {name}
    </label>
  );
}

export default Checkbox;
