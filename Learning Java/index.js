let name="Ashim";  //string
let lastname="Thapa";
let age=20;
let bool= false;
let wife= null;
let future= undefined;
var adon = 2;
console.log(bool);
console.log(name+lastname);
document.getElementById("demo").innerHTML=name;
function myFunction(){
    if(name==="Ashim"){
        alert("you must be older than age");
        alert(adon);
        name="Daddy";
        document.getElementById('demo').innerHTML=name;
    }
    else if(name==="Daddy"){
        name="Ashim";
        document.getElementById('demo').innerHTML=name;
    }
}