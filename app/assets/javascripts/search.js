function search() {
  $('#search-form').on('keyup', function(){
    currentSearch = this.search.value;
    $.getJSON('/api/v1/ideas', function(data) {
      $.each(data, function(key, idea) {
        searchShowHide(idea)
      })
    })
  });
}

function searchShowHide(idea) {
  if (idea.title.match(currentSearch) || idea.body.match(currentSearch)) {
    document.getElementById('idea-' + idea.id).style.display = "table-row"
  } else {
    document.getElementById('idea-' + idea.id).style.display = "none"
  }
}
