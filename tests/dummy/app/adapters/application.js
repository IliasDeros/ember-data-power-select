import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://randomuser.me',
  namespace: 'api',

  urlForQuery (){
    const { host, namespace } = this.getProperties('host', 'namespace');
    return `${host}/${namespace}`;
  }
});