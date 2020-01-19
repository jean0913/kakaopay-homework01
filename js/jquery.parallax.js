(function($){
$.fn.parallax = function(options){

    var settings = $.extend({
        intensity: 1
   }, options);

    var target = $(this);
    
    // get object details
    
        var objectHeight = $(this).outerHeight();

    // get window details

    	var windowHeight = $(window).height();
    	var pageHeight = $('body').height();
    
    // do things on scroll
    
        $(window).scroll(function(){
            
            var scrollPosition = $(window).scrollTop();
            var progress =  scrollPosition / (pageHeight-windowHeight) * 100;
            var progress = progress.toFixed(2);

            var offset = progress * settings.intensity;
            
            $(target).css('-webkit-transform', 'translateY(' + offset + 'px');
            $(target).css('-moz-transform', 'translateY(' + offset + 'px');
            $(target).css('transform', 'translateY(' + offset + 'px');
            
        });
    
};
})(jQuery);
