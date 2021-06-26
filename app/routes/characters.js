import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CharactersRoute extends Route {
  @service infinity;

  model() {
    let queryParams = { perPageParam: 'limit', perPage: 24 };
    return this.infinity.model('character', queryParams);
  }
}
