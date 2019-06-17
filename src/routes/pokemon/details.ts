
import { Store, connectTo } from 'aurelia-store';
import { State } from '../../state'
import { autoinject } from 'aurelia-framework';
import { fetchPokeData } from '../../actions/fetch';


@connectTo()
@autoinject()
export class Pokemon {

  public heading: string = 'Pokemon Fetch';
  
  public state: State;
  public pokemonId: number;
  public match: boolean; 
  activate(params, router, navigationInstruction) {
    this.pokemonId = params.id
    this.dispatchFetchPokeIndiAction(this.pokemonId);
    console.log(this.pokemonId, 'hurrah')
  }

  attached() {
  }

  constructor(private store: Store<State>) {
    this.store.state.subscribe(state => this.state = state);
    this.registerActions();
  }
  private registerActions() {
    this.store.registerAction('fetchPokeData', fetchPokeData);
  }

  public dispatchFetchPokeIndiAction(pokemonId: number) {
    this.store.dispatch('fetchPokeData', pokemonId);
    console.log(this.state.pokeData);
  }

}
