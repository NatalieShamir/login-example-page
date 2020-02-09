window.addEventListener( "load", function () {
  function sendData() {
    if (!validateForm()) {
      return
    }

    const XHR = new XMLHttpRequest();

    const FD = new FormData( form );

    XHR.addEventListener( "load", function(event) {
      document.getElementById('queryResponse').value = event.target.responseText;
      var button = document.getElementById('myButton');
      button.disabled=false;
    } );

    XHR.addEventListener( "error", function( event ) {
      alert( 'Oops! Something went wrong.' );
    } );

    // Set up our request
    authorValue = document.getElementById("author").value;
    XHR.open( "GET", "http://openlibrary.org/search.json?author=" + authorValue );

    XHR.send( FD );
  }

  let form = document.getElementById( "myForm" );

  form.addEventListener( "submit", function ( event ) {
    event.preventDefault();

    sendData();
    var button = document.getElementById('myButton');
    button.disabled=true;
  } );
} );

function validateForm() {
  return validateInput("author") && validateInput("password")
}

function validateInput(inputName) {
  var input = document.forms["login"][inputName].value;
  if (input == "") {
    alert("Error: All fields are required!");
    return false;
  }
  return true;
}
