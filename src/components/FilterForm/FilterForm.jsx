import "./FilterForm.scss";
import { Input, Button, Checkbox } from "../componentsImport.js";
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
    <form className="filter-form" onSubmit={filterInputSubmit}>
      <fieldset className="filter-input-fieldset">
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
      <fieldset className="filter-status-fieldset">
        <legend className="filter-status-legend">Статус заказа:</legend>
        <div className="filter-checkbox-wrap">
          {rideStatusArray.map((el, i) => (
            <Checkbox
              key={i}
              name={Object.values(el)[0]}
              checkboxValue={Object.keys(el)[0]}
              onCheckboxChange={() => handleCheckboxChange(Object.keys(el)[0])}
            />
          ))}
        </div>
      </fieldset>
    </form>
  );
}

export default FilterForm;
