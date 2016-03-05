/**
 * Created by darkl on 3/5/2016.
 */
Router.route('/', {
    name: "root",
    template: "root",
    waitOn: function () {

    },
    data: function(){

    }
});

Router.route('currentLocation', {
    name: "currentLocation",
    template: "currentLocation",
    waitOn: function () {

    },
    data: function () {

    }
});

Router.route('wardStatistics/:wardNo', {
    name: "wardStatistics",
    template: "wardStatistics",
    waitOn: function () {

    },
    data: function () {
        return Wards.findOne({WardNo:parseInt(this.params.wardNo)});
    }
});

Router.route('whereToGo', {
    name: "whereToGo",
    template: "whereToGo",
    waitOn: function () {

    },
    data: function () {

    }
});

Router.route('whichWardIsBest', {
    name: "whichWardIsBest",
    template: "whichWardIsBest",
    waitOn: function () {

    },
    data: function () {

    }
});
