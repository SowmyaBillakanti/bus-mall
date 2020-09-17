'use strict';

var productArray = [];
var remainingImagesArray = []
var maxClicks = 25;
var totalClicks = 0;
var votesArray = []
var viewCountArray = [];

function Product(name, image) {
    this.name = name;
    this.filePathOfImage = image;
    this.isClicked = false;
    this.timesShown = 0;
    this.numberOfVotes = 0;
    this.previouslyshown = false;
}

function createProductsIntoArray() {
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
}

function displayRandomImage(imageElement) {
    if (remainingImagesArray.length === 0) {
        remainingImagesArray = [...productArray]
    }
    function random(){
        return Math.floor(Math.random() * remainingImagesArray.length);
    }
    var randomIndex = random()

    if (remainingImagesArray.length < 3) {
        productArray[randomIndex].previouslyshown = true;
    }
    if (remainingImagesArray.length === 15) {
        for (var i = 0; i < productArray.length; i++) {
            productArray[i].previouslyshown = false;
        }
    }
    // console.log(productArray);
    // console.log(remainingImagesArray);
    if (productArray[randomIndex].previouslyshown === true){
        console.log('original', randomIndex);
        randomIndex = random();
        console.log('After changes', randomIndex);
    }
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
    totalClicks += 1;

    var elementName = event.target.getAttribute("name")

    for (var i = 0; i < productArray.length; i++) {
        if (productArray[i].name === elementName) {
            productArray[i].isClicked = true;
            productArray[i].numberOfVotes += 1;
        }
    }

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

    for (var i = 0; i < productArray.length; i++) {
        var resultElement = document.createElement("li");
        resultElement.textContent = getSummaryForProduct(i);
        listElement.appendChild(resultElement);
        votesArray.push(productArray[i].numberOfVotes);
        viewCountArray.push(productArray[i].timesShown);
    }

    chart.update();
}

// Actual execution

createProductsIntoArray();

remainingImagesArray = productArray.slice();

displayAllImages();

// set event listener
var productImagesElement = document.getElementById('product-images');
productImagesElement.addEventListener('click', handleClick);

var canvasElement = document.getElementById('myChart');
var ctx = canvasElement.getContext('2d');

var namesArray = []
for(var i = 0; i < productArray.length; i++) {
    namesArray.push(productArray[i].name);
}

var chartConfig = {
    type: 'bar',
    data: {
        // These will display at the bottom
        labels: namesArray,

        datasets: [
            {
                label: '# of Votes',
                data: votesArray,

                backgroundColor: [
                    'blue',
                    'darkgray',
                    'lightpurple',
                    'lightblue',
                    'navy',
                    'blue',
                    'darkgray',
                    'lightpurple',
                    'lightblue',
                    'navy',
                    'blue',
                    'darkgray',
                    'lightpurple',
                    'lightblue',
                    'navy',
                    'blue',
                    'darkgray',
                    'lightpurple'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'number of times shown',
                data: viewCountArray,
                backgroundColor: [
                    'blue',
                    'darkgray',
                    'lightpurple',
                    'lightblue',
                    'navy',
                    'blue',
                    'darkgray',
                    'lightpurple',
                    'lightblue',
                    'navy',
                    'blue',
                    'darkgray',
                    'lightpurple',
                    'lightblue',
                    'navy',
                    'blue',
                    'darkgray',
                    'lightpurple'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
   },
    options: {
        maintainAspectRatio: false,
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    max: 20,
                    min: 0,
                    beingAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
}

var chart = new Chart(ctx, chartConfig);
