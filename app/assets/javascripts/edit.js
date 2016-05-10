function editTitle() {
  $('#idea-table').on('click', '.title', function() {
    var that = this;
    $(that).attr('contentEditable', 'true')
    $(that).on('blur keydown', function(event) {
      if (event.type === "blur" || event.keyCode === 13) {
        changeStatus(that, {title: $(this).closest('.title').text()})
      }
    })
  })
}

function editBody() {
  $('#idea-table').on('click', '.body', function(){
    var that = this;
    $(that).attr('contentEditable', 'true')
    $(that).on('blur keydown', function(event) {
      if (event.type === "blur" || event.keyCode === 13) {
        changeStatus(that, {body: $(this).closest('.body').text()})
      }
    })
  })
}
