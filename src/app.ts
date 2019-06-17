import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from 'aurelia-router';
import { autoinject, bindable } from 'aurelia-framework';
import { Store, connectTo } from 'aurelia-store';
import { State } from './state';
import { toggleBurger } from './actions/toggle-burger';
import { fetchPokeList, fetchPokeData } from './actions/fetch'
@connectTo()
@autoinject()
export class App {
  public state: State;
  constructor(private store: Store<State>) {
    this.store.state.subscribe(state => (this.state = state));
    this.registerActions();
    console.log(this.state);
  }

  attached() {
    this.dispatchFetchPokeAction();
  }
  
  private registerActions() {
    this.store.registerAction('toggleBurger', toggleBurger);
    this.store.registerAction('fetchPokeList', fetchPokeList);
    this.store.registerAction('fetchPokeData', fetchPokeData);

  }
  public dispatchToggleAction() {
    this.store.dispatch('toggleBurger');
    console.log('Am I firing', this.state)
  }
  public dispatchFetchPokeAction() {
    this.store.dispatch('fetchPokeList');
    console.log(this.state.pokeList);
  }
  public dispatchFetchPokeIndiAction() {
    this.store.dispatch('fetchPokeData');
    console.log(this.state.pokeData);
  }

  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Home';
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./routes/welcome'),
        nav: true,
        title: 'Welcome'
      },
      {
        route: ['pokemon'],
        name: 'pokemon',
        moduleId: PLATFORM.moduleName('./routes/pokemon/pokemon'),
        nav: true,
        title: 'Pokemon'
      },
      {
        route: ['pokemon/:id'],
        name: 'pokemonDetails',
        moduleId: PLATFORM.moduleName('./routes/pokemon/details'),
        nav: false,
        title: 'Pokemon Details'
      }
    ]);

    this.router = router;
  }
}
