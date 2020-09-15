'use strict';

var imageArray = [];
var remainingImagesArray = []
var maxClicks = 25;
// var totalClicks=0;
// var userVotes=0;

function Product(name, image) {
    this.nameOfTheProduct = name;
    this.filePathOfImage = image;
    this.isClicked = false;
    // this.timesShown = 0;
}

function displayRandomImage(imageElement) {
    var randomIndex = Math.floor(Math.random() * remainingImagesArray.length);
    imageElement.src = remainingImagesArray[randomIndex].filePathOfImage
    imageElement.name = remainingImagesArray[randomIndex].name
    remainingImagesArray.splice(randomIndex, 1);
}

function displayAllImages() {
    var firstImageElement = document.getElementById("image1");
    displayRandomImage(firstImageElement);

    var secondImageElement = document.getElementById("image2");
    displayRandomImage(secondImageElement);

    var thirdImageElement = document.getElementById("image3");
    displayRandomImage(thirdImageElement);
}

function handleClick(event) {
    // which got clicked? 
    var elementName = event.target.getAttribute("name")

    for(var i = 0; i < imageArray.length; i++) {
        if(imageArray[i].name === elementName) {
            imageArray[i].isClicked = true;
            console.log(imageArray[i]);
        }
    }

    displayAllImages();
}

// Actual execution

// Create Products into array
imageArray.push(new Product('bag', 'image/bag.jpg'));
imageArray.push(new Product('banana', 'image/banana.jpg'));
imageArray.push(new Product('bathroom', 'image/bathroom.jpg'));
imageArray.push(new Product('boots', 'image/boots.jpg'));
imageArray.push(new Product('breakfast', 'image/breakfast.jpg'));
imageArray.push(new Product('bubblegum', 'image/bubblegum.jpg'));
imageArray.push(new Product('chair', 'image/chair.jpg'));
imageArray.push(new Product('cthulhu', 'image/cthulhu.jpg'));
imageArray.push(new Product('dog-duck', 'image/dog-duck.jpg'));
imageArray.push(new Product('dragon', 'image/dragon.jpg'));
imageArray.push(new Product('pen', 'image/pen.jpg'));
imageArray.push(new Product('pet-sweep', 'image/pet-sweep.jpg'));
imageArray.push(new Product('scissors', 'image/scissors.jpg'));
imageArray.push(new Product('shark', 'image/shark.jpg'));
imageArray.push(new Product('sweep', 'image/sweep.png'));
imageArray.push(new Product('tauntaun', 'image/tauntaun.jpg'));
imageArray.push(new Product('unicorn', 'image/unicorn.jpg'));
imageArray.push(new Product('usb', 'image/usb.gif'));
imageArray.push(new Product('water-can', 'image/water-can.jpg'));
imageArray.push(new Product('wine-glass', 'image/wine-glass.jpg'));

remainingImagesArray = imageArray.slice();

displayAllImages();

// set event listener
var productImagesElement = document.getElementById('product-images');
productImagesElement.addEventListener('click', handleClick);
