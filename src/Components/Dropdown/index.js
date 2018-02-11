import React, { Component } from 'react';
import './styles.css';

class Dropdown extends Component {
  state = {
    showDropdown: false,
    dropdownValue: 'Year to Date',
    filters: ['Year to Date', 'Quater to Date'],
  };

  handeClick = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  };

  handleDropdown = text => {
    this.setState({ dropdownValue: text, showDropdown: false });
  };

  render() {
    return (
      <div className="dropdown">
        <div className="dropdownTop" onClick={this.handeClick}>
          <p className="dropdownLabel">
            {this.state.dropdownValue.toUpperCase()}
          </p>
          <div className="triangle" />
        </div>
        {this.state.showDropdown ? (
          <div className="dropdownLower">
            {this.state.filters.map((element, index) => {
              return (
                <div key={index}>
                  <p
                    className="dropdownOption"
                    onClick={() => this.handleDropdown(element, index)}
                    key={index}
                  >
                    {element.toUpperCase()}
                  </p>
                  {index !== this.state.filters.length - 1 ? (
                    <div className="underline" />
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
