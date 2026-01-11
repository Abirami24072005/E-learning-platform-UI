let menu = document.querySelector('#menu'); // Select the element with id "menu" and store it in the variable `menu`
let navbar = document.querySelector('.navbar'); // Select the first element with class "navbar" and store it in `navbar`

menu.onclick = () =>{ // Add a click event listener to the `menu` element
    menu.classList.toggle('fa-times'); // Toggle the 'fa-times' class on `menu` (adds it if missing, removes if present)
    navbar.classList.toggle('active'); // Toggle the 'active' class on `navbar`
}

window.onscroll = () =>{ // Add a scroll event listener to the window
    menu.classList.remove('fa-times'); // Remove the 'fa-times' class from `menu` when scrolling
    navbar.classList.remove('active'); // Remove the 'active' class from `navbar` when scrolling
}

let totalLessons = 3; // Define the total number of lessons as 3

function completeLesson(lesson){ // Define a function `completeLesson` that takes a lesson identifier
    let completed = JSON.parse(localStorage.getItem("completedLessons")) || []; // Retrieve completed lessons from localStorage, or use an empty array if none

    if(!completed.includes(lesson)){ // If the lesson is not already in the completed list
        completed.push(lesson); // Add the lesson to the completed array
        localStorage.setItem("completedLessons", JSON.stringify(completed)); // Save the updated array back to localStorage
    }

    updateProgress(); // Update the progress bar after completing a lesson
}

function updateProgress(){ // Define a function to update the progress bar
    let completed = JSON.parse(localStorage.getItem("completedLessons")) || []; // Retrieve completed lessons from localStorage, or use empty array
    let percent = (completed.length / totalLessons) * 100; // Calculate percentage of completed lessons

    document.getElementById("progress").style.width = percent + "%"; // Set the width of the progress bar according to percentage
    document.getElementById("progress-text").innerText = percent + "% completed"; // Update the text showing completion percentage
}

window.onload = updateProgress; // Call `updateProgress` when the window finishes loading to display current progress
