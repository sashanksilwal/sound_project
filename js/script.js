let box = document.getElementById("box");
let bg_image = document.getElementById("bg_image");
let pauseBtn = document.getElementById("pausebtn");
let homeBtn = document.getElementById("homebtn");
let BlackBG= document.getElementById("black-bg");


let main_page=false;
let second_page=false;
let ball_page=false;
let car_page=false;
let pills_page=false;
let frame_page=false;
let end= false;

let items= ["item1", "item2", "item3","item4"]
let overlay = $("#overlay"),
        fab = $(".fab");

let itemCar1 = document.getElementById("item1_img"),
    itemMeds2 = document.getElementById("item2_img"),
    itemBall3 = document.getElementById("item3_img"),
    itemFrame4 = document.getElementById("item4_img");

let Footsteps_mp3 = document.getElementById("Footsteps");
let Car_mp3 = document.getElementById("Car");
let Pill_mp3 = document.getElementById("Meds");
let Ball_mp3 = document.getElementById("Ball");
let Frame_mp3 = document.getElementById("Frame");

let item1 = false,
    item2 = false,
    item3 = false,
    item4 = false;

      // set up text to print, each item in array is new line
var aText = new Array(
    "To live in this world",
    "you must be able",
    "to do three things:",
    "to love what is mortal;",
    "to hold it",
    "against your bones knowing",
    "your own life depends on it;",
    "and, when the time comes to let it go,",
    "to let it go"
    );

var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
    
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
    
    
fab.on('click', openFAB);
overlay.on('click', closeFAB);

itemCar1.addEventListener("click",()=>{

    changeBackground(8000,0,0);
    $('#pausebtn').fadeIn(500); 
    car_page=true;
    pills_page=false;
    ball_page=false;
    frame_page= false;
    Car_mp3.play();
})

itemMeds2.addEventListener("click",()=>{
    changeBackground(0,8000,0);
    $('#pausebtn').fadeIn(500);
    pills_page= true; 
    ball_page= false;
    car_page= false;
    frame_page= false;
    Pill_mp3.play();

})
itemBall3.addEventListener("click",()=>{
    changeBackground(0,0,8000);
    $('#pausebtn').fadeIn(500);
    ball_page = true;
    pills_page= false;
    car_page=false;
    frame_page= false;
    Ball_mp3.play();

})
itemFrame4.addEventListener("click",()=>{
    $("#item4").fadeOut(4000);
    $('#pausebtn').fadeIn(500);
    $("#typedtext").fadeIn(0);
    $('#black-bg').hide();
    $('#black-bg').css("height", "0");

    bg_image.style.background = "url('white.png')"; 
    frame_page= true;
    ball_page = false;
    pills_page= false;
    car_page  = false;
    Frame_mp3.play();
    console.log(Frame_mp3.currentTime);
    // setTimeout(() =>{typewriter();}, 6000)

    // $('#pausebtn').fadeOut(110000);
    // if (end== true){
    //   console.log("hello deer");
    //   $('#homebtn').fadeIn(500);

    // }
})

Frame_mp3.addEventListener("timeupdate", ()=>{
    console.log(Frame_mp3.currentTime);
    if(Frame_mp3.currentTime > 85.782624384 && Frame_mp3.currentTime <86){
        typewriter();
        // setTimeout(console.log(10), 25000);
    }
})

box.addEventListener("click",()=>{   
    $("#infodiv").fadeOut(500);
    $('#pausebtn').fadeIn(500); 
    main_page = true;
    box.style.display="none";
    // $('#bg_image').css("background-image" , "url(media/images/black.png)");
    // bg_image.style.background = "url('black.png')";
    bg_image.style.display="none";
    $('#black-bg').fadeIn(500);
    // $('#bg_image').fadeIn(500);
    // bg_image.fadeOut(1000, function(){
    //   image.css("background-image" , "url('media/images/black.png')");
    //   image.fadeIn(1000);
    // });  
    Footsteps_mp3.play();
})

