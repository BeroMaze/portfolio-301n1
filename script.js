var spin2Start = true;
$('#logoTop').on('click', function() {
  var opacity = $('.navImg').css('opacity');
  $('.navImg').toggleClass('spin');
  if(spin2Start === false){
    $('.navImg').toggleClass('spin2');
  }
  spin2Start = false;
  if (opacity === '1') {
    $('.navImg').animate({opacity: 0}, 500);
  }
  else {
    $('.navImg').animate({opacity: 1}, 500);
  }
  setTimeout(function(){
    $('nav').slideToggle('slow');
  }, 200);
});

$('#githubImg').on('click', function(event) {
  $('.navImg').not('#'+$(this).attr('id')).css('opacity', '.3');
  setTimeout(function(){
    window.open('https://github.com/BeroMaze', '_blank');
  }, 200);
  setTimeout(function(){
    $('.navImg').not('#'+$(this).attr('id')).css('opacity', '1');
  }, 300);
});

$('#linkedInImg').on('click', function(event) {
  $('.navImg').not('#'+$(this).attr('id')).css('opacity', '.3');
  setTimeout(function(){
    window.open('https://www.linkedin.com/in/coreyberning', '_blank');
  }, 200);
  setTimeout(function(){
    $('.navImg').not('#'+$(this).attr('id')).css('opacity', '1');
  }, 300);
});

