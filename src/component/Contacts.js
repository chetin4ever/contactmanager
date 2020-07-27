import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Jhon Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555",
      },
      {
        id: 2,
        name: "Henry Jhonson",
        email: "henryj@gmail.com",
        phone: "555-555-5555",
      },
      {
        id: 3,
        name: "Karen Williams",
        email: "henryj@gmail.com",
        phone: "555-555-5555",
      },
    ],
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map((contact) => {
          //return (<Contact contact={contact} key={contact.id} />)
          return <Contact contact={contact} key={contact.id} />;
        })}
      </React.Fragment>
    );
  }
}
export default Contacts;
