import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | thumbnail-link', function (hooks) {
  setupRenderingTest(hooks);

  test('thumbnail link production', async function (assert) {
    this.set('thumbnail', {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73',
      extension: 'jpg',
    });

    await render(hbs`{{thumbnail-link thumbnail}}`);

    assert.strictEqual(
      this.element.textContent.trim(),
      'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/standard_large.jpg'
    );
  });
});
