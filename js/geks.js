var tempValue;

var boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix,
    boxSeven, boxEight, boxNine, boxTen, boxEleven, boxTwelve, boxThirteen, boxFourteen, boxFifteen,
    boxSixteen, boxSeventeen, boxEighteen = "0";

var timer;

var man = true;

var audioWater = new Audio('audio/water.mp3');
var audioAnimal = new Audio('audio/animal.mp3');
var audioEye = new Audio('audio/eye.mp3');
var audioDance = new Audio('audio/dance.mp3');
var audioGroup = new Audio('audio/group.mp3');
var audioJump = new Audio('audio/jump.mp3');
var audioSun = new Audio('audio/sun.mp3');
var audioTree = new Audio('audio/trees.mp3');
var audioWind = new Audio('audio/wind.mp3');

//Reset contents of div
/*function resetInputBox(){
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("box5").innerHTML = "";
    document.getElementById("box6").innerHTML = "";
    document.getElementById("box7").innerHTML = "";
    document.getElementById("box8").innerHTML = "";
    document.getElementById("box9").innerHTML = "";
    document.getElementById("wordoutput").innerHTML = "*Output here*";
}*/

function allowDrop(ev) {
    ev.preventDefault();
}

//Images become draggable and diplay a hint on first loading
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

    if (ev.target.id == "circle") {
        displayHint1();
    }
    if (ev.target.id == "body_W") {
        displayHint2();
    }
}

// Move image to new location instead of copy
/*function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    tempValue = data + ev.target.id;
}*/

//alert function for testing purposes
function runAlert() {
    alert("This is an alert");
}

