$( document ).ready(function() {
  search();
  downVote();
  upVote();
  editTitle();
  editBody();
  deleteIdea();
  create();
  filter()
});

function newIdea(data) {
  var trimmedBody = truncateBody(data)
  return "<tr id='idea-" + data["id"] +
         "' data-title='" + data["title"] + "' data-body='" + trimmedBody +
         "'><td class='title'>" + data["title"] +
         "</td> <td class='body'>" + trimmedBody +
         "</td><td class='center quality'>" + data["quality"] +
         "</td><td id='" + data["id"] + "' class='center delete'><img src='assets/delete.png'></td><td id='up-" +
         data.id + "' class='center up'><img src='assets/up.png'></td><td id='down-" +
         data.id + "' class='center down'><img src='assets/down.png'></td></tr>"
}

function truncateBody(data) {
  body = data["body"]
  var trimmedBody = body.replace(/^(.{80}[^\s]*).*/, "$1");
  if (trimmedBody != body) {
    var trimmedBody = trimmedBody + "..."
  }
  return trimmedBody
}
