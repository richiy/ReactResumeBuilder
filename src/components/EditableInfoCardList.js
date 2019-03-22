import React, { Component } from "react";
import "./EditableInfoCardList.css";

class EditableInfoCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      headerText: "Work Experience"
    };
    this.addInfoCard = this.addInfoCard.bind(this);
    this.deleteInfoCard = this.deleteInfoCard.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addInfoCard(event) {
    event.preventDefault();

    const newItem = {
      id: Date.now()
    };

    this.setState({
      items: this.state.items.concat(newItem)
    });
  }

  deleteInfoCard(singleCard) {
    // this function is called by a child component
    this.setState(state => ({
      items: state.items.filter(item => item.id !== singleCard.id)
    }));
  }

  componentDidMount() {
    const persistState = localStorage.getItem("EditableInfoCardListState");
    console.log("moutning");
    if (persistState) {
      try {
        this.setState(JSON.parse(persistState));
      } catch (e) {
        console.log(e);
      }
    }
  }

  componentDidUpdate() {
    console.log("update");
    localStorage.setItem(
      "EditableInfoCardListState",
      JSON.stringify(this.state)
    );
    console.log(this.state);
  }

  handleChange(event) {
    this.setState({
      headerText: event.target.value
    });
  }

  render() {
    return (
      <div className={this.props.className}>
        <textarea value={this.state.headerText} onChange={this.handleChange} />
        <InfoCardList
          items={this.state.items}
          removeInfoCard={this.deleteInfoCard}
          removeCardText={this.props.deleteCardText}
        />
        <form>
          <button onClick={this.addInfoCard}>{this.props.addCardText}</button>
        </form>
      </div>
    );
  }
}

class InfoCardList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>
            <InfoCard id={item.id} />
            <button
              onClick={() => {
                this.props.removeInfoCard(item);
              }}
            >
              {this.props.removeCardText}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

class InfoCard extends React.Component {
  constructor(props) {
    super(props);

    const persistState = localStorage.getItem(this.props.id);

    if (persistState) {
      console.log("inside if");
      let storage = JSON.parse(persistState);

      this.state = {
        cardData: {
          id: storage.cardData.id,
          date: storage.cardData.date,
          title: storage.cardData.title,
          subTitle: storage.cardData.subTitle,
          description: storage.cardData.description
        }
      };
    } else {
      this.state = {
        cardData: {
          id: this.props.id,
          date: "",
          title: "",
          subTitle: "",
          description: ""
        }
      };
    }

    this.changeContent = this.changeContent.bind(this);
  }

  componentDidUpdate() {
    console.log("update");

    localStorage.setItem(this.state.cardData.id, JSON.stringify(this.state));
    // console.log(localStorage);
  }

  componentWillUnmount() {
    localStorage.removeItem(this.state.cardData.id);
  }

  changeContent(event) {
    let userInput = event.target.value;
    console.log(this.state);
    if (event.target.name == "date") {
      this.setState(state => {
        return {
          cardData: {
            id: state.cardData.id,
            date: userInput,
            title: state.cardData.title,
            subTitle: state.cardData.subTitle,
            description: state.cardData.description
          }
        };
      });
    } else if (event.target.name == "title") {
      this.setState(state => {
        return {
          cardData: {
            id: state.cardData.id,
            date: state.cardData.date,
            title: userInput,
            subTitle: state.cardData.subTitle,
            description: state.cardData.description
          }
        };
      });
    } else if (event.target.name == "sub-title") {
      this.setState(state => {
        return {
          cardData: {
            id: state.cardData.id,
            date: state.cardData.date,
            title: state.cardData.title,
            subTitle: userInput,
            description: state.cardData.description
          }
        };
      });
    } else if (event.target.name == "description") {
      this.setState(state => {
        return {
          cardData: {
            id: state.cardData.id,
            date: state.cardData.date,
            title: state.cardData.title,
            subTitle: state.cardData.subTitle,
            description: userInput
          }
        };
      });
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.cardData.date}
          onChange={this.changeContent}
          type="text"
          placeholder="Date Range"
          name="date"
        />
        <input
          value={this.state.cardData.title}
          onChange={this.changeContent}
          type="text"
          placeholder="Company Name"
          name="title"
        />
        <input
          value={this.state.cardData.subTitle}
          onChange={this.changeContent}
          type="text"
          placeholder="Job Title"
          name="sub-title"
        />
        <textarea
          value={this.state.cardData.description}
          onChange={this.changeContent}
          placeholder="Description"
          name="description"
        />
      </div>
    );
  }
}

export default EditableInfoCardList;
