let inputValue = 10;
let milesToKm = true;
let result = 0;
let resultString = "";
if (milesToKm) {
    result = inputValue * 1.60934;
    resultString = inputValue + " miles is " + result + " kilometers.";
} else {
    result = inputValue / 1.60934;
    resultString = inputValue + " kilometers is " + result + " miles.";
}
document.getElementById("result").innerHTML = resultString;