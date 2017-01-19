/*window.alert("Hello World!!!");*/
// add event listener for button
// click is the event itself. onclick is the eventhandler
document
    .getElementById("buyNowButton")
    .addEventListener("click", buyNow); //args 1 event, 2 what to do with it (function)

function buyNow(){
    var firstname = 
        document.getElementById("firstname").value;
    alert("Thanks for the money! " + firstname);
}