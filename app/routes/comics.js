import Route from '@ember/routing/route';

export default class ComicsRoute extends Route {
  model() {
    return this.store.findAll('comic');
  }
}
