import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  getPets = () => {
    if (this.state.filters.type === "all") {
      fetch('/api/pets')
      .then(response => response.json())
      .then(data => this.setState({pets: data}))
     
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(response => response.json()
      .then(data => this.setState({pets: data})))
    }
  }

  onAdoptPet = (id) => {
    let allPets = this.state.pets
    allPets.forEach(pet => {
      if (pet.id === id) {pet.isAdopted = true}
    })
    this.setState({pets: allPets})
  }


  hanldeFilterChange = (event) => {
    debugger
    this.setState({filters: {type: event.target.value} })
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.hanldeFilterChange} onFindPetsClick={this.getPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
