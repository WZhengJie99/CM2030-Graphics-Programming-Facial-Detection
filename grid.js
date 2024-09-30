//common colours used in filter functions
function commonPixels(copyImg, x, y) {
    var pixelIndex = ((copyImg.width * y) + x) * 4;
    var pixelRed = copyImg.pixels[pixelIndex + 0];
    var pixelGreen = copyImg.pixels[pixelIndex + 1];
    var pixelBlue = copyImg.pixels[pixelIndex + 2];
    return { pixelIndex, pixelRed, pixelGreen, pixelBlue};
}

////////////////////////////////////////////////////////////////////
//original image, task 1-3
function drawImage() {
    image(img, 10, 10);
    img.resize(w, h);
}

////////////////////////////////////////////////////////////////////
//Greyscale and brightness, task 4, 5
function drawGreyscaleAndBrightness() {
    translate(w + 20, 10);
    var copyImg = img.get();
    copyImg.loadPixels();

    for (var y = 0; y < copyImg.height; y++) {
        for (var x = 0; x < copyImg.width; x++) {
            var {pixelIndex, pixelRed, pixelGreen, pixelBlue} = commonPixels(copyImg, x, y);

            // since 1 = 100%, +20% brightness = 1.2
            var brightness = 1.2;
            var ave = ((pixelRed + pixelGreen + pixelBlue) / 3) * brightness;
            
            //5. Increasing the brightness can cause the pixel intensity to get beyond the 255 levels. Write code to prevent this from happening.
            ave = constrain(ave, 0, 255);

            copyImg.pixels[pixelIndex + 0] = ave;
            copyImg.pixels[pixelIndex + 1] = ave;
            copyImg.pixels[pixelIndex + 2] = ave;
        }
    }

    copyImg.updatePixels();
    image(copyImg, 0, 0);
    copyImg.resize(w, h);
}

////////////////////////////////////////////////////////////////////
//Red channel, task 6
function drawRedChannel() {
    translate(-w - 10, h + 10);
    var redImg = img.get();
    redImg.loadPixels();

    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            var {pixelIndex, pixelRed, pixelGreen, pixelBlue} = commonPixels(redImg, x, y);
            redImg.pixels[pixelIndex + 0] = pixelRed;
            redImg.pixels[pixelIndex + 1] = 0;
            redImg.pixels[pixelIndex + 2] = 0;
            redImg.pixels[pixelIndex + 3] = 255;
        }
    }
    redImg.updatePixels();
    image(redImg, 0, 0);
    redImg.resize(w, h);
}

////////////////////////////////////////////////////////////////////
//Green channel, task 6
function drawGreenChannel() {
    translate(w + 10, 0);
    var greenImg = img.get();
    greenImg.loadPixels();

    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            var {pixelIndex, pixelRed, pixelGreen, pixelBlue} = commonPixels(greenImg, x, y);
            greenImg.pixels[pixelIndex + 0] = 0;
            greenImg.pixels[pixelIndex + 1] = pixelGreen;
            greenImg.pixels[pixelIndex + 2] = 0;
            greenImg.pixels[pixelIndex + 3] = 255;
        }
    }
    greenImg.updatePixels();
    image(greenImg, 0, 0);
    greenImg.resize(w, h);
}

////////////////////////////////////////////////////////////////////
//Blue channel, task 6
function drawBlueChannel() {
    translate(w + 10, 0);
    var blueImg = img.get();
    blueImg.loadPixels();

    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            var {pixelIndex, pixelRed, pixelGreen, pixelBlue} = commonPixels(blueImg, x, y);
            blueImg.pixels[pixelIndex + 0] = 0;
            blueImg.pixels[pixelIndex + 1] = 0;
            blueImg.pixels[pixelIndex + 2] = pixelBlue;
            blueImg.pixels[pixelIndex + 3] = 255;
        }
    }
    blueImg.updatePixels();
    image(blueImg, 0, 0);
    blueImg.resize(w, h);
}

