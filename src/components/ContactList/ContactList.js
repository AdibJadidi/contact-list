import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteContact } from "../../services/deleteContact";
import { getAllContact } from "../../services/getAllContacts";
import Contact from "./Contact/Contact";
import { MdPersonAddAlt } from "react-icons/md";
import styled from "styled-components";
import "./contactList.css";
function ContactList(props) {
  const [contacts, setContacts] = useState(null);
  const [allContacts, setAllContacts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const AddIcon = styled(MdPersonAddAlt)`
    color: #7c3aed;
    border: 2px solid #7c3aed;
    border-radius: 50%;
    padding: 5px;
  `;
  useEffect(() => {
    const getContacts = async () => {
      const { data } = await getAllContact("http://localhost:3001/contacts");
      setContacts(data);
      setAllContacts(data);
    };

    getContacts();
  }, []);

  const deleteHandler = async (id) => {
    try {
      await deleteContact(id);
      const filterdData = contacts.filter((c) => c.id !== id);
      setContacts(filterdData);
    } catch (error) {}
  };

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
    console.log("here");
    const filteredContacts = allContacts.filter((c) => {
      return Object.values(c)
        .join(" ")
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    console.log(filteredContacts);
    setContacts(filteredContacts);
  };

  return (
    <div className="contact">
      <div className="contact__actions">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/add">
            <span>
              <AddIcon size={50} />
            </span>
          </Link>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => changeHandler(e)}
          placeholder="Search..."
        />
      </div>
      {contacts ? (
        contacts.map((contact) => {
          return <Contact contact={contact} deleteHandler={deleteHandler} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ContactList;
