import React, { Component } from "react";
const Context = React.createContext();
import axios from "axios";
//import uuid from "uuid";
export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: id => {
      const { contacts } = this.state;
      const newContacts = contacts.filter(contact => {
        return contact.id !== id;
      });
      this.setState({ contacts: newContacts });
    },
    addContact: newContact => {
      const { contacts } = this.state;
      // newContact.id = uuid();
      contacts.push(newContact);
      this.setState({ contacts: contacts });
    },
    editContact: Up_contact => {
      axios.put(
        `https://jsonplaceholder.typicode.com/users/${Up_contact.id}`,
        Up_contact
      );
      console.log(Up_contact);
      const { contacts } = this.state;
      const UpdatedContacts = contacts.map(contact => {
        if (contact.id === parseInt(Up_contact.id)) {
          console.log("chandu");
          return Up_contact;
        } else return contact;
      });
      this.setState({ contacts: UpdatedContacts });
      console.log(contacts);
    }
  };
  UNSAFE_componentWillMount() {
    /*fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ contacts: data }));*/
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ contacts: res.data }));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
