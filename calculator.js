var globalAnswer = "0";
function storeAnswer(value) {
    var value = value; 
    globalAnswer = value; 
    return value; 
}
function getCurrentValue() {
    var currentValue = document.getElementById("currentValue").innerHTML;
    currentValue = parseInt(currentValue, 10);
    return currentValue;
}
function clearCurrentValue(event) {
    $("#clear").click(function(event){
        $("#currentValue").html(0);
        getCurrentValue();
    });
}clearCurrentValue(event);
function equals(event) {
    $("#equals").click(function(event){
        var answer = globalAnswer;
        $("#currentValue").html(answer;
        return answer;
    });
}equals(event);
function addition(event, num1) {
    $(".btn").click(function(event){
        var thingClicked = this.innerHTML;
        
        if($(this).hasClass("num")){
            var nextNum = parseInt(thingClicked);
            $("#currentValue").html(nextNum);
            var result = num1 + nextNum;
            storeAnswer(result);
            return result;
        }
        
        else {
            return thingClicked; 
        }
    });
}
function subtraction(event, num1) {
    $(".btn").click(function(event){
        var thingClicked = this.innerHTML; 
        
        if($(this).hasClass("num")){
            var nextNum = parseInt(thingClicked);
            $("#currentValue").html(nextNum);
            var result = num1 - nextNum; 
            storeAnswer(result);
            return result; 
        }
        
        else {
            return thingClicked; 
        }
    })
}
function clickButton(event) {
    var thingClicked = "0";
    $(".btn").click(function(event){
        thingClicked = this.innerHTML;
        
        if($(this).hasClass("add")) {
            var num = getCurrentValue();
            addition(event, num); 
        }
        if($(this).hasClass("subtract")) {
            var num = getCurrentValue(); 
            subtraction(event, num);
        }
        if($(this).hasClass("num")) {
            var currentValue = getCurrentValue();
            currentValue = currentValue.toString();
            var newString = currentValue + thingClicked;
            var newNumber = parseInt(newString, 10);
            $("#currentValue").html(newNumber);
        }
        
    })
    return thingClicked;
}clickButton(event);