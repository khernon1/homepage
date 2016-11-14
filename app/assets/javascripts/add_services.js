(function($) {
  $(function() {

    // iterate through list
  $.ajax({
    method: "GET",
    url: "http://localhost:3000/taglines",
  }).done(function(response) {
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
         "<p id='data'>" + service["data"] + "</p></p>") 
     })
  })
  });
})(jQuery);

   