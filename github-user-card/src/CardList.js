import React from "react";
import Card from "./Card";

class CardList extends React.Component {
  render() {
    return (
      <div>
        {this.props.data
          .filter(user => user.login.includes(this.props.search))
          .map(user => (
            <Card key={user.id} data={user} />
          ))}
      </div>
    );
  }
}

export default CardList;