pauseBtn.addEventListener("click",()=>{
    if (Footsteps_mp3.paused && main_page == true){
        Footsteps_mp3.play();
    }else{
        Footsteps_mp3.pause();
    }
    if (Ball_mp3.paused && ball_page==true){
        Ball_mp3.play();
    }else{
        Ball_mp3.pause();
    }
    if (Pill_mp3.paused && pills_page==true){
        Pill_mp3.play();
    }else{
        Pill_mp3.pause();
    }
    if (Car_mp3.paused && car_page==true){
        Car_mp3.play();
    }else{
        Car_mp3.pause();
    }
    if (Frame_mp3.paused && frame_page==true){
        Frame_mp3.play();
    }else{
        Frame_mp3.pause();
    }

})

function myFunction() {
    main_page=false;
    second_page=true;
    console.log("hello you have ended the sound");
    $('#pausebtn').fadeOut(500);
    $('#bg_image').show(); 
    $('#black-bg').css("height", "0");
    bg_image.style.background = "url('media/images/Pic.png')"; 
    bg_image.setAttribute("class", "bg_image_second");

    document.getElementById("item1").setAttribute("class", "item item1 item_display");
    document.getElementById("item2").setAttribute("class", "item item2 item_display");
    document.getElementById("item3").setAttribute("class", "item item3 item_display");
    // $("#item4").setAttribute("class", "item "+items[i]+" item_display ");
}

function carFunction(){
    console.log("hello you have ended car sound");
    $('#pausebtn').fadeOut(500);
    // $('#pausebtn').fadeOut(500); 
    item1 = true;
    checkClick();  
}
function medsFunction(){
    console.log("hello you have ended pills sound");
    $('#pausebtn').fadeOut(500); 
    item2 = true;
    checkClick();  
}
function ballFunction(){
    console.log("hello you have ended ballsound");
    $('#pausebtn').fadeOut(500); 
    item3 = true;
    checkClick();  
}

function checkClick(){
    if (item1 && item2 && item3){
        $("#item1").fadeOut(100);
        $("#item2").fadeOut(100);
        $("#item3").fadeOut(100);
        $("#item4").fadeIn(100);
        bg_image.style.background = "url('media/images/Empty.png')"; 
        bg_image.setAttribute("class", "bg_image_second");

    }else if (item1 && item2){
        $("#item3").fadeIn(100);
        bg_image.style.background = "url('media/images/CarPillPic.png')"; 
        bg_image.setAttribute("class", "bg_image_second");

    }else if (item2 && item3){
        $("#item1").fadeIn(100);
        bg_image.style.background = "url('media/images/BallPillPic.png')"; 
        bg_image.setAttribute("class", "bg_image_second");

    }else if(item1 && item3){
        $("#item2").fadeIn(100);
        bg_image.style.background = "url('media/images/BallCarPic.png')"; 
        bg_image.setAttribute("class", "bg_image_second");

    }else if (item1){
        $("#item2").fadeIn(100);
        $("#item3").fadeIn(100);
        bg_image.style.background = "url('media/images/CarPic.png')"; 
        bg_image.setAttribute("class", "bg_image_second");

    }else if(item2){
        $("#item1").fadeIn(100);
        $("#item3").fadeIn(100);
        bg_image.style.background = "url('media/images/PillPic.png')"; 
        bg_image.setAttribute("class", "bg_image_second");

    }else if(item3){
        $("#item2").fadeIn(100);
        $("#item1").fadeIn(100);
        bg_image.style.background = "url('media/images/BallPic.png')"; 
        bg_image.setAttribute("class", "bg_image_second");
    }else{

    }
}

//change the background and remove the item
function changeBackground(a,b,c){
    $("#item1").fadeOut(a);
    $("#item2").fadeOut(b);
    $("#item3").fadeOut(c);

    bg_image.style.background = "url('black.png')"; 
}

// this is for about
function openFAB(event) {
    if (event) event.preventDefault();
    fab.addClass('active');
    overlay.addClass('dark-overlay');
  }
  
  function closeFAB(event) {
    if (event) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    fab.removeClass('active');
    overlay.removeClass('dark-overlay');
  }
  

function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("typedtext");
    
    while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
    iArrLength = aText[iIndex].length;
    setTimeout("typewriter()", 500);
    }
    } else {
    setTimeout("typewriter()", iSpeed);
    end=true;
    // console.log("it has finished writing");
    $('#pausebtn').fadeOut(5000);
    $('#homebtn').delay( 2000 ).fadeIn(10000)

    }
}
    
    
   