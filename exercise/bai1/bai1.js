
function diemTb() {
    inputToan = prompt("nhap diem toan");
    inputLy = prompt("nhap diem ly");
    inputHoa = prompt("nhap diem hoa")

    var toan = parseInt(inputToan);
    var hoa = parseInt(inputHoa);
    var ly = parseInt(inputLy);
    var tb = (toan + ly + hoa)/3;
    document.write('diem trung binh la: ' + tb);
}

function nhietDo() {
    inputNhiet = prompt("nhap nhiet do C");
    var nhiet = parseInt(inputNhiet);
    var nhietF = nhiet/5*9+32;
    document.write('nhiet do F la: ' + nhietF);
}

function sTron() {
    inputR = prompt("nhap ban kinh hinh tron");
    var r = parseInt(inputR);
    var s = r*r*3.14;
    var c = 2*r*3.14;
    document.writeln('dien tich hinh tron la: ' + s);
    document.writeln('<br>');
    document.writeln('chu vi hinh tron la: ' + c);

}