let mobilenet;
let puffin;

function preload() {    
    mobilenet = ml5.imageClassifier('MobileNet');
    puffin = createImg('https://images-na.ssl-images-amazon.com/images/I/41Xe%2B6VIgtL.jpg', 'cartoon', 'anonymous');
}

function setup() {
    createCanvas(400, 400);    
    image(puffin, 0, 0, width, height);    
    createDiv('Loading prediction model...');
    mobilenet.predict(puffin, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
        return;
    }
    console.log(results);
    createDiv('Predicting image...');
    createDiv('Label: ' + results[0].label);
    createDiv('Confidence: ' + nf(results[0].confidence, 0, 2));
}

