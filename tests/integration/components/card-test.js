import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('thumbnail', {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73',
      extension: 'jpg',
    });
    await render(hbs`<Card @thumbnail=thumbnail />`);

    assert.equal(this.element.textContent.trim(), '');
  });
});
