var year = parseInt(prompt("enter a year"));

var isLeapyear = false;

var yearDivBy4 = year % 4 == 0;

var yearDivBy400 = year % 400 ==0;

switch (yearDivBy400) {
    case true:
        isLeapyear = true;
        break;

    case false:
        switch (yearDivBy4) {
            case true:
                isLeapyear = true;
                break;

            case false:
                break;
        }
}
if (isLeapyear) {
    alert(year + " is a leap year");
} else alert(year + " is not a leap year");