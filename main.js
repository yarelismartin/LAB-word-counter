console.log("Connected!")
// YOU WILL MODIFY THIS FUNCTION TO GET THE PROGRAM TO WORK
const wordCounter = (value) => {
  // Type into the input and press submit, you will see the value you entered in your console
  const wordCount = document.getElementById("word-count");
  const error = document.getElementById("error");
  console.log(value);

// the .trim will tak eout any unnecessary spacing. we are checking if it's not equal to no space 
  if (value.trim() !== '') {
    let totalCount = 0;   
    // inside word lets you know if you are currenlt with in a word when program in running. allows you to track when new word starts 
    let insideWord =false; 

    // using a for loop to run through the inputted text. 
    for (let i=0; i < value.length; i++) {
      // value must not be equal to a space and it must not be inside of a word in prder fot this to run. Identifies the start of a new word
      if (value [i] !== ' ' && insideWord === false) {
        // incremmenting the counter by one and changin git to true because now you are within a word 
        totalCount++; 
        insideWord = true;
        // this will run when there is a space in order to change the boolean to dalse because are are not within a word so the boolean needs to be unpdated so that the if statment runs next
      } else if (value[i] === ' ') {
        insideWord = false;
      }
    }

    wordCount.innerHTML = `Word Count: ${totalCount}`; 
  } else {
    // if the value is empty, set the error message value to "Please input text"
    error.innerHTML = "Please input text"; // UPDATE THIS
  }
}

// OPTIONAL CHALLENGE
const toggleMode = (btnText) => {
  // complete the function

  const bgSwitch = document.getElementById("bg-switch");
  
}

// ************************************************ //
// **** DO NOT MODIFY THE CODE BELOW THIS LINE **** //
// ************************************************ //

// These are query selectors. We will focus on them later in the course
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");
const error = document.querySelector("#error");
const wordCount = document.querySelector("#word-count");
const toggleButton = document.querySelector("#bg-switch");

// These are event listeners. We will focus on them later in the course
form.addEventListener("submit", (event) => {
  event.preventDefault(); // the default behavior of a form is to reload the page, we do not want that so we want to prevent that behavior
  error.innerHTML = ""; // clear out the innerHTML on submit
  wordCount.innerHTML = ""; // clear out the innerHTML on submit
  const value = textarea.value; // grab the value of the text area on submit
  wordCounter(value); // call the function and pass it the value
});

form.addEventListener("reset", () => {
  error.innerHTML = ""; // on reset, clear the innderHTML
  wordCount.innerHTML = ""; // on reset, clear the innderHTML
});

toggleButton.addEventListener("click", (event) => {
  toggleMode(event.target.innerHTML);
});
