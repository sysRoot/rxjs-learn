import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from 'aurelia-router';
import { autoinject, bindable } from 'aurelia-framework';
import { Store, connectTo } from 'aurelia-store';
import { State } from './state';
import { toggleBurger } from './actions/toggle-burger';

@connectTo()
@autoinject()
export class App {
  public state: State;
  constructor(private store: Store<State>) {
    this.store.state.subscribe(state => (this.state = state));
    this.registerActions();
    console.log(this.state);
  }
  private registerActions() {
    this.store.registerAction('toggleBurger', toggleBurger);
  }
  public dispatchToggleAction() {
    this.store.dispatch('toggleBurger');
    console.log('Am I firing', this.state)
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
      }
    ]);

    this.router = router;
  }
}
