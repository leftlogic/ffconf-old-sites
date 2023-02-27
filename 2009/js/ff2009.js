(function () {

$('a.reveal').live('click', function () {
  var link = this,
      $target = $(this.hash);

  if ($target.is(':visible')) {
    $target.animate({ height : 0 }, 300, function () {
      $target.hide();
    });
    $(link).find('span').text('More');
  } else {
    $target.show().animate({ height : $target.data('height') }, 300);
    $(link).find('span').text('Less');
  }
  return false;  
});

$('#speakers article > section:not(#freeticket)').each(function () {
  // more about link
  var $more = $(this).find('> p:not(:first, .more)'),
      more, $wrapper, height;
  
  if ($more.length) {
    name = $more.parent().find('h3').text().split(' ')[0];
    $wrapper = $more.wrapAll('<div id="more-' + name.toLowerCase() + '" />').parent();
    $wrapper.data('height', $wrapper.height());
    
    $wrapper.hide().css({ height: 0 }).after('<p class="more"><a class="reveal" href="#more-' + name.toLowerCase() + '"><span>More</span> about ' + name + '</a></p>');
  }
  
  // reveal talk
  var $talk = $(this).find('.talk');
  if ($talk.length) {
    $talk.attr('id', 'talk-' + name.toLowerCase());
    name = $talk.parent().find('h3').text().split(' ')[0];
    
    $talk.data('height', $talk.height()).hide().css({ height: 0 }).after('<p class="more"><a class="reveal" href="#talk-' + name.toLowerCase() + '">' + name + '\'s talk</a></p>');
  }
});

})();