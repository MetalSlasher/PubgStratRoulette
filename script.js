/* GLOBAL VARIABLE SPACE */

var timer;

/* END OF GLOBAL VARIABLE SPACE */

function getRandValues()
{

    
    /*setTimeout(function(){*/Animate();/*},800);*/
    button = document.getElementById("button");
    setTimeout(function(){button.click()},500);
    
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
    
var randNumber = getRandom(1,22);
var randLocation = location[randNumber];
     
document.getElementById("location").innerHTML=randLocation;
    
}

function getBehavior()
{
   
var behavior = new Array();
behavior[1] = "Offensive";
behavior[2] = "Defensive";
behavior[3] = "Normal";

    
var randNumber = getRandom(1,3);
var randBehavior = behavior[randNumber];
     
document.getElementById("behavior").innerHTML=randBehavior;  
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
        
    if(timeleft==0)
            document.getElementById("jump").textContent = "JUMP!";        
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
    vehicle[3] = "Normal";
    
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
    supply[3] = "Normal";

    var randNumber = getRandom(1,3);
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

function SetBackground()
{
    
    
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) 
    {
    
        /*
    document.body.style.backgroundImage = "url('backgroundmobile.jpg')";  
    document.body.style.width = "100vw";  
    document.getElementById("main").style.width="90%";
    document.getElementById("main").style.height="90vh";
    */        
        
    var fileref = document.createElement("link");
    fileref.rel = "stylesheet";
    fileref.type = "text/css";
    fileref.href = "mobile.css";
    document.getElementsByTagName("head")[0].appendChild(fileref)
    head.appendChild(s);
    
    }
    
    else if((new Date().getHours()) <= 6 || (new Date().getHours()) >= 20) 
    {
        document.body.style.backgroundImage = "url('backgroundnight.png')";  
        document.getElementById("main").style.backgroundColor="rgba(27,15,25,0.77)";
        document.getElementById("main").style.color="#FFFFFF";
    }

    
}