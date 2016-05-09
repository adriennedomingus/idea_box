$( document ).ready(function() {
  $('#save').on('click', function(){
    $.ajax({
      type: "POST",
      url: "/api/v1/ideas",
      dataType: "json",
      data: {
        idea: {
          title: $('#title').val(),
          body: $('#body').val()
        }
      },
      success: function(data) {
        $('#headings').after("<tr><td>" + data["title"] + "</td> <td>" + data["body"] + "</td><td>" + data["quality"] + "</td></tr>");
        $("#new-idea-form")[0].reset();
      }
    });
  });
});
