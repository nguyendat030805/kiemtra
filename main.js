var day = parseInt(document.getElementById('today').value);
var today;
switch (hi){
    case 0:
    today = "Sunday";
    break;
    case 1:
    today = "Monday";
    break;
    case 2:
    today = "Tuesday";
    break;
    case 3:
    today = "Wednesday";
    break;
    case 4:
    today = "Thursday";
    break;
    case 5:
    today = "Friday";
    break;
    case 6:
    today = "Saturday";
    break;
    
}
document.getElementById('demo').innerHTML = "Today is: "+today;