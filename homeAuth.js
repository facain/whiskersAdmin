firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	  // user is signed in.
      console.log('ACAIN');     
  } else {
     //No user is signed in.
   
         window.location.href = "login.html";

  }
});


function logout(){
	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	}).catch(function(error) {
	  // An error happened.

	});	


}
