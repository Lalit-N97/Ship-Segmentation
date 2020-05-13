# Ship-Segmentation
Project is all about producing an "output" image, from "input" image which may or may not contain a ship(s), where ships are bounded by contours around them if there are ships present in the "input" image.

ABOUT DATASET - 

Dataset is taken from kaggle - https://www.kaggle.com/c/airbus-ship-detection/data
This data is of 30 GB but here i have shrink the dataset to about 6000 images of total size 1 GB because this dataset contains
unbalanced images e.g - 75% of the total images(1,75,000 nearly) are "No Ship" images. Hence in making the dataset balanced
the size of the dataset drastically reduced.

ABOUT DEEP LEARNING ARCHITECTURE - 

UNet Architecture is taken as Deep Learning Model. Reason - this is one of the architectures which has compression as well as
expansion layers and can work with small set of training images.
Original Image Shape - 768 X 768
Image Used for Training has Shape - 128 X 128
Output Mask Image Shape - 128 X 128

ABOUT FOLDERS - 

After training of the model it has achieved 99.7% accuracy. Now on performing predictions for every test data in "Image" folder
corresponding mask image of that test image is predicted by the model which is saved in the "Mask" folder with the same name 
as that of original test image. Additionally a "Boundaries" folder is created where an rgb image of the test image is present 
created using corresponding image and mask. This "Boundaries" folder contains the actual segmented images which is our goal.

HTML AND JS FILES -

These are for diplaying the original test image as well as their mask and segmented image using a HTML web page.