//Copy image to the dropped location
function dropcopy(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    var copyimg = document.createElement("img");
    var original = document.getElementById(data);
    copyimg.src = original.src;
    ev.target.appendChild(copyimg);
    copyimg.style.height = '70px';
    copyimg.style.width = '70px';

    //temporarily hold value of image and where it was placed
    tempValue = data + ev.target.id;
    //alert(tempValue);

    //create ids for images dropped in boxes
    if (tempValue == 'circlebox4') {
        boxFour = "circlebox4";
    }
    if (tempValue == 'circlebox7') {
        boxSeven = "circlebox7";
    }
    if (tempValue == 'circlebox9') {
        boxNine = "circlebox9";
    }
    if (tempValue == 'circleSmallbox9') {
        boxNine = "circleSmallbox9";
    }
    if (tempValue == 'circleSmallbox7') {
        boxSeven = "circleSmallbox7";
    }
    if (tempValue == 'circleBigbox5') {
        boxFive = "circleBigbox5";
    }
    if (tempValue == 'circleBigbox4') {
        boxFour = "circleBigbox4";
    }
    if (tempValue == 'circlebox7') {
        boxSeven = "circlebox7";
    }
    if (tempValue == 'body_Mbox7') {
        boxSeven = "body_Mbox7";
    }
    if (tempValue == 'body_Mbox8') {
        boxEight = "body_Mbox8";
    }
    if (tempValue == 'body_Mbox9') {
        boxNine = "body_Mbox9";
    }
    if (tempValue == 'eyebox4') {
        boxFour = "eyebox4";
    }
    if (tempValue == 'eyebox5') {
        boxFive = "eyebox5";
    }
    if (tempValue == 'eyebox6') {
        boxSix = "eyebox6";
    }
    if (tempValue == 'eyebox8') {
        boxEight = "eyebox8";
    }
    if (tempValue == 'upbox4') {
        boxFour = "upbox4";
    }
    if (tempValue == 'upbox5') {
        boxFive = "upbox5";
    }
    if (tempValue == 'upbox2') {
        boxTwo= "upbox2";
    }
    if (tempValue == 'upbox6') {
        boxSix= "upbox6";
    }
    if (tempValue == 'actionbox4') {
        boxFour= "actionbox4";
    }
    if (tempValue == 'actionbox5') {
        boxFive= "actionbox5";
    }
    if (tempValue == 'actionbox6') {
        boxSix= "actionbox6";
    }
    if (tempValue == 'actionbox7') {
        boxSeven= "actionbox7";
    }
    if (tempValue == 'actionbox9') {
        boxNine= "actionbox9";
    }
    if (tempValue == 'rootbox7') {
        boxSeven = "rootbox7";
    }
    if (tempValue == 'rootbox8') {
        boxEight = "rootbox8";
    }
    if (tempValue == 'rootbox9') {
        boxNine = "rootbox9";
    }
    if (tempValue == 'circlebox5') {
        boxFive = "circlebox5";
    }
    if (tempValue == 'objectbox5') {
        boxFive = "objectbox5";
    }
    if (tempValue == 'circlebox6') {
        boxSix = "circlebox6";
    }
    if (tempValue == 'circlebox8') {
        boxEight = "circlebox8";
    }
    if (tempValue == 'negativebox17') {
        boxSeventeen = "negativebox17";
    }
    if (tempValue == 'mountainbox7') {
        boxSeven = "mountainbox7";
    }
    if (tempValue == 'mountainbox9') {
        boxNine = "mountainbox9";
    }
    if (tempValue == 'mountainbox8') {
        boxEight = "mountainbox8";
    }
    if (tempValue == 'mountainbox5') {
        boxFive = "mountainbox5";
    }
    if (tempValue == 'rightbox6') {
        boxSix = "rightbox6";
    }
    if (tempValue == 'body_Wbox8') {
        boxEight = "body_Wbox8";
    }
    if (tempValue == 'body_Mbox8') {
        boxEight = "body_Mbox8";
    }
    if (tempValue == 'soundbox5') {
        boxFive = "soundbox5";
    }
    if (tempValue == 'soundbox6') {
        boxSix = "soundbox6";
    }
    if (tempValue == 'soundbox13') {
        boxThirteen = "soundbox13";
    }
    if (tempValue == 'soundbox14') {
        boxFourteen = "soundbox14";
    }
    if (tempValue == 'soundbox16') {
        boxSixteen = "soundbox16";
    }
    if (tempValue == 'soundbox18') {
        boxEighteen = "soundbox18";
    }
    if (tempValue == 'dividerbox4') {
        boxFour = "dividerbox4";
    }
    if (tempValue == 'dividerbox6') {
        boxSix = "dividerbox6";
    }
    if (tempValue == 'dividerbox7') {
        boxSeven = "dividerbox7";
    }
    if (tempValue == 'dividerbox9') {
        boxNine = "dividerbox9";
    }
    if (tempValue == 'dividerbox14') {
        boxFourteen = "dividerbox14";
    }
    if (tempValue == 'dividerbox15') {
        boxFifteen = "dividerbox15";
    }
    if (tempValue == 'positivebox14') {
        boxFourteen = "positivebox14";
    }
    if (tempValue == 'dividerbox18') {
        boxEighteen = "dividerbox18";
    }
    if (tempValue == 'dividerbox17') {
        boxSeventeen = "dividerbox17";
    }
}

//display hint and then never run again unless page is refreshed
var displayHint1 = function () {
    document.getElementById("box5").style.backgroundColor = "#3be254";
    myTimer();
    displayHint1 = function () {};
};

//display hint and then never run again
var displayHint2 = function () {
    document.getElementById("box8").style.backgroundColor = "#3be254";
    myTimer();
    displayHint2 = function () {};
}

//reset boxes to white after time
function resetToWhite() {
    document.getElementById("box5").style.backgroundColor = "white";

    document.getElementById("box8").style.backgroundColor = "white";
}

//timer for hints
function myTimer() {
    timer = setTimeout(resetToWhite, 2000);
}

