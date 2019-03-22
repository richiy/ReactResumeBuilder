import React, { component } from "react";
import "./EditableList.css";

class EditableList extends React.Component {
  constructor(props) {
    super(props);

    let persistState = localStorage.getItem("EditableListState");

    if (persistState) {
      this.state = {
        headerTitle: JSON.parse(persistState).headerTitle,
        items: JSON.parse(persistState).items
      };
    } else {
      this.state = {
        headerTitle: "Skills",
        items: [{ id: Date.now(), value: "Excel Expert" }]
      };
    }

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateHeaderTitle = this.updateHeaderTitle.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem("EditableListState", JSON.stringify(this.state));
  }

  addItem(event) {
    event.preventDefault();
    //console.log(event.target.childNodes[0].value); //get value from text input
    if (event.target.childNodes[0].value == "") {
      return "input is empty"; //TODO: make this throw message to UI
    } else {
      let newItem = { id: Date.now(), value: event.target.childNodes[0].value };
      event.target.childNodes[0].value = "";

      this.setState(state => ({
        items: state.items.concat(newItem)
      }));
    }
  }

  deleteItem(singleItem) {
    this.setState({
      items: this.state.items.filter(item => item.id !== singleItem.id)
    });
  }

  updateHeaderTitle(event) {
    this.setState({
      headerTitle: event.target.value
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        <textarea onBlur={this.updateHeaderTitle}>
          {this.state.headerTitle}
        </textarea>

        <form onSubmit={this.addItem}>
          <input type="text" placeholder={this.props.inputPlaceholder} />
          <button>{this.props.buttonText}</button>
        </form>

        <List items={this.state.items} removeItem={this.deleteItem} />
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>
            {item.value}
            <button
              onClick={() => {
                this.props.removeItem(item);
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

export default EditableList;
