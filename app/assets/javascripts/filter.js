function filter() {
  $('.filter-button').on('click', function(){
    var quality = this.id
    $.each($('tr'), function(key, row){
      if (quality === "all") {
        row.className = ""
      } else if (row.children[2].innerHTML !== quality && row.children[2].innerHTML !== "<h4>Quality</h4>") {
        row.className = "hidden"
      } else {
        row.className = ""
      }
    })
  })
}
