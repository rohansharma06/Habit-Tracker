# Habit-Tracker
As some greate personality said: `What gets measured gets managed`. So here we have an habit tracking application, which track you daily habit and also see track of 6 previous day.

## Functionality
- Home Page:
The home page have two input add-habit and time to do that. It display all the the habits which the user add to it tracker. If user dont want to track that habit he can easily deleate it from homepage. 

![Homepage](/assets/images/homepage.JPG)

- Days Track Page:
The Track page have status of current and previous five days, for every habit we have three status None, Incomplete, Complete. User can change status from this page. 

![DaysTrack](/assets/images/details.JPG)


## Folder Structure
 #### This code follows MVC (Model, View, Controller) Architecture.
- Assets: It contains all static file CSS, JS, Images.
- Config: It contains connection to Database.
- Controller: It redirect the webpage according to user action.
- Models: It contains Database Schema.
- Routes: It contains all routes.
- Views: It contins all file which render UI to browser.

## Getting Started
1. Clone the project.
2. Go to folder.
3. Run following command.
    ```npm install express
       npm install ejs
       npm install mongoose ```
4. Connect to mongodb.
5. run command npm start
6. Go to https://localhost/8000 to use the application.


