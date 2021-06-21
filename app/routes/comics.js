import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ComicsRoute extends Route {
  @service infinity;

  model() {
    return this.infinity.model('comic', { perPageParam: 'limit', perPage: 24 });
  }
}
