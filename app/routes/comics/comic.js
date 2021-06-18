import Route from '@ember/routing/route';

export default class ComicsComicRoute extends Route {
  model({ comic_id }) {
    return this.store.findRecord('comic', comic_id);
  }
}