//check if stored values from input match existing logograms
function checkWord() {
    if (boxFive == 'circlebox5' && boxEight == 'body_Wbox8') {
        document.getElementById("wordoutput").innerHTML = "Woman!";
    }
    if (boxFive == 'circlebox5' && boxEight == 'body_Mbox8') {
        document.getElementById("wordoutput").innerHTML = "Man!";
    }
    if (boxFour == 'circlebox4' && boxSeven == 'body_Mbox7' && boxEight == 'body_Mbox8' && boxNine == 'body_Mbox9') {
        document.getElementById("wordoutput").innerHTML = "Animal!";
        
        document.getElementById('ani_Button').disabled = false;
        
        goGreen();
    }
    if (boxFive == 'eyebox5') {
        document.getElementById("wordoutput").innerHTML = "Eye!";
        
        document.getElementById('ani_Button').disabled = false;
        
        goGreen();
    }
    if (boxFive == 'upbox5' && boxEight == 'rootbox8') {
        document.getElementById("wordoutput").innerHTML = "Tree!";
        
        document.getElementById('ani_Button').disabled = false;
        
        goGreen();
    }
    if (boxFour == 'upbox4' && boxFive == 'upbox5' && boxSix == 'upbox6' && boxSeven == 'rootbox7' && boxEight == 'rootbox8' && boxNine == 'rootbox9') {
        document.getElementById("wordoutput").innerHTML = "Forest!";
        
        document.getElementById('ani_Button').disabled = false;
        
        goGreen();
    }
    if (boxFour == 'circlebox4' && boxFive == 'circlebox5' && boxSix == 'circlebox6' && boxSeven == 'body_Mbox7' && boxEight == 'body_Mbox8' && boxNine == 'body_Mbox9') {
        document.getElementById("wordoutput").innerHTML = "Family/Group!";
        
        goDark();
        
        audioGroup.play();
        audioGroup.loop = true;
    }
    if (boxFive == 'circlebox5' && boxEight == 'body_Mbox8' && boxFourteen == 'positivebox14') {
        document.getElementById("wordoutput").innerHTML = "Happy!";
        
    }
    if (boxFive == 'circlebox5' && boxEight == 'body_Mbox8' && boxTwo == 'upbox2' && boxFour == 'actionbox4' && boxSix == 'actionbox6' && boxSeven == 'actionbox7' && boxNine == 'actionbox9') {
        document.getElementById("wordoutput").innerHTML = "Jumping!";
        
        document.getElementById('ani_Button').disabled = false;
        
        goGreen();
    }
    if (boxFive == 'circlebox5' && boxEight == 'body_Mbox8' && boxFourteen == 'dividerbox14' && boxSeventeen == 'dividerbox17') {
        document.getElementById("wordoutput").innerHTML = "Child!";
    }
    if (boxFour == 'circlebox4' && boxSeven == 'body_Mbox7' && boxFive == 'soundbox5' && boxSix == 'rightbox6') {
        document.getElementById("wordoutput").innerHTML = "Listen!";
    }
    if (boxFive == 'circlebox5' && boxEight == 'body_Mbox8' && boxTwo == 'upbox2' && boxFour == 'eyebox4' && boxSix == 'actionbox6') {
        document.getElementById("wordoutput").innerHTML = "Looking up!";
    }
    
    if (boxEight == 'mountainbox8') {
        document.getElementById("wordoutput").innerHTML = "Soil/Earth!";
    }
    if (boxFive == 'mountainbox5' && boxSeven == 'mountainbox7' && boxEight == 'mountainbox8' && boxNine == 'mountainbox9') {
        document.getElementById("wordoutput").innerHTML = "Mountain!";
    }
    if (boxFive == 'circlebox5' && boxSeven == 'actionbox7' && boxEight == 'body_Wbox8' && boxNine == 'actionbox9') {
        document.getElementById("wordoutput").innerHTML = "Moving/Dancing!";
        
        document.getElementById('ani_Button').disabled = false;
        
        goGreen();
    }
    if (boxFive == 'objectbox5' && boxSix == 'circlebox6' && boxFifteen == 'dividerbox15') {
        document.getElementById("wordoutput").innerHTML = "Object/Tool!";
    }
    if (boxFive == 'circlebox5' && boxEight == 'body_Mbox8' && boxSeventeen == 'negativebox17') {
        document.getElementById("wordoutput").innerHTML = "Sad!";
    }
    if (boxFour == 'circlebox4' && boxSeven == 'body_Mbox7' && boxFive == 'actionbox5' && boxSix == 'eyebox6') {
        document.getElementById("wordoutput").innerHTML = "See/Look!"; 
    }
    if (boxFive == 'circlebox5' && boxEight == 'body_Wbox8' && boxTwo == 'upbox2' && boxFour == 'dividerbox4' && boxSix == 'dividerbox6' && boxSeven == 'dividerbox7' && boxNine == 'dividerbox9') {
        document.getElementById("wordoutput").innerHTML = "Shelter!";
    }
    if (boxFour == 'circlebox4' && boxSeven == 'body_Mbox7' && boxFive == 'actionbox5' && boxSix == 'soundbox6') {
        document.getElementById("wordoutput").innerHTML = "Talk/Speak!";
    }
    if (boxFive == 'circleBigbox5' && boxEight == 'circlebox8' && boxFour == 'circlebox4' && boxSix == 'circlebox6') {
        document.getElementById("wordoutput").innerHTML = "Sun!";
        
        document.getElementById('ani_Button').disabled = false;
        
        goGreen();
    }
    if (boxFive == 'circleBigbox5' && boxEight == 'circlebox8' && boxFour == 'circlebox4' && boxSix == 'circlebox6' && boxFourteen == 'dividerbox14') {
        document.getElementById("wordoutput").innerHTML = "Moon!";
        
        goDark();
    }
    if (boxFive == 'circlebox5' && boxEight == 'body_Mbox8' && boxNine == 'circlebox9' && boxFifteen == 'dividerbox15' && boxEighteen == 'dividerbox18') {
        document.getElementById("wordoutput").innerHTML = "Using tool!"; 
    }
    if (boxFive == 'circleBigbox5' && boxSeven == 'circleSmallbox7' && boxNine == 'circleSmallbox9' && boxFourteen == 'soundbox14' && boxSixteen == 'soundbox16' && boxEighteen == 'soundbox18') {
        document.getElementById("wordoutput").innerHTML = "Water!";
        
        document.getElementById('ani_Button').disabled = false;
        
        goGreen();
    }
    if (boxFive == 'circleBigbox5' && boxSeven == 'circleSmallbox7' && boxNine == 'circleSmallbox9'  && boxFourteen == 'soundbox14' && boxSixteen == 'soundbox16' && boxEighteen == 'soundbox18' && boxEight == 'eyebox8') {
        document.getElementById("wordoutput").innerHTML = "Tears!";
        
        document.getElementById('ani_Button').disabled = false;
        
        goGreen();
    }
    if (boxFive == 'circleBigbox5' && boxFour == 'circleBigbox4' && boxThirteen == 'soundbox13' && boxFourteen == 'soundbox14') {
        document.getElementById("wordoutput").innerHTML = "Air!";
        
        document.getElementById('ani_Button').disabled = false;
        
        goGreen();
    }
}

