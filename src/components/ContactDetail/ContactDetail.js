import React from "react";
import { Link } from "react-router-dom";

function ContactDetail(props) {
  //   console.log(props.location.state);
  const { name, email } = props.location.state.contact;
  return (
    <div>
      hi
      <h1>{name}</h1>
      <h1>{email}</h1>
      <Link to="/">go to contact list</Link>
    </div>
  );
}

export default ContactDetail;