////////////////////////////////////////////////////////////////////
//Red channel with slider for image segmentation, task 7
function drawRedChannelwSlider(threshold) {
    translate(-w*2 - 20, h + 10);
    var redImg = img.get();
    redImg.loadPixels();

    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            var {pixelIndex, pixelRed, pixelGreen, pixelBlue} = commonPixels(redImg, x, y);

            // Red channel segmentation
            if (pixelRed > threshold) {
                redImg.pixels[pixelIndex + 0] = pixelRed;
                redImg.pixels[pixelIndex + 1] = 0;
                redImg.pixels[pixelIndex + 2] = 0;
                redImg.pixels[pixelIndex + 3] = 255;
            } else {
                redImg.pixels[pixelIndex + 0] = 0;
                redImg.pixels[pixelIndex + 1] = 0;
                redImg.pixels[pixelIndex + 2] = 0;
                redImg.pixels[pixelIndex + 3] = 255;
            }
        }
    }
    redImg.updatePixels();
    image(redImg, 0, 0);
    redImg.resize(w, h);
}

////////////////////////////////////////////////////////////////////
//Green channel with slider for image segmentation, task 7
function drawGreenChannelwSlider(threshold) {
    translate(w + 10, 0);
    var greenImg = img.get();
    greenImg.loadPixels();

    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            var {pixelIndex, pixelRed, pixelGreen, pixelBlue} = commonPixels(greenImg, x, y);

            //green channel segmentation
            if (pixelGreen > threshold) {
                greenImg.pixels[pixelIndex + 0] = 0;
                greenImg.pixels[pixelIndex + 1] = pixelGreen;
                greenImg.pixels[pixelIndex + 2] = 0;
                greenImg.pixels[pixelIndex + 3] = 255;
            } else {
                greenImg.pixels[pixelIndex + 0] = 0;
                greenImg.pixels[pixelIndex + 1] = 0;
                greenImg.pixels[pixelIndex + 2] = 0;
                greenImg.pixels[pixelIndex + 3] = 255;
            }
        }
    }
    greenImg.updatePixels();
    image(greenImg, 0, 0);
    greenImg.resize(w, h);
}

////////////////////////////////////////////////////////////////////
//Blue channel with slider for image segmentation, task 7
function drawBlueChannelwSlider(threshold) {
    translate(w + 10, 0);
    var blueImg = img.get();
    blueImg.loadPixels();

    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            var {pixelIndex, pixelRed, pixelGreen, pixelBlue} = commonPixels(blueImg, x, y);

            //blue channel segmentation
            if (pixelBlue > threshold) {
                blueImg.pixels[pixelIndex + 0] = 0;
                blueImg.pixels[pixelIndex + 1] = 0;
                blueImg.pixels[pixelIndex + 2] = pixelBlue;
                blueImg.pixels[pixelIndex + 3] = 255;
            } else {
                blueImg.pixels[pixelIndex + 0] = 0;
                blueImg.pixels[pixelIndex + 1] = 0;
                blueImg.pixels[pixelIndex + 2] = 0;
                blueImg.pixels[pixelIndex + 3] = 255;
            }
        }
    }
    blueImg.updatePixels();
    image(blueImg, 0, 0);
    blueImg.resize(w, h);
}

////////////////////////////////////////////////////////////////////
//Greyscale and brightness with slider for image segmentation
function drawGreyscaleAndBrightnesswSlider(threshold) {
    translate(w + 10, 0);
    var copyImg = img.get();
    copyImg.loadPixels();

    for (var y = 0; y < copyImg.height; y++) {
        for (var x = 0; x < copyImg.width; x++) {
            var {pixelIndex, pixelRed, pixelGreen, pixelBlue} = commonPixels(copyImg, x, y);
            var ave = (pixelRed + pixelGreen + pixelBlue) / 3;
            var brightness = ave * (1 + (brightnessSlider.value() / 100));

            //brightness segmentation
            if (brightness > threshold) {
                copyImg.pixels[pixelIndex + 0] = 255;
                copyImg.pixels[pixelIndex + 1] = 255;
                copyImg.pixels[pixelIndex + 2] = 255;
            } else {
                copyImg.pixels[pixelIndex + 0] = 0;
                copyImg.pixels[pixelIndex + 1] = 0;
                copyImg.pixels[pixelIndex + 2] = 0;
            }
        }
    }
    copyImg.updatePixels();
    image(copyImg, 0, 0);
    copyImg.resize(w, h);
}

