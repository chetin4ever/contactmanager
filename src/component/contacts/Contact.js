import React, { Component } from "react";
import PropTypes from "prop-types"; //impt
import { Consumer } from "../../context";
// import './contact.css';
import axios from "axios";
import { Link } from "react-router-dom";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  onShowClick = (e) => {
    console.log(e.target);
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };
  onDeleteClick = async (id, dispatch) => {
    //console.log("click on delete button");
    //delete using json palce holder
    //uncomment if use do not use async
    // axios
    //   .delete(`http://jsonplaceholder.typicode.com/users/${id}`)
    //   .then((res) => dispatch({ type: "DELETE_CONTACT", payload: id }));
    // dispatch({ type: "DELETE_CONTACT", payload: id }));
    try {
      await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    //console.log(showContactInfo);
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                  onClick={this.onShowClick}
                ></i>
                <i
                  className="fa fa-times"
                  style={{ cusrsor: "pointer", color: "red", float: "right" }}
                  onClick={() => this.onDeleteClick(id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem",
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    <span className="text-danger">Email : </span>
                    {email}
                  </li>
                  <li className="list-group-item">
                    {" "}
                    <span className="text-danger">Phone : </span>
                    {phone}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  // deleteClickHandler:PropTypes.func.isRequired,
  //phone: PropTypes.bool.isRequired,
};
export default Contact;
