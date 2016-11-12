(function($) {
  $(function() { // DOM Ready

    // iterate through list
    let servicesInfo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    let servicesList = [
      {title: "Unique Layouts", data: servicesInfo},
      {title: "Responsive", data: servicesInfo},
      {title: "Ajax Transitions", data: servicesInfo},
      {title: "E-Commerce", data: servicesInfo},
      {title: "Unlimited Portfolios", data: servicesInfo},
      {title: "Powerful", data: servicesInfo}
    ]

    servicesList.forEach(function(service, index) {
      debugger
      $("#services-data").append("<p>" + service["title"] +
        "<ul>" + service["data"] + "</ul></p>") 
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