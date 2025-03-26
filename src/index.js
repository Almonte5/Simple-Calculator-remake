// CALCULATOR PROGRAM

const display = document.getElementById("display");

let clear = false;
let lastAnswer = 0;

function appendToDisplay(input){
    if(clear == true){
        display.value = ""
        clear = false;
    }
    display.value += input;
}

function clearDisplay(){
    display.value = ""
}

function backSpace(){
    display.value = display.value.slice(0,-1);
}

function Ans(){
    display.value += lastAnswer;
}

function calculate(){
    try{
        display.value = eval(display.value);
        lastAnswer = eval(display.value);
        clear = true;
    }
    catch(error){
        display.value = "Error";
    }
    
}