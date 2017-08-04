// Initialize Firebase
var config = {
  apiKey: "AIzaSyCNIKLQEY5Nkvmba62IiDmdc-WsK-96t4k",
  authDomain: "employee-database-3ad26.firebaseapp.com",
  databaseURL: "https://employee-database-3ad26.firebaseio.com",
  projectId: "employee-database-3ad26",
  storageBucket: "",
  messagingSenderId: "693622641737"
};
firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var role = "";
var start = "";
var monthly = "";

$("#button").on("click", function() {
// console.log("true");
name = $("#inputName").val();
role = $("#inputRole").val();
start = $("#inputStartDate").val();
monthly = $("#inputMonthlyPay").val();
database.ref().push({
  employeeName: name,
  employeeRole: role,
  employeeStart: start,
  employeeMonthly: monthly
})
});

database.ref().on("child_added", function(childSnapshot) {
var snap = childSnapshot.val();
console.log(snap);
$("#datYungTrump").append(
  "<td>" + snap.employeeName + "</td>" +
  "<td>" + snap.employeeRole + "</td>" +
  "<td>" + snap.employeeStart + "</td>" +
  "<td>" + snap.employeeMonthly + "</td>" +
  "<td>" + snap.employeeStart + "</td>"

)
});
