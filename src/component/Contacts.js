import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer}from '../context'

class Contacts extends Component {
  
    deleteContact = (id) => { 
        console.log(id);
        const { contacts } = this.state;
        const newContact = contacts.filter(contact => {
            return contact.id!==id
        })
        this.setState({
            contacts: newContact
        })
    }
  render() {
    
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
        {contacts.map((contact) => {
          //return (<Contact contact={contact} key={contact.id} />)
            return <Contact contact={contact} key={contact.id} deleteClickHandler={()=>this.deleteContact(contact.id)}/>;
        })}
      </React.Fragment>
          )
      }}
     </Consumer>
     
    );
  }
}
export default Contacts;
