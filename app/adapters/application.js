import RestAdapter from '@ember-data/adapter/rest';
import config from 'marvel-index/config/environment';

export default class ApplicationAdapter extends RestAdapter {
  host = 'https://gateway.marvel.com';
  namespace = 'v1/public';

  urlForFindAll(modelName, snapshot) {
    let ts = 1;
    let hash = 'd203e7d6eeca70fd29711c6ff605f08d';
    return `${super.urlForFindAll(modelName, snapshot)}?ts=${ts}&apikey=${
      config.publicKey
    }&hash=${hash}`;
  }
}
