const firebaseConfig = {
    apiKey: "AIzaSyAKOp4XS89uzwbtKrx-oni2coxDoKpbP54",
    authDomain: "bfshelter-5b166.firebaseapp.com",
    databaseURL: "https://bfshelter-5b166-default-rtdb.firebaseio.com",
    projectId: "bfshelter-5b166",
    storageBucket: "bfshelter-5b166.appspot.com",
    messagingSenderId: "351174553334",
    appId: "1:351174553334:web:63c19d1abe4e79be0f86d7",
    measurementId: "G-HH3GCQ9NH4"
  };

const app = firebase.initializeApp(firebaseConfig); 
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('newmessages'); 
detailsRef.on("child_added", function(snapshot, prevChildKey) { 
  var newPost = snapshot.val(); 
}); 

function send(){ 
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;  
    var message = document.getElementById("message").value;
    
    detailsRef.push().set({ 
        fullname: fullname,
        email: email,  
        message: message,
    });

}
