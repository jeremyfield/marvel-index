import Route from '@ember/routing/route';

export default class CharactersCharacterRoute extends Route {
  model({ character_id }) {
    return this.store.findRecord('character', character_id);
  }
}
