
var getVictimInfo = function() {
    var victim = {}
    victim.name = prompt("Please enter your name:");
    victim.phone = prompt("Please enter your phone number:");
    victim.street = prompt("Please enter your street:");
    return victim
};

var victim = getVictimInfo();

alert('Thank you! Victim entered: \n' + 
 victim.name + ", " + 
 victim.phone + ", " + 
 victim.street);