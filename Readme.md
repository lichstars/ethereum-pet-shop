# Adopt a pet on the Ethereum blockchain
Hacked with React, using Solidity smart contracts, and sitting on an Ethereum blockchain.

This is a inspired from the original [Ethereum pet shop tutorial](http://truffleframework.com/tutorials/pet-shop).

If you are new to blockchain, this [white paper](https://github.com/ethereum/wiki/wiki/White-Paper) is a good introductory read covering some history and Ethereum.

I've used the [Truffle](http://truffleframework.com/) framework to make things possible, such as compiling and deploying my contracts onto the Ethereum blockchain. Truffle themselves created this [Ethereum overview](http://truffleframework.com/tutorials/ethereum-overview) which was also a good read.

There are a few options available to see transactions hitting the blockchain. Truffle has a tool called Ganache. A [GUI friendly client](http://truffleframework.com/ganache) and [the not GUI friendly CLI](https://github.com/trufflesuite/ganache-cli/blob/master/README.md). I'd recommend getting the GUI version first so you can see the magic. This app however uses the CLI version via docker.

One final thing you'll need is something like [Metamask](https://metamask.io/). This will allow you to interact with the the app. This [page](https://www.quora.com/What-is-MetaMask) explains the purpose of Metamask.

I also want to check out [this zombie exercise](https://cryptozombies.io/) at some stage.

### Local Development
- Dependencies

  * Docker
  * Metamask / similar set up with settings found in `docker-compose.yml`


- Start a local development server

  `auto/start`

- Get a shell in the dev environment

  `auto/dev-environment`


Start at http://localhost:3000