////////////////////////////////////////////////////////////////////
//Cyan Magenta Yellow (Black) formulae according to ColourSpaceConversions.pdf
//task 9

function rgbToCMYK() {
    translate(w + 20, 10);
    var copyImg = img.get();
    copyImg.loadPixels();

    for(var y=0;y<img.height;y++){
        for(var x=0;x<img.width;x++){

            //normalization /*255
            var pixelIndex = ((img.width * y) + x) * 4;
            var pixelRed = img.pixels[pixelIndex + 0] / 255;
            var pixelGreen = img.pixels[pixelIndex + 1] / 255;
            var pixelBlue = img.pixels[pixelIndex + 2] / 255;

            let black = Math.min(1 - pixelRed, 1 - pixelGreen, 1 - pixelBlue);
            let cyan = ((1 - pixelRed - black) / (1 - black));
            let magenta = (1 - pixelGreen - black) / (1 - black);
            let yellow = (1 - pixelBlue - black) / (1 - black);

            copyImg.pixels[pixelIndex + 0] = cyan * 255;
            copyImg.pixels[pixelIndex + 1] = magenta * 255;
            copyImg.pixels[pixelIndex + 2] = yellow * 255;
            copyImg.pixels[pixelIndex + 3] = black * 255;
        }
    }
    copyImg.updatePixels();
    image(copyImg, 0, 0);
    copyImg.resize(w, h);
}

////////////////////////////////////////////////////////////////////
//RGB to Hue, Saturation, and Lightness, task 9

function rgbToHsl() {
    translate(w + 10, 0);
    var hslImg = img.get();
    hslImg.loadPixels();

    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            var {pixelIndex, pixelRed, pixelGreen, pixelBlue} = commonPixels(hslImg, x, y);

            let rgbColor = color(pixelRed, pixelGreen, pixelBlue);
            let h = hue(rgbColor);
            let s = saturation(rgbColor);
            let l = lightness(rgbColor);

            hslImg.pixels[pixelIndex + 0] = h;
            hslImg.pixels[pixelIndex + 1] = s;
            hslImg.pixels[pixelIndex + 2] = l;
            hslImg.pixels[pixelIndex + 3] = 255;
        }
    }
    hslImg.updatePixels();
    image(hslImg, 0, 0);
    hslImg.resize(w, h);
}

////////////////////////////////////////////////////////////////////
//Cyan Magenta Yellow (Black) formulae according to ColourSpaceConversions.pdf
//with slider, task 10

function rgbToCMYKwSlider() {
    translate(w + 10, 0);
    var copyImg = img.get();
    copyImg.loadPixels();

    let cyanValue = 0.5 - cyanSlider.value() / 255;
    let magentaValue = 0.5 - magentaSlider.value() / 255;
    let yellowValue = 0.5 - yellowSlider.value() / 255;
    let blackValue = 0.5 - blackSlider.value() / 255;

    //threshold
    let cyanRange = 0.3;
    let magentaRange = 0.3;
    let yellowRange = 0.3;
    let blackRange = 0.3;

    for(var y=0;y<img.height;y++){
        for(var x=0;x<img.width;x++){

            var pixelIndex = ((img.width * y) + x) * 4;
            var pixelRed = img.pixels[pixelIndex + 0] / 255;
            var pixelGreen = img.pixels[pixelIndex + 1] / 255;
            var pixelBlue = img.pixels[pixelIndex + 2] / 255;

            let black = (Math.min(1 - pixelRed, 1 - pixelGreen, 1 - pixelBlue))-blackValue;
            let cyan = ((1 - pixelRed - black) / (1 - black))-cyanValue;
            let magenta = ((1 - pixelGreen - black) / (1 - black))-magentaValue;
            let yellow = ((1 - pixelBlue - black) / (1 - black))-yellowValue;

            if (cyan > (0.5 - cyanRange) && cyan < (0.5 + cyanRange)) {
                copyImg.pixels[pixelIndex + 0] =255;}
            else {
                copyImg.pixels[pixelIndex + 0] = 0;}

            if (magenta > (0.5 - magentaRange) && magenta < (0.5 + magentaRange)) {
                copyImg.pixels[pixelIndex + 1] = 255;}
            else {
                copyImg.pixels[pixelIndex + 1] = 0;}

            if (yellow > (0.5 - yellowRange) && yellow < (0.5 + yellowRange)) {
                copyImg.pixels[pixelIndex + 2] = 255;}
            else {
                copyImg.pixels[pixelIndex + 2] = 0;}

            if (black > (0.5 - blackRange) && black < (0.5 + blackRange)) {
                copyImg.pixels[pixelIndex + 3] = 255;}
            else {
                copyImg.pixels[pixelIndex + 3] = 255;
            }
        }
    }
    copyImg.updatePixels();
    image(copyImg, 0, 0);
    copyImg.resize(w, h);
}

