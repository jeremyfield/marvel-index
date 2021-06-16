import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | character', function (hooks) {
  setupTest(hooks);

  test('thumbnailLink accessor', function (assert) {
    let store = this.owner.lookup('service:store');
    let character = store.createRecord('character', {
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73',
        extension: 'jpg',
      },
    });

    let expectedLink =
      'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/standard_large.jpg';
    assert.strictEqual(character.thumbnailLink, expectedLink);
  });
});
