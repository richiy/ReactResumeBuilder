import React, { Component } from "react";
import "./EditableProfileInfo.css";

class EditableProfileInfo extends React.Component {
  constructor(props) {
    super(props);

    let persistState = localStorage.getItem("EditableProfileInfoState");
    let storage = JSON.parse(persistState);
    if (persistState) {
      this.state = {
        title: storage.title,
        subTitle: storage.subTitle,
        description: storage.description,
        profilePicture: storage.profilePicture
      };
    } else {
      this.state = {
        title: "Name",
        subTitle: "",
        description: "",
        profilePicture:
          "http://www.squareglide.com/assets/images/model-profile.png"
      };
    }

    this.handleFileSubmission = this.handleFileSubmission.bind(this);
    this.updateContent = this.updateContent.bind(this);
  }

  handleFileSubmission(event) {
    let userFileList = event.target.files;
    let userFile = userFileList[0];

    if (userFileList && userFile) {
      let reader = new FileReader();

      reader.onload = function(event) {
        //console.log(event.target.result);
        this.setState({
          profilePicture: event.target.result
        });
      }.bind(this);

      reader.readAsDataURL(userFile);
    }
  }

  updateContent(event) {
    if (event.target.name == "sub-title") {
      this.setState({
        subTitle: event.target.value
      });
    }

    if (event.target.name == "description") {
      this.setState({
        description: event.target.value
      });
    }

    if (event.target.tagName == "TEXTAREA") {
      this.setState({
        title: event.target.value
      });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      "EditableProfileInfoState",
      JSON.stringify(this.state)
    );
  }

  render() {
    return (
      <div className={this.props.className}>
        <div>
          <input type="file" onChange={this.handleFileSubmission} />
          <svg viewBox="0 0 121.18 114.29">
            <ellipse
              class="cls-1"
              cx="60.59"
              cy="57.15"
              rx="58.09"
              ry="54.65"
              transform="translate(-0.17 0.18) rotate(-0.17)"
            />
            <path
              class="cls-2"
              d="M86.09,53.07l-21.26.06-.06-20a4.26,4.26,0,0,0-8.5,0l.06,20-21.26.06a4,4,0,1,0,0,8l21.26-.06.06,20a4.26,4.26,0,0,0,8.51,0l-.06-20,21.25-.06a4,4,0,1,0,0-8Z"
            />
          </svg>

          <img src={this.state.profilePicture} alt="resume profile picture" />
        </div>

        <header>
          <textarea onBlur={this.updateContent}>{this.state.title}</textarea>
          <input
            value={this.state.subTitle}
            onChange={this.updateContent}
            type="text"
            name="sub-title"
            placeholder="City, State"
          />
          <input
            value={this.state.description}
            onChange={this.updateContent}
            type="text"
            name="description"
            placeholder="About you"
          />
        </header>
      </div>
    );
  }
}

export default EditableProfileInfo;
