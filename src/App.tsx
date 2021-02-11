import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import SearchBar from "./components/SearchBar";

interface State {
  songs: any;
}

/* searchResultHandler(dataSearch) => {
  this.setState({data: dataSearch})
}
 */
class App extends Component<State> {
  state = { songData: [] };

  songsDataHandler = (songs) => {
    this.setState({ songsData: songs });
  };
  render() {
    if (this.state.songData)
      return (
        <Router>
          <div className="App">
            <SearchBar songsDataHandler={this.songsDataHandler} />
          </div>
        </Router>
      );
  }
}

export default App;
