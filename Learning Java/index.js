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
        alert("you must be older than "+adon+" years");
        
        name="Daddy";
        document.getElementById('demo').innerHTML=name;
    }
    else if(name==="Daddy"){
        name="Ashim";
        document.getElementById('demo').innerHTML=name;
    }
}
const figure ={
    radius:8,
    location:"Kathmandu",
    monalisa:{
        artist:"Leando da vince",
        date:1887
    },
    draw:function head(){
        console.log("draw two eyes two ears");
    }
}
figure.draw();
console.log(figure.monalisa.artist);
//console.log(figure["radius"]);
//Facotry Function
    //Factory function is a function that returns methods or property. First it creats the object and returns it.
function createCircle(radius){
    return {
        radius,
        draw:function(){
            console.log("Circle created of radius "+radius);
        }
    }
}
const Circle= createCircle(1);
console.log(Circle.radius);
const bigCircle= createCircle(100);
bigCircle.draw();
//Constructor Function
function Car(Disel){
    this.Disel=Disel;
    this.wheel= "Milestone";
    this.start=function(){
        alert("Car has started");
    }
};
let tesla= new Car("no disel");
console.log(tesla.wheel);
tesla.start();