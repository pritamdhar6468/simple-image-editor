const fileinput = document.querySelector(".file-input");
const filteroptions=document.querySelectorAll(".filter button");
const filtername=document.querySelector(".filter-info .name");
const previmg=document.querySelector(".preview-img img");
const chooseimgbbutoon=document.querySelector(".choose-img");


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
        filtername.innerText=option.innerText;
    });
});

fileinput.addEventListener("change",loadImg);
chooseimgbbutoon.addEventListener("click", () => fileinput.click());