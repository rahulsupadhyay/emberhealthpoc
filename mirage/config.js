export default function() {
  this.namespace = '/api';

  let claims = [{
        type: 'claims',
        id: '1',
        attributes: {
          "claim-id": '111',
          "policy-number": 'P1',
          "insured-id": '11',
          "claim-status": 'Submitted',
          "start-date": '2017-05-05',
          "end-date": '2018-05-05',
          "edit-indicator": 'false',
          "claim-rep-comments": 'NA'
        }
      }, {
        type: 'claims',
        id: '2',
        attributes: {
          "claim-id": '112',
          "policy-number": 'P1',
          "insured-id": '11',
          "claim-status": 'Submitted',
          "start-date": '2017-05-05',
          "end-date": '2018-05-05',
          "edit-indicator": 'false',
          "claim-rep-comments": 'NA'
        }
      }, {
        type: 'claims',
        id: '3',
        attributes: {
          "claim-id": '131',
          "policy-number": 'P1',
          "insured-id": '11',
          "claim-status": 'Submitted',
          "start-date": '2017-05-05',
          "end-date": '2018-05-05',
          "edit-indicator": 'false',
          "claim-rep-comments": 'NA'
        }
      }];

      this.get('/claims', function(db, request) {
      if(request.queryParams.policyNumber !== undefined) {
        let filteredClaims = claims.filter(function(i) {
          return i.attributes.id.indexOf(request.queryParams.policyNumber) !== -1;
        });
        return { data: filteredClaims };
      } else {
        return { data: claims };
      }
    });
}
