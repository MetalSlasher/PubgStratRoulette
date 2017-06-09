        jQuery(function($){
        
            /*
        if($(window).width() > $(window).height()){
            var map_width_max = ($(window).width() / 3);
            var map_height_max = $(window).height() * 0.8;
            var map_width = '600px';
            var map_height = '600px';
        }else{
            var map_width_max = $(window).width();
            var map_height_max = $(window).height() / 2;
            var map_width = '50%';
            var map_height = '99.5%';
        }*/
    
            
        var map_width = '500px';
        var map_width_max = $(window).width() / 3;
        var map_height = '500px';
        var map_height_max = $(window).height() * 0.8;
        
		$('#yourImageID').smoothZoom({			
			width: map_height,
			height: map_width,
            max_WIDTH: map_width_max,
            max_HEIGHT: map_height_max,
			pan_BUTTONS_SHOW: "NO",
			pan_LIMIT_BOUNDARY: "YES",
			button_SIZE: 24,
			button_ALIGN: "top right",	
			zoom_MAX: 200,
			border_TRANSPARENCY: 20,
			container: 'mapsection',
            
            animation_SMOOTHNESS: 0.5,
            animation_SPEED_ZOOM: 0.1,
            animation_SPEED_PAN: 0.1,
			
			/******************************************
			Enable Responsive settings below if needed.
			Max width and height values are optional.
			******************************************/
			responsive: true,
			responsive_maintain_ratio: true
		});	
});
        
            function Set_MarkerZoom (x_marker,y_marker, markername) {
        $('#yourImageID').smoothZoom('addLandmark', 
			[
			'<div class="item mark" data-show-at-zoom="0" data-position="'+x_marker+','+y_marker+'">\
				<div>\
					<div class="text">\
					<strong>'+markername+'</strong>\
				</div>\
				<img src="images/marker.png" width="23px" height="32px" alt="mark 1" />\
				</div>\
			</div>'
			]
		);
        
        $('#yourImageID').smoothZoom('focusTo', {x:x_marker, y:y_marker, zoom:200, speed:0.1});
    }