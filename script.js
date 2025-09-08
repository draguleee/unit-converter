// Temperature conversion logic
function convertTemperature() {
    let inputValue = document.getElementById("temperature").value;
    let conversionType = document.getElementById("conversionType").value;
    let result = 0;
    let resultString = "";
    switch(conversionType) {
        case "cf":
            result = (inputValue * 9/5) + 32;
            resultString = result.toFixed(2) + " °F";
            break;
        case "fc":
            result = (inputValue - 32) * 5/9;
            resultString = result.toFixed(2) + " °C";
            break;
        case "ck":
            result = parseFloat(inputValue) + 273.15;
            resultString = result.toFixed(2) + " °K";
            break;
        case "kc":
            result = inputValue - 273.15;
            resultString = result.toFixed(2) + " °C";
            break;
        case "fk":
            result = (inputValue - 32) * 5/9 + 273.15;
            resultString = result.toFixed(2) + " °K";
            break;
        case "kf":
            result = (inputValue - 273.15) * 9/5 + 32;
            resultString = result.toFixed(2) + " °F";
            break;
        default:
            resultString = "Invalid!";
    }
    document.getElementById("result").innerHTML = resultString;
}