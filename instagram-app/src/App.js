import React from 'react';
import './App.css';
import PostPage from './Components/PostContainer/PostPage';
import withAuthenticate from './Components/Authentication/withauthenticate';
import LoginPage from './Components/Login/LoginPage';

class App extends React.Component{
  constructor() {
    super();
    this.state = {};
  }
  
 

  render() {
    return (
      <div className="App">
         <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(LoginPage)

export default App;