////////////////////////////////////////////////////////////////////
//RGB to Hue, Saturation, and Lightness with slider, task 10

function rgbToHslwSlider() {
    translate(w + 10, 0);
    var hslImg = img.get();
    hslImg.loadPixels();

    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            var {pixelIndex, pixelRed, pixelGreen, pixelBlue} = commonPixels(hslImg, x, y);

            let rgbColor = color(pixelRed, pixelGreen, pixelBlue);
            let h = hue(rgbColor);
            let s = saturation(rgbColor);
            let l = lightness(rgbColor);

            //threshold
            let hOffset = hueSlider.value();
            let sOffset = saturationSlider.value();
            let lOffset = lightnessSlider.value();

            if (h >= (150 - hOffset) && h <= (150 + hOffset) &&
                s >= (75 - sOffset) && s <= (75 + sOffset) &&
                l >= (75 - lOffset) && l <= (75 + lOffset)) {

                hslImg.pixels[pixelIndex + 0] = 255;
                hslImg.pixels[pixelIndex + 1] = 255;
                hslImg.pixels[pixelIndex + 2] = 255;
                hslImg.pixels[pixelIndex + 3] = 255;
            } 
            else {
                let modifiedColor = color(h, s, l);
                hslImg.pixels[pixelIndex + 0] = red(modifiedColor);
                hslImg.pixels[pixelIndex + 1] = green(modifiedColor);
                hslImg.pixels[pixelIndex + 2] = blue(modifiedColor);
                hslImg.pixels[pixelIndex + 3] = 255;
            }
        }
    }
    hslImg.updatePixels();
    image(hslImg, 0, 0);
    hslImg.resize(w, h);
}

////////////////////////////////////////////////////////////////////
//face detection and replaced face images, task 12, 13

function faceDetect() {
    translate(-w*2 - 20, h + 10);
    image(capture, 0, 0, w, h);

    faceImg.copy(capture, 0, 0, capture.width, capture.height, 0, 0, capture.width, capture.height);
    faces = detector.detect(faceImg.canvas);

    for (var i = 0; i < faces.length; i++) {
        var face = faces[i];
        if (face[4] > 1) {
            var faceRegion = faceImg.get(face[0], face[1], face[2], face[3]);
            applyFilters(faceRegion);
            image(faceRegion, face[0], face[1]);
        }
    }
}

function applyFilters(img) {
    switch (mode) {
        case 1:
            img.filter(GRAY);
            break;

        case 2:
            img.filter(BLUR, 4);
            break;

        case 3:
            rgbToCMYKforCAM(img);
            break;

        case 4:
            img.filter(GRAY);
            pixelate(img, 10);
            break;

        default:
            break;
    }
}

