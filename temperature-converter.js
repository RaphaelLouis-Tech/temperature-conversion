// temperature-converter.js

// Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Sample Usage
const celsius = 25;
console.log(`${celsius}°C is ${celsiusToFahrenheit(celsius)}°F`);

const fahrenheit = 77;
console.log(`${fahrenheit}°F is ${fahrenheitToCelsius(fahrenheit)}°C`);