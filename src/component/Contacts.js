import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map((contact) => {
                //return (<Contact contact={contact} key={contact.id} />)
                return <Contact contact={contact} key={contact.id} />;
              })}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