//running drop and check at same time
function multiFunction() {
    dropcopy(event);
    checkWord();
}

//change layers
function mainLayer_toFront() {
    document.getElementById('logo_input').style.zIndex = 2;
    document.getElementById('logo_secondLayer').style.zIndex = 1;
}

function blueLayer_toFront() {
    document.getElementById('logo_input').style.zIndex = 1;
    document.getElementById('logo_secondLayer').style.zIndex = 2;
}

//save the logogram image and open in new tab
/*function saveCanvas() {

    html2canvas($('#logo_input'), {
        onrendered: function (canvas) {
            var myImage = canvas.toDataURL("image/png");
            window.open(myImage);
        }
    });

}*/

//moving the logos
function air_animate(){
    
    $air_el = $(".grid-element, .grid-elementL2");
        function start() {
        $air_el.velocity(
            { 
                rotateY: "180deg"
            },
            { 
                duration: 400,
                delay: 0,
                loop: 2,
                easing: "linear",
                complete: start
            });
            }

            start();
}

function animal_animate(){
    $animal_el1 = $("#box4, #box7, #box16");
        function start() {
        $animal_el1.velocity(
            { 
                translateY: [ -20, 0 ]
            },
            { 
                duration: 400,
                delay: 0,
                //loop: 2,
                easing: "easeOutQuint",
                complete: start
            });
            }

            start();
    
    $animal_el2 = $("#box8, #box17");
        function start2() {
        $animal_el2.velocity(
            { 
                translateY: [ -20, 0 ]
            },
            { 
                duration: 300,
                delay: 100,
                //loop: 2,
                easing: "easeOutQuint",
                complete: start2
            });
            }

            start2();
    
    $animal_el3= $("#box9, #box18");
        function start3() {
        $animal_el3.velocity(
            { 
                translateY: [ -20, 0 ]
            },
            { 
                duration: 200,
                delay: 200,
                //loop: 2,
                easing: "easeOutQuint",
                complete: start3
            });
            }

            start3();
}

