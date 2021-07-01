let button_one = document.getElementsByClassName("changing-image1");
let button_two = document.getElementsByClassName("changing-image2");
let imageSources = ["file:///home/daniel/Desktop/jsProjects/animationProject/images/hoodh-ahmed-GrQO3IciUTk-unsplash.jpg", 
"file:///home/daniel/Desktop/jsProjects/animationProject/images/sepp-rutz-tskqMngoHSA-unsplash.jpg"];
let defaultImage = document.getElementById("default-image");
// The source of the default Image, we need to change the image on every click that occures by the user
let image_src = defaultImage.src;
let counterOfClicks = 0;


console.log(button_one);
console.log(button_two);
console.log(defaultImage.src);

button_one[0].addEventListener("click", () => {

})


button_two[0].addEventListener("click", event => {
    if(counterOfClicks >= imageSources.length){
        defaultImage.src = imageSources[0];    
        counterOfClicks = 0;
    } else{
        defaultImage.src = imageSources[counterOfClicks];
        console.log(counterOfClicks);
        counterOfClicks += 1;
    }


})




