import RestAdapter from '@ember-data/adapter/rest';
import config from 'marvel-index/config/environment';

export default class ApplicationAdapter extends RestAdapter {
  host = 'https://gateway.marvel.com';
  namespace = 'v1/public';

  urlForFindAll(modelName, snapshot) {
    return `${super.urlForFindAll(modelName, snapshot)}?ts=${1}&apikey=${
      config.publicKey
    }&hash=${config.hash}`;
  }
}