function eye_animate(){
    $eye_el = $("#box5, #box14");
        function eye_start() {
        $eye_el.velocity(
            { 
                scaleY: 0
            },
            { 
                duration: 50,
                delay: 600,
                loop: true,
                easing: "easeOutQuad",
                complete: eye_start
            });
            }

            eye_start();
}

function tree_animate(){
    
    $("#box5, #box14").velocity({ backgroundColor: "#047404" });
    
    $tree_el2 = $("#box5, #box14");
        function tree_start2() {
        $tree_el2.velocity(
            { 
                translateX: "5px",
                rotateZ: "2deg"
            },
            { 
                duration: 1100,
                delay: 100,
                loop: true,
                easing: "easeOutQuad",
                complete: tree_start2
            });
            }

            tree_start2();
    
    $("#box8, #box17").velocity({ backgroundColor: "#675121" });
    
}

function jump_animate(){
   $jump_el = $("#box5, #box14, #box8, #box17");
        function jump_start() {
        $jump_el.velocity(
            { 
                translateY: [ -20, 0 ]
            },
            { 
                duration: 400,
                delay: 0,
                //loop: 2,
                easing: "easeInOutQuart",
                complete: jump_start
            });
            }

            jump_start(); 
}

function dance_animate(){
    
     document.getElementById('box8').style.zIndex = 2;
    document.getElementById('box9').style.zIndex = 1;
    
    document.getElementById('box5').style.zIndex = 4;
    document.getElementById('box6').style.zIndex = 3;
    
    function body_start() {
    $("#box5, #box14, #box8, #box17")
    .velocity({ translateX: -5, rotateZ: "1deg" })
    
    .velocity({ translateY: -5 })
    .velocity({ translateY: 5 })
    
    .velocity({ translateX: 5, rotateZ: "-1deg" })
    
    .velocity({ translateY: -5 })
    .velocity({ translateY: 5 } , { complete: body_start });
    }
    body_start();
}

function sun_animate(){
    
    //left box
    $particle_el = $("#box4, #box13");
        function particle_start() {
            $particle_el.velocity(
    { 
      translateX: [ -1200, 0 ],
        backgroundColor: "#faff75"
    },
    { 
      duration: 500,
      delay: 0,
      easing: "linear",
      complete: particle_start
    });
        }
        
        particle_start();
    
    //bottom box
    $particle_el2 = $("#box8, #box17");
        function particle_start2() {
            $particle_el2.velocity(
    { 
      translateY: [ 1200, 0 ],
        backgroundColor: "#faff75"
    },
    { 
      duration: 500,
      delay: 0,
      easing: "linear",
      complete: particle_start2
    });
        }
        
        particle_start2();
    
    //right box
    $particle_el3 = $("#box6, #box15");
        function particle_start3() {
            $particle_el3.velocity(
    { 
      translateX: [ 1200, 0 ],
        backgroundColor: "#faff75"
    },
    { 
      duration: 500,
      delay: 0,
      easing: "linear",
      complete: particle_start3
    });
        }
        
        particle_start3();
}

function tear_animate(){
    
   $tear_el = $("#box7, #box16");
        function tear_start() {
            $tear_el.velocity(
    { 
      translateY: [ 150, 0 ],
        //translateY: 150, 
        backgroundColor: "#6ecdff"
    },
    { 
      duration: 2000,
      delay: 0,
      easing: "easeInOutExpo",
       // loop: true,
      complete: tear_start
    });
        }
        
        tear_start();
    
    $tear_el2 = $("#box9, #box18");
        function tear_start2() {
            $tear_el2.velocity(
    { 
      translateY: [ 150, 0 ],
        //translateY: 150, 
        backgroundColor: "#6ecdff"
    },
    { 
      duration: 1700,
      delay: 300,
      easing: "easeInOutExpo",
       // loop: true,
      complete: tear_start2
    });
        }
        
        tear_start2();

}

