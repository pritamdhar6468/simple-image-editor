const fileinput = document.querySelector(".file-input");
const filteroptions=document.querySelectorAll(".filter button");
const filtername=document.querySelector(".filter-info .name");
const filtervalue=document.querySelector(".filter-info .value");
const filterslider=document.querySelector(".slider input");
const previmg=document.querySelector(".preview-img img");
const chooseimgbbutoon=document.querySelector(".choose-img");



let brightness=100, saturation=100,  inversion=0, grayscale=0;

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
            filterslider.value = brightness;
            filtervalue.innerText = `${brightness}%`;
        }else if(option.id === "saturation"){
            filterslider.value = saturation;
            filtervalue.innerText = `${saturation}%`;
        }
        else if(option.id === "inversion"){
            filterslider.value = inversion;
            filtervalue.innerText = `${inversion}%`;
        }
        else{
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
}

fileinput.addEventListener("change",loadImg);
filterslider.addEventListener("input",updatefilter);
chooseimgbbutoon.addEventListener("click", () => fileinput.click());