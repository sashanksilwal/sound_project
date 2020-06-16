let box = document.getElementById("box");
let bg_image = document.getElementById("bg_image");
let Footsteps_mp3 = document.getElementById("Footsteps");
let pauseBtn = document.getElementById("pausebtn");
let main_page=false;
let second_page=false;
let items= ["item1", "item2", "item3","item4"]


box.addEventListener("click",()=>{
    
    $("#infodiv").fadeOut(500);
    $('#pausebtn').fadeIn(500); 
    main_page = true;
    box.style.display="none";
    bg_image.style.background = "url('black.png')"; 
    Footsteps_mp3.play();
    // bg_image.style.backgroundColor = "black";
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
    bg_image.setAttribute("class", "bg_image_second");
    bg_image.style.background = "url('media/images/inside_a_box.jpg')"; 
    for (let i=0; i<items.length-1; i++){
        document.getElementById(items[i]).setAttribute("class", "item "+items[i]+" item_display ");
    }
}




var overlay = $("#overlay"),
        fab = $(".fab"),
     cancel = $("#cancel"),
     submit = $("#submit");

//fab click
fab.on('click', openFAB);
overlay.on('click', closeFAB);
cancel.on('click', closeFAB);

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