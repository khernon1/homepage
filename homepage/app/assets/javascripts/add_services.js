(function($) {
  $(function() {

    // iterate through list
  $.ajax({
    method: "GET",
    url: "http://localhost:3000/taglines",
  }).done(function(response) {
    let servicesInfo = response[Math.floor(Math.random() * response.length)];
    let servicesList = [
      {title: "Unique Layouts", data: response[Math.floor(Math.random() * response.length)]},
      {title: "Responsive", data: response[Math.floor(Math.random() * response.length)]},
      {title: "Ajax Transitions", data: response[Math.floor(Math.random() * response.length)]},
      {title: "E-Commerce", data: response[Math.floor(Math.random() * response.length)]},
      {title: "Unlimited Portfolios", data: response[Math.floor(Math.random() * response.length)]},
      {title: "Powerful", data: response[Math.floor(Math.random() * response.length)]}
    ]

    servicesList.forEach(function(service, index) {
      $("#services-data").append("<p id='title'>" + service["title"] +
        "</p><p id='data'>" + service["data"].saying + "</p>")     
    })
  })
  });
})(jQuery);