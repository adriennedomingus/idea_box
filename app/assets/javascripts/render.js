function allIdeas() {
  $.ajax({
    type: "GET",
    url: "/api/v1/ideas",
    dataType: "json",
    data: {
      idea: {
        title: $('#title').val(),
        body: $('#body').val()
      }
    },
    success: function(data) {
      for (var i = 0; i < data.length; i++ ){
        prependIdea(data[i]);
      }
    }
  });
}
