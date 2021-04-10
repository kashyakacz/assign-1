/*A fuction to change website to dark theme with button text change*/
function dark() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    if (document.querySelector('#darkbtn').textContent == "Dark Theme") {
        document.querySelector('#darkbtn').textContent = "Light Theme"
    }
    else {
         document.querySelector('#darkbtn').textContent = "Dark Theme"
}
        
}
/*An additional function for dark theme to change text colour*/
function dark1() {
     if(document.getElementById("darkbtn").style.color =="#faf4ed"){
        document.getElementById("item4").style.color="#191724"
        document.getElementById("item2").style.color="#191724"
        document.getElementById("item3").style.color="#191724"
        document.getElementById("item1").style.color="#191724"
        document.getElementById("item1.1").style.color="#191724"
        document.getElementById("darkbtn").style.color="#191724" 
     }
     /*Code is corrrect however does not want to change text color back to #191724 when clicking Light Theme again. */
     else {
        document.getElementById("item4").style.color="#faf4ed"
        document.getElementById("item2").style.color="#faf4ed"
        document.getElementById("item3").style.color="#faf4ed"
        document.getElementById("item1").style.color="#faf4ed"
        document.getElementById("item1.1").style.color="#faf4ed"
        document.getElementById("darkbtn").style.color="#faf4ed" 
  }


     }

 

/* A function to add and save a new note to an array:
- Read the text from the textarea (google how to do this)
- string variables
- loop it into the array of saved notes
- display a new note on the sidebar with a number based on how many loops
- does not return anything*/

/*A function to delete a note
- the delete button will be clicked
- the function will search which note is currently being opened
- will then use a for loop through the array to find the match
- will remove the matched data
- will update the number notes in the sidebar*/

/* A function to display a note that is clicked on (google)
- User clicks on a note
- the program will then read the data
- remove the original state of the webpage and show the note
- add a close button  */
