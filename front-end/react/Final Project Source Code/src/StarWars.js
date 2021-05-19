import React from 'react';


class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      imageUrl: null,
      films: [],
    }
  }

  getNewCharacter() {
    const randomNumber = Math.round( Math.random() * 88)
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          imageUrl: data.image,
          loadedCharacter: true,
        })
      })
  }

  render() {

    return (
      <div>
        <div className="content">
          {
            this.state.loadedCharacter &&
              <div>
                <h1>{this.state.name}</h1>
                <p><img src={this.state.imageUrl} alt={this.state.name} className="img" /></p>
                <p>{this.state.height} m</p>
                <p>Homeworld: {this.state.homeworld}</p>
              </div>
          }
          <button
            type="button"
            onClick={() => this.getNewCharacter()}
            className="btn"
          >
            Randomize Character
          </button>
        </div>
        <div className="bg-img" style={{backgroundImage: `url(${this.state.imageUrl})`}}></div>
      </div>
    )
  }
}

export default StarWars;
