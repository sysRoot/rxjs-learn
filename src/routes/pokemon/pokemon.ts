import { Store, connectTo } from 'aurelia-store';
import { State } from '../../state';
import { autoinject, inject } from 'aurelia-framework';
import { fetchPokeList } from '../../actions/fetch';
import { Router } from 'aurelia-router';

@connectTo()
@autoinject()
export class Pokemon {
  static inject = [Store, Router];
  public heading: string = 'Pokemon Fetch';
  public state: State;

  // attached() {
  //   this.dispatchFetchPokeAction();
  // }
  constructor(private store: Store<State>, public router: Router) {
    this.store.state.subscribe(state => (this.state = state));
    this.router = router;
    this.registerActions();
  }

  public navToPokemon(pokemon: any) {
    console.log(pokemon, 'win');
    this.router.navigateToRoute('pokemonDetails', { id: pokemon.entry_number });
  }
  private registerActions() {
    this.store.registerAction('fetchPokeList', fetchPokeList);
  }
  public dispatchFetchPokeAction() {
    this.store.dispatch('fetchPokeList');
    console.log(this.state.pokeList);
  }

}
