Template.currentLocation.events({
    "submit form": function(e){
        e.preventDefault();

        var wardNo = $('input[type=radio][name=group1]:checked').attr('id');
        Router.go('/wardStatistics/' + wardNo.charAt(4));
    }
});