import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contacts from "./component/contacts/Contacts";
import Header from "./component/layout/Header";
import AddContact from "./component/contacts/AddContact";
import { Provider } from "./context";


class App extends Component{
  render() {
    
    return (
      <Provider>
        <div className="App">
          <Header branding="Conatct Manager" />
          <div className="container">
            <AddContact/>
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
