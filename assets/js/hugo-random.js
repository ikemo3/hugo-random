function random_jump() {
  var pageNum = sitePageList.length;
  var index = Math.floor(Math.random() * pageNum);
  document.location = sitePageList[index].url;
}
