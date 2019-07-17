# To Do List App

## Overview
The goal of this project was to React to create a to do list that would allow a user to create items, delete items and to persist the data ona refresh . 

##Challenge
The to do list became challenging due to the fact that react handled the asynchronous functionality of setState differently from other async functions. If I tried to update my localStorage right after setting the state of the todoitem, the update wouldnt capture the value of set state right away and I would have to call it a second time to capture it.

#Solution
At first I had to use setTimeout to make sure that I was able to store the changes that I made to my state right away when I added an item. After researching the the method setState and the React component life cycle I was able to pass my update localstorage function as a callback to my setState function. 
To upload the task items from localstorage every time the page refreshed I  placed the update localstorage function inside the didComponentMount function. 


![Picture of To Do List](https://github.com/mmubuso/React-To-Do-List/blob/master/react-to-do-list.png)

## Game Play
![Gif of To Do List](https://media.giphy.com/media/duWkvOqNRZoX07zl7L/giphy.gif)

## How to Use
1. Enter an item and click add to create a to do item
2. Click on an item to delete it when its done



## Technologies Used
- Languages --> HTML, CSS3, JavaScript, JSX
- Libraries --> React, Flipmove







