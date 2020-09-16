'use strict';

var productArray = [];
var remainingImagesArray = []
var maxClicks = 25;
var totalClicks = 0;

function Product(name, image) {
    this.name = name;
    this.filePathOfImage = image;
    this.isClicked = false;
    this.timesShown = 0;
    this.numberOfVotes = 0;
}

function displayRandomImage(imageElement) {
    if (remainingImagesArray.length === 0) {
        remainingImagesArray = [...productArray]
    }
    var randomIndex = Math.floor(Math.random() * remainingImagesArray.length);
    productArray[randomIndex].timesShown += 1;
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
    // which image got clicked? 
    totalClicks += 1;
    // console.log(totalClicks);

    // console.log(event.target);
    var elementName = event.target.getAttribute("name")

    for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].name === elementName) {
            productArray[i].isClicked = true;
            productArray[i].numberOfVotes += 1;
            // console.log(productArray[i]);
        }
    }
    // console.log(productArray);

    if (totalClicks >= maxClicks) {
        productImagesElement.removeEventListener('click', handleClick);
        createReport();
    } else {
        displayAllImages();
    }
}

function getSummaryForProduct(index) {
    var product = productArray[index];
    return product.name + " had " + product.numberOfVotes + " votes and was shown " + product.timesShown + " times";
}

function createReport() {
    var listElement = document.getElementById("report");

    for(var i = 0; i < productArray.length; i++) {
        var resultElement = document.createElement("li");
        resultElement.textContent = getSummaryForProduct(i);
        listElement.appendChild(resultElement);
    }
}

// Actual execution

// Create Products into array
productArray.push(new Product('bag', 'image/bag.jpg'));
productArray.push(new Product('banana', 'image/banana.jpg'));
productArray.push(new Product('bathroom', 'image/bathroom.jpg'));
productArray.push(new Product('boots', 'image/boots.jpg'));
productArray.push(new Product('breakfast', 'image/breakfast.jpg'));
productArray.push(new Product('bubblegum', 'image/bubblegum.jpg'));
productArray.push(new Product('chair', 'image/chair.jpg'));
productArray.push(new Product('cthulhu', 'image/cthulhu.jpg'));
productArray.push(new Product('dog-duck', 'image/dog-duck.jpg'));
productArray.push(new Product('dragon', 'image/dragon.jpg'));
productArray.push(new Product('pen', 'image/pen.jpg'));
productArray.push(new Product('pet-sweep', 'image/pet-sweep.jpg'));
productArray.push(new Product('scissors', 'image/scissors.jpg'));
productArray.push(new Product('shark', 'image/shark.jpg'));
productArray.push(new Product('sweep', 'image/sweep.png'));
productArray.push(new Product('tauntaun', 'image/tauntaun.jpg'));
productArray.push(new Product('unicorn', 'image/unicorn.jpg'));
productArray.push(new Product('usb', 'image/usb.gif'));
productArray.push(new Product('water-can', 'image/water-can.jpg'));
productArray.push(new Product('wine-glass', 'image/wine-glass.jpg'));

remainingImagesArray = productArray.slice();

displayAllImages();

// set event listener
var productImagesElement = document.getElementById('product-images');
productImagesElement.addEventListener('click', handleClick);
