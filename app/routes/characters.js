import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CharactersRoute extends Route {
  @service infinity;

  model() {
    return this.infinity.model('character', {
      perPageParam: 'limit',
      perPage: 24,
    });
  }
}
