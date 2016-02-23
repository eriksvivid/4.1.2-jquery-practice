
$(function() {

    function close_accordion_section() {
      $('.accordion .accordion-section-title').removeClass('active');
      $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
  }

  $('.accordion-section-title').on('click', function() {
      // Grab current anchor value
      var currentAttrValue = $(this).attr('.accordion-section-title');

      if($(this).is('.active')) {
          close_accordion_section();
      }else {
          close_accordion_section();

          // Add active class to section title
          $(this).addClass('active');
          // Open up the hidden content panel
          $('.accordion ' + currentAttrValue.attr('href')).slideDown(300).addClass('open');
      }

      e.preventDefault();





});
