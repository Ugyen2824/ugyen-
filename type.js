var database = ("myCampaign");

var inputName = document.querySelector("input");
var supporterText = document.querySelector("h4");

var supporterCount = 0;

database.get("supporter").then(function(value) {
    if (value != undefined) {
        supporterCount = value;
    }
    
    supporterText.innerHTML = supporterCount;
});

function increaseSupporter() {
    //what happens if the Enter key is pressed
    if (event.keyCode == 13 && inputName.value.length > 0) {
        supporterCount++;
        supporterText.innerHTML = supporterCount;
        inputName.value = "";
        database.set("supporter", supporterCount);
    }
}
