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
        $('#headings').after("<tr id='idea-" + data["id"] + "'><td>" + data["title"] + "</td> <td>" + data["body"] + "</td><td class='quality'>" + data["quality"] + "</td><td id='" + data["id"] + "' class='btn btn-default delete'>delete</td><td id='up-" + data.id + "' class='btn btn-default up'>thumbs up</td></tr>");
        $("#new-idea-form")[0].reset();
      }
    });
  });

  $('#idea-table').on('click', '.delete', function(){
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

  $('#idea-table').on('click', '.up', function(){
    var ideaId = parseInt(this.id.split('-')[1])
    var currentStatus = $(this.closest('tr').children[2]).text()
    if (currentStatus === "swill") {
      var newStatus = 1
    } else if ( currentStatus === "plausible") {
      var newStatus = 2
    } else if ( currentStatus === "genius") {
      var newStatus = 2
    }
    $.ajax({
      type: "PATCH",
      url: "/api/v1/ideas/" + ideaId,
      data: {
        idea: {
          quality: parseInt(newStatus)
        }
      },
      dataType: "json",
      success: function(data) {
        $("#idea-" + data.id).replaceWith("<tr id='idea-" + data["id"] + "'><td>" + data["title"] + "</td> <td>" + data["body"] + "</td><td class='quality'>" + data["quality"] + "</td><td id='" + data["id"] + "' class='btn btn-default delete'>delete</td><td id='up-" + data.id + "' class='btn btn-default up'>thumbs up</td></tr>")
      }
    });
  });
});
