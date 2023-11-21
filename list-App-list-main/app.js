const firebaseConfig = {
  apiKey: "AIzaSyAo6lFis9NMUBEfXyV1dNZnKpA5PmTfh2g",
  authDomain: "todo-app-database-57d8f.firebaseapp.com",
  projectId: "todo-app-database-57d8f",
  storageBucket: "todo-app-database-57d8f.appspot.com",
  messagingSenderId: "1081974837238",
  appId: "1:1081974837238:web:74c7cf098ee3c3b9cdc1d7",
  measurementId: "G-JNLEJ5MGRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





var input = document.getElementById("inputfield");
var liElement = document.createElement("li");
function todosApp() {
  var obj = {
    input: input.value,
  }
  console.log(obj);
}