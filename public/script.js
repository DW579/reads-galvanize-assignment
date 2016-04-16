$(document).ready(function() {
  console.log('sdfjslkdfjl')
  var $innerAuthors = $('#innerAuthors');
  var $innerBooks = $('#innerBooks');
  var $sidebarTop = $('#sidebarTop');
  var $sidebarBottom = $('#sidebarBottom');

  $innerAuthors.on('mouseover', function() {
    $innerAuthors.css('opacity', .3);
  });

  $innerAuthors.on('mouseout', function() {
    $innerAuthors.css('opacity', 1);
  });

  $innerBooks.on('mouseover', function() {
    $innerBooks.css('opacity', .3);
  });

  $innerBooks.on('mouseout', function() {
    $innerBooks.css('opacity', 1);
  });

  $sidebarTop.on('mouseover', function() {
    $sidebarTop.css('opacity', .3);
  });

  $sidebarTop.on('mouseout', function() {
    $sidebarTop.css('opacity', 1);
  });

  $sidebarBottom.on('mouseover', function() {
    $sidebarBottom.css('opacity', .3);
  });

  $sidebarBottom.on('mouseout', function() {
    $sidebarBottom.css('opacity', 1);
  });
});
