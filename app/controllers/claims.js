import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByPolicy(param) {
      if (param !== '') {
        return this.get('store').query('claim', { policyNumber: param });
      } else {
        return this.get('store').findAll('claim');
      }
    }
  }
});
