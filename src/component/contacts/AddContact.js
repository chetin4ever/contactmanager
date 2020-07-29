import React, { Component } from "react";
import { Consumer } from "../../context";
import { v1 as uuid } from "uuid";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    console.log(this.state);
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    //clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
    });
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      className="form-control form-control-lg"
                      placeholder="Enter name..."
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      className="form-control form-control-lg"
                      placeholder="Enter email..."
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={phone}
                      className="form-control form-control-lg"
                      placeholder="Enter phone..."
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn  btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
