(function($) {
  $(function() {

    // iterate through list
    let footerList = [
      {title: "About", data: ["Company", "Jobs", "Press", "Engineering"]},
      {title: "Apps", data: ["Integrations", "iOS", "Android"]},
      {title: "Team Solutions", data: ["Marketing", "Project Management", "Managers"]},
      {title: "Support", data: ["Customer Sucess", "Terms & Privacy", "Contact Us", "Developers"]}
    ]

    // footers are added in groups of two to ease formatting
    // currently only two groups needed but another could be easily added
    let n = 1
    footerList.forEach(function(footer, index) {      
      $("#footer-data" + n).append("<p id='title" +index + "'>" + footer["title"] +
        "</p>")
      footer["data"].forEach(function(data) {
        $("#footer-data" + n + " #title" + index).append("<ul>" + data + "</ul>")
      })
      if (index % 2 != 0) {
        n++
      }
    })
  });
})(jQuery);