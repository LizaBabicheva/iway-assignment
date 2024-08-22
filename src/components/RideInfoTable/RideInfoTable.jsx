import "./RideInfoTable.scss";

function RideInfoTable() {
  return (
    <li className="ride-info-table">
      <ul className="ride-info-list">
        <li className="ride-info-list-item">Фамилия Имя</li>
        <li className="ride-info-list-item">email</li>
        <li className="ride-info-list-item">статус</li>
      </ul>
      <ul className="ride-info-list">
        <li className="ride-info-list-item">маршрут</li>
        <li className="ride-info-list-item">данные</li>
        <li className="ride-info-list-item">количество пассажиров</li>
        <li className="ride-info-list-item">данные</li>
      </ul>
    </li>
  );
}

export default RideInfoTable;
