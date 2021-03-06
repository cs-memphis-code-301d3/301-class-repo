import React from 'react';
import axios from 'axios';
import MyComponent from './MyComponent';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchQuery:'',
      location: {}
    }
  }

  getLocation = async () => {
  //  const locQuery = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    // const locQuery = `https://us1.locationiq.com/v1/search.php?key=pk.c50f5eca19e1c38a645400ec7dcb01fe&q=${this.state.searchQuery}&format=json`;
    // console.log(locQuery);
    // const API = locQuery;
    const res = await axios.get("http://localhost:3001/");
    // console.log(res.data[0]);
    console.log(res);
    // this.setState({ location:res.data[0] });
    this.setState({ location:res });
  }

  render() {
    this.getLocation();

    return(
      <div>
        <div>{this.state.location}</div>
        {/* <MyComponent/>
        <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
        <button onClick={this.getLocation}>Explore!</button> */}
        {/* {this.state.location.place_id && 
          <h2>The city is: {this.state.location.display_name}</h2>
        } */}
      </div>
    )
  }
}

export default App;
