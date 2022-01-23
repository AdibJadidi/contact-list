import React, { useState } from "react";
import "./addContact.css";
import { addNewContact } from "./../../services/addNewContact";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function AddContact({ addContactHandler, history }) {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await addNewContact({ id: Math.ceil(Math.random() * 100), ...contact });
    setContact({ name: "", email: "" });
    history.push("/");
  };
  return (
    <form onSubmit={submitForm}>
      <div className="name-box">
        <label>name:</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className="email-box">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Add</button>
      <Link to="/">back to Home</Link>
    </form>
  );
}

export default AddContact;
