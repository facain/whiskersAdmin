firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	  // user is signed in.
   		window.location.href = "pet_entry.html";
  } else {
    // No user is signed in.
   
  }
});

function login(){

	var userEmail = document.getElementById("email").value;
	var userPass = document.getElementById("password").value;

	if(userEmail =="admin@admin.com"){
	  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
});
 }else {
 	window.alert("Must be an admin.");
 }

}



