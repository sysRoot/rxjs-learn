import { PLATFORM } from "aurelia-pal";
import { Router, RouterConfiguration } from "aurelia-router";

import { Store } from "aurelia-store";
import { State } from "./state";
import { Subscription } from "aurelia-event-aggregator";

export class App {
  public router: Router;
  
  public state: State;
  private subscription: Subscription;

  constructor(private store: Store<State>) {}

  bind() {
    this.subscription = this.store.state.subscribe(
      state => (this.state = state)
    );
  }

  unbind() {
    this.subscription.unsubscribe();
  }

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Aurelia";
    config.map([
      {
        route: ["", "welcome"],
        name: "welcome",
        moduleId: PLATFORM.moduleName("./routes/welcome"),
        nav: true,
        title: "Welcome"
      }
    ]);

    this.router = router;
  }
}
