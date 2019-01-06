$(document).ready(function() {
  alert('script');

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
    fetch('http://localhost:8080/')
      .then(function(res) {
        return res.json();
      })
      .then(function(link) {
        console.log("got link: %s", JSON.stringify(link));
        $('#short').append("<p>" + JSON.stringify(link) + "</p>");
      });
  }
}
