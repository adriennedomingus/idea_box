function downVote() {
  $('#idea-table').on('click', '.down', function(){
    var ideaId = parseInt(this.id.split('-')[1])
    var currentStatus = $(this.closest('tr').children[2]).text()
    var newStatus = newDownStatus(currentStatus)
    updateStatus(ideaId, newStatus);
  });
}

function upVote() {
  $('#idea-table').on('click', '.up', function(){
    var ideaId = parseInt(this.id.split('-')[1])
    var currentStatus = $(this.closest('tr').children[2]).text()
    var newStatus = newUpStatus(currentStatus)
    updateStatus(ideaId, newStatus);
  });
}

function newUpStatus(currentStatus) {
  if (currentStatus === "swill") {
    return 1
  } else if ( currentStatus === "plausible") {
    return 2
  } else if ( currentStatus === "genius") {
    return 2
  }
}

function newDownStatus(currentStatus) {
  if (currentStatus === "swill") {
    return 0
  } else if ( currentStatus === "plausible") {
    return 0
  } else if ( currentStatus === "genius") {
    return 1
  }
}

function updateStatus(ideaId, newStatus){
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
}

function changeStatus(that, updatedInfo) {
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
