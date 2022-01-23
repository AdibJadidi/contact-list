import React, { useEffect, useState } from "react";
import "./editContact.css";
import { getOneContact } from "../../services/getOneContact";
import { addNewContact } from "../../services/addNewContact";
import { updateContact } from "../../services/updateContact";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function EditContact({ history, match }) {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await updateContact(match.params.id, contact);
    history.push("/");
  };

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(match.params.id);
        setContact({ name: data.name, email: data.email });
      } catch (error) {}
    };
    localFetch();
  }, []);
  return (
    <form onSubmit={submitForm}>
      <div className="name-box">
        <label>Name:</label>
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
      <button type="submit">Edit</button>
      <Link to="/">back to Home</Link>
    </form>
  );
}

export default EditContact;
