(function($) {
  $(function() {

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
      $("#services-data").append("<p id='title'>" + service["title"] +
        "</p><p id='data'>" + service["data"] + "</p>") 
    })
  });
})(jQuery);