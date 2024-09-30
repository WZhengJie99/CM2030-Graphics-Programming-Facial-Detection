var w = 160, h = 120;
var detector;
var classifier = objectdetect.frontalface;
var faceImg;
var img;
var faces;

let redSlider, greenSlider, blueSlider, brightnessSlider;
let cyanSlider, magentaSlider, yellowSlider, blackSlider;
let hueSlider, saturationSlider, lightnessSlider;

var fileInput;
var mode = 1;
let sunglassesImg;
let dropdown;

//sunglassesImg from https://freepngimg.com/png/18244-sunglasses-png-picture
//maskImg from https://www.cleanpng.com/png-chinese-lion-dance-head-chinese-mythical-mask-face-7826902/

function preload() {
    img = loadImage("assets/beansbag.jpeg", function() {});
    sunglassesImg = loadImage("assets/sunglasses.png");
    maskImg = loadImage("assets/chinese-lion-dance-mask.png");
}

function setup() {
    createCanvas(750, 1000);
    pixelDensity(1);

    capture = createCapture(VIDEO);
    capture.size(w, h);
    capture.hide();

    extCapture = createCapture(VIDEO);
    extCapture.size(w, h);
    extCapture.hide();

    var scaleFactor = 1.2;
    detector = new objectdetect.detector(w, h, scaleFactor, classifier);
    faceImg = createImage(w, h);

    fileInput = createFileInput(chooseFile);
    fileInput.position(360, 40);

    slidersandButtons();
}

function draw() {
    background(233,150,122);
    texts();

    if (img) {
        drawImage();
        drawGreyscaleAndBrightness();

        drawRedChannel();
        drawGreenChannel();
        drawBlueChannel();

        drawRedChannelwSlider(redSlider.value());
        drawGreenChannelwSlider(greenSlider.value());
        drawBlueChannelwSlider(blueSlider.value());
        drawGreyscaleAndBrightnesswSlider(brightnessSlider.value());

        translate(-520, 150);
        drawImage();
        rgbToCMYK();
        rgbToHsl();

        faceDetect();
        rgbToCMYKwSlider();
        rgbToHslwSlider();

        extension();
    }
}

////////////////////////////////////////////////////////////////////

function keyPressed() {
    if (key === '1') {
        mode = 1;
        console.log('Greyscale mode');
    } else if (key === '2') {
        mode = 2;
        console.log('Blurred mode');
    } else if (key === '3') {
        mode = 3;
        console.log('CMYK mode');
    } else if (key === '4') {
        mode = 4;
        console.log('Pixelate mode');
    }
}

////////////////////////////////////////////////////////////////////

function chooseFile(file) {
    if (file.type === "image") {
        loadImage(file.data, function(newImg) {
            img = newImg;
            redraw();
            console.log("File chosen: ", file.name);
        });
    } else {
        console.error("File type not supported: ", file.type);
    }
}

////////////////////////////////////////////////////////////////////

function captureWebcam() {
    img = createImage(w, h);
    img.copy(capture, 0, 0, capture.width, capture.height, 0, 0, w, h);

    redraw();
    console.log("Webcam Captured! ");
}

function captureWebcamwFilter() {
    img = createImage(w, h);
    img.copy(capture, 0, 0, capture.width, capture.height, 0, 0, w, h);

    faceImg = createImage(w, h);
    faceImg.copy(capture, 0, 0, capture.width, capture.height, 0, 0, w, h);

    faces = detector.detect(faceImg.canvas);

    for (var i = 0; i < faces.length; i++) {
        var face = faces[i];
        if (face[4] > 4) {
            var faceRegion = faceImg.get(face[0], face[1], face[2], face[3]);
            applyFilters(faceRegion);

            img.copy(faceRegion, 0, 0, faceRegion.width, faceRegion.height, face[0], face[1], faceRegion.width, faceRegion.height);
        }
    }

    redraw();
    console.log("Webcam with filter Captured! ");
}

