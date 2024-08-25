import "./RideInfoTable.scss";
import { rideStatusArray } from "../../utils/constants/rideStatusArray.js";

function RideInfoTable({
  orderStatus,
  passengersNumber,
  passengersArr,
  price,
  carClass,
}) {
  const getOrderStatusByKey = (key) => {
    const statusObject = rideStatusArray.find((status) =>
      Object.prototype.hasOwnProperty.call(status, key)
    );
    return statusObject ? statusObject[key] : null;
  };

  return (
    <li className="ride-info-table">
      <div className="main-ride-info">
        <p>Статус: {getOrderStatusByKey(orderStatus)}</p>
        <ul className="main-ride-info-list">
          {passengersArr.map((el, id) => (
            <li className="ride-info-list-item" key={id}>
              <p>
                {el.name}, {el.email}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <ul className="ride-info-list">
        <li className="ride-info-list-item">
          Количество пассажиров: {passengersNumber}
        </li>
        <li>Тип машины: {carClass}</li>
        <li className="ride-info-list-item">Цена: {price}</li>
      </ul>
    </li>
  );
}

export default RideInfoTable;
