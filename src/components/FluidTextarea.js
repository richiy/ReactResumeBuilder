import React, {component} from 'react';

// TODO: this component does not have it's own styling.
// this component is styled by EditableToggleCard component
class FluidTextarea extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextareaInput = this.handleTextareaInput.bind(this);
}

  handleTextareaInput(event) {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  }
  render() {
    return (
      <textarea
        className={this.props.className}
        placeholder={this.props.placeholder}
        onInput={this.handleTextareaInput}
      />
    );
  }
}

export default FluidTextarea;
