Meteor.methods({
    compileResults: function(searchParams){
        var wards = Wards.find().fetch();
        var wardRanking = setUpWardRanks();
        var wardAgeTotal = setUpWardAgeTotal();
        var wardIncomeTotal = setUpWardIncomeTotal();

        for(var i = 0; i < wards.length; i++){
            var wardAgeTotal = findWardAgeScore(wards[i].Gender.Male, searchParams.ageRange[0], searchParams.ageRange[1])

        }
    }
});

var setUpWardRanks = function(){
    return [
        {
            WardNo: 1,
            wardScore: 15
        },
        {
            WardNo: 2,
            wardScore: 15
        },
        {
            WardNo: 3,
            wardScore: 15
        },
        {
            WardNo: 4,
            wardScore: 15
        },
        {
            WardNo: 5,
            wardScore: 15
        },
        {
            WardNo: 6,
            wardScore: 15
        },
        {
            WardNo: 7,
            wardScore: 15
        },
        {
            WardNo: 8,
            wardScore: 15
        },
        {
            WardNo: 9,
            wardScore: 15
        },
        {
            WardNo: 10,
            wardScore: 15
        },
        {
            WardNo: 11,
            wardScore: 15
        }
    ]
};

var setUpWardAgeTotal = function () {
    return [
        {
            WardNo: 1,
            wardAgePop: 0
        },
        {
            WardNo: 2,
            wardAgePop: 0
        },
        {
            WardNo: 3,
            wardAgePop: 0
        },
        {
            WardNo: 4,
            wardAgePop: 0
        },
        {
            WardNo: 5,
            wardAgePop: 0
        },
        {
            WardNo: 6,
            wardAgePop: 0
        },
        {
            WardNo: 7,
            wardAgePop: 0
        },
        {
            WardNo: 8,
            wardAgePop: 0
        },
        {
            WardNo: 9,
            wardAgePop: 0
        },
        {
            WardNo: 10,
            wardAgePop: 0
        },
        {
            WardNo: 11,
            wardAgePop: 0
        }
    ]
};

var setUpWardIncomeTotal = function () {
    return [
        {
            WardNo: 1,
            totalInIncomeRange: 0
        },
        {
            WardNo: 2,
            totalInIncomeRange: 0
        },
        {
            WardNo: 3,
            totalInIncomeRange: 0
        },
        {
            WardNo: 4,
            totalInIncomeRange: 0
        },
        {
            WardNo: 5,
            totalInIncomeRange: 0
        },
        {
            WardNo: 6,
            totalInIncomeRange: 0
        },
        {
            WardNo: 7,
            totalInIncomeRange: 0
        },
        {
            WardNo: 8,
            totalInIncomeRange: 0
        },
        {
            WardNo: 9,
            totalInIncomeRange: 0
        },
        {
            WardNo: 10,
            totalInIncomeRange: 0
        },
        {
            WardNo: 11,
            totalInIncomeRange: 0
        }
    ]
};

var findWardAgeScore = function (genderData, min, max){

};

var isInRange = function(minRange, maxRange, minVal, maxVal){
    if(minVal > minRange){
        if( maxVal > maxRange){
            return true;
        }
    }
    return false;
};


var findGenderScore = function () {

};

var findTotalPopScore = function () {

};