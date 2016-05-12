$( document ).ready(function() {
  search();
  downVote();
  upVote();
  editTitle();
  editBody();
  deleteIdea();
  create();
  filter();
});

function newIdea(data) {
  var body = data.body;
  var trimmedBody = truncateBody(body);
  var newTr = createTr(data);
  newTr.appendChild(createTitleTd(data));
  newTr.appendChild(createBodyTd(data, trimmedBody));
  newTr.appendChild(createQualityTd(data));
  newTr.appendChild(createDeleteTd(data));
  newTr.appendChild(createUpTd(data));
  newTr.appendChild(createDownTd(data));
  return newTr;
}

function upImage() {
  var upImage = document.createElement('img');
  upImage.src = 'assets/up.png';
  return upImage;
}

function downImage() {
  var downImage = document.createElement('img');
  downImage.src = 'assets/down.png';
  return downImage;
}


function deleteImage() {
  var deleteImage = document.createElement('img');
  deleteImage.src = 'assets/delete.png';
  return deleteImage;
}

function createTr(data) {
  var newTr = document.createElement('tr');
  newTr.id = "idea-" + data.id;
  newTr.setAttribute('data-title', data.title);
  newTr.setAttribute('data-body', data.body);
  return newTr;
}

function createTitleTd(data) {
  var titleTd = document.createElement('td');
  titleTd.className = 'title';
  titleTd.innerHTML = data.title;
  return titleTd;
}

function createBodyTd(data, trimmedBody) {
  var bodyTd = document.createElement('td');
  bodyTd.className = 'body';
  bodyTd.innerHTML = trimmedBody;
  return bodyTd;
}

function createQualityTd(data) {
  var qualityTd = document.createElement('td');
  qualityTd.className = 'center quality';
  qualityTd.innerHTML = data.quality;
  return qualityTd;
}

function createDeleteTd(data) {
  var deleteTd = document.createElement('td');
  deleteTd.id = data.id;
  deleteTd.className = 'center delete';
  deleteTd.appendChild(deleteImage());
  return deleteTd;
}

function createUpTd(data) {
  var upTd = document.createElement('td');
  upTd.id = "up-" + data.id;
  upTd.className = 'center up';
  upTd.appendChild(upImage());
  return upTd;
}

function createDownTd(data) {
  var downTd = document.createElement('td');
  downTd.id = "down-" + data.id;
  downTd.className = 'center down';
  downTd.appendChild(downImage());
  return downTd;
}

function truncateBody(body) {
  var trimmedBody = body.replace(/^(.{80}[^\s]*).*/, "$1");
  if (trimmedBody != body) {
    var trimmedBody = trimmedBody + "...";
  }
  return trimmedBody;
}
