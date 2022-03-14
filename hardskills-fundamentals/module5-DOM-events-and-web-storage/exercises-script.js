let firstBG = document.querySelectorAll(".emergency-tasks");
let firstH3 = document.querySelectorAll(".emergency-tasks h3")
let secondBG = document.querySelectorAll(".no-emergency-tasks");
let secondH3 = document.querySelectorAll(".no-emergency-tasks h3")

for(i = 0; i < firstBG.length; i += 1){
    firstBG[i].style.background = "salmon";
};

for(i2 = 0; i2 < firstH3.length; i2 += 1){
    firstH3[i2].style.background = "violet";
};

for(i = 0; i < secondBG.length; i += 1){
    secondBG[i].style.background = "yellow";
};

for(i2 = 0; i2 < secondH3.length; i2 += 1){
    secondH3[i2].style.background = "black";
};