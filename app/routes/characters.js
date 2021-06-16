import Route from '@ember/routing/route';

export default class CharactersRoute extends Route {
  model() {
    return this.store.findAll('character');
  }
}
