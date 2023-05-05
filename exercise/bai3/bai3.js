function plus() {
    var a = document.getElementById('number1').value;
    var b = document.getElementById('number2').value;
    var s = 0;
    s = parseFloat(a) + parseFloat(b);
    document.getElementById('result').value = s;
}
function minus() {
    var a = document.getElementById('number1').value;
    var b = document.getElementById('number2').value;
    var s = 0;
    s = parseFloat(a) - parseFloat(b);
    document.getElementById('result').value = s;
}
function times() {
    var a = document.getElementById('number1').value;
    var b = document.getElementById('number2').value;
    var s = 0;
    s = parseFloat(a) * parseFloat(b);
    document.getElementById('result').value = s;
}
function divided() {
    var a = document.getElementById('number1').value;
    var b = document.getElementById('number2').value;
    var s = 0;
    s = parseFloat(a) / parseFloat(b);
    document.getElementById('result').value = s;
}