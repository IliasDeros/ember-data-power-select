import { guidFor } from '@ember/object/internals'
import DS from 'ember-data'

export default DS.RESTSerializer.extend({
  normalizeArrayResponse(_0, _1, payload){
    payload.users = payload.results;
    payload.users.forEach(u => u.id = guidFor(u.id))
    return this._super(...arguments);
  },
});