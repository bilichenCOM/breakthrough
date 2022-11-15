// language that will be used when the site is entered
const defaultLocale = 'ukr';

var setlocale;

$(document).ready(function() {
    $.i18n().load( {
        'eng': 'assets/js/i18n/eng.json',
        'ukr': 'assets/js/i18n/ukr.json',
        'rus': 'assets/js/i18n/rus.json'
    }).done(function() {
        console.log('locales were loaded successfully');
        $.i18n().locale = defaultLocale;
        $('html').i18n();
        setlocale = defaultLocale;
    });
    
    $('.switch-locale').click(function(e) {
        var locale = $(this).data('locale');
        if (locale === setlocale) {
            return;
        }
        $.i18n().locale = locale;
        $('html').i18n();
        setlocale = locale;
    });
});
