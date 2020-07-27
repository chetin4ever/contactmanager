import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contacts from "./component/Contacts";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header branding="Conatct Manager" />
      <div className="container">
       <Contacts/>
      </div>
    </div>
  );
}

export default App;
