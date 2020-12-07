import React, { useEffect, useState } from "react";
import "./Tracker.css";

function Tracker() {
  const [firstScan, setFirstScan] = useState({});
  const [lastScan, setLastScan] = useState({});
  const [shipmentListName, setShipmentListName] = useState("");
  const [goods, setGoods] = useState("");
  useEffect(() => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://portal.emea.hellmann.net/tracking-public/api/v3/shipments?limit=25&page=1&reference=67280254&transportmode=ROAD";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const { shipmentList } = data;
        const _firstScan = shipmentList[0].colliList[0].scans[0];
        const _nextScan = shipmentList[0].colliList[0].scans[1];
        setFirstScan(_firstScan);
        setLastScan(_nextScan);
        setShipmentListName(shipmentList[0].statusList[0].name);
        setGoods(shipmentList[0].itemList[0].descriptionOfGoods);
      });
  }, []);
  return (
    <div className="tracker">
      <div className="tracker__header">
        <h3>{shipmentListName}</h3>
        <h3>{goods}</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Milestone</th>
            <th>Scan Code Description</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{firstScan?.milestone}</td>
            <td>{firstScan?.scanCodeDescription}</td>
            <td>{firstScan?.timestamp}</td>
          </tr>
          <tr>
            <td>{lastScan?.milestone}</td>
            <td>{lastScan?.scanCodeDescription}</td>
            <td>{lastScan?.timestamp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tracker;
