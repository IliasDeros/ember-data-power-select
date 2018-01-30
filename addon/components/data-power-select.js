import PowerSelect from 'ember-power-select/components/power-select';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object'

export default PowerSelect.extend({
  store: service(),

  search: computed(function(){
    return () => this.get('store').query(
      this.get('modelName'), this.get('queryArgs')
    );
  })
});
