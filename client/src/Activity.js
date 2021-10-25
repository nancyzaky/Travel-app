import React, { useState } from "react";
import { MdNotificationAdd, MdDelete, MdEditCalendar } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Activity = ({ attr, handleDelete }) => {
  console.log(attr);
  const [editCalendar, setEditCalendar] = useState(false);
  const [start, setStart] = useState(new Date(attr.date));

  const handleDeleteItem = () => {
    fetch(`/activities/${attr.id}`, {
      method: "DELETE",
    });
    handleDelete(attr.id);
  };
  const handleEdit = () => {
    setEditCalendar(true);
  };
  const handleChangeDate = () => {
    fetch(`/activities/${attr.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: start }),
    })
      .then((resp) => resp.json())
      .then((d) => setStart(new Date(d.date)));
    setEditCalendar(false);
  };
  return (
    <>
      {editCalendar && (
        <>
          <DatePicker
            startDate={start}
            selected={start}
            onChange={(update) => {
              setStart(update);
            }}
            withPortal
            placeholderText="click to select planned date"
          />
          <button className="btn" onClick={handleChangeDate}>
            Change Date
          </button>
        </>
      )}
      <li key={attr.id} className="activity">
        <img src={attr.attraction.photo} alt="pic" className="hotel-pic" />
        <h4>
          You Planned to Visit{attr.attraction.name} on{" "}
          <em style={{ color: "red", fontWeight: "bold" }}>
            {start.toString().slice(0, 10)}
          </em>
        </h4>
        <ul
          style={{
            display: "flex",
            width: "16rem",
            justifyContent: "center",
            paddingTop: "1rem",
          }}
        >
          <li className="activity-icons">
            <span>
              <MdNotificationAdd />
            </span>
          </li>
          <li className="activity-icons" onClick={handleEdit}>
            <span>
              <MdEditCalendar />
            </span>
          </li>

          <li className="activity-icons" onClick={handleDeleteItem}>
            <span>
              <MdDelete />
            </span>
          </li>
        </ul>
      </li>
      <hr className="big-line"></hr>
    </>
  );
};

export default Activity;
