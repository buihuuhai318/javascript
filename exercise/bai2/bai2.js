function chuyendoi() {
    var inputMoney = document.getElementById('money').value;
    var inputFrom = document.getElementById('countryFrom').value;
    var inputTo = document.getElementById('countryTo').value;

    if (inputFrom == inputTo) {
        alert('Result = ' + inputMoney);
    }
    else if (inputFrom == 'vnd' && inputTo == 'usd') {
        alert('Result = ' + inputMoney/23000);
    } else alert('Result = '+ inputMoney*23000)
}