firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	  // user is signed in.
  } else {
    // No user is signed in.
   
          window.location.href = "login_form.html";

  }
});


function logout(){
	firebase.auth().signOut().then(function() {
    
	  // Sign-out successful.
	}).catch(function(error) {
	  // An error happened.
	});	
}
