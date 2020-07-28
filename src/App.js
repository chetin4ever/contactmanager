import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contacts from "./component/Contacts";
import Header from "./component/Header";
import { Provider }  from "./context";

class App extends Component{
  render() {
    
    return (
      <Provider>
        <div className="App">
          <Header branding="Conatct Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
