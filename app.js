const fileinput = document.querySelector(".file-input"),
filteroptions=document.querySelectorAll(".filter button");
previmg=document.querySelector(".preview-img img");
chooseimgbbutoon=document.querySelector(".choose-img");


const loadImg=()=>{
    let file = fileinput.files[0];
    console.log(file);
    if(!file) return;
    previmg.src=URL.createObjectURL(file);
    previmg.addEventListener("load", () =>{
        document.querySelector(".container").classList.remove("disable");
    });
}

filteroptions.forEach(option => {
    option.addEventListener("click", () =>{
        console.log(option);
        document.querySelector(".filter .active").classList.remove("active");
        option.classList.add("active");
    });
})

fileinput.addEventListener("change",loadImg);
chooseimgbbutoon.addEventListener("click", () => fileinput.click());