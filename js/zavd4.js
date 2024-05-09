function calculate() {
    let i = 1;
    let start = parseFloat(prompt("Start"));
    let end = parseFloat(prompt("End"));
    let step = parseFloat(prompt("Step"));
    let containerDiv = document.createElement('div');
    containerDiv.classList.add('mb');
    for (;start <= end; start += step) {
        let result = calculatex(start);
        containerDiv.innerHTML += "<p>" + i++ + ") Result: " + result + "</p>";
    }
    document.body.appendChild(containerDiv);
}

function calculatex(x) {
    if (x < 2) {
        return Math.cos(4 * x) - 5;;
    } else if (x == 2) {
        return Math.abs(Math.tan(x)) ** 3;
    } else {
        return 2 + Math.pow(Math.sqrt(x), 3);
    }
}

