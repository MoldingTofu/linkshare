$(document).ready(function() {
  $('#create').click(function() {
    if ($('#url').val() === '') {
      console.log("clicked with nothing");
    }
    else {
      createShort();
    }
  });
});


function createShort() {
  var url = $('#url').val();

  if (url === "") {
    console.log("link empty");
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
