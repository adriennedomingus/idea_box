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
        $('#headings').after("<tr id='idea-" + data["id"] + "'><td>" + data["title"] + "</td> <td>" + data["body"] + "</td><td>" + data["quality"] + "</td><td id='" + data["id"] + "' class='btn btn-default delete'>delete</td></tr>");
        $("#new-idea-form")[0].reset();
      }
    });
  });

  $('#idea-table').on('click', 'td', function(){
    var ideaId = parseInt(this["id"])
    $.ajax({
      type: "DELETE",
      url: "/api/v1/ideas/" + ideaId,
      dataType: "json",
      success: function(data) {
        $("#idea-" + ideaId).remove()
      }
    });
  });
});
