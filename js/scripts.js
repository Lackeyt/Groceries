$(document).ready(function() {
  $("#groceries").submit(function(event){
    event.preventDefault();

    const blanks = ["q1","q2","q3","q4","q5"]
    const userInput = []
    const userInputUpper = []

    // takes the value of each blank ID and populates into userInput
    blanks.forEach(function(blanks){
      userInput.push($("input#" + blanks).val());
    })

    // takes the value from userInput, changes it to Upper Case, populates into userInputUpper
    userInput.forEach(function(userInput){
      userInputUpper.push(userInput.toUpperCase())
    })
    
    // alphabetize userInputUpper
    userInputUpper.sort()


    //Output - for each user input, create a list item and add it the output UL
    userInputUpper.forEach(function(userInputUpper){
    $("ul#output").append("<li>"+ userInputUpper + "</li>");
    })
    
    console.log(userInputUpper);
    $("form#groceries").hide();
    $("div.outputDiv").show();
  });
});