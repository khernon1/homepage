(function($) {
  $(function() {
    
    // Toggle navigation
    $('#nav-toggle').click(function() {
      event.preventDefault()
      this.classList.toggle("active");
    // If sidebar is visible:
      if ($('body').hasClass('show-nav')) {
        // Hide sidebar
          $('body').removeClass('show-nav');
      } else { // If sidebar is hidden:        
          $('body').addClass('show-nav'); // Display sidebar
      }        
    });    
  });
})(jQuery);