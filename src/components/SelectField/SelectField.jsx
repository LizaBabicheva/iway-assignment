import "./SelectField.scss";

function SelectField({ array, name }) {
  return (
    <label className="selector-label">
      Статус:
      <select className="selector" name={name}>
        {array.map((el, index) => {
          const key = Object.keys(el)[0];
          const value = Object.values(el)[0];
          return (
            <option key={index} value={key}>
              {value}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export default SelectField;
