
const PI = 3.14159;

ddocument.getElementById("circleForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let radius = parseFloat(document.getElementById("radius").value);
    
    let area = PI * Math.pow(radius, 2);

    document.getElementById("result").innerText = `El área del círculo es: ${area.toFixed(2)}`;
});