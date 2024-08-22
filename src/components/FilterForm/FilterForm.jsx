import "./FilterForm.scss";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

function FilterForm() {
  return (
    <div className="filter-form">
      <form className="filter-input-container">
        <Input placeholder="Введите фамилию или email" />
        <Button className="main-button search-button">Найти</Button>
      </form>
    </div>
  );
}

export default FilterForm;
