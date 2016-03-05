Template.whichWardIsBest.rendered = function () {
    Meteor.call('compileResults', Session.get('searchParams'), function (err, data) {
        if(err){
            console.log(err);
            return;
        }



    })
};