import { Component } from 'react';
import './add-form.css';

export default class AddForm extends Component {
  state = {
    label: '',
  };

  handleChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter' && this.state.label.trim() !== '') {
      this.props.addItem(this.state.label);
      this.setState({ label: '' });
    }
  };

  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={this.state.label}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}
