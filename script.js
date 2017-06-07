var timer;

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
location[1] = "Primorsk";
location[2] = "Pier Town";
location[3] = "Mylta";
location[4] = "Novorepnoye";
location[5] = "Gatka";
location[6] = "Rozhok";
location[7] = "Yasnaya Polyana";
location[8] = "Georgopol";
location[9] = "Lipovka";
location[10] = "Mylta Power";
location[11] = "Zharki";
location[12] = "Stalber";
location[13] = "Severny";
location[14] = "School";
location[15] = "Military Base"; /*removed Sosnovka from name because fucks up table*/
location[16] = "Novorepnoye Radio";
location[17] = "Water Town and Ruins";
location[18] = "Crater";
location[19] = "Bunkers";
location[20] = "Villa";
location[21] = "Gun Range";
location[22] = "Hospital";
    
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
   
    
behavior.className="animated flip";
jump.className="animated flip";
location.className="animated flip";
vehicle.className="animated flip";
supply.className="animated flip";
weapon.className="animated flip";   
circle.className="animated flip";  
   
  
    
}


function getRandom(min,max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function SetBackground()
{
    
    if((new Date().getHours()) <= 6 && (new Date().getHours()) >= 20) 
    {
       document.body.style.backgroundImage = "url('backgroundnight.png')";  
    }


    else if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) 
    {

    document.body.style.backgroundImage = "url('backgroundmobile.jpg')";  
    document.body.style.width = "100vw";  
    }
    
    
    
}