import "./RideInfoTable.scss";
import { rideStatusArray } from "../../utils/constants/rideStatusArray.js";
import { useState } from "react";

function RideInfoTable({
  orderStatus,
  passengersNumber,
  passengersArr,
  price,
  carClass,
}) {
  const [isShowAdditionalInfo, setIsShowAdditionalInfo] = useState(false);

  const getOrderStatusByKey = (key) => {
    const statusObject = rideStatusArray.find((status) =>
      Object.prototype.hasOwnProperty.call(status, key)
    );
    return statusObject ? statusObject[key] : null;
  };

  const tableClickHandler = () => {
    setIsShowAdditionalInfo(!isShowAdditionalInfo);
  };

  return (
    <li className="ride-info-table">
      <div
        className="main-ride-info-wrap"
        role="presentation"
        onClick={tableClickHandler}
      >
        <div className="main-ride-info">
          <p className="ride-status">{getOrderStatusByKey(orderStatus)}</p>
          <ul className="passengers-name-list">
            {passengersArr.map((el, id) => (
              <li className="ride-info-list-item" key={id}>
                <p>{el.name}</p>
                <p>{`(${el.email})`}</p>
              </li>
            ))}
          </ul>
        </div>
        <button className="arrow-button">
          <svg
            className={`arrow-icon ${isShowAdditionalInfo ? "is-active" : ""}`}
            viewBox="0 0 13 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.6992 1.70019L6.69922 7.7002L0.699219 1.70019L2.09922 0.300195L6.69922 4.9002L11.2992 0.300195L12.6992 1.70019Z" />
          </svg>
        </button>
      </div>
      <div
        className={`additional-ride-info ${isShowAdditionalInfo ? "is-show-additional-info" : "is-hide-additional-info"}`}
      >
        <ul className="additional-ride-info-list">
          <li>Количество пассажиров: {passengersNumber}</li>
          <li>Класс: {carClass}</li>
          <li>Цена: {price}</li>
        </ul>
      </div>
    </li>
  );
}

export default RideInfoTable;
