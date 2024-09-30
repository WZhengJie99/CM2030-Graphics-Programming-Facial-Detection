/*
CM2030 Graphics Programming Final Coursework: An image processing application Commentary

Wong Zheng Jie
zjwong004@mymail.sim.edu.sg

Abstract.
A commentary on the final coursework: An image processing application for SIM-UOL BSc Computer Science module, Graphics Programming.

1. Tasks and Findings
The image segmentation is similar for each colour channel. pixel values that are greater than the threshold remain as their respective colour. An interesting finding is that most pixel values that are about to be lower than the threshold are beside pixel values that are already lower than the threshold, resulting in a domino effect of a black pixel patch growing outwards as the threshold increases.

A problem encountered during this assignment was image segmentation for my chosen colour space, CMY(K) (Cyan Magenta Yellow (Black). Because each colour was unique and had their own formulae, I decided to add a slider for each CMY(K), image segmenting differently based on each individual slider.

I also did the same for hue, saturation, and lightness, to ensure that image segmentation was possible for each element (hue, saturation, and lightness). The formulae approach for image segmentation was different because none of the individual elements was tied to a specific colour.

I noticed that for CMY(K), sliding colour segmentation for black makes a day and night difference. It shows that sufficient black is required to produce or alter an image and is truer for what CMY(K) is based on, a printer.

2. Extension
The extension I implemented involves pre-loading sunglasses over a detected set of eyes [1]. Utilizing a similar approach to task/steps 12, 13, facial detection was edited to be able to adjust the x and y coordinates as well as the width and height of the sunglasses. This was to ensure that the sunglasses would sit correctly at the nose bridge of a detected face.

A capture function that screenshots the webcam and sunglasses was included after. The capture function also proved to be a challenge. I was using the original webcam as both task/steps 12, 13 facial detections as well as my extensions webcam. I soon realized that I was not able to capture the sunglasses as part of the capture function. I created a separate webcam to ensure that the filters from task/steps 12, 13 were not included during the screenshot, and the sunglasses image, added onto it.

I then build on my extension function by adding in a Chinese lion dance mask mode [2], selectable through a dropdown box. I first approach the mode like task/steps 12, 13, using a var face vector. I was unable to add this into my capture function and decided to use a similar approach to my sunglass’s mode.

I also encountered problems when adding in the Chinese lion dance mask mode to the capture function. I could not edit the x and y of the image because part of it would be cut off. so instead I edited the x and y of the detection face box, offsetting it to align with the detected face.

3. Bibliography, Works Cited and References
[1] https://freepngimg.com/png/18244-sunglasses-png-picture
[2] https://www.cleanpng.com/png-chinese-lion-dance-head-chinese-mythical-mask-face-7826902/

*/