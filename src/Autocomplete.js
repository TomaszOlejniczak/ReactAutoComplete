import React from "react";
import './Autocomplete.css'; // Importing a css properties

export default class Autocomplete extends React.Component { // Creating a class to represent our component
  constructor(props) {
    super(props);
    this.state = { // Defining initial state for autocomplete suggestions list and text value in input
      suggestions: [],
      text: '',
    };
  } // Create an class and methods below for the whole service

  textOnChange = (e) => {
    const { items } = this.props; // Instance for props data
    const value = e.target.value; // Catching input value
    let suggestions = [];
    if (value.length > 0) { // For case that input is not empty
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = items.sort().filter(i => regex.test(i)); // Searching for list item based on a pattern
    }
    this.setState(() => ({ suggestions, text: value })); 
    // Using setState instead of this.state overwriting makes React dynamic, because setStace forces to render changes automatically
  }

  suggestionSelected (value) { // Setting a new state for gained data
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))
  }

  renderAutocomplete () { // Method for render filtered list of names instead of full one
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    } // If there is no suggestions return nothing
    return (
      <ul>
        {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
        {/*If there are some suggestions return filtered list and populate text box with element which you click on*/}
      </ul>
    )
  }

  render() { // Rendering HTML elements directly in JavaScript using JSX
    const { text } = this.state;
    return (
      <div className="autocomplete">
        <input value={text} onChange={this.textOnChange} type="text" /> {/*Text box with updating input value*/}
        {this.renderAutocomplete()}
      </div>
    );
  }
}