$('#proImg').on('click', function(event) {
  $('.navImg').not('#'+$(this).attr('id')).css('opacity', '.3');
  setTimeout(function(){
    $('#mainView').html('<div id="iconView"></div>');
    $('main').css({
      'background-image': 'url("./img/iconPageBackground.jpg")',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'});
    $('#mainView').prepend('<h2 id="projectTitle">Programming Project</h2><select id="catagoryFilter"><option value="catagory">catagory</option></select><p id="projectDesc">Take a look trough all the different projects that I have done since I have Started Programing.</p>');
    iconsToPage();
    pickArticles();
    var newArrayC = projects.map(function(p){
      return '<option value="' + p.catagory + '">' + p.catagory + '</option>';
    });
    var uniqueArray = [];
    $.each(newArrayC, function(i, el){
      if($.inArray(el, uniqueArray) === -1) uniqueArray.push(el);
    });
    $(document).ready(function() {
      uniqueArray.forEach(function(catagory){
        $('#catagoryFilter').append(catagory);
      });

      $('#catagoryFilter').on('change', function() {
        if($(this).val() === 'catagory') {
          $('.articles').show();
        }
        else if ($(this).val()) {
          console.log($(this).val());
          $('.articles').hide();
          $('.articles[value*=' + $(this).val() + ']').show();
        }
      });
    });
  }, 200);

  setTimeout(function(){
    $('.navImg').not('#'+$(this).attr('id')).css('opacity', '1');
  }, 300);
});



var renderHome = function(){
  $('#mainView').html('<script id="mainScript" type="text/x-handlebars-template"><div id="mainTop"><h2 id="mainTitle">{{title}}</h2></div><div id="mainMiddle"><div class="middleLeft"><div class="overFlow"><p class="mainWords">{{desc1}}</p></div><div class="overFlow"><p class="mainWords">{{desc2}}</p></div></div><div class="middleCenter"><img src="./img/corey.jpg" id="coreyImg" /><h4 id="plac">{{name}}</h4></div><div class="middleRight"><div class="overFlow"><p class="mainWords">{{desc3}}</p></div><div class="overFlow"><p class="mainWords">{{desc4}}</p></div></div></div><div id="mainBottom"><p class="mainWords">{{desc5}}</p></div></div></script>');
  var template = $('#mainScript').html();
  var compiledTemplate = Handlebars.compile(template);
  var html = compiledTemplate(homePage);
  $('#mainView').append(html);
};
renderHome();

$('#homeImg').on('click', function(event) {
  $('.navImg').not('#'+$(this).attr('id')).css('opacity', '.3');
  setTimeout(function(){
    $('main').css({
      'background-image': 'none',
      'background-color': 'rgb(22, 1, 64)',
    });
    renderHome();
  }, 200);
  setTimeout(function(){
    $('.navImg').not('#'+$(this).attr('id')).css('opacity', '1');
  }, 300);
});


var count = 1;
var index = 0;
var allProjects = [];

var Projects = function(id, catagory, title, img, link, publishedOn, miniDesc, description){
  this.id = id;
  this.catagory = catagory;
  this.title = title;
  this.img = img;
  this.link = link;
  this.publishedOn = publishedOn;
  this.miniDesc = miniDesc;
  this.description = description;
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
};

var loadAll = function(data){
  data.sort(function(a, b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  allProjects = data.map(function(count, index){
    return count = new Projects(data[index].id, data[index].catagory, data[index].title, data[index].img, data[index].link, data[index].publishedOn, data[index].miniDesc, projects[index].description, data[index].daysAgo);
    index += 1;
    count += 1;
  });
};

var fetchLocal = function(){
  if (localStorage.data){
    loadAll(JSON.parse(localStorage.data));
  }
  else {
    $.getJSON('./articles.json', function(data) {
      loadAll(data);
      localStorage.data = JSON.stringify(data);
    });
  }
};
fetchLocal();

var iconsToPage = function(){
  $('#iconView').append('<script id="miniIconView" type="text/template"><article id="{{id}}" class="articles" value="{{catagory}}" ><img class="projectIcon" src="{{img}}" /><h3 class="iconTilte">{{title}}</h3><p class="publishedOn">Published {{daysAgo}} days ago</p><p class="descIcon">{{miniDesc}}</p><a href="{{link}}" class="descIcon">See Finished site.</a></article></script>');
  var template = $('#miniIconView').html();
  var compiledTemplate = Handlebars.compile(template);
  allProjects.forEach(function(all){
    var html = compiledTemplate(all);
    $('#iconView').append(html);
  });
};

var pickArticles = function(){
  $('.articles').on('click', function() {
    $pick = this.id;
    $('.articles').not('#'+$pick).css('opacity', '.3');
    setTimeout(function(){
      $('#mainView').html('<script id="hello" type="text/template"><h1 class="FullViewTitle">{{title}}</h1><a href="{{link}}" class="fullViewLink">Check Out The Site!</a><div id="flip"><img src="{{img}}" id="{{id}}" class="fullViewImg"/><div class="code"></div></div><p3 class="fullViewDesc"> {{description}} </p3><p4 class="created">Published {{daysAgo}} days ago</p4></script>');
      $('main').css({
        'background-image': 'none',
        'background-color': 'rgb(54, 14, 64)',
      });
      var template = $('#hello').html();
      var compiledTemplate = Handlebars.compile(template);
      var html = compiledTemplate(allProjects[$pick]);
      $('#mainView').append(html);
      $('.code').hide();
      showCode();
    }, 300);
  });
};
var showCode = function(){
  $('.fullViewImg').on('click', function() {
    event.preventDefault();
    $(this).hide();
    $pickId = $(this).attr('id');
    console.log($pickId);
    $('.code').show();
    // $('.code').html('<div id="topCode"><button id="javascript">JavaScript</button><button id="css">CSS</button><button id="html">HTML</button></div><div id="bottomCode"></div>');
    $('.code').html('<div><pre><code class="javascript">' + jsCodeArray[$pickId].code.toString() + '</code></pre></div>');
    $(document).ready(function() {
      $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
      });
    });
    showPic();
    $('#javascript').on('click', function() {
      event.preventDefault();
    });
    $('#css').on('click', function() {
      event.preventDefault();
    });
    $('#html').on('click', function() {
      event.preventDefault();
    });
  });
};
var showPic = function(){
  $('.code').on('click', function() {
    event.preventDefault();
    $('.code').hide();
    $('.fullViewImg').show();
  });
};

$('#socialBall').on('click', function(event) {
  var width = $('.expand').css('width');
  $('#socialBall').toggleClass('spin3');
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
