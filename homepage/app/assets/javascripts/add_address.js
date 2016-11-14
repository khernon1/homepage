(function($) {
  $(function() {

    // iterate through list
    let socialIcons = `
    <a class="btn btn-social-icon btn-facebook">
      <span class="fa fa-facebook"></span>
    </a>
    <a class="btn btn-social-icon btn-twitter">
      <span class="fa fa-twitter"></span>
    </a>
    <a class="btn btn-social-icon btn-linkedin">
      <span class="fa fa-linkedin"></span>
    </a>
      `
    let addressList = [
      {title: "Address", data: "307 5th Avenue"},
      {title: "Phone", data: "555-555-555"},
      {title: "Fax", data: "Who uses a fax?"},
      {title: "Email", data: "info@somecompany.com"},
      {title: "Connect", data: socialIcons}
    ]

    addressList.forEach(function(address, index) {
      $("#address-data").append("<p id='title'>" + address["title"] +
        "</p><p id='data'>" + address["data"] + "</p>") 
    })
  });
})(jQuery);