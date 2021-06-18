import EmberRouter from '@ember/routing/router';
import config from 'marvel-index/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('characters', function () {
    this.route('character', { path: '/:character_id' });
  });
  this.route('comics', function () {
    this.route('comic', { path: '/:comic_id' });
  });
});
