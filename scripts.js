var d = new Date();
var currentYear = d.getFullYear();

// .appendChild(n);
var yearElement = document.getElementById("year");
yearElement.innerHTML = " " + currentYear;

console.log("locked and loaded", yearElement);
