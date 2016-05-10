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
        $('#headings').after(newIdea(data));
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
        $("#idea-" + data.id).replaceWith(newIdea(data))
      }
    });
  });

  $('#idea-table').on('click', '.down', function(){
    var ideaId = parseInt(this.id.split('-')[1])
    var currentStatus = $(this.closest('tr').children[2]).text()
    if (currentStatus === "swill") {
      var newStatus = 0
    } else if ( currentStatus === "plausible") {
      var newStatus = 0
    } else if ( currentStatus === "genius") {
      var newStatus = 1
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
        $("#idea-" + data.id).replaceWith(newIdea(data))
      }
    });
  });

  $('#idea-table').on('click', '.title', function() {
    var that = this;
    $(that).attr('contentEditable', 'true')
    $(that).on('blur keydown', function(event) {
      if (event.type === "blur" || event.keyCode === 13) {
        changeStatus(that, {title: $(this).closest('.title').text()})
      }
    })
  })

  $('#idea-table').on('click', '.body', function(){
    var that = this;
    $(that).attr('contentEditable', 'true')
    $(that).on('blur keydown', function(event) {
      if (event.type === "blur" || event.keyCode === 13) {
        changeStatus(that, {body: $(this).closest('.body').text()})
      }
    })
  })

  var changeStatus = function(that, updatedInfo) {
    $.ajax({
      type: "PATCH",
      url: "/api/v1/ideas/" + $(that).parent()[0].id.split('-')[1],
      data: {
        idea: {
          title: updatedInfo.title,
          body: updatedInfo.body
        }
      },
      dataType: "json",
      success: function(data) {
        $("#idea-" + data.id).replaceWith(newIdea(data))
      }
    });
  }

  var newIdea = function(data) {
    return "<tr id='idea-" + data["id"] + "'><td class='title'>" + data["title"] + "</td> <td class='body'>" + data["body"] + "</td><td class='quality'>" + data["quality"] + "</td><td id='" + data["id"] + "' class='btn btn-default delete'>delete</td><td id='up-" + data.id + "' class='btn btn-default up'>thumbs up</td><td id='down-" + data.id + "' class='btn btn-default down'>thumbs down</td></tr>"
  }
});
