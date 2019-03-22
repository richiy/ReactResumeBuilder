import React, { Component } from "react";
import "./App.css";

//import components
import ToolBar from "./components/ToolBar.js";
import EditableProfileInfo from "./components/EditableProfileInfo.js";
import EditableInfoCardList from "./components/EditableInfoCardList.js";
import EditableList from "./components/EditableList.js";
import EditableToggleCard from "./components/EditableToggleCard.js";
import EditableTextLinksList from "./components/EditableTextLinksList.js";
import ContactComponent from "./components/ContactComponent.js";
import "./mobile_media_query.css"; //order matters here
// TODO: seperate svg from js files --> import logo from './logo.svg';
// TODO: seperate .remove class from App.css
// TODO: fix react warnings in console
// TODO: test
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <ToolBar className="tool-bar remove" />

        <div className="document">
          <EditableProfileInfo className="header" />
          <EditableInfoCardList
            className="job-component"
            addCardText="Add Job"
            deleteCardText="Delete"
          />
          <div className="grid-area-right-column">
            <EditableList
              className="skills-component"
              inputPlaceholder="Enter Skills Here"
              buttonText="Add Skill"
            />
            <EditableToggleCard />
            <EditableTextLinksList className="text-links-component" />
            <ContactComponent className="contact-component" />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
