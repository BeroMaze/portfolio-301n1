// $('.expand').slideToggle();

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
  $('#mainView').html('<div id="iconView"></div>');
  $('main').css({
    'background-image': 'url("./img/iconPageBackground.jpg")',
    'background-repeat': 'no-repeat',
    'background-size': 'cover'});
  $('#mainView').prepend('<h2 id="projectTitle">Programing Project</h2><p id="projectDesc">Take a look trough all the different projects that I have done since I have Started Programing.</p>');
  iconsToPage();
  pickArticles();
});

$("#homeImg").on('click', function(event) {
  window.open('./index.html', '_self');
});
var count = 1;
var index = 0;
var allProjects = [];

var Projects = function(id, title, img, link, publishedOn, miniDesc, description){
  this.id = id;
  this.title = title;
  this.img = img;
  this.link = link;
  this.publishedOn = publishedOn;
  this.miniDesc = miniDesc;
  this.description = description;
  allProjects.push(this);
};

projects.map(function(count, index){
  count = new Projects(projects[index].id, projects[index].title, projects[index].img, projects[index].link,  projects[index].publishedOn, projects[index].miniDesc);
  count += 1;
  index += 1;
});

Projects.prototype.html = function () {
  var date = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  $('#iconView').append('<article id=' + this.id + ' class="articles"><img class="projectIcon"src=' + this.img + '/><h3 class="iconTilte">' + this.title + '</h3><p class="publishedOn">Created: ' + date + ' days ago</p><p class="descIcon">' + this.miniDesc + '</p><a href=' + this.link + 'class="descIcon">See Finished site.</a></article>');
};

var iconsToPage = function(){
  allProjects.forEach(function(i) {
    i.html();
  });
};

var pickArticles = function(){
  $('.articles').on('click', function() {
    $('#mainView').html('');
    $('main').css({
      'background-image': 'none',
      'background-color': 'rgb(54, 14, 64)',
    });
    var $pick = this.id;

    projects.forEach(function(w){
      var date = parseInt((new Date() - new Date(w.publishedOn))/60/60/24/1000);
      if($pick === w.id){
        $('#mainView').html('<h1 class="FullViewTitle">' +  w.title + '</h1><a href=' + w.link + ' class="fullViewLink">Check Out The Site! </a><img src=' + w.img + ' class="fullViewImg"/><p3 class="fullViewDesc">' + w.description + '</p3><p4 class="created">Created: ' + date + ' days ago</p4>');
      };
    });
  });
};

// $('#socialBall').on('click', function(event) {
//   $('.expand').slideToggle();
// });
$('#socialBall').on('click', function(event) {
  var width = $('.expand').css('width');
  console.log(width);
  if (width === '0px') {
  $('.expand').animate({width: '1000px'}, 3000);
  }
  else{
    $('.expand').animate({width: '0px'}, 3000);
  }
});

$('.hoverBottom').hover(function(){
  $(this).toggleClass('addBottom');
});
$('.hoverTop').hover(function(){
  $(this).toggleClass('addTop');
});
$('.hoverMain').hover(function(){
  $(this).toggleClass('addMain');
});
$('#githubBottom').on('click', function() {
  window.open('https://github.com/BeroMaze', '_blank');
});
$('#linkedinBottom').on('click', function() {
  window.open('https://www.linkedin.com/in/coreyberning', '_blank');
});
$('#google').on('click', function() {
  window.open('https://plus.google.com/u/0/105555715243460866385', '_blank');
});
$('#soundcloud').on('click', function() {
  window.open('https://soundcloud.com/beromaze', '_blank');
});
$('#facebook').on('click', function() {
  window.open('https://www.facebook.com/corey.berning', '_blank');
});
$('#twitter').on('click', function() {
  window.open('https://twitter.com', '_blank');
});
