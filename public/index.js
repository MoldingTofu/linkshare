$(document).ready(function() {

  $('#create').click(createShort);

});

function createShort() {
  var url = $('#url').val();

  if (url === '') {

  }
  else {
    $.ajax({
      "method": "POST",
      "crossDomain": true,
      "url": "http://localhost:8080/",
      "data": {
        "url": url
      },
      "success": console.log('success'),
      "error": function (err) {
        console.log(error);
      }
    });
  }
}
