import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | character', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('comic', {});
    assert.ok(model);
  });
});
