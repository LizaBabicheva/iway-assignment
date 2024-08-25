import "./Checkbox.scss";

function Checkbox({ name, checkboxValue, onCheckboxChange }) {
  return (
    <label className="checkbox-label">
      {name}
      <input
        type="checkbox"
        value={checkboxValue}
        onChange={onCheckboxChange}
      />
    </label>
  );
}

export default Checkbox;
