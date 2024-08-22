import "./RidesPage.scss";
import FilterForm from "../../components/FilterForm/FilterForm.jsx";
import RideInfoTable from "../../components/RideInfoTable/RideInfoTable.jsx";

function RidesPage() {
  return (
    <section className="rides-page">
      <FilterForm />
      <ul>
        <RideInfoTable />
      </ul>
    </section>
  );
}

export default RidesPage;
