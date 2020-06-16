let box = document.getElementById("box");
let bg_image = document.getElementById("bg_image");
let Footsteps_mp3 = document.getElementById("Footsteps");
let pauseBtn = document.getElementById("pause");
let main_page=false;
let second_page=false;


box.addEventListener("click",()=>{
    started = true;
    box.style.display="none";
    bg_image.style.background = "url('../black.png')"; 
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
    bg_image.style.background = "url('../media/images/inside_a_box.jpg')"; 
}
