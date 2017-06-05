

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
    
function Set_RandomMarkerZoom () {
        for(var i = 0;i < 5; i++){
            window.setTimeout(
                function(){
                 Set_MarkerZoom (Math.floor((Math.random() * 5184) + 1),Math.floor((Math.random() * 5184) + 1), 'yo');   
                  }
                  , 1000);
        }
}