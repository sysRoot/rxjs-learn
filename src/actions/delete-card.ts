import { State } from '../state';

export const deleteCard = (state: State, cardId: string) => {
  const newState = Object.assign({}, state);
  const filtered = newState.userData.filter(cur => cur.phone !==  cardId);

  newState.userData = [...filtered];
  return newState;
}
