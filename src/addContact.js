import React, { Component } from "react";
import { Consumer } from "./context";
import TextInputGroup from "./TextInputGroup";
import axios from "axios";
class Addcontact extends Component {
  state = {
    showContents: false,
    name: "",
    email: "",
    phone: "",
    name_error: false,
    email_error: false,
    phone_error: false
  };
  changeState = () => {
    this.setState({ showContents: !this.state.showContents });

    this.setState({
      name: "",
      email: "",
      phone: "",
      name_error: false,
      email_error: false,
      phone_error: false
    });
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
        return;
    }
  };
  submit = (addContact, e) => {
    e.preventDefault();
    let flag = false;
    if (this.state.name === "") {
      this.setState({ error_name: !this.state.error_name });
      flag = true;
    }
    if (this.state.email === "") {
      flag = true;
      this.setState({ error_email: !this.state.error_email });
    }
    if (this.state.phone === "") {
      flag = true;
      this.setState({ error_phone: !this.state.error_email });
    }
    const contacts = {
      id: null,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };

    //console.log(this.state.name_error, this.state.email_error);
    if (flag === true) return;
    axios
      .post("https://jsonplaceholder.typicode.com/users", contacts)
      .then(res => console.log(res));
    addContact(contacts);
    this.changeState();
    this.props.history.push("/Contacts");
  };
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card">
              <div className="card-header">
                AddContact{" "}
                <i
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                  onClick={this.changeState}
                ></i>
              </div>
              {this.state.showContents ? (
                <form
                  onSubmit={this.submit.bind(this, value.addContact)}
                  className="card-body"
                >
                  {/* {console.log(this.state.name_error, "chanducdsaf")} */}
                  <TextInputGroup
                    attributes={{
                      type: "text",
                      id: "name",
                      label: "Name",
                      onChange: this.inputListener,
                      error: this.state.error_name
                    }}
                  />
                  <TextInputGroup
                    attributes={{
                      type: "email",
                      id: "email",
                      label: "Email",
                      onChange: this.inputListener,
                      error: this.state.error_email
                    }}
                  />
                  <TextInputGroup
                    attributes={{
                      type: "number",
                      id: "phone",
                      label: "Number",
                      onChange: this.inputListener,
                      error: this.state.error_phone
                    }}
                  />
                  <button type="submit" className="btn btn-primary btn-lg">
                    Add Contact
                  </button>
                </form>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Addcontact;