//CMY(K) from task 9
function rgbToCMYKforCAM(img) {
    img.loadPixels();

    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            var pixelIndex = ((img.width * y) + x) * 4;
            var pixelRed = img.pixels[pixelIndex + 0] / 255;
            var pixelGreen = img.pixels[pixelIndex + 1] / 255;
            var pixelBlue = img.pixels[pixelIndex + 2] / 255;

            let black = Math.min(1 - pixelRed, 1 - pixelGreen, 1 - pixelBlue);
            let cyan = ((1 - pixelRed - black) / (1 - black));
            let magenta = (1 - pixelGreen - black) / (1 - black);
            let yellow = (1 - pixelBlue - black) / (1 - black);

            img.pixels[pixelIndex + 0] = cyan * 255;
            img.pixels[pixelIndex + 1] = magenta * 255;
            img.pixels[pixelIndex + 2] = yellow * 255;
            img.pixels[pixelIndex + 3] = black * 255;
        }
    }

    img.updatePixels();
}

function pixelate(img, blockSize) {
    img.loadPixels();

    //rows and columns
    for (var y = 0; y < img.height; y += blockSize) {
        for (var x = 0; x < img.width; x += blockSize) {

            var totalIntensity = 0;

            for (var blockY = y; blockY < y + blockSize; blockY++) {
                for (var blockX = x; blockX < x + blockSize; blockX++) {
                    var pixelIndex = ((img.width * blockY) + blockX) * 4;
                    totalIntensity += img.pixels[pixelIndex];
                }
            }

            var averageIntensity = totalIntensity / (blockSize * blockSize);

            for (var blockY = y; blockY < y + blockSize; blockY++) {
                for (var blockX = x; blockX < x + blockSize; blockX++) {
                    var pixelIndex = ((img.width * blockY) + blockX) * 4;

                    img.pixels[pixelIndex] = averageIntensity;
                    img.pixels[pixelIndex + 1] = averageIntensity;
                    img.pixels[pixelIndex + 2] = averageIntensity;
                }
            }
        }
    }
    img.updatePixels();
}

////////////////////////////////////////////////////////////////////
//extension

function extension() {
    translate(-w*2 - 20, h*2 + 70);
    image(extCapture, 0, 0, w, h);

    faceImg.copy(extCapture, 0, 0, extCapture.width, extCapture.height, 0, 0, extCapture.width, extCapture.height);
    faces = detector.detect(faceImg.canvas);

    extCapture.loadPixels();
    for (var i=0; i<faces.length; i++){

        if (dropdown.value() === 'Sunglasses') {
            var face = faces[i];
            var eyeX = face[0] + face[2] * 0-5;
            var eyeY = face[1] + face[3] * 0.3;
            var eyeWidth = face[2];
            var eyeHeight = face[3] * 0.25;

            var eyeWidthScale = 1.2;
            var eyeHeightScale = 1.2;
            
            image(sunglassesImg, eyeX, eyeY, eyeWidth * eyeWidthScale, eyeHeight * eyeHeightScale);
        } 
        else if (dropdown.value() === 'Mask') {
            var face = faces[i];
            var faceX = face[0] + face[2] * 0.25;
            var faceY = face[1] + face[3] * 0;

            var maskScale = 1.2;
            var maskWidth = maskImg.width * 0.03;
            var maskHeight = maskImg.height * 0.03;

            image(maskImg, faceX - maskWidth / 2, faceY - maskHeight / 2, maskWidth * maskScale, maskHeight * maskScale);
            
//            var face = faces[i];
//            if (face[4] > 1) {
//                var faceRegion = faceImg.get(face[0], face[1], face[2], face[3]);
//
//                var maskScale = 1.5;
//                var maskWidth = maskImg.width * 0.03;
//                var maskHeight = maskImg.height * 0.03;
//
//                translate(face[0] + face[2] * 0.5, face[1] + face[3] * 0.5);
//                image(maskImg, -maskWidth / 2, -maskHeight / 2, maskWidth * maskScale, maskHeight * maskScale);
//                
//            }
        }

    }
    extCapture.updatePixels();
}

function selectEvent() {
    let selectedOption = dropdown.value();
    console.log('Selected Ext option:', selectedOption);
}
////////////////////////////////////////////////////////////////////
