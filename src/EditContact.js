import React, { Component } from "react";
import TextInputGroup from "./TextInputGroup";
import axios from "axios";
import { Consumer } from "./context";
export default class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    id: "",
    name_error: "",
    email_error: "",
    phone_error: ""
  };
  inputListener = e => {
    e.preventDefault();
    switch (e.target.id) {
      case "name":
        this.setState({ name: e.target.value });
        break;
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "phone":
        this.setState({ phone: e.target.value });
        break;
      default:
        null;
    }
  };
  async componentWillMount() {
    const { params } = this.props.match;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    this.setState({
      name: res.data.name,
      email: res.data.email,
      phone: res.data.phone,
      id: params.id
    });
  }
  changeData = (editContact, e) => {
    editContact({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      id: this.state.id
    });
    this.props.history.push("/contacts");
    e.preventDefault();
  };
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card">
              <div className="card-header">EditContact</div>
              <form
                onSubmit={this.changeData.bind(this, value.editContact)}
                className="card-body"
              >
                <TextInputGroup
                  attributes={{
                    type: "text",
                    id: "name",
                    label: "Name",
                    onChange: this.inputListener,
                    error: this.state.error_name,
                    value: this.state.name
                  }}
                />
                <TextInputGroup
                  attributes={{
                    type: "email",
                    id: "email",
                    label: "Email",
                    onChange: this.inputListener,
                    error: this.state.error_email,
                    value: this.state.email
                  }}
                />
                <TextInputGroup
                  attributes={{
                    type: "text",
                    id: "phone",
                    label: "Number",
                    onChange: this.inputListener,
                    error: this.state.error_phone,
                    value: this.state.phone
                  }}
                />
                <button type="submit" className="btn btn-primary btn-lg">
                  Update Contact
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
