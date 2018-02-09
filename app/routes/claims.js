import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    return this.get('store').findAll('claim');
    /*return [{
        id: '1',

          claimID: '111',
          policyNumber: 'P1',
          insuredId: '11',
          claimStatus: 'Submitted',
          startDate: '2017-05-05',
          endDate: '2018-05-05',
          editIndicator: 'false',
          claimRepComments: 'NA'

      }, {

        id: '2',

          claimID: '112',
          policyNumber: 'P1',
          insuredId: '11',
          claimStatus: 'Submitted',
          startDate: '2017-05-05',
          endDate: '2018-05-05',
          editIndicator: 'false',
          claimRepComments: 'NA'

      }, {

        id: '3',

          claimID: '131',
          policyNumber: 'P1',
          insuredId: '13',
          claimStatus: 'Submitted',
          startDate: '2017-05-05',
          endDate: '2018-05-05',
          editIndicator: 'false',
          claimRepComments: 'NA'


    }]; */
  }
});
