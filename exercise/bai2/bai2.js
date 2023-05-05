function chuyendoi() {
    var inputMoney = document.getElementById('money').value;
    var inputFrom = document.getElementById('countryFrom').value;
    var inputTo = document.getElementById('countryTo').value;

    if (inputFrom == inputTo) {
        document.getElementById('result').value =inputMoney;
    }
    else if (inputFrom == 'vnd' && inputTo == 'usd') {
        document.getElementById('result').value = inputMoney/23000;
    } else document.getElementById('result').value = inputMoney*23000;
}