Template.whereToGo.events({
    "submit form": function (e, template){
        e.preventDefault();

        var searchParams = {};

        var minAge = parseInt($('#fromAge').val());
        var maxAge = parseInt($('#toAge').val());
        searchParams.ageRange = [minAge, maxAge];

        var minIncome = parseInt($('#fromIncome').val());
        var maxIncome = parseInt($('#toIncome').val());
        searchParams.incomeRange = [minIncome, maxIncome];

        searchParams.preferedGender = $('input[type=radio][name=gender]:checked').attr('id');
        searchParams.genderPercent = parseInt($('#genderPercent').val());

        searchParams.totalPopulation = $('#totalPopulation').val();

        Session.set('searchParams', searchParams);
        Router.go('/whichWardIsBest');
    }
});

Template.whereToGo.rendered = function () {
};