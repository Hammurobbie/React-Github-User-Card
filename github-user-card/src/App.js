import React from "react";
import "./App.css";
import axios from "axios";
import CardList from "./CardList";
import SearchForm from "./SearchForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: ""
    };
  }

  handleChanges = e => {
    this.setState({ search: e.target.value });
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/hammurobbie/followers")
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => alert(err.message));
  }

  render() {
    console.log(this.state.search);
    return (
      <div className="App">
        <h1>Github User Cards</h1>
        <SearchForm search={this.handleChanges} />
        <CardList
          key={this.state.data.index}
          data={this.state.data}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default App;
