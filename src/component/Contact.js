import React, { Component } from 'react';
import PropTypes from 'prop-types';//impt
// import './contact.css';

class Contact extends Component {
    state = {
        showContactInfo:false
    }
    onShowClick = (e) => {
        console.log(e.target);
        this.setState({
            showContactInfo: !this.state.showContactInfo
        })
    }
    onDeleteClick = (e) => {
        //console.log("click on delete button");
        this.props.deleteClickHandler();
    }
    render() {
        const { name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        console.log(showContactInfo);
        return (
            <div className="card card-body mb-3">
                <h4>{name}
                    <i className="fas fa-sort-down" style={{ cursor: 'pointer' }} onClick={this.onShowClick}> </i>
                    <i className="fa fa-times" style={{ cusrsor: 'pointer', color: 'red', float: 'right' }} onClick={this.onDeleteClick}></i>
                </h4>
                {showContactInfo ? (
                    <ul className="list-group">
                    <li className="list-group-item">Email:{email}</li>
                    <li className="list-group-item">Phone:{phone}</li>deleteHandler
                </ul>
                ):null}
            </div>
        )
    }
}
Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler:PropTypes.func.isRequired,
    //phone: PropTypes.bool.isRequired,
    
}
export default Contact;
