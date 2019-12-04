import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  background-color: rgba(211, 211, 211, 0.75);
  margin: 3% 10% 3% 10%;
  padding: 2% 0 2% 0;
  a {
    text-decoration: none;
    color: #6a99af;
  }
`;

const H2 = styled.h2`
  color: #6a99af;
`;

class Card extends React.Component {
  render() {
    return (
      <div>
        <CardDiv>
          <H2>{this.props.data.login}</H2>
          <img src={this.props.data.avatar_url} alt="User Avatar" />
          <p>
            <a target="blank_" href={this.props.data.html_url}>
              {this.props.data.html_url}
            </a>
          </p>
        </CardDiv>
      </div>
    );
  }
}

export default Card;
