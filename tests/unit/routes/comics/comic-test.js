import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | comics/comic', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:comics/comic');
    assert.ok(route);
  });
});
