/* GLOBAL VARIABLE SPACE */

var timer;
var markerID=0;

/* END OF GLOBAL VARIABLE SPACE */

function getRandValues()
{

    
    /*setTimeout(function(){*/Animate();/*},800);*/
    button = document.getElementById("button");
    setTimeout(function(){button.click()},500);
    
    
    $('.landmarks').empty();
    $('#yourImageID').smoothZoom('refreshAllLandmarks');
    
    getBehavior();
    getLocation();
    getVehicle();
    getWeapon();
    getSupply();
    getCircle();
    getJump();
    

    
}


function getLocation()
{
   
var location = new Array();
var coordX = new Array();    
var coordY = new Array();    
    
location[1] = "Primorsk"; /*coords: 1030, 3390 */
location[2] = "Pier Town"; /*coords: 1800, 3600 */
location[3] = "Mylta"; /*coords: 3800, 3070 */
location[4] = "Novorepnoye"; /*coords: 3920, 3880 */
location[5] = "Gatka"; /*coords: 1395, 2525 */
location[6] = "Rozhok"; /*coords: 2570, 1895 */
location[7] = "Yasnaya Polyana"; /*coords: 3450, 1530 */
location[8] = "Georgopol"; /*coords: 1330, 1750 */
location[9] = "Lipovka"; /*coords: 4530, 1200 */
location[10] = "Mylta Power"; /*coords: 4600, 2820 */
location[11] = "Zharki"; /*coords: 735, 845 */
location[12] = "Stalber"; /*coords: 3630, 825 */
location[13] = "Severny"; /*coords: 2440, 785 */
location[14] = "School"; /*coords: 2690, 2080 */
location[15] = "Military Base"; /*removed Sosnovka from name because fucks up table*/
location[16] = "Novorepnoye Radio"; /*coords: 3510, 4015 */
location[17] = "Water Town and Ruins"; /*coords: 2050, 2020 */
location[18] = "Crater"; /*coords: 3995, 2385 */
location[19] = "Bunkers";
location[20] = "Villa"; /*coords: 3965, 1920 */
location[21] = "Shooting Range"; /*coords: 2170, 1075 */
location[22] = "Hospital"; /*coords: 970, 2020 */
location[23] = "Pochinki"; /*coords: 2320, 2600 */
    
coordX[2] = "1800";
coordX[1] = "1030";
coordX[3] = "3800";
coordX[4] = "3920";
coordX[5] = "1395";
coordX[6] = "2570";
coordX[7] = "3450";
coordX[8] = "1330";
coordX[9] = "4500";
coordX[10] = "4600";
coordX[11] = "735";
coordX[12] = "3630";
coordX[13] = "2440";
coordX[14] = "2690";
coordX[15] = "2860";
coordX[16] = "3510";
coordX[17] = "2050";
coordX[18] = "3995";
coordX[19] = "3825";
coordX[20] = "3965";
coordX[21] = "2170";
coordX[22] = "970";
coordX[23] = "2320";

coordY[1] = "3390";
coordY[2] = "3600";
coordY[3] = "3070";
coordY[4] = "3880";
coordY[5] = "2525";
coordY[6] = "1895";
coordY[7] = "1530";
coordY[8] = "1750";
coordY[9] = "2095";
coordY[10] = "2820";
coordY[11] = "845";
coordY[12] = "825";
coordY[13] = "785";
coordY[14] = "2080";
coordY[15] = "3980";
coordY[16] = "4015";
coordY[17] = "2020";
coordY[18] = "2385";
coordY[19] = "2520";
coordY[20] = "1920";
coordY[21] = "1075";
coordY[22] = "2020";
coordY[23] = "2600";
    
var randNumber = getRandom(1,23);
var randLocation = location[randNumber];
     
document.getElementById("location").innerHTML=randLocation;
    
$('#yourImageID').smoothZoom('Reset');
setTimeout(function(){Set_MarkerZoom(coordX[randNumber],coordY[randNumber],'here');},200);

    
}

function getBehavior()
{
   
var behavior = new Array();
behavior[1] = "Offensive";
behavior[2] = "Defensive";
behavior[3] = "Normal";
behavior[4] = "Ultra Campy";

    
var randNumber = getRandom(1,4);
var randBehavior = behavior[randNumber];
     
document.getElementById("behavior").innerHTML=randBehavior;  
    
    
/*return coord[randNumber];*/
}

function getJump()
{
    /*
    var jump = new Array();
    jump[1] = 20;
    jump[2] = 12;
    jump[3] = 5;
    
    var randNumber = getRandom(1,3);
    var randJump = jump[randNumber];
    */
    
    //document.getElementById("jump").innerHTML=randJump;  
    
    
    var randJump = getRandom(10,45);
    
    Countdown(randJump);
    

}

function Countdown(randJump)
{
    
    clearCountdown(timer);
    //document.getElementById("jump").textContent = "";        

    
    timer = setInterval(function()
    {
    randJump--;
    document.getElementById("jump").textContent = randJump;
        
    if(randJump <= 0)
        clearCountdown(timer);
        
    if(randJump==0)
        {
            document.getElementById("jump").textContent = "JUMP NOW!";
            document.getElementById("jump").className = "animated flash";   
        }
    },1000);
    
}

