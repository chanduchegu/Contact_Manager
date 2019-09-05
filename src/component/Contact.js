import React, { Component } from "react";
import { Consumer } from "../context";
//import ReactDom from "react-dom";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";
//import route from "react-dom";
//import Addcontact from "../addContact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
export class Contact extends Component {
  state = {
    showStateInfo: false
  };
  onShowClick = e => {
    this.setState({ showStateInfo: !this.state.showStateInfo });
  };
  deleteContact = (dispatch, id) => {
    dispatch(id);
    // axios
    //   .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    //   .then(res =>);
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    return (
      <Consumer>
        {value => {
          console.log(value);
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  className="fas fa-sort-down"
                  onClick={this.onShowClick}
                  style={{ cursor: "pointer" }}
                ></i>
                <Link to={`/EditContact/${id}`}>
                  <i
                    className="fas fa-edit"
                    style={{
                      float: "right",
                      cursor: "pointer",
                      display: "inline"
                    }}
                  ></i>
                </Link>
                <i
                  className="fas fa-times"
                  style={{
                    float: "right",
                    cursor: "pointer",
                    color: "red",
                    display: "inline",
                    paddingRight: "1rem"
                  }}
                  onClick={this.deleteContact.bind(this, value.dispatch, id)}
                ></i>
              </h4>
              {this.state.showStateInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
// Contact.propTypes = {
//   name: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired
// };
export default Contact;
