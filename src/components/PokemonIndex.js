import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const URL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
  pokeFilter = () => {
    let fullPokemonArray = this.state.allPokemon
    let selectedPokemon = fullPokemonArray.filter(pokemon => {
      return pokemon.name.includes(this.state.searchText)})
      console.log(selectedPokemon)
      return selectedPokemon
    }

  constructor(){
    super()
    this.state={allPokemon: [], searchText: null}
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState({allPokemon: data})
    })
  }

  pokeSearch = (e, obj) => {
    console.log("this is to test search", obj.value)
    this.setState({searchText: obj.value})
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search
        onSearchChange={_.debounce(this.pokeSearch, 500)} showNoResults={false}
        onSearch={this.changeSearchText} />
        <br />
        <PokemonCollection
        searchText={this.state.searchText}
        selectedPokemon={this.pokeFilter}/>
      </div>
    )
  }
}

export default PokemonPage
