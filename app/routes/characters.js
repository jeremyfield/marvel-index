import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CharactersRoute extends Route {
  @service infinity;

  model({ nameStartsWith }) {
    let queryParams = { perPageParam: 'limit', perPage: 24 };
    if (nameStartsWith) {
      queryParams.nameStartsWith = nameStartsWith;
    }
    return this.infinity.model('character', queryParams);
  }
}
