import DS from 'ember-data';
import { computed } from '@ember/object'

export default DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr(),
  picture: DS.attr(),

  fullName: computed('name', function(){
    const name = this.get('name')
    return `${name.first} ${name.last}`
  })
})