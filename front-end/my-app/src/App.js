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
      films: [],
      image: null
    }
  }

  getNewCharacter() {
    const number = Math.ceil(Math.random()*88)
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${number}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState(
          {
            name: data['name'],
            height: data['height'],
            homeworld: data['homeworld'],
            films: data['films'],
            image: data['image'],
            loadedCharacter: true
          }
        )
      )

    
  }
  render() {


    return (
      <div>
        <div className='content'>
          {
            this.state.loadedCharacter &&
            <div>
                <p><img src={this.state.image}></img></p>
                <h1>{this.state.name}</h1>
                <h1>{this.state.height} cm</h1>
                <a href={this.state.homeworld}>Homeworld</a>
                <h1>{this.state.films}</h1>
            </div>
          }
          <button type='button' className='random-button' onClick={() => this.getNewCharacter()}>Randomize character</button>
        </div>
        <div className="img" style={{background: `url(${this.state.image})`}}></div>
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
