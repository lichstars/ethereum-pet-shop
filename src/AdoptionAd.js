import React, { Component } from 'react';
import { PanelText, Button } from './styles';
import { EMPTY_ADDRESS } from './constants';

export class AdoptionAd extends Component {
  render() {
    const { isAdopted, pets, petId, handleAdopt } = this.props;
    const adopted = isAdopted !== EMPTY_ADDRESS ? true : false;
    const pet = pets.filter(pet => pet.id === petId)[0];

    return (
      <div className="card">
        <img className="card-img-top" src={ require(`./${pet.picture}`) } alt="Pet" />
        <div className="card-body">
          <h5 className="card-title text-center">{ pet.name }</h5>
          <PanelText>
            <strong>Breed:</strong> { pet.breed }<br />
            <strong>Age:</strong> { pet.age }<br />
            <strong>Location:</strong> { pet.location }<br />
          </PanelText>
          <Button>
            <a href="#" onClick={ (event) => handleAdopt(event, petId) } className={ adopted ? "btn btn-block btn-secondary" : "btn btn-block btn-primary" }>{ adopted ? "Adopted" : "Adopt" }</a>
          </Button>
        </div>
      </div>
    );
  }
}

export default AdoptionAd;
