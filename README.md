#ReadMe
# CoolCademy Alphabet Learning App

# Overview
The Alphabet Learning App is an interactive, educational tool designed to help users learn the alphabet. The app allows users to input letters, 
dynamically generates flashcards with images and text, and saves progress using local storage. It also includes background music, a modal interface, 
and a "Play Again" feature for restarting the learning session.

# Features
Dynamic Flashcards: Generates cards with a front and back, featuring images and words associated with the selected letter.
Audio Playback: Background music that loops continuously, with user controls for pause/play.
Progress Persistence: Stores generated cards in the browser's local storage, so progress remains after a page reload.
User-Friendly Modal: Clean interface for entering letters through a pop-up modal.
Responsive Design: Mobile-friendly layout using Bootstrap for optimal viewing on all devices.
"Play Again" Button: Clears progress and allows users to start fresh.

# Technologies Used
HTML5: Markup structure.
CSS3: Styling and layout (with Bootstrap for responsiveness).
JavaScript: Dynamic functionality and local storage integration.
Bootstrap: Prebuilt UI components for modal, grid layout, and styling.
jQuery: Simplified DOM manipulation for modal interactions.
Setup and Usage


# Requirements
A modern web browser (Chrome, Firefox, Edge, etc.)
Internet connection (to access Bootstrap and jQuery via CDN links).

# Steps to Run the App
Clone or download the project files to your local machine.
Ensure the file structure matches the following:
CSS


# Copy code
Alphabet Learning App/
├── Assets/
│   ├── audio/
│   │   └── game-music-loop-6-144641.mp3
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   ├── choo-choo-train.jpg
│   │   ├── Letter A.jpg
│   │   ├── Animal A.jpg
│   │   └── (other letter/animal images)...
│   └── script.js
├── index.html
Open index.html in your browser.


# How to Use
Start the App: Upon opening, background music will begin playing, and existing progress (if any) will load.
Input Letters: Click the "Enter a Letter" button to open the modal. Enter any letter from A to Z and submit.
View Cards: The app generates a flashcard for the entered letter and displays it in the main area.
Play Again: Click the "PLAY AGAIN!" button to clear all cards and restart.

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code.

# Acknowledgments
Bootstrap: For responsive UI components.
jQuery: For simplifying JavaScript DOM manipulation.
FreeSound: For background audio.
Collaborators: Noela Deane, Ben Cook,  Bryan Esslinger, Josh Kramer
