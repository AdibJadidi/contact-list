import axios from "axios";
import http from "./httpService";

export const addNewContact = (contact) => {
  return http.post("/contacts", contact);
};
