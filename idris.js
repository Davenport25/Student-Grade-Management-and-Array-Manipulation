// Student Grade Management & Array Manipulation

// Array to store student grades is the first step
let grades = []; // Declaring an array

// Function to add a new grade
function addGrade(grade) {
    if (!isNaN(grade) && grade >= 0 && grade <= 100) {  // Checks if the grade is not a number and also checks the range of the grade
        grades.push(grade);
        console.log(`Grade ${grade} has been added successfully.`);
    } else {
        console.log("Invalid grade. Please enter a number between 0 and 100.");
    }
}

// Function to calculate the average grade
function calculateAverage() {
    if (grades.length === 0) {  // Checks if the grade array is empty, so it can perform the intended function
        console.log("No grades available to calculate the average.");
        return;
    }
    let total = grades.reduce((sum, grade) => sum + grade, 0);
    console.log(`The average grade is: ${(total / grades.length)}`);
}

// Function to find the highest grade
function findHighest() {
    if (grades.length === 0) {  // Checks if the grade array is empty, so it can perform the intended function
        console.log("No grades available.");
        return;
    }
    console.log(`The highest grade is: ${Math.max(...grades)}`); // using a spread operator to expand the array into individual elements
}

// Function to find the lowest grade
function findLowest() {
    if (grades.length === 0) {   // Checks if the grade array is empty, so it can perform the intended function
        console.log("No grades available.");
        return;
    }
    console.log(`The lowest grade is: ${Math.min(...grades)}`); // using a spread operator to expand the array into individual elements
}

// Function to display all grades
function displayGrades() {
    if (grades.length === 0) {  // Checks if the grade array is empty, so it can perform the intended function
        console.log("No grades to display.");
        return;
    }
    console.log("The grades are: ", grades.join(", "));  // using join() to convert the grades array into a string to be displayed
}

// Function to sort grades in ascending order
function sortAscending() {
    let sorted = [...grades].sort((a, b) => a - b); 
    console.log("The grades in ascending order: ", sorted.join(", ")); // using join() to convert the grades array into a string to be displayed
}

// Function to sort grades in descending order
function sortDescending() {
   let sorted = [...grades].sort((a, b) => b - a);
    console.log("Grades in Descending Order: ", sorted.join(", ")); // using join() to convert the grades array into a string to be displayed
}

// Function to reverse the grades array
function reverseGrades() {
    reversed = [...grades].reverse();  // used to create a reversed copy
    console.log("The grades have been reversed: ", reversed.join(", "));
}

// Function to find the second largest grade
function findSecondLargest() {
    if (grades.length < 2) {  // Checks to make sure the number of grades are more than 2 to perform the intended function
        console.log("Not enough grades to find the second largest.");
        return;
    }
     uniqueGrades = [...new Set(grades)];  // Using set to create a new array without duplicates 
    uniqueGrades.sort((a, b) => b - a); // Sort in descending order
    console.log(`The second largest grade is: ${uniqueGrades[1]}`); // Setting the index to 1, to signify the second largest after arranging in descending order
}

// Function to remove duplicates from grades
function removeDuplicates() {
    grades = [...new Set(grades)];  // Using set to create a new array without duplicates
    console.log("Duplicates removed. Updated Grades: ", grades.join(", "));
}

// Sample Menu to interact with the program
function showMenu() {
    console.log("\nMenu:");
    console.log("1. Add Grade");
    console.log("2. Calculate Average Grade");
    console.log("3. Find Highest Grade");
    console.log("4. Find Lowest Grade");
    console.log("5. Display All Grades");
    console.log("6. Sort Grades (Ascending)");
    console.log("7. Sort Grades (Descending)");
    console.log("8. Reverse Grades");
    console.log("9. Find Second Largest Grade");
    console.log("10. Remove Duplicates");
    console.log("11. Exit");
}

// Prompt for users 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mainMenu() {
    showMenu();
    rl.question("Choose an option (1-11): ", (choice) => {
        switch (choice) {  // Using the switch statement to compare the choice value to each case. We have 11 cases
            case "1":
                rl.question("Enter a grade to add (0-100): ", (input) => {
                    addGrade(parseFloat(input));
                    mainMenu();
                });
                break;
            case "2":
                calculateAverage();
                mainMenu();
                break;
            case "3":
                findHighest();
                mainMenu();
                break;
            case "4":
                findLowest();
                mainMenu();
                break;
            case "5":
                displayGrades();
                mainMenu();
                break;
            case "6":
                sortAscending();
                mainMenu();
                break;
            case "7":
                sortDescending();
                mainMenu();
                break;
            case "8":
                reverseGrades();
                mainMenu();
                break;
            case "9":
                findSecondLargest();
                mainMenu();
                break;
            case "10":
                removeDuplicates();
                mainMenu();
                break;
            case "11":
                console.log("Exiting program. Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid option. Please choose between 1 and 11.");
                mainMenu();
                break;
        }
    });
}

// Start the program
mainMenu();
