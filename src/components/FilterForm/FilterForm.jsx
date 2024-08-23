import "./FilterForm.scss";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import SelectField from "../SelectField/SelectField.jsx";
import { rideStatusArray } from "../../utils/constants/rideStatusArray.js";

function FilterForm() {
  return (
    <div className="filter-container">
      <form className="filter-form">
        <fieldset className="filter-input-container">
          <Input placeholder="Введите фамилию или email" />
          <Button className="main-button search-button">Найти</Button>
        </fieldset>
        <fieldset className="filter-status-selector">
          <SelectField array={rideStatusArray} name="ride-status" />
        </fieldset>
      </form>
    </div>
  );
}

export default FilterForm;
