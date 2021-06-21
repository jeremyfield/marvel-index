import RestSerializer from '@ember-data/serializer/rest';
import { pluralize } from 'ember-inflector';

export default class ApplicationSerializer extends RestSerializer {
  createRestPayload(modelName, { data }, isArray = false) {
    let newPayload = isArray
      ? { [pluralize(modelName)]: data.results }
      : { [modelName]: data.results[0] };
    newPayload.meta = { total_pages: Math.trunc(data.total / data.limit + 1) };
    return newPayload;
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

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    return super.normalizeArrayResponse(
      store,
      primaryModelClass,
      this.createRestPayload(primaryModelClass.modelName, payload, true),
      id,
      requestType
    );
  }
}
