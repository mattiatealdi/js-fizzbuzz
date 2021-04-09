msg= "FizzBuzz"
var text = "";

for(var i = 1; i < 101; i++){
    if(!(i%3) && !(i%5)){
        text += "Fizzbuzz <br>";
    }else if(!(i%3)){
        text += "Fizz <br>";
    }else if(!(i%5)){
        text += "Buzz <br>";
    }else{
        text += i +"<br>";
    }
}

document.getElementById("output").innerHTML = text;
