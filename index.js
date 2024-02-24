document.getElementById("buttonClick").addEventListener("click", myFunction);
function myFunction(){


function amuCalc(money, disCount){ 
    var money = prompt("Enter Price");
    var disCount= prompt("Emter Your age");

    var allCalc= money-disCount;
    return Math.round(allCalc);

}
var div = Math.round(amuCalc(65, 1.8));
alert( "You have got the discount of " + div);
}