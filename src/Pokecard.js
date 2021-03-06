import React, { Component } from "react";
import "./Pokecard.css";
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let makeItThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

function choice(num) {
  let id = Math.floor(Math.random() * num.length);
  return num[id];
}

class Pokecard extends Component {
  render() {

    let id = makeItThree(this.props.id);
    let imgSrc = `${POKE_API}${id}.png`;
    
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-img">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">Exp: {this.props.exp}</div>
      </div>
    )
  }
}

export { Pokecard }