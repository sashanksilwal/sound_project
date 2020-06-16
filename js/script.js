let box = document.getElementById("box");
let bg_image = document.getElementById("bg_image");
let pauseBtn = document.getElementById("pausebtn");

let main_page=false;
let second_page=false;

let items= ["item1", "item2", "item3","item4"]
let overlay = $("#overlay"),
        fab = $(".fab");

let itemCar1 = document.getElementById("item1_img"),
    itemMeds2 = document.getElementById("item2_img"),
    itemBall3 = document.getElementById("item3_img");

let Footsteps_mp3 = document.getElementById("Footsteps");
let Car_mp3 = document.getElementById("Car");
let Pill_mp3 = document.getElementById("Meds");
let Ball_mp3 = document.getElementById("Ball");


let item1 = false,
    item2 = false,
    item3 = false,
    item4 = false;

fab.on('click', openFAB);
overlay.on('click', closeFAB);

itemCar1.addEventListener("click",()=>{
    changeBackground()
    Car_mp3.play();
})

itemMeds2.addEventListener("click",()=>{
    changeBackground() 
    Pill_mp3.play();

})
itemBall3.addEventListener("click",()=>{
    changeBackground()
    Ball_mp3.play();

})

box.addEventListener("click",()=>{   
    $("#infodiv").fadeOut(500);
    $('#pausebtn').fadeIn(500); 
    main_page = true;
    box.style.display="none";
    bg_image.style.background = "url('black.png')"; 
    Footsteps_mp3.play();
})

pauseBtn.addEventListener("click",()=>{
    if (Footsteps_mp3.paused && main_page == true){
        Footsteps_mp3.play();
    }else{
        Footsteps_mp3.pause();
    }
})

function myFunction() {
    main_page=false;
    second_page=true;
    console.log("hello you have ended the sound");
    $('#pausebtn').fadeOut(500); 
    bg_image.style.background = "url('media/images/Pic.png')"; 
    bg_image.setAttribute("class", "bg_image_second");

    document.getElementById("item1").setAttribute("class", "item item1 item_display");
    document.getElementById("item2").setAttribute("class", "item item2 item_display");
    document.getElementById("item3").setAttribute("class", "item item3 item_display");
    // $("#item4").setAttribute("class", "item "+items[i]+" item_display ");
}

function carFunction(){
    console.log("hello you have ended car sound");
    // $('#pausebtn').fadeOut(500); 
    item1 = true;
    checkClick();  
}
function medsFunction(){
    console.log("hello you have ended pills sound");
    // $('#pausebtn').fadeOut(500); 
    item2 = true;
    checkClick();  
}
function ballFunction(){
    console.log("hello you have ended ballsound");
    // $('#pausebtn').fadeOut(500); 
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
function changeBackground(){
    $("#item1").fadeOut(100);
    $("#item2").fadeOut(100);
    $("#item3").fadeOut(100);
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
  