import { State } from '../state';
import Axios from 'axios';


export const fetchData = (state: State) => {
  const newState = Object.assign({}, state);
  Axios.get('https://randomuser.me/api/')
    .then(res => {
      newState.userData = [...newState.userData, res.data.results[0]]
      console.log('Some User Data, THIS IS NOT STATE, it is API Data', res.data.results)
    })
    .catch(err => console.log(err, 'thisIsTheError User'))
  console.log(newState.userData, 'Terraformed NewState' )
  return newState;
}
export const fetchPokeList = (state: State) => {
  const newState = Object.assign({}, state);
  Axios.get('https://pokeapi.co/api/v2/pokedex/1')
    .then(res => {
      newState.pokeList = res.data.pokemon_entries;
      console.log('Some Pokemon Data, THIS IS NOT STATE, it is API Data', res.data)
    })
    .catch(err => console.log(err, 'thisIsTheError Pokemon'))
  console.log(newState.pokeList, 'Terraformed Pokemon NewState' )
  return newState;
}
export const fetchPokeData = (state: State, pokemonId: number) => {
  const newState = Object.assign({}, state);
  Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(res => {
      newState.pokeData = res.data
      console.log('Some Individual Pokemon Data, THIS IS NOT STATE, it is API Data', res.data)
    })
    .catch(err => console.log(err, 'this is the error PokemonIndi'))
  console.log(newState.pokeData, pokemonId, 'Terraformed Individual Pokemon NewState');
  return newState;
}

