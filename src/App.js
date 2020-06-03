import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    users: [],
    posts: []
  }

  componentDidMount() {
     axios.get(`https://api.github.com/users/qadeesz`)
      .then(res => {
        const users = [res.data];
        console.log(users)
        this.setState({ users: users });
        console.log(this.state.users)
      })


      axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });

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
        </header>
        <main>
          <section className="posts">
            <h2>Redit React JS Posts</h2>
            {this.state.posts.map(post => {
              return <li key={post.id}><a href={post.url} >{post.title}</a></li>;
            })}
          </section>
        </main>
      </div>
    )
  }
}

export default App;
