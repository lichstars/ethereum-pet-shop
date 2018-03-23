import React, { Component } from 'react';
import Adoption from '../build/contracts/Adoption.json';
import getWeb3 from './utils/getWeb3';
import AdoptionAd from './AdoptionAd';
import contract from 'truffle-contract';
import { Flexbox, Heading, SubHeading, Panel } from './styles';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      web3: null,
      adopters: null,
      adoptionService: null,
      pets: require('./pets.json'),
    };
  }

  componentWillMount() {
    getWeb3.then(results => {
      this.setState({ web3: results.web3 });
      this.instantiateContract();
    })
    .catch(() => console.log('Error finding web3.'));
  }

  instantiateContract = () => {
    const adoptionService = contract(Adoption);

    adoptionService.setProvider(this.state.web3.currentProvider);
    this.setState({ adoptionService });

    return this.markAdopted();
  }

  markAdopted = (adoptedPetId, value) => {
    this.state.adoptionService.deployed()
      .then(instance => instance.getAdopters.call())
      .then(adopters => {
        adopters[adoptedPetId] = adoptedPetId ? value : adopters[adoptedPetId];
        this.setState({ adopters });
      })
      .catch(error => console.log(error.message));
  }

  handleAdopt = (event, petId) => {
    this.state.web3.eth.getAccounts((error, accounts) => {
      this.state.adoptionService.deployed()
        .then(instance => instance.adopt(petId, { from: accounts[0] }))
        .then(adoptedPetId => this.markAdopted(petId, adoptedPetId.tx))
        .catch(error => console.log(error.message));
    });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Heading>
          Adopt a pet
          <SubHeading><em>on the ethereum blockchain!</em></SubHeading>
        </Heading>
        <Flexbox>
          {
            this.state.adopters && this.state.adopters.length > 0 &&
            this.state.adopters.map((isAdopted, petId) => {
              return (
                <Panel key={ petId }>
                  <AdoptionAd
                    isAdopted={ isAdopted }
                    pets={ this.state.pets }
                    petId={ petId }
                    handleAdopt={ this.handleAdopt }
                  />
                </Panel>
              );
            })
          }
        </Flexbox>
      </div>
    );
  }
}

export default App;
