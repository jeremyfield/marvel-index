import RestSerializer from '@ember-data/serializer/rest';
import { pluralize } from 'ember-inflector';

export default class ApplicationSerializer extends RestSerializer {
  createRestPayload(modelName, payload, isArray = false) {
    return isArray
      ? { [pluralize(modelName)]: payload.data.results }
      : { [modelName]: payload.data.results[0] };
  }

  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    return super.normalizeFindAllResponse(
      store,
      primaryModelClass,
      this.createRestPayload(primaryModelClass.modelName, payload, true),
      id,
      requestType
    );
  }

  normalizeFindRecordResponse(
    store,
    primaryModelClass,
    payload,
    id,
    requestType
  ) {
    return super.normalizeFindRecordResponse(
      store,
      primaryModelClass,
      this.createRestPayload(primaryModelClass.modelName, payload),
      id,
      requestType
    );
  }
}
