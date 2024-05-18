


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import{ getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.API,
    authDomain: "codiooo.firebaseapp.com",
    projectId: "codiooo",
    storageBucket: "codiooo.appspot.com",
    messagingSenderId: "271046484012",
    appId: "1:271046484012:web:d9d90c63a0eb8f9fee7189"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  
  //in
  const submit = document.getElementById('submit')
  submit.addEventListener("click" , function(event){
    event.preventDefault()

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account.......")
    window.location.href = "sign.htm"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Error Occured")
    // ..
  });
  })