function captureExtensionWebcam() {
    img = createImage(w, h);
    img.copy(extCapture, 0, 0, extCapture.width, extCapture.height, 0, 0, w, h);

    faceImg = createImage(w, h);
    faceImg.copy(extCapture, 0, 0, extCapture.width, extCapture.height, 0, 0, w, h);
    faces = detector.detect(faceImg.canvas);

    for (var i = 0; i < faces.length; i++) {

        if (dropdown.value() === 'Sunglasses') {
            
            var face = faces[i];
            var eyeX = face[0] + face[2] * 0-5;
            var eyeY = face[1] + face[3] * 0.3;
            var eyeWidth = face[2];
            var eyeHeight = face[3] * 0.25;

            var eyeWidthScale = 1.2;
            var eyeHeightScale = 1.2;
            
            img.copy(sunglassesImg, 0, 0, sunglassesImg.width, sunglassesImg.height, eyeX, eyeY, eyeWidth * eyeWidthScale, eyeHeight * eyeHeightScale);
        } 
        else if (dropdown.value() === 'Mask') {

            //-45 and -60 to offset the face box
            var face = faces[i];
            var faceX = face[0] + face[2] * 0-45;
            var faceY = face[1] + face[3] * 0-60;

            var maskScale = 1.2;
            var maskWidth = maskImg.width * 0.03;
            var maskHeight = maskImg.height * 0.03;

            img.copy(maskImg, 0, 0, maskImg.width, maskImg.height, faceX, faceY, maskWidth * maskScale, maskHeight * maskScale);

        }
    }
    redraw();
    console.log("Extension Webcam Captured! ");
}

////////////////////////////////////////////////////////////////////

function slidersandButtons()
{
    redSlider = createSlider(0, 256, 125);
    redSlider.position(30, h*3 + 45);
    greenSlider = createSlider(0, 256, 125);
    greenSlider.position(w + 43, h*3 + 45);
    blueSlider = createSlider(0, 256, 125);
    blueSlider.position(w*2 + 53, h*3 + 45);

    brightnessSlider = createSlider(0, 200, 100);
    brightnessSlider.position(w*3 + 63, h*3 + 60);

    cyanSlider = createSlider(0, 256, 125);
    cyanSlider.position(w + 40, h*5 + 112);
    magentaSlider = createSlider(0, 256, 125);
    magentaSlider.position(w + 40, h*5 + 152);
    yellowSlider = createSlider(0, 256, 125);
    yellowSlider.position(w + 40, h*5 + 192);
    blackSlider = createSlider(0, 256, 125);
    blackSlider.position(w + 40, h*5 + 232);

    hueSlider = createSlider(0, 360, 180);
    hueSlider.position(w*2 + 50, h*5 + 112);
    saturationSlider = createSlider(0, 100, 50);
    saturationSlider.position(w*2 + 50, h*5 + 152);
    lightnessSlider = createSlider(0, 100, 50);
    lightnessSlider.position(w*2 + 50, h*5 + 192);

    var captureButton = createButton("Capture Webcam");
    captureButton.position(360, 70);
    captureButton.mousePressed(captureWebcam);

    var captureButtonTwo = createButton("Capture Webcam with Filter");
    captureButtonTwo.position(w*2 + 40, 100);
    captureButtonTwo.mousePressed(captureWebcamwFilter);

    var captureButtonThree = createButton("Capture Extension Webcam");
    captureButtonThree.position(w + 35, h*7 + 60);
    captureButtonThree.mousePressed(captureExtensionWebcam);

    dropdown = createSelect();
    dropdown.position(w + 35, h*7 + 100);
    dropdown.option('Sunglasses');
    dropdown.option('Mask');
    dropdown.changed(selectEvent);
}

function texts()
{
    textSize(15);
    fill(0);
    stroke(1);

    text("Press number key", 10, 703);
    text("to change modes:", 10, 723);

    fill(0);
    noStroke(0);

    text("Brightness", 565, 408);

    text("1. Greyscale", 10, 748);
    text("2. Blurred", 10, 768);
    text("3. CMY(K)", 10, 788);
    text("4. Pixelate", 10, 808);

    text("Cyan", 240, 700);
    text("Magenta", 230, 740);
    text("Yellow", 235, 780);
    text("Black", 238, 820);

    text("Hue", 413, 700);
    text("Saturation", 395, 740);
    text("Lightness", 397, 780);
}
