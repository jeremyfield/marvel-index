import RestAdapter from '@ember-data/adapter/rest';
import config from 'marvel-index/config/environment';

export default class ApplicationAdapter extends RestAdapter {
  host = 'https://gateway.marvel.com';
  namespace = 'v1/public';

  get queryParams() {
    return `?ts=${1}&apikey=${config.publicKey}&hash=${config.hash}`;
  }

  urlForFindAll(modelName, snapshot) {
    return `${super.urlForFindAll(modelName, snapshot)}${this.queryParams}`;
  }

  urlForFindRecord(id, modelName, snapshot) {
    return `${super.urlForFindRecord(id, modelName, snapshot)}${
      this.queryParams
    }`;
  }

  urlForQuery(query, modelName) {
    query.ts = 1;
    query.apikey = config.publicKey;
    query.hash = config.hash;
    query.offset = (query.page - 1) * query.limit;
    delete query.page;
    return super.urlForQuery(query, modelName);
  }
}
