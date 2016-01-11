$('#logoTop').on('click', function() {
  $('nav').slideToggle('slow');
});

$("#githubImg").on('click', function(event) {
  window.open('https://github.com/BeroMaze', '_blank');
});

$("#linkedInImg").on('click', function(event) {
  window.open('https://www.linkedin.com/in/coreyberning', '_blank');
});

$("#proImg").on('click', function(event) {
  alert('Projects coming soon.');
  // window.open(url, '_self');
});

$("#homeImg").on('click', function(event) {
  window.open('./index.html', '_self');
});
var count = 1;
var index = 0;
var allProjects = [];

var Projects = function(title, img, link, miniDesc, description){
  this.title = title;
  this.img = img;
  this.link = link;
  this.miniDesc = miniDesc;
  this.description = description;
  allProjects.push(this);
};

projects.map(function(count, index){
  count = new Projects(projects[index].title, projects[index].img, projects[index].link, projects[index].description);
  count += 1;
  index += 1;
});

Pojects.prototype.html = function () {
  $('#iconView').append('<article class="articles"><img class="projectIcon"src=' + this.img + '/><h3 class="iconTilte">' + this.title + '</h3><p class="descIcon">' + this.miniDesc + '</p><a href=' + this.link + 'class="descIcon">See Finished site.</a></article>');
};
