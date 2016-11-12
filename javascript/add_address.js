(function($) {
  $(function() { // DOM Ready

    // iterate through list
    let servicesList = [
      {title: "Address", data: "307 5th Avenue"},
      {title: "Phone", data: "555-555-555"},
      {title: "Fax", data: "Who uses a fax?"},
      {title: "Email", data: "info@somecompany.com"},
      {title: "Connect", data: "facebook etc etc"}
    ]

    servicesList.forEach(function(service, index) {
      $("#address-data").append("<p id='title'>" + service["title"] +
        "</p><p id='data'>" + service["data"] + "</p>") 
    })

    $('#nav-toggle').click(function() {
      this.classList.toggle("active");
      // If sidebar is visible:
      if ($('body').hasClass('show-nav')) {
        // Hide sidebar
        $('body').removeClass('show-nav');
      } else { // If sidebar is hidden:
        $('body').addClass('show-nav');
        // Display sidebar
      }
    });
  });
})(jQuery);