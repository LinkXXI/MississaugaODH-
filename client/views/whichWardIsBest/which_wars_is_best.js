Template.whichWardIsBest.helpers({
   suggestedWard: function (rank) {
       return Session.get('suggestedWards')[rank -1].WardNo;
   }
});

Template.whichWardIsBest.rendered = function () {
    Meteor.call('compileResults', Session.get('searchParams'), function (err, data) {
        if(err){
            console.log(err);
            return;
        }
        Session.set('suggestedWards', data);
        console.log(data);
    })
};