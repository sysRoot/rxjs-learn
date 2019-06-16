import { State } from '../state';
import Axios from 'axios';


export const fetchData = (state: State) => {
  const newState = Object.assign({}, state);
  Axios.get('https://randomuser.me/api/')
    .then(res => {
      newState.userData = [...newState.userData, res.data.results[0]]
      console.log('Some Data, THIS IS NOT STATE', res.data.results)
    })
    .catch(err => console.log(err, 'thisIsTheError'))
  console.log(newState, 'Terraformed NewState' )
  return newState;
}


