function deleteIdea() {
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
}
