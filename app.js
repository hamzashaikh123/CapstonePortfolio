//Get Variables
const overlayEY = document.getElementsByClassName("photo-overlay-EY");
const overlayLA = document.getElementsByClassName("photo-overlay-LA");
const sliderIconleftEY= document.getElementsByClassName("slider-icon-left-EY");
const sliderIconrightEY= document.getElementsByClassName("slider-icon-right-EY");
const sliderIconleftLA= document.getElementsByClassName("slider-icon-left-LA");
const sliderIconrightLA= document.getElementsByClassName("slider-icon-right-LA");

//========================== EVENT LISTENER FOR EY WORK EXPERIENCE==================//
for (let x = 0; x<overlayEY.length; x+=1){
    sliderIconleftEY[x].addEventListener('click',()=>{
        overlayEY[x].classList.add('transform-active');
        if(overlayEY[x].classList.contains("transform-reactive")){
            overlayEY[x].classList.remove('transform-reactive');
        }
        sliderIconleftEY[x].style.display="none"
        sliderIconrightEY[x].style.display="block";
    });
}

for (let x = 0; x<overlayEY.length; x+=1){
    sliderIconrightEY[x].addEventListener('click',()=>{
        overlayEY[x].classList.add('transform-reactive');
        if(overlayEY[x].classList.contains("transform-active")){
            overlayEY[x].classList.remove('transform-active');
        }

        sliderIconleftEY[x].style.display="block"
        sliderIconrightEY[x].style.display="none";
    });
}

//========================== EVENT LISTENER FOR LA WORK EXPERIENCE==================//
for (let x = 0; x<overlayLA.length; x+=1){
    sliderIconleftLA[x].addEventListener('click',()=>{
        overlayLA[x].classList.add('transform-active');
        if(overlayLA[x].classList.contains("transform-reactive")){
            overlayLA[x].classList.remove('transform-reactive');
        }
        sliderIconleftLA[x].style.display="none"
        sliderIconrightLA[x].style.display="block";
    });
}

for (let x = 0; x<overlayLA.length; x+=1){
    sliderIconrightLA[x].addEventListener('click',()=>{
        overlayLA[x].classList.add('transform-reactive');
        if(overlayLA[x].classList.contains("transform-active")){
            overlayLA[x].classList.remove('transform-active');
        }

        sliderIconleftLA[x].style.display="block"
        sliderIconrightLA[x].style.display="none";
    });
}