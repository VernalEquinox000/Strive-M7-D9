import React, { Component } from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

interface State {
  artist: any;
  data: any;
  e: any;
}

/* add data:{
        title: string
    }  */
// onClick = {()=> this.state.artist}?

class SearchBar extends Component<State> {
  fetch = async (artist) => {
    let response = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/search?q=${this.props.artist}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "8922e7eb38msha406b3662407a30p14661djsn13118198de68",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    let data = await response.json();
    console.log(data);
    this.setState({ data: data });
    //this.props.dataHandler(data)
  };

  /* searchHandler = (e) => {
    this.setState({ artist: e.target.value });
  };
 */
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Form inline onSubmit={() => this.fetch(artist)}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={this.props.artist}
              onChange={(e) => this.setState({ artist: e.currentTarget.value })}
            />
            <Button variant="outline-success" type="Submit">
              Search
            </Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default SearchBar;
