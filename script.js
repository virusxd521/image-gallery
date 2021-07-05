let button_one = document.getElementsByClassName("changing-image1");
let button_two = document.getElementsByClassName("changing-image2");
let imageSources = [ "file:///home/daniel/Desktop/jsProjects/animationProject/images/ddp-EX3gFC6eP4c-unsplash.jpg",
"file:///home/daniel/Desktop/jsProjects/animationProject/images/hoodh-ahmed-GrQO3IciUTk-unsplash.jpg", 
"file:///home/daniel/Desktop/jsProjects/animationProject/images/sepp-rutz-tskqMngoHSA-unsplash.jpg",
];
let defaultImage = document.getElementById("default-image");
// The source of the default Image, we need to change the image on every click that occures by the user
let image_src = defaultImage.src;
let counterOfClicks = 0;




button_one[0].addEventListener("click", () => {
    counterOfClicks === 0 ? counterOfClicks = 2 : counterOfClicks -= 1;
    defaultImage.src = imageSources[counterOfClicks];    
})


button_two[0].addEventListener("click", event => {
    counterOfClicks += 1;
    if(counterOfClicks === imageSources.length){
        counterOfClicks = 0;
        defaultImage.src = imageSources[counterOfClicks];    
    } else {
        defaultImage.src = imageSources[counterOfClicks];    
    }
    
})



// The footer 
let footer_categories = document.querySelectorAll('.list');

footer_categories.forEach(item => {
    item.addEventListener('click', event => {
        if(item.children[1].style.display === "") {
            item.children[1].style.display = "block";
            item.children[0].style.transform = 'rotate(45deg)';
        } else {
            item.children[1].style.display = "";
            item.children[0].style.transform = 'rotate(225deg)';
        }
        
    });




})
