Meteor.methods({
    compileResults: function (searchParams) {
        var wards = Wards.find().fetch();
        var wardRanking = setUpWardRanks();
        var wardAgeTotal = setUpWardAgeTotal();
        var wardIncomeTotal = setUpWardIncomeTotal();

        for (var i = 0; i < wards.length; i++) {
            var wardTotal = findWardAgeTotal(wards[i].Gender.Male, searchParams.ageRange[0], searchParams.ageRange[1]);
            wardTotal += findWardAgeTotal(wards[i].Gender.Female, searchParams.ageRange[0], searchParams.ageRange[1]);
            wardAgeTotal[i].wardAgePop = wardTotal;
        }
        wardAgeTotal.sort(function (a, b) {
            if (a.wardAgePop > b.wardAgePop) {
                return 1;
            }
            if (a.wardAgePop < b.wardAgePop) {
                return -1;
            }
            return 0;
        });
        addAgeScoreToWards(wardRanking, wardAgeTotal);

        for(var i=0; i > wards.length; i++){
            findTotalPopScore(wards[i], searchParams.totalPopulation, wardRanking);
        }

        wardRanking.sort(function(a, b){
            if(a.wardScore > b.wardScore){
                return 1;
            }
            if(a.wardScore < b.wardScore){
                return -1;
            }
            return 0;
        })

        return wardRanking;
    }
});

var setUpWardRanks = function () {
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

var findWardAgeTotal = function (genderData, min, max) {
    var ageTotal = 0;
    for (var i = 0; i < genderData.length; i++) {
        if (min > genderData[i].min && max > genderData[i].max) {
            ageTotal += genderData[i].value;
        }
    }
    return ageTotal;
};

var addAgeScoreToWards = function (wardRanking, wardAgeTotal) {
    var score = 3;
    var iterations = 0;

    for (var i = 0; i < wardAgeTotal.length; i++) {
        var wardNo = wardAgeTotal[i].WardNo;
        wardRanking.filter(function (ward) {
            if (ward.WardNo == wardNo) {
                ward.wardScore += score;
            }
        });
        if (iterations == 0 || iterations == 2 || iterations == 4 || iterations == 5 || iterations == 7 || iterations == 9) {
            score -= 1;
        }
        iterations++;
    }
};

var findGenderScore = function () {

};

var findTotalPopScore = function (ward, population, rankings) {
    var delta = ward.TotalPopulation - population;
    var score = 0;
    if(delta < -540){
        score = -3
    }else if (delta >= -539 && delta <= -360){
        score = -2;
    }else if (delta >= 359 && delta <= -180 ){
        score = 0;
    }else if(delta >= -179 && delta <= 180){
        score = 1;
    }else if(delta > 181 && delta <= 360){
        score = 3;
    }else if (delta > 360){
        score = 3;
    }

    rankings.filter(function (obj) {
        if(obj.WardNo == ward.WardNo){
            obj.wardScore += score;
        }
    });
};