function water_animate(){
    
    document.getElementById('box5').style.zIndex = 4;
    document.getElementById('box8').style.zIndex = 3;
    
    //middle
    function water_start() {
    $("#box5, #box14")
    
    .velocity({ translateY: -20, backgroundColor: "#6ecdff" } , { duration: 1000})
    .velocity({ translateY: 80, backgroundColor: "#6ecdff" } , { duration: 1000, complete: water_start });
    }
   water_start();
    
    //left
    function water_start2() {
    $("#box7, #box16")
    
    .velocity({ translateY: -50, backgroundColor: "#6ecdff" } , { delay: 200, duration: 800})
    .velocity({ translateY: 50, backgroundColor: "#6ecdff" } , { delay: 200, duration: 800, complete: water_start2 });
    }
   water_start2();
    
    //right
    function water_start3() {
    $("#box9, #box18")
    
    .velocity({ translateY: -40, backgroundColor: "#6ecdff" } , { delay: 300, duration: 700})
    .velocity({ translateY: 40, backgroundColor: "#6ecdff" } , { delay: 300, duration: 700, complete: water_start3 });
    }
   water_start3();
}

function forest_animate(){
    
    $("#box4, #box13").velocity({ backgroundColor: "#047404" });
    
    $tree_el = $("#box4, #box13");
        function tree_start() {
        $tree_el.velocity(
            { 
                translateX: "5px",
                rotateZ: "2deg"
            },
            { 
                duration: 1200,
                delay: 0,
                loop: true,
                easing: "easeOutQuad",
                complete: tree_start
            });
            }

            tree_start();
    
$("#box7, #box16").velocity({ backgroundColor: "#675121" });
    
    $("#box5, #box14").velocity({ backgroundColor: "#047404" });
    
    $tree_el2 = $("#box5, #box14");
        function tree_start2() {
        $tree_el2.velocity(
            { 
                translateX: "5px",
                rotateZ: "2deg"
            },
            { 
                duration: 1100,
                delay: 100,
                loop: true,
                easing: "easeOutQuad",
                complete: tree_start2
            });
            }

            tree_start2();
    
$("#box8, #box17").velocity({ backgroundColor: "#675121" });
    
    $("#box6, #box15").velocity({ backgroundColor: "#047404" });
    
    $tree_el3 = $("#box6, #box15");
        function tree_start3() {
        $tree_el3.velocity(
            { 
                translateX: "5px",
                rotateZ: "2deg"
            },
            { 
                duration: 1000,
                delay: 200,
                loop: true,
                easing: "easeOutQuad",
                complete: tree_start3
            });
            }

            tree_start3();
    
$("#box9, #box18").velocity({ backgroundColor: "#675121" });
}

//choose an animation
function play_animation(){
    if (document.getElementById("wordoutput").innerHTML == "Air!"){
        air_animate();
        
        audioWind.play();
        audioWind.loop = true;
    }
    if (document.getElementById("wordoutput").innerHTML == "Animal!"){
        animal_animate();
        
        audioAnimal.play();
        audioAnimal.loop = true;
    }
    if (document.getElementById("wordoutput").innerHTML == "Eye!"){
        eye_animate();
        
        //audioEye.play();
        //audioEye.loop = true;
    }
    if (document.getElementById("wordoutput").innerHTML == "Tree!"){
        tree_animate();
        
        audioTree.play();
        audioTree.loop = true;
    }
    if (document.getElementById("wordoutput").innerHTML == "Forest!"){
        forest_animate();
        
        audioTree.play();
        audioTree.loop = true;
    }
    if (document.getElementById("wordoutput").innerHTML == "Jumping!"){
        jump_animate();
        
        audioJump.play();
        audioJump.loop = true;
    }
    if (document.getElementById("wordoutput").innerHTML == "Moving/Dancing!"){
        dance_animate();
        
        audioDance.play();
        audioDance.loop = true;
    }
    if (document.getElementById("wordoutput").innerHTML == "Sun!"){
        sun_animate();
        
        audioSun.play();
        audioSun.loop = true;
    }
    if (document.getElementById("wordoutput").innerHTML == "Tears!"){
        tear_animate();
    }
    if (document.getElementById("wordoutput").innerHTML == "Water!"){
        water_animate();
        
        audioWater.play();
        audioWater.loop = true;
    }
}

//go green
function goGreen(){

document.getElementById("ani_Button").style.background='#4cba5d';

document.getElementById("ani_Button").style.color='white';
}

function goDark(){
    document.getElementById('ani_Button').disabled = true;
        
        document.getElementById("ani_Button").style.background='#C0C0C0';

        document.getElementById("ani_Button").style.color='#7F7F7F';
}


$(window).resize(function() {
  if ($(window).width() < 960) {
     alert('Less than 960');
  }
 else {
    alert('More than 960');
 }
});