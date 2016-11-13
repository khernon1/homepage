(function($) {
  $(function() {

    // iterate through list
    let addressList = [
      {title: "Address", data: "307 5th Avenue"},
      {title: "Phone", data: "555-555-555"},
      {title: "Fax", data: "Who uses a fax?"},
      {title: "Email", data: "info@somecompany.com"},
      {title: "Connect", data: "facebook etc etc"}
    ]

    addressList.forEach(function(address, index) {
      $("#address-data").append("<p id='title'>" + address["title"] +
        "</p><p id='data'>" + address["data"] + "</p>") 
    })
  });
})(jQuery);