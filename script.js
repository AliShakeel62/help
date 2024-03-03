
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { ref, set, getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB66Zn3Vm0oDcLplcvodCGfXNWkciVwTE8",
  authDomain: "assignment-7-db6e3.firebaseapp.com",
  databaseURL: "https://assignment-7-db6e3-default-rtdb.firebaseio.com",
  projectId: "assignment-7-db6e3",
  storageBucket: "assignment-7-db6e3.appspot.com",
  messagingSenderId: "481329789471",
  appId: "1:481329789471:web:8eea033065c632d774332a",
  measurementId: "G-40M0X4CE5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const database = getDatabase();

var Name = document.getElementById('user');
var Emails = document.getElementById('Email');
var password = document.getElementById('password');

var model = {}
window.singup = function (e) {
  e.preventDefault()
  model.Emails = Emails.value;
  model.password = password.value;
  console.log(obj)
} 
