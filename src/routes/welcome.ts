import { Store, connectTo } from 'aurelia-store';
import { State } from '../state'
import { autoinject } from 'aurelia-framework';
import { fetchData } from '../actions/fetch';
import { deleteCard } from '../actions/delete-card';


@connectTo()
@autoinject()
export class Welcome {

  public heading: string = 'Welcome to the Aurelia Navigation App!';
  
  public state: State;
  constructor(private store: Store<State>) {
    this.store.state.subscribe(state => this.state = state);
    this.registerActions();
  }
  private registerActions() {
    this.store.registerAction('fetchData', fetchData);
    this.store.registerAction('deleteCard', deleteCard);
  }
  public dispatchFetchAction() {
    this.store.dispatch('fetchData');
  }
  public dispatchDeleteAction(cardId: string) {

    this.store.dispatch('deleteCard', cardId);
    console.log('fired', cardId);
  }
}
