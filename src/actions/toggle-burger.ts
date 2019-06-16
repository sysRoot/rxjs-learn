import { State } from '../state';

export const toggleBurger = (state: State) => {
  const newState = Object.assign({}, state);

  newState.burgerToggle = !newState.burgerToggle;

  return newState;
};
