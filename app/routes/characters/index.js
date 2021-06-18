import Route from '@ember/routing/route';

export default class CharactersIndexRoute extends Route {
  model() {
    return this.modelFor('characters');
  }
}
