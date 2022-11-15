function collapse() {
    $('.navbar-collapse').collapse('hide');
  }

  function swap(e) {
    var selected = $(this).html();
    var selectedlocale = $(this).data('locale');
    var replace = $('.dropdown-toggle').html();
    var replacelocale = $('.dropdown-toggle').data('locale');

    $('.dropdown-toggle').html(selected);
    $(this).html(replace);
    $('.dropdown-toggle').data('locale', selectedlocale);
    $(this).data('locale', replacelocale);
  }
  
  $(document).ready(function() {
    $('.navbar-nav').on('click', 'a', collapse);

    $('.switch-locale').off('click', collapse);

    $('.dropdown-menu').on('click', 'a', swap);


    function toggleCollapse(element) {
      $(element).find('.cat-table').toggleClass('d-none');
      $(element).toggleClass('col-lg-4');
    }

    var last;
    $('.col-cat').on('click', function() {
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
    })
  });

  $('.col-cat').on('click', function() {
    $(this).find('img').toggleClass('activated');
  })