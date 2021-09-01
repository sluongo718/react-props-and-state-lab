import React from 'react'

class Pet extends React.Component {

  renderButton = () => {
    if (this.props.pet.isAdopted === false){
     return <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    } else {
      return <button className="ui disabled button">Already adopted</button>
    }
  }


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'female' ?'♀' : '♂' }
            {this.props.pet.name}
          </a>
          <div className="meta">
    <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
          <p>{this.props.pet.age}</p>
          <p>{this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.renderButton()}

        </div>
      </div>
    )
  }
}

export default Pet
