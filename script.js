// pagetopに戻る　easing
;(function (d, $) {
  // part.2
  // var $pagetop = isMobile()?$('.pagetop'):
  // (function(){
  //   return $('.pagetop').removeClass('pagetop').addClass('pagetop2');
  // })(),
  // pagetop_offset = 400;

  //part.3
  var $pagetop = isMobile()?$('.pagetop'):
  (function(){
    return $('.pagetop').removeClass('pagetop').addClass('pagetop3');
  })(),
  pagetop_offset = 400;

  $pagetop.on('click', function(e){
    e.preventDefault();
    var _dest = $($(this).find('a').attr('href')).offset().top;
    $('html, body').animate({
      scrollTop: _dest},800, 'easeInOutQuart');
      //reference http://semooh.jp/jquery/cont/doc/easing/
  });

  //part.2
  // if(!isMobile()){
  //   $pagetop.hide();
  //   $(window).on('scroll', function(){
  //     if($(this).scrollTop() > pagetop_offset){
  //       $pagetop.fadeIn(400);
  //     } else {
  //       $pagetop.fadeOut(400);
  //     }
  //   });
  // }

  //part.3
  if(!isMobile()){
    // $pagetop.hide();
    $(window).on('scroll', function(){
      if($(this).scrollTop() > pagetop_offset){
        $pagetop.css('visibility', 'visible').addClass('visible');
      } else {
        $pagetop.removeClass('visible');
      }
    });
  }
  function isMobile(){
    return typeof window.orientation != "undefined";
  }
})(document, jQuery);

// Part.1
// pagetopに戻る　footerに固定用
// ;(function (d, $) {
//   $(".pagetop a").on('click', function(e){
//     e.preventDefault();
//     $('html, body').animate({
//       scrollTop: $($(this).attr("href")).offset().top},800, 'easeInOutQuart');
//   });
// })(document, jQuery);
