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
