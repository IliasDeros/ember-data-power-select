import { moduleForComponent, test } from 'ember-qunit';
import { run } from '@ember/runloop'

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

test('it queries the store with modelName and "search" as default queryKey', function(assert) {
  this.s.setProperties({
    modelName: 'model'
  })

  this.s.get('search')('term')

  assert.equal(this.queryArgs[0], 'model', 'first argument is "modelName"')
  assert.deepEqual(this.queryArgs[1], { search: 'term' })
});

test('it performs search on focus', function(assert){
  run(() => this.s.send('onTriggerFocus'))
  assert.deepEqual(this.queryArgs[1], { search: '' }, 'search an empty string on focus')
})

test('it queries the store with queryKey as query parameters', function(assert){
  this.s.setProperties({
    queryKey: 'q'
  })

  this.s.get('search')('term')

  assert.deepEqual(this.queryArgs[1], { q: 'term' })
})

test('it queries with queryKey and params', function(assert){
  this.s.setProperties({
    queryKey: 'q',
    params: { orderBy: 'name' }
  })

  this.s.get('search')('term')

  assert.deepEqual(this.queryArgs[1], {
    q: 'term',
    orderBy: 'name'
  })
})
