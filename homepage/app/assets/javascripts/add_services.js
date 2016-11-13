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
      $("#services-data").append("<div class='col-xs-4'><p>" + service["title"] +
        "</p><p>" + service["data"].saying + "</p></div>")     
    })
  })
  });
})(jQuery);

      //     $('table #header').append("<td id='title" + index + "'>" + service["title"] +
      //   "</td>")
      // $('table #data').append("<td id='data" + index + "'>" + service["data"].saying +
      //   "</td>")