(function($) {
  $(function() {

    // iterate through list
    let socialIcons = `
    <a target="_blank" href="https://www.wikipedia.org/wiki/Special:Random" class="btn btn-social-icon btn-facebook">
      <span class="fa fa-facebook"></span>
    </a>
    <a target="_blank" href="https://www.wikipedia.org/wiki/Special:Random" class="btn btn-social-icon btn-twitter">
      <span class="fa fa-twitter"></span>
    </a>
    <a target="_blank" href="https://www.wikipedia.org/wiki/Special:Random" class="btn btn-social-icon btn-linkedin">
      <span class="fa fa-linkedin"></span>
    </a>
      `
    let addressList = [
      {title: "Address", data: "307 5th Avenue, 16th Floor, New York, NY 10016"},
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