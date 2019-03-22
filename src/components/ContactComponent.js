import React, { Component } from "react";
import "./ContactComponent.css";

class ContactComponent extends React.Component {
  constructor(props) {
    super(props);

    let persistState = localStorage.getItem("ContactComponentState");
    //console.log(persistState);
    if (persistState) {
      console.log("here");
      let storage = JSON.parse(persistState);
      this.state = {
        phoneNumber: storage.phoneNumber,
        email: storage.email,
        emailValid: storage.emailValid,
        headerTitle: storage.headerTitle
      };
    } else {
      this.state = {
        phoneNumber: "2242011940",
        email: "richieagama@gmail.com",
        emailValid: true,
        headerTitle: "Contact"
      };
    }
    this.handlePhoneNumberInput = this.handlePhoneNumberInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handlePhoneNumberInput(event) {
    let inputLength = event.target.value.length - 1;
    let inputCharCode = event.target.value.charCodeAt(inputLength);

    if (inputCharCode >= 48 && inputCharCode <= 57) {
    } else {
      event.target.value = event.target.value.slice(0, -1);
      console.log(event.target.value);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let email = event.target.email.value;
    let phoneNumber = event.target.phoneNumber.value;
    let emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

    if (emailValid) {
      this.setState({
        phoneNumber: phoneNumber,
        email: email,
        emailValid: true
      });
    } else {
      this.setState({
        emailValid: false
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("ContactComponentState", JSON.stringify(this.state));
  }

  handleInput(event) {
    this.setState({
      headerTitle: event.target.value
    });
  }

  render() {
    let errorMessage;
    if (!this.state.emailValid) {
      errorMessage = <p className="error-message">Email not valid</p>;
    } else {
      errorMessage = "";
    }
    return (
      <div className={this.props.className}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            onInput={this.handlePhoneNumberInput}
            title="You can only enter numbers"
            required
          />
          <input type="text" name="email" placeholder="Email" required />
          {errorMessage}
          <button>Change Contact Info</button>
        </form>
        <textarea onBlur={this.handleInput}>{this.state.headerTitle}</textarea>
        <a className="contact-anchor" href={"tel:" + this.state.phoneNumber}>
          {this.state.phoneNumber}
        </a>
        <br />
        <a className="contact-anchor" href={"mailto:" + this.state.email}>
          {this.state.email}
        </a>
      </div>
    );
  }
}

export default ContactComponent;
