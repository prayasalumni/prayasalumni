
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
  
  // Paste the code from Firebase
  const firebaseConfig = {
  apiKey: "AIzaSyCHBgv2gt_2_bcFDcAZ1w0CC0sFuwDOJzU",
  authDomain: "signup-bab72.firebaseapp.com",
  projectId: "signup-bab72",
  storageBucket: "signup-bab72.appspot.com",
  messagingSenderId: "983809786613",
  appId: "1:983809786613:web:6d85fc1ad5d72631337bbc"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  //In Google firbase signup folder is in use as database
  const db = getDatabase(app);
  
  document.getElementById('registrationform').addEventListener('submit', function(e) {
      e.preventDefault();
      set(ref(db, 'users/' + Math.random().toString(36).slice(2, 7)), {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          mobile: document.getElementById('mobile').value,
          school: document.getElementById('school').value,
          year: document.getElementById('year').value,
          education: document.getElementById('education').value,
          address: document.getElementById('address').value,
          exame: document.getElementById('exame').value,
          linkdin: document.getElementById('linkdin').value,
          subject: document.getElementById('subject').value,
      });

      alert('Your form is submitted');
      document.getElementById('registrationform').reset();
  });
  