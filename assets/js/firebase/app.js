  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC7VE9C4A9Zgcj4ae5WiPSFL-0QyopMTiU",
    authDomain: "semana-mundo-invertido-36a2c.firebaseapp.com",
    projectId: "semana-mundo-invertido-36a2c",
    storageBucket: "semana-mundo-invertido-36a2c.appspot.com",
    messagingSenderId: "885257223270",
    appId: "1:885257223270:web:ee59c5d2f2cc7a25a341a7"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  
  export default app