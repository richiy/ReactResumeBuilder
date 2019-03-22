import React, { Component } from "react";
import "./EditableTextLinksList.css";

class EditableTextLinksList extends React.Component {
  constructor(props) {
    super(props);

    let persistState = localStorage.getItem("EditableTextLinksListState");

    if (persistState) {
      let storage = JSON.parse(persistState);
      this.state = {
        items: storage.items,
        headerTitle: storage.headerTitle
      };
    } else {
      this.state = {
        items: [
          {
            id: Date.now(),
            value: "LinkedIn-example",
            url: "https://www.linkedin.com/"
          }
        ],
        headerTitle: "Text Links"
      };
    }

    this.addTextLink = this.addTextLink.bind(this);
    this.deleteTextLink = this.deleteTextLink.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  addTextLink(event) {
    event.preventDefault();

    if (
      event.target.childNodes[0].value == "" ||
      event.target.childNodes[1].value == ""
    ) {
      return "input is empty";
    } else {
      let newItem = {
        id: Date.now(),
        value: event.target.childNodes[0].value,
        url: event.target.childNodes[1].value
      };
      event.target.childNodes[0].value = "";
      event.target.childNodes[1].value = "";
      this.setState(state => ({
        items: state.items.concat(newItem)
      }));
    }
  }

  deleteTextLink(textLinkItem) {
    this.setState({
      items: this.state.items.filter(item => item.id !== textLinkItem.id)
    });
  }

  handleInput(event) {
    console.log(event.target.value);
    this.setState({
      headerTitle: event.target.value
    });
  }

  componentDidUpdate() {
    localStorage.setItem(
      "EditableTextLinksListState",
      JSON.stringify(this.state)
    );
  }

  render() {
    return (
      <div className="text-links-component">
        <textarea
          onBlur={this.handleInput}
          placeholder={this.props.placeholder}
        >
          {this.state.headerTitle}
        </textarea>

        <form onSubmit={this.addTextLink}>
          <input type="text" placeholder="Link Name" />
          <input type="text" placeholder="Paste URL here" />

          <button>Add Text Link</button>
        </form>

        <TextLinkList
          items={this.state.items}
          removeTextLink={this.deleteTextLink}
        />
      </div>
    );
  }
}

class TextLinkList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>
            <a href={item.url.toString()} target="_blank">
              {item.value}
            </a>
            <button
              onClick={() => {
                this.props.removeTextLink(item);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default EditableTextLinksList;
