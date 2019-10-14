import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'


class PokemonCollection extends React.Component {

  makeSelectedPokeCards = () => {
    let selectedPokemon = this.props.selectedPokemon()
    console.log(selectedPokemon)
    return selectedPokemon.map(pokemon =>{
    return <PokemonCard {...pokemon} />})}

  render() {
    this.makeSelectedPokeCards()
    return (
      <div>
      <Card.Group itemsPerRow={6}>
        <br></br>
        {this.makeSelectedPokeCards}
      </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
