import "./FilterForm.scss";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";
import Checkbox from "../Checkbox/Checkbox.jsx";
import { rideStatusArray } from "../../utils/constants/rideStatusArray.js";

function FilterForm({
  handleFilterInputChange,
  filterInputSubmit,
  filterInputValue,
  setOrderStatus,
}) {
  const handleCheckboxChange = (checkboxValue) => {
    setOrderStatus((prevOrderStatuses) => {
      if (prevOrderStatuses.includes(checkboxValue)) {
        return prevOrderStatuses.filter((value) => value !== checkboxValue);
      } else {
        return [...prevOrderStatuses, checkboxValue];
      }
    });
  };

  return (
    <div className="filter-container">
      <form className="filter-form" onSubmit={filterInputSubmit}>
        <fieldset className="filter-input-container">
          <Input
            placeholder="Введите фамилию или email"
            type="text"
            onChange={handleFilterInputChange}
            value={filterInputValue}
          />
          <Button className="main-button search-button" type="submit">
            Найти
          </Button>
        </fieldset>
        <fieldset className="filter-status-selector">
          {rideStatusArray.map((el, i) => (
            <Checkbox
              key={i}
              name={Object.values(el)[0]}
              checkboxValue={Object.keys(el)[0]}
              onCheckboxChange={() => handleCheckboxChange(Object.keys(el)[0])}
            />
          ))}
        </fieldset>
      </form>
    </div>
  );
}

export default FilterForm;
