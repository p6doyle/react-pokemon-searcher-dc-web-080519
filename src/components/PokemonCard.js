import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()
    this.state={frontFacing: true}
  }

  flipCard = () => {
    this.setState({frontFacing: !this.state.frontFacing})
  }

  render() {
    return (
      <Card onClick={this.flipCard}>
        <div>
          <div className="image">
            <img alt="" src={this.state.frontFacing ? this.props.sprites.front : this.props.sprites.back}></img>
          </div>
          <div className="content">
            <div className="header">
              <h1>{this.props.name}</h1>
          </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
                <p>{this.props.stats[5].value}</p>
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
