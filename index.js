const display = document.getElementById("display");

memory = "";
display.value = "0";

function appendToDisplay(input){
    if (display.value == "0" && input != "."){
        display.value = input;
    } else {
        display.value += input;
    }
}

function clearDisplay(){
    display.value = "0";
}

function del(){
    if (display.value != "0"){
        display.value = display.value.slice(0, -1);
        if (display.value == ""){
            display.value = "0"
        }
    } else {
        return
    }
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function addToMemory(){
    memory = display.value;
}

function useMemory(){
    display.value += memory;
}

function clearMemory(){
    memory = "";
}