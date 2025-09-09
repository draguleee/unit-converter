function convertTemperature() {
    const inputValue = parseFloat(document.getElementById("temperature").value);
    const conversionType = document.getElementById("conversionType").value;
    let result, unit;

    switch (conversionType) {
        case "cf": result = inputValue * 9/5 + 32; unit = "°F"; break;
        case "fc": result = (inputValue - 32) * 5/9; unit = "°C"; break;
        case "ck": result = inputValue + 273.15; unit = "K"; break;
        case "kc": result = inputValue - 273.15; unit = "°C"; break;
        case "fk": result = (inputValue - 32) * 5/9 + 273.15; unit = "K"; break;
        case "kf": result = (inputValue - 273.15) * 9/5 + 32; unit = "°F"; break;
        default: document.getElementById("result").innerHTML = "Invalid!"; return;
    }
    
    document.getElementById("result").innerHTML = `${result.toFixed(4)} ${unit}`;
}

function convertLength() {
    const inputValue = parseFloat(document.getElementById("length").value);
    const conversionType = document.getElementById("conversionType").value;
    let result, unit;

    switch (conversionType) {
        case "mft": result = inputValue * 3.28084; unit = "ft"; break;
        case "ftm": result = inputValue / 3.28084; unit = "m"; break;
        case "mkm": result = inputValue / 1000; unit = "km"; break;
        case "kmm": result = inputValue * 1000; unit = "m"; break;
        case "fkm": result = inputValue / 3280.84; unit = "km"; break;
        case "kmf": result = inputValue * 3280.84; unit = "ft"; break;
        default: document.getElementById("result").innerHTML = "Invalid!"; return;
    }

    document.getElementById("result").innerHTML = `${result.toFixed(4)} ${unit}`;
}

function convertWeight() {
    const inputValue = parseFloat(document.getElementById("weight").value);
    const conversionType = document.getElementById("conversionType").value;
    let result, unit;

    switch (conversionType) {
        case "gkg": result = inputValue / 1000; unit = "kg"; break;
        case "kgg": result = inputValue * 1000; unit = "g"; break;
        case "glb": result = inputValue / 453.592; unit = "lb"; break;
        case "lbg": result = inputValue * 453.592; unit = "g"; break;
        case "kglb": result = inputValue * 2.20462; unit = "lb"; break;
        case "lbkg": result = inputValue / 2.20462; unit = "kg"; break;
        default: document.getElementById("result").innerHTML = "Invalid!"; return;
    }

    document.getElementById("result").innerHTML = `${result.toFixed(4)} ${unit}`;
}