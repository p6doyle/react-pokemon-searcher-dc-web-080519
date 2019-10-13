import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'


class PokemonCollection extends React.Component {

  makePokeCards = () => {
    let fullPokemonArray = this.props.allPokemon
    return fullPokemonArray.map(pokemon =>{
    return <PokemonCard {...pokemon} />})}

  pokeFilter = () => {
    let fullPokemonArray = this.props.allPokemon
    let selectedPokemon = fullPokemonArray.filter(pokemon =>
    pokemon.name.includes(this.props.searchText))
    return selectedPokemon
    console.log(selectedPokemon)
  }

  render() {
    return (
      <div>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        <br></br>
        {this.makePokeCards()}
        {this.pokeFilter()}
      </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
