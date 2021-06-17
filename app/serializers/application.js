import RestSerializer from '@ember-data/serializer/rest';
import { pluralize } from 'ember-inflector';

export default class ApplicationSerializer extends RestSerializer {
  createRestPayload(modelName, payload) {
    return { [pluralize(modelName)]: payload.data.results };
  }

  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    return super.normalizeFindAllResponse(
      store,
      primaryModelClass,
      this.createRestPayload(primaryModelClass.modelName, payload),
      id,
      requestType
    );
  }
}
