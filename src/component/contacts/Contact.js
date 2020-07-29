import React, { Component } from 'react';
import PropTypes from 'prop-types';//impt
import { Consumer } from '../../context';
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
    onDeleteClick = (id,dispatch) => {
        //console.log("click on delete button");
        dispatch({type:'DELETE_CONTACT',payload:id})
        
    }
    render() {
        const { id,name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
        //console.log(showContactInfo);
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        
            <div className="card card-body mb-3">
                <h4>{name}
                    <i className="fas fa-sort-down" style={{ cursor: 'pointer' }} onClick={this.onShowClick}> </i>
                                <i className="fa fa-times" style={{ cusrsor: 'pointer', color: 'red', float: 'right' }} onClick={()=>this.onDeleteClick(id,dispatch)}></i>
                </h4>
                {showContactInfo ? (
                    <ul className="list-group">
                    <li className="list-group-item">Email:{email}</li>
                    <li className="list-group-item">Phone:{phone}</li>
                </ul>
                ):null}
            </div>
                    )
                }}
            </Consumer>
        )
    }
}
Contact.propTypes = {
    contact: PropTypes.object.isRequired,
   // deleteClickHandler:PropTypes.func.isRequired,
    //phone: PropTypes.bool.isRequired,
    
}
export default Contact;
