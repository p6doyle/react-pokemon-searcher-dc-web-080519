import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  specificPokemon = () => {
    
  }

  makePokeCards = () => {
  if (this.props.searchText === pokemon.name.includes(this.props.searchText))
  {return this.props.allPokemon.map(pokemon =>{
      return <PokemonCard {...pokemon}/>})}
  return this.props.allPokemon.map(pokemon =>{
      return < PokemonCard {...pokemon}/>
  })}

  getFilteredPokemon(){
  return this.props.allPokemon.filter(pokemon => pokemon.name.includes(this.props.searchText))
}



  render() {
    return (
      <div>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        <br></br>
        {this.makePokeCards()}
      </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
