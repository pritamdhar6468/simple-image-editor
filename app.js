const fileinput = document.querySelector(".file-input");
const filteroptions=document.querySelectorAll(".filter button");
const filtername=document.querySelector(".filter-info .name");
const filtervalue=document.querySelector(".filter-info .value");
const filterslider=document.querySelector(".slider input");
const rotateoptions=document.querySelectorAll(".rotate button");
const previmg=document.querySelector(".preview-img img");
const resetfilterbtn=document.querySelector(".reset-filter");
const chooseimgbbutoon=document.querySelector(".choose-img");
const saveImgbtn=document.querySelector(".save-img");




let brightness=100, saturation=100,  inversion=0, grayscale=0;
let rotate=0, fliphorizontal=1, flipvertical=1;

const applyfilter = () =>{
    previmg.style.transform = `rotate(${rotate}deg) scale(${fliphorizontal},${flipvertical} )`;
    previmg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
}

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
        document.querySelector(".filter .active").classList.remove("active");
        option.classList.add("active");
        filtername.innerText=option.innerText;

        if(option.id === "brightness"){
            filterslider.max = "200";
            filterslider.value = brightness;
            filtervalue.innerText = `${brightness}%`;
        }else if(option.id === "saturation"){
            filterslider.max = "200";
            filterslider.value = saturation;
            filtervalue.innerText = `${saturation}%`;
        }
        else if(option.id === "inversion"){
            filterslider.max = "100";
            filterslider.value = inversion;
            filtervalue.innerText = `${inversion}%`;
        }
        else{
            filterslider.max = "100";
            filterslider.value = grayscale;
            filtervalue.innerText = `${grayscale}%`;
        }
    });
});




const updatefilter=()=>{
    filtervalue.innerText = `${filterslider.value}%`;
    const selectfilter = document.querySelector(".filter .active");

    if (selectfilter.id==="brightness") {
        brightness=filterslider.value;
    }else if(selectfilter.id==="saturation"){
        saturation=filterslider.value;
    }else if(selectfilter.id==="inversion"){
        inversion=filterslider.value;
    }else {
        grayscale=filterslider.value;
    }
    applyfilter();
}


rotateoptions.forEach(option => {
    option.addEventListener("click", () =>{
        if (option.id === "left") {
            rotate -= 90;
        }else if(option.id === "right"){
            rotate += 90;
        }else if(option.id === "horizontal"){
            fliphorizontal = fliphorizontal === 1?-1:1;
        }else{
            flipvertical = flipvertical === 1?-1:1;
        }

        applyfilter();
    })
})

const resetfilter = () =>{
     brightness=100; saturation=100;  inversion=0; grayscale=0;
    rotate=0; fliphorizontal=1; flipvertical=1;
    filteroptions[0].click();
    applyfilter();
}

const saveImage = () =>{
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = previmg.naturalWidth;
    canvas.height = previmg.naturalHeight;

    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    ctx.drawImage(previmg, 0, 0, canvas.width, canvas.height);
    document.body.appendChild(canvas);
}

fileinput.addEventListener("change",loadImg);
filterslider.addEventListener("input",updatefilter);
resetfilterbtn.addEventListener("click",resetfilter);
saveImgbtn.addEventListener("click",saveImage);
chooseimgbbutoon.addEventListener("click", () => fileinput.click());