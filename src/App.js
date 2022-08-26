import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    const skills = ['react', 'java', 'css', 'html', 'dom'];
    const liElement = skills.map((skill) => <li>{ skill }</li>);

    return (
      <div className="App">
        <h2>Portfólio em processo...</h2>

        <ul>
          { liElement }
        </ul>
      </div>
    );
  }
}

export default App;
