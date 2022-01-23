import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

function Contact({ contact, deleteHandler }) {
  const { name, email, id } = contact;
  const EditIcon = styled(MdOutlineEdit)`
    color: #7c3aed;
    transform: scale(1.5);
  `;
  const RemoveIcon = styled(RiDeleteBin6Line)`
    color: #e11d48;
    transform: scale(1.5);
    cursor: pointer;
  `;
  return (
    <div key={id} className="contact-container">
      <Link
        className="link-style"
        to={{ pathname: `user/${id}`, state: { contact } }}
      >
        <div className="contact-detail">
          <Stack direction="row">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Stack>
          {/* <span>{name.charAt(0).toUpperCase()}</span> */}
          <div className="contact-info">
            <h3>{name}</h3>
            <h4>{email}</h4>
          </div>
        </div>
      </Link>
      <div className="contact-button">
        <Link to={`/edit/${id}`}>
          <EditIcon />
        </Link>
        <RemoveIcon onClick={() => deleteHandler(id)} />
      </div>
    </div>
  );
}

export default Contact;
