import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('data-power-select', 'Unit | Component | data power select', {
  unit: true,

  beforeEach(){
    let queryArgs
    this.queryArgs = queryArgs = []
    this.s = this.subject({
      onchange: function(){},
      store: {
        query: (a1, a2) =>
          queryArgs.push(a1, a2)
      }
    })
  }
});

test('it queries the store with modelName and queryArgs', function(assert) {
  const args = {}
  this.s.setProperties({
    modelName: 'model',
    queryArgs: args
  })

  this.s.get('search')()

  assert.equal(this.queryArgs[0], 'model', 'first argument is "modelName"')
  assert.equal(this.queryArgs[1], args, 'second argument is "queryArgs"')
});
