import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Item from './Myitem';

class FilmItemRow extends React.Component{
  render() {
    return (
      <li>
        <a href={this.props.url}>{this.props.url}</a>
      </li>
    )
  }
}

class StarWars extends React.Component{

  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: []
    }
  }

  getNewCharacter() {
    let number = Math.ceil(Math.random()*82)
    const url = `https://swapi.dev/api/people/${number}/`
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState(
          {
            name: data['name'],
            height: data['height'],
            homeworld: data['homeworld'],
            films: data['films'],
            loadedCharacter: true
          }
        )
      )

    
  }
  render() {

    const movies = this.state.films.map((url, index) => {
      return <FilmItemRow  key={index} url={url}/>
    })
    return (
      
      <div>
        {
          this.state.loadedCharacter &&
          <div>
              <h1>{this.state.name}</h1>
              <h1>{this.state.height} cm</h1>
              <a href={this.state.homeworld}>Homeworld</a>
              <ul>
                {movies}
              </ul>
          </div>
        }

        <button type='button' className='random-button' onClick={() => this.getNewCharacter()}>Randomize character</button>

      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars/>
      </header>
    </div>
  );
}

export default App;
