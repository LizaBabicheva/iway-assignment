import "./RidesPage.scss";
import FilterForm from "../../components/FilterForm/FilterForm.jsx";
import RideInfoTable from "../../components/RideInfoTable/RideInfoTable.jsx";
import { useState } from "react";
import { useListRidesQuery } from "../../redux/api/ridesApi.js";
import Button from "../../components/Button/Button.jsx";
import { logoutUser } from "../../redux/slices/authSlice.js";
import { useDispatch } from "react-redux";
import { clearAuthCookie } from "../../utils/browserUtils.js";
import { Pagination } from "antd";
import { DEFAULT_PAGE_SIZE } from "../../utils/constants/constants.js";

function RidesPage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const {
    data: ridesInfo,
    isLoading,
    isFetching,
  } = useListRidesQuery({ page, DEFAULT_PAGE_SIZE });

  const onLogoutClick = (e) => {
    e.preventDefault();
    clearAuthCookie();
    dispatch(logoutUser());
  };

  if (!ridesInfo) {
    return <div>No rides :(</div>;
  }

  const onPaginatorChange = (page) => {
    setPage(page);
  };

  return (
    <section className="rides-page">
      <Button className="text-btn" onClick={onLogoutClick}>
        Выйти
      </Button>
      <FilterForm />
      <ul className="rides-list">
        {ridesInfo.result.orders.map((el, id) => (
          <RideInfoTable
            key={id}
            passengersArr={el.passengers}
            carClass={el.car_data.car_class}
            passengersNumber={el.passengers_number}
            price={`${el.price.price} ${el.currency}`}
          />
        ))}
      </ul>
      <Pagination
        onChange={onPaginatorChange}
        defaultCurrent={page}
        defaultPageSize={DEFAULT_PAGE_SIZE}
        total={ridesInfo.result.page_data.total_items}
        showSizeChanger={false}
        align="center"
      />
    </section>
  );
}

export default RidesPage;
