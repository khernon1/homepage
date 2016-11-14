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
       $("#services-data").append("<p>" + service["title"] +
         "<ul>" + service["data"] + "</ul></p>") 
     })
  })
  });
})(jQuery);

    // let n = 1
    // footerList.forEach(function(footer, index) {      
    //   $("#footer-data" + n).append("<p id='title" +index + "'>" + footer["title"] +
    //     "</p>")
    //   footer["data"].forEach(function(data) {
    //     $("#footer-data" + n + " #title" + index).append("<ul>" + data + "</ul>")
    //   })
    //   if (index % 2 != 0) {
    //     n++
    //   }
    // })
      //     $('table #header').append("<td id='title" + index + "'>" + service["title"] +
      //   "</td>")
      // $('table #data').append("<td id='data" + index + "'>" + service["data"].saying +
      //   "</td>")