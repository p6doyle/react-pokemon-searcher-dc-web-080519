import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const URL = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state={allPokemon: [], filter: null}
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState({allPokemon: data})
    })
  }

  pokeSearch = (e, obj) => {
    console.log(obj.value)
    this.setState({searchText: obj.value})
  }

  render() {
    console.log(this.state.allPokemon)
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
        allPokemon={this.state.allPokemon}
        searchText={this.state.searchText}/>
      </div>
    )
  }
}

export default PokemonPage
