document
.getElementById("contactForm")
.addEventListener("submit", function(e){

e.preventDefault();

alert(
"Thank you for contacting My Five Group. We will get back to you shortly."
);

this.reset();

});