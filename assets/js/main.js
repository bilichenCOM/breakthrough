var churchLatitude = 46.570126;
var churchLongitude = 30.788651;

function collapse() {
    $('.navbar-collapse').collapse('hide');
}

function swapLocale(e) {
    var selected = $(this).html();
    var selectedlocale = $(this).data('locale');
    var replace = $('#locale-dropdown').html();
    var replacelocale = $('#locale-dropdown').data('locale');

    $('#locale-dropdown').html(selected);
    $(this).html(replace);
    $('#locale-dropdown').data('locale', selectedlocale);
    $(this).data('locale', replacelocale);
}

$(document).ready(function () {
    $('.navbar-nav').on('click', 'a', collapse);

    $('.switch-locale').off('click', collapse);

    $('#locale-dropdown-menu').on('click', 'a', swapLocale);


    function toggleCollapse(element) {
        $(element).find('.cat-table').toggleClass('d-none');
        $(element).toggleClass('col-lg-4');
    }

    var last;
    $('.col-cat').on('click', function () {
        toggleCollapse(this);
        if (last) {
            if (this != last) {
                toggleCollapse(last);
                last = this;
            } else {
                last = null;
            }
            return;
        }
        last = this;
    });

    initMap();
});

$('.col-cat').on('click', function () {
    $(this).find('img').toggleClass('activated');
})

function initMap() {
    const myLatLng = {lat: churchLatitude, lng: churchLongitude};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatLng,
    });

    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });
}

window.initMap = initMap;
