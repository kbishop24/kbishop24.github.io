/* .js files add interaction to your website */
var factList = [
  "Since the release of cell phones in 2005, the rate of adolescents reporting symptoms of major depression in a given year increased by 52% from 2005 to 2017.", 
  "The rate of suicidal thoughts in young adults increased 47% from 2005, the release of the cell phone, to 2017.", 
  "59% of US teens have experienced cyberbullying or online harassment.", 
  "80% of girls say they’ve downloaded a filter or used an app to change the way they look in photos by the time they’re 13 years old."
];
var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to ask you to support S.3663 Kids Online Safety Act. As a teenager, I have noticed that for me and those around me, social media has been negatively impacting our lives. For example, " + learning + ". Please support S.3663 Kids Online Safety Act for more resources to help keep us safe.";
}
