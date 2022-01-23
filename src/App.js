import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import ContactList from "./components/ContactList/ContactList";
import EditContact from "./components/EditContact/EditContact";
import { addNewContact } from "./services/addNewContact";
import { deleteContact } from "./services/deleteContact";
import { updateContact } from "./services/updateContact";
import { getAllContact } from "./services/getAllContacts";

function App() {
  return (
    <main className="App">
      <h1 className="header-title">Contact App</h1>
      <Switch>
        <Route path="/edit/:id" component={EditContact} />
        <Route path="/user/:id" component={ContactDetail} />
        <Route path="/add" component={AddContact} />
        <Route path="/" exact component={ContactList} />
      </Switch>
    </main>
  );
}

export default App;
