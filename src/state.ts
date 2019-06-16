
export interface User {
  cell: string,
  dob: object,
  email: string,
  gender: string,
  id: object,
  location: object,
  phone: string,
  login: object,
  nat: string,
  picture: object,
  registered: object
}

export interface State {
  userData: Array<User>;
  burgerToggle: boolean;
}
export const initialState: State = {
  userData: [],
  burgerToggle: false
}
