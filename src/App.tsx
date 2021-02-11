import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter as Router} from "react-router-dom"

import SearchBar from './components/SearchBar'

/* interface State  {
  data: any
} */

/* searchResultHandler(dataSearch) => {
  this.setState({data: dataSearch})
}
 */
class App extends Component{
  render() {
    return (
      <Router>
        <div className="App">
          <SearchBar artist="radiohead" />
          
      
        </div>
      </Router>
    );
  }
}

export default App;
