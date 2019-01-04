$(document).ready(function() {
  $('#create').click(function() {
    if ($('#url').val() === '') {
      alert("clicked with nothing");
    }
    else {
      createShort();
    }
  });
});


function createShort() {
  var url = $('#url').val();

  if (url === "") {
    alert("link empty");
  }
  else {
    $.ajax({
      "method": "POST",
      "crossDomain": true,
      "url": "http://localhost:8080/",
      "data": {
        "url": url
      },
      "success": alert('success'),
      "error": function (err) {
        alert(error);
      }
    });
  }
}
