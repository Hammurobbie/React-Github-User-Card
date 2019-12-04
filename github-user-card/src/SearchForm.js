import React from "react";
import styled from "styled-components";

const Input = styled.input`
  background-color: rgba(211, 211, 211, 0.75);
  border-radius: 10px;
  border: none;
  text-align: center;
  color: #005780;
  font-size: 1.05rem;

  :focus {
    outline: none;
  }
`;

class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <Input
          type="text"
          placeholder="Search User"
          onChange={this.props.search}
        />
      </div>
    );
  }
}

export default SearchForm;
