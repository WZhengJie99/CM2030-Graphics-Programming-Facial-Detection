# CM2030-Graphics-Programming-Facial-Detection

This project is a web-based application for detecting faces and applying image filters in real-time. Built using p5.js, objectdetect.js, and a range of image manipulation techniques, it allows users to detect faces from a webcam feed, apply various filters, and capture images.

The application includes sliders for color adjustments (RGB, CMYK, HSL) and several interactive features like adding sunglasses or a mask to detected faces. Users can also upload their own images for editing or utilize the built-in webcam feed.

# Features
- Real-Time Face Detection: The app uses objectdetect.js to detect faces from the user's webcam or an uploaded image.

- Image Filters: Various filters such as grayscale, blur, CMYK, and pixelate can be applied to the detected face region.

- Color Adjustment Sliders: Fine-tune the image colors with RGB, CMYK, and HSL sliders.

- Sunglasses and Mask Overlays: Add fun overlays like sunglasses or a mask to detected faces.

- Image Upload: Users can upload their own images for face detection and apply filters.

- Capture from Webcam: Snap images directly from the webcam with or without filters.

# Technologies Used
- HTML5 for structure and content.

- JavaScript for face detection and interactive elements.

- p5.js for rendering graphics and capturing images.

- objectdetect.js for face detection.

- Image manipulation using sliders for RGB, CMYK, and HSL adjustments.

- Face overlays with selectable options for sunglasses or mask placement.

# How to Use
### Face Detection with Webcam:

- Launch the application in your browser.
- The webcam will be activated, and faces will be detected in real-time.
- Use the dropdown to select overlays like sunglasses or a mask.

### Apply Filters:

Press keys 1-4 to switch between different filter modes:

1. Grayscale

2. Blur

3. CMYK Color Model

4. Pixelate

Adjust the color sliders to modify image properties in real-time.

### Capture Image:

- Click "Capture Webcam" to take a snapshot of the webcam feed.
- Click "Capture Webcam with Filter" to apply filters before capturing.
- Click "Capture Extension Webcam" to capture using the external webcam feed with the selected overlay.
  
### Upload Image:

- Use the file input to upload an image from your device.
- The uploaded image can be modified using the same filters and sliders.
  
# Installation and Setup
Download or clone the repository:
```
git clone https://github.com/WZhengJie99/CM2030-Graphics-Programming-Facial-Detection.git
```
    
# Credits
- Colour Space Conversions by Adrian Ford (ajoec1@wmin.ac.uk <defunct>) and Alan Roberts (Alan.Roberts@rd.bbc.co.uk), August 11, 1998(a)

- Sunglasses image from freepngimg.com

- Mask image from cleanpng.com
