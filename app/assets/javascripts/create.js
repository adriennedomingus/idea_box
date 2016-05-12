function create() {
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
        prependIdea(data);
        clearForm();
      }
    });
  });
}

function prependIdea(data) {
  $('#headings').after(newIdea(data));
}

function clearForm() {
  $("#new-idea-form")[0].reset();
}
