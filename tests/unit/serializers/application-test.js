import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | application', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('createRestPayload', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('application');

    assert.deepEqual(
      serializer.createRestPayload(
        'character',
        { data: { results: ['a'], total: 1493, limit: 20 } },
        true
      ),
      { characters: ['a'], meta: { total_pages: 75 } }
    );
  });
});
