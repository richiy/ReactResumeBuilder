import React, { component } from "react";
import "./EditableToggleCard.css";
//import FluidTextarea from "./FluidTextarea.js";

class EditableToggleCard extends React.Component {
  constructor(props) {
    super(props);

    let persistState = localStorage.getItem("EditableToggleCardState");
    if (persistState) {
      let storage = JSON.parse(persistState);
      this.state = {
        hasCard: storage.hasCard
      };
    } else {
      this.state = {
        hasCard: true
      };
    }

    this.deleteCard = this.deleteCard.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  deleteCard() {
    this.setState({
      hasCard: false
    });
  }

  addCard() {
    this.setState({
      hasCard: true
    });
  }

  componentDidUpdate() {
    localStorage.setItem("EditableToggleCardState", JSON.stringify(this.state));
  }

  render() {
    let content;
    if (this.state.hasCard) {
      content = (
        <ToggleCard
          titlePlaceholder={this.props.titlePlaceholder}
          dateRangePlaceholder={this.props.dateRangePlaceholder}
          bodyCopyPlaceholder={this.props.bodyCopyPlaceholder}
          removeCard={this.deleteCard}
        />
      );
    } else {
      content = (
        <div className="remove">
          <button onClick={this.addCard}>Add Back Education</button>
        </div>
      );
    }

    return content;
  }
}

class ToggleCard extends React.Component {
  constructor(props) {
    super(props);

    // this.handleTextareaInput = this.handleTextareaInput.bind(this);
    this.handleInput = this.handleInput.bind(this);

    let persistState = localStorage.getItem("ToggleCardState");

    if (persistState) {
      let storage = JSON.parse(persistState);

      this.state = {
        headerTitle: storage.headerTitle,
        subTitle: storage.subTitle,
        descriptionTitle: storage.descriptionTitle,
        description: storage.description
      };
    } else {
      this.state = {
        headerTitle: "Education",
        subTitle: "",
        descriptionTitle: "",
        description: ""
      };
    }
  }

  handleInput(event) {
    if (event.target.name == "header-title") {
      this.setState({
        headerTitle: event.target.value
      });
    }
    if (event.target.name == "sub-title") {
      //update textarea height
      //event.target.style.height = "auto";
      //event.target.style.height = event.target.scrollHeight + "px";
      //update state
      this.setState({
        subTitle: event.target.value
        // subTitleHeight: event.target.scrollHeight
      });
    }
    if (event.target.name == "date") {
      this.setState({
        descriptionTitle: event.target.value
      });
    }
    if (event.target.name == "description") {
      //update textarea height
      //event.target.style.height = "auto";
      //event.target.style.height = event.target.scrollHeight + "px";
      //update state
      this.setState({
        description: event.target.value
        // descriptionHeight: event.target.scrollHeight
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("ToggleCardState", JSON.stringify(this.state));
  }

  // handleTextareaInput(event) {
  //   //event.target.style.height = "auto";
  //   //event.target.style.height = event.target.scrollHeight + "px";
  //   console.log(event.target.value.split("/\r*\n/").length);
  //   console.log(event.target.value);
  // }

  render() {
    return (
      <div className="education-component">
        <input
          type="text"
          name="header-title"
          value={this.state.headerTitle}
          onChange={this.handleInput}
          placeholder="Header"
        />
        <textarea
          onInput={this.handleTextareaInput}
          onBlur={this.handleInput}
          name="sub-title"
          placeholder="School Name"
          id="sub-title-textarea"
          rows={2}
        >
          {this.state.subTitle}
        </textarea>
        <input
          type="text"
          onChange={this.handleInput}
          name="date"
          placeholder="Date Range"
          value={this.state.descriptionTitle}
        />
        <textarea
          onInput={this.handleTextareaInput}
          onBlur={this.handleInput}
          name="description"
          placeholder="Describe events here"
          id="description-textarea"
          rows={3}
        >
          {this.state.description}
        </textarea>

        <button onClick={this.props.removeCard}>Delete Education</button>
      </div>
    );
  }
}

export default EditableToggleCard;
