function convertTemperature() {
    const inputValue = parseFloat(document.getElementById("temperature").value);
    const conversionType = document.getElementById("conversionType").value;
    let result, unit;

    switch (conversionType) {
        case "cf":
            result = inputValue * 9/5 + 32; unit = "°F"; break;
        case "fc":
            result = (inputValue - 32) * 5/9; unit = "°C"; break;
        case "ck":
            result = inputValue + 273.15; unit = "K"; break;
        case "kc":
            result = inputValue - 273.15; unit = "°C"; break;
        case "fk":
            result = (inputValue - 32) * 5/9 + 273.15; unit = "K"; break;
        case "kf":
            result = (inputValue - 273.15) * 9/5 + 32; unit = "°F"; break;
        default:
            document.getElementById("result").innerHTML = "Invalid!";
            return;
    }
    document.getElementById("result").innerHTML = `${result.toFixed(2)} ${unit}`;
}