// On load the document creates a variable called 'state' and makes it string with the value "".
// Then when either yes or no is clicked on the radio buttons, it sets the state to either "Yes" or "No" and returns it.
$(document).ready(function() {
  var state = "";
  $('#pollYes').on('click', function(event){
    state = "Yes";
    return state;
  });
  $('#pollNo').on('click', function(event) {
    state = "No";
    return state;
  });
});
