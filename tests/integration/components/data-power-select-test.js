import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('data-power-select', 'Integration | Component | data power select', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{data-power-select}}`);

  assert.equal(this.$().text().trim(), '');
});
