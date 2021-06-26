import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CharactersIndexRoute extends Route {
  @service infinity;

  queryParams = {
    nameStartsWith: {
      refreshModel: true,
    },
  };

  model({ nameStartsWith }) {
    if (nameStartsWith) {
      let queryParams = { perPageParam: 'limit', perPage: 24 };
      queryParams.nameStartsWith = nameStartsWith;
      return this.infinity.model('character', queryParams);
    } else {
      return this.modelFor('characters');
    }
  }

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.nameStartsWith = null;
    }
  }
}
