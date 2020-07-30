import React from "react";

export default (props) => {
  console.log(props);

  return (
    <div>
      <h2 className="display-4">About Contact {props.match.params.id}</h2>
      <p className="lead">Simple app to manage contacts</p>
      <p className="text-secondary">version 1.0.0</p>
    </div>
  );
};
