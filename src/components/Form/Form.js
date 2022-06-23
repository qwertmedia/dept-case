import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <div className="form-container">
      <div className="box">
        <div className="form-left">
          Question? <br /> We are Here <br /> To Help!
        </div>
        <div className="form-right">
          <div className="form-column-left">
            <label className="label" for="name">
              Name
            </label>
            <input
              id="first-name"
              className="form-field"
              type="text"
              name="firstName"
            />
            <label className="label" for="message">
              Message
            </label>

            <input
              id="message"
              className="form-field"
              type="text"
              name="message"
            />
          </div>
          <div className="form-column-right">
            <label className="label" for="email">
              Email
            </label>

            <input id="email" className="form-field" type="text" name="email" />
            <button className="form-button" type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
