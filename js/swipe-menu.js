(function($){

	var $menu = $('#menu');
	var sorti = 0;
	$menu.hammer()
		.on('swiperight', function(e){
			if(sorti){
				return true;
			}
			$menu.transition({ x: '0%' });
			sorti = 1;
		})
		.on('swipeleft', function(e){
			if(!sorti){
				return true;
			}
			$menu.transition({ x: '-80%' });
			sorti = 0;
		});
		
})(jQuery);