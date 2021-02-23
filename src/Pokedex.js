import React, { Component } from "react";
import { Pokecard } from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    // let result = this.props.isWinner ? 'Winner':'Loser';
    let title;
    if(this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>
    }
    return(
      <div className="Pokedex">
        {title}
        <h3>Total Exp: {this.props.exp}</h3>
        {/* <p className={result}>{result}</p> */}
        
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => ( 
            <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} /> 
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex;