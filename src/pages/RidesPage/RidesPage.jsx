import "./RidesPage.scss";
import FilterForm from "../../components/FilterForm/FilterForm.jsx";
import RideInfoTable from "../../components/RideInfoTable/RideInfoTable.jsx";
import { useEffect, useState } from "react";
import { useListRidesQuery } from "../../redux/api/ridesApi.js";
import Button from "../../components/Button/Button.jsx";
import { logoutUser } from "../../redux/slices/authSlice.js";
import { useDispatch } from "react-redux";
import { clearAuthCookie } from "../../utils/browserUtils.js";
import { Pagination } from "antd";
import {
  DEFAULT_PAGE_SIZE,
  EMAIL_REGEX,
} from "../../utils/constants/constants.js";
import Preloader from "../../components/Preloader/Preloader.jsx";

function RidesPage() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [orderStatus, setOrderStatus] = useState([]);
  const [filterInputValue, setFilterInputValue] = useState("");

  const {
    data: ridesInfo,
    isLoading,
    isFetching,
  } = useListRidesQuery({
    page,
    pageSize: DEFAULT_PAGE_SIZE,
    names,
    email,
    orderStatus,
  });

  useEffect(() => {
    if (ridesInfo) {
      setFilterInputValue("");
    }
  }, [ridesInfo]);

  const onPaginatorChange = (newPage) => {
    setPage(newPage);
  };

  const handleFilterInputSubmit = (e) => {
    e.preventDefault();
    if (EMAIL_REGEX.test(filterInputValue)) {
      setEmail(filterInputValue);
      setNames("");
    } else {
      setNames(filterInputValue);
      setEmail("");
    }
  };

  const onLogoutClick = (e) => {
    e.preventDefault();
    clearAuthCookie();
    dispatch(logoutUser());
  };

  return (
    <section className="rides-page">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Button className="text-btn" onClick={onLogoutClick}>
            Выйти
          </Button>
          <FilterForm
            filterInputValue={filterInputValue}
            handleFilterInputChange={(e) => {
              setFilterInputValue(e.target.value);
            }}
            filterInputSubmit={handleFilterInputSubmit}
            orderStatus={orderStatus}
            setOrderStatus={setOrderStatus}
          />
          <ul className="rides-list">
            {!isLoading && isFetching ? (
              <Preloader />
            ) : ridesInfo?.result?.orders?.length === 0 ? (
              <p>Ничего не найдено</p>
            ) : (
              ridesInfo?.result?.orders?.map((el, id) => (
                <RideInfoTable
                  key={id}
                  passengersArr={el.passengers}
                  carClass={el.car_data.car_class}
                  passengersNumber={el.passengers_number}
                  price={`${el.price.price} ${el.currency}`}
                  orderStatus={el.status}
                />
              ))
            )}
          </ul>
          {!isLoading &&
            !isFetching &&
            ridesInfo.result.page_data.total_items > 0 && (
              <Pagination
                onChange={onPaginatorChange}
                defaultCurrent={page}
                defaultPageSize={DEFAULT_PAGE_SIZE}
                total={ridesInfo.result.page_data.total_items}
                showSizeChanger={false}
                align="center"
              />
            )}
        </>
      )}
    </section>
  );
}

export default RidesPage;
