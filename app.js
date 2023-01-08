const fileinput = document.querySelector(".file-input"),
previmg=document.querySelector(".preview-img img");
chooseimgbbutoon=document.querySelector(".choose-img");


const loadImg=()=>{
    let file = fileinput.files[0];
    console.log(file);
    if(!file) return;
    previmg.src=URL.createObjectURL(file);
}

fileinput.addEventListener("change",loadImg);
chooseimgbbutoon.addEventListener("click", () => fileinput.click());