function clearCountdown(timer)
{
   clearInterval(timer);
}

function getVehicle()
{
    var vehicle = new Array();
    vehicle[1] = "Always";
    vehicle[2] = "Never";
    vehicle[3] = "Occasionally";
    
    var randNumber = getRandom(1,3);
    var randVehicle = vehicle[randNumber];
    
    document.getElementById("vehicle").innerHTML=randVehicle;  

}

function getWeapon()
{
    var weapon = new Array();
    weapon[1] = "Assault Rifle";
    weapon[2] = "Shotgun";
    weapon[3] = "Sniper";
    weapon[4] = "Submachine Gun";
    /*weapon[5] = "Melee";*/
    
    var randNumber = getRandom(1,4);
    var randWeapon = weapon[randNumber];
    
    document.getElementById("weapon").innerHTML=randWeapon;  

}

function getSupply()
{
    var supply = new Array();
    supply[1] = "Always";
    supply[2] = "Never";
    supply[3] = "Occasionally";
    supply[4] = "Once";
    supply[5] = "When Nearby";

    var randNumber = getRandom(1,5);
    var randSupply = supply[randNumber];
    
    document.getElementById("supply").innerHTML=randSupply;  

}

function getCircle()
{
    var circle = new Array();
    circle[1] = "As Soon As Possible";
    circle[2] = "As Late As Possible";
    circle[3] = "Normal";

    var randNumber = getRandom(1,3);
    var randCircle = circle[randNumber];
    
    document.getElementById("circle").innerHTML=randCircle;  

}


function Animate()
{
    
/*get all the elements*/
var behavior = document.getElementById("behavior");
var jump = document.getElementById("jump");
var location = document.getElementById("location");
var vehicle = document.getElementById("vehicle");
var supply = document.getElementById("supply");
var weapon = document.getElementById("weapon");
var circle = document.getElementById("circle");

 
    if(behavior.className!="")
    {

        behavior.classList="";
        jump.classList="";
        location.classList="";
        vehicle.classList="";
        supply.classList="";
        weapon.classList="";
        circle.classList="";
        circle.classList.remove("animated flip");  
        
    }

var animationToUse = "animated " + "flip";    
    
/* flip, zoomIn, zoomOut, rubberBand, tada, wobble, jello */
    
behavior.className = animationToUse;
jump.className = animationToUse;
location.className = animationToUse;
vehicle.className = animationToUse;
supply.className = animationToUse;
weapon.className = animationToUse;   
circle.className = animationToUse;  
       
}


function getRandom(min,max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function SetMobileBackground()
{
    
    if((new Date().getHours()) <= 6 || (new Date().getHours()) >= 20) 
    {
        document.body.style.backgroundImage = "url('backgroundmobilenight.png')";  
        /*document.getElementById("main").style.backgroundColor="rgba(27,15,25,0.77)";*/
        document.getElementById("main").style.backgroundColor="transparent";
        document.getElementById("main").style.color="#FFFFFF";
        /*document.getElementById("main").style.width="100%";*/

    }

}

function SetBackground()
{
    
    if((new Date().getHours()) <= 6 || (new Date().getHours()) >= 20) 
    {
        document.body.style.backgroundImage = "url('backgroundnight.png')";  
        document.getElementById("main").style.backgroundColor="rgba(27,15,25,0.77)";
        document.getElementById("main").style.color="#FFFFFF";
    }

}


jQuery(function($)
       {
        
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
        /*var map_width_max = $(window).width() / 3;*/
        var map_height = '500px';
        /*var map_height_max = $(window).height() * 0.8;*/
        
		$('#yourImageID').smoothZoom({			
			width: map_height,
			height: map_width,
            max_WIDTH: map_width_max,
            max_HEIGHT: map_height_max,
			pan_BUTTONS_SHOW: "NO",
			pan_LIMIT_BOUNDARY: "YES",
			button_SIZE: 24,
			button_ALIGN: "top right",	
			zoom_MAX: 1,
			border_TRANSPARENCY: 20,
			container: 'mapsection',
            
            animation_SMOOTHNESS: 0.9,
            animation_SPEED_ZOOM: 0.7,
            animation_SPEED_PAN: 0.5,
			
			/******************************************
			Enable Responsive settings below if needed.
			Max width and height values are optional.
			******************************************/
			responsive: true,
			responsive_maintain_ratio: true
		});	
    });


        
function Set_MarkerZoom (x_marker,y_marker, markername) 
{       
        
        $('#yourImageID').smoothZoom('addLandmark', 
			[
			'<div class="item mark" id="' + markerID +  '"data-show-at-zoom="0" data-position="'+x_marker+','+y_marker+'">\
				<div>\
					<div class="text">\
					<strong>'+markername+'</strong>\
				</div>\
				<img src="images/marker.png width="23px" height="32px" alt="mark 1" />\
				</div>\
			</div>'
			]
		);
        
        $('#yourImageID').smoothZoom('focusTo', {x:x_marker, y:y_marker, zoom:1, speed:2});
    
}
