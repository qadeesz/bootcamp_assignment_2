import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
     axios.get(`https://api.github.com/users/qadeesz`)
      .then(res => {
        const users = [res.data];
        console.log(users)
        this.setState({ users: users });
        console.log(this.state.users)
      })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Updated by Qadees Javed</h3>
    
          { this.state.users.map(user => 
                
                <div key={user.id} className="card">
                  <img src={user.avatar_url} alt="Avatar" />
                  <div className="container">
                    <h4><b>{user.name}</b></h4> 
                    <p>{user.bio}</p> 
                    <p className="App-link">
                      <a href={user.html_url} >Github Link</a> 
                    </p>
                  </div>
                </div>
               
          )}
        
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;
