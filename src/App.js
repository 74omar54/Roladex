import React, { Component } from 'react';     
import User from './components/User'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: null,
    };
  }

  componentDidMount(){
    this.fetchData();
    console.log('mounted');

  }
  fetchData(){
    fetch('https://randomuser.me/api/?results=25')
    .then(response => response.json())
    .then(data => this.setState({users: data.results}))
    .catch(error => console.log('parsing failed', error))
  }

  componentDidUpdate(){
    console.log("I have updated")
  }
  render() {
    return (
      <div className="App">
        <ul>{this.state.users &&
        this.state.users.map((user) => {
          console.log(user)
          return <User
          name={`Name: ${user.name.first} ${user.name.last}`}
          image={user.picture.large}
          age={user.dob.age}
          email={user.email}
          phone={user.cell}
          location={`Located: ${user.location.city}, ${user.location.state}`}

          />
        })}
        </ul>
      </div>
    );
  }
}
export default App;