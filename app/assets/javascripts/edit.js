function editTitle() {
  $('#idea-table').on('click', '.title', function() {
    var that = this;
    $(that).attr('contentEditable', 'true');
    $(that).on('blur keydown', function(event) {
      if (event.type === "blur" || event.keyCode === 13) {
        changeContent(that, {title: $(this).closest('.title').text()});
      }
    });
  });
}

function editBody() {
  $('#idea-table').on('click', '.body', function(){
    var that = this;
    $(that).attr('contentEditable', 'true');
    $(that).on('blur keydown', function(event) {
      if (event.type === "blur" || event.keyCode === 13) {
        changeContent(that, {body: $(this).closest('.body').text()});
      }
    });
  });
}

function changeContent(that, updatedInfo) {
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
      $("#idea-" + data.id).replaceWith(newIdea(data));
    }
  });
}
