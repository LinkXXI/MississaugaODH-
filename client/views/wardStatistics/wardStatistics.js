Template.wardStatistics.helpers({
    genderTotalMale: function () {
        var male = 0;
        $.each(this.data.Gender.Male, function () {
            male += this.value;
        });
        return male;
    },
    genderTotalFemale: function () {
        var female = 0;
        $.each(this.data.Gender.Female, function () {
            female += this.value;
        });
        return female;
    },
    zeroToFourm: function () {
        return this.Gender.Male[0].value;
    },
    fiveToNinem: function () {
        return this.Gender.Male[1].value;
    },

    tenToFourteenm: function () {
        return this.Gender.Male[2].value;
    },
    zeroToFourf: function () {
        return this.Gender.Female[0].value;
    },
    fiveToNinef: function () {
        return this.Gender.Female[1].value;
    },

    tenToFourteenf: function () {
        return this.Gender.Female[2].value;
    }
});