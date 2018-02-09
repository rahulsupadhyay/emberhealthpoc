import DS from 'ember-data';

export default DS.Model.extend({
  claimId: DS.attr(),
  policyNumber: DS.attr(),
  insuredId: DS.attr(),
  claimStatus: DS.attr(),
  startDate: DS.attr(),
  endDate: DS.attr(),
  editIndicator: DS.attr(),
  claimRepComments:DS.attr()
});
