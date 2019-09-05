import React, { Component } from "react";
import classnames from "classnames";
class TextInputGroup extends Component {
  render() {
    const { type, id, label, onChange, error, value } = this.props.attributes;

    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          className={classnames("form-control" /*{ "is-invalid": error }*/)}
          onChange={onChange}
          defaultValue={value}
          style={{ cursor: "text" }}
        ></input>
        {/* {error ? (
          <div className="invalid-feedback">enter valid {type}</div>
        ) : null} */}
      </div>
    );
  }
}
export default TextInputGroup;
