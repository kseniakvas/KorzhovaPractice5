function smath() {
    var i1 = 1;
    let containerDiv = document.createElement('div');
    containerDiv.classList.add('vb');
    let array = [Math.E, Math.PI, Math.log10(Math.E), Math.log2(Math.E), Math.log(10), Math.log(2), Math.sqrt(2), Math.sqrt(1/2),
    , Math.sin(0), Math.sin(Math.PI / 2), Math.asin(1), Math.tan(Math.PI / 4), Math.atan(1), Math.random()];
    array.forEach(element => {
        containerDiv.innerHTML += "<p>" + i1++ + ") " + element + "</p>";
    });
    document.body.appendChild(containerDiv);
}
