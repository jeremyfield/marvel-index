import Route from '@ember/routing/route';

export default class ComicsIndexRoute extends Route {
  model() {
    return this.modelFor('comics');
  }
}
