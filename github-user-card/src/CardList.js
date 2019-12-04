import React from "react";
import Card from "./Card";

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

class CardList extends React.Component {
  render() {
    return (
      <div>
        {this.props.data
          .filter(user => user.login.includes(this.props.search))
          .map(user => (
            <Card key={user.id} data={user} />
          ))}

        <CardDiv>
          <H2>{this.props.myData.login}</H2>
          <img src={this.props.myData.avatar_url} alt="User Avatar" />
          <p>
            <a target="blank_" href={this.props.myData.html_url}>
              {this.props.myData.html_url}
            </a>
          </p>
        </CardDiv>
      </div>
    );
  }
}

export default CardList;
