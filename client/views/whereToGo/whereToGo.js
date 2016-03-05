Template.whereToGo.rendered = function () {
    var slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [0, 5],
        connect: true,
        range: {
            'min': 0,
            'max': 85
        }
    })
};