var mobile = [
    {
        id: 0,
        name: "nokia",
        pin: 50,
        batteryCharger: false,
        chuaGui: [
            {
                id: 0,
                ngNhan: "apple",
                noiDung: "chua gui 1 nokia",
            },
            {
                id: 1,
                ngNhan: "apple",
                noiDung: "chua gui 2 nokia",
            }
        ],
        daGui: [
            {
                id: 0,
                ngNhan: "apple",
                noiDung: "da gui 1 nokia",
            },
            {
                id: 1,
                ngNhan: "apple",
                noiDung: "da gui 2 nokia",
            }
        ],
        thuDen: [
            {
                id: 0,
                ngGui: "apple",
                noiDung: "thu den 1 nokia",
            },
            {
                id: 1,
                ngGui: "apple",
                noiDung: "thu den 2 nokia",
            }
        ],
        status: true
    },
    {
        id: 1,
        name: "apple",
        pin: 70,
        batteryCharger: false,
        chuaGui: [
            {
                id: 0,
                ngNhan: "nokia",
                noiDung: "chua gui 1 apple",
            },
            {
                id: 1,
                ngNhan: "nokia",
                noiDung: "chua gui 2 apple",
            }
        ],
        daGui: [
            {
                id: 0,
                ngNhan: "nokia",
                noiDung: "da gui 1 apple",
            },
            {
                id: 1,
                ngNhan: "nokia",
                noiDung: "da gui 2 apple",
            }
        ],
        thuDen: [
            {
                id: 0,
                ngGui: "nokia",
                noiDung: "thu den 1 apple",
            },
            {
                id: 1,
                ngGui: "nokia",
                noiDung: "thu den 2 apple",
            }
        ],
        status: true,
    }
]

function main() {
    mobileStyle();
    for (let i = 0; i < mobile.length; i++) {
        if (mobile[i].status) {
            boxDaGui(i);
            boxChuaGui(i);
            boxThuDen(i);
            battery(i);
            inputOutput(i)
            document.getElementById(`statusMB${i}`).checked = mobile[i].status;
        }

    }
}

function used(x) {
    let pin = mobile[x].pin;
    mobile[x].pin = pin - 1;
}

function batteryCharger(x) {
    let charger = true;
    mobile[x].batteryCharger = charger;
    if (charger) {
        mobile[x].pin = 100;
        mobile[x].batteryCharger = !charger;
    }
}

main()

function mobileStyle() {
    let text = ``;
    for (let i = 0; i < mobile.length; i++) {
        text = text + `
          <div>
            <h3 style="text-align: center;">${mobile[i].name}</h3>
            <form action="" name="form">
              <div class="row">
                <input type="checkbox" id="statusMB${i}" onchange="changeStatus(${i})">
                <button onclick="main()">on/off</button>
                <input type="checkbox" onchange="batteryCharger(${i})">
                <button onclick="main()">Charger</button>
                <input type="text" id="battery${i}" style="width: 50px">
              </div>
              <div class="result" id="textBox${i}">
              </div>
              <div class="buttons">
                <div class="row" id="button${i}">
                </div>
                <div class="row" id="buttons${i}">
                </div>
                <div class="row" id="box${i}ThuDen${i}">
                </div>
                <div class="row" id="box${i}DaGui${i}">
                </div>
                <div class="row" id="box${i}ChuaGui${i}">
                </div>
              </div>
            </form>
          </div>
          <hr>`
    }
    document.getElementById("mobile0").innerHTML = text;
}

function inputOutput(x) {
    let text = `<input type="text" id="send${x}" placeholder="Soạn tin nhắn"/>
          <input type="text" id="ngNhan${x}" placeholder="Người Nhận"/>`;
    document.getElementById(`textBox${x}`).innerHTML = text;
    let text1 = `<input type="button" value="send" onclick="send(${x})">
          <input type="button" value="save" onclick="save(${x})">`
    document.getElementById(`button${x}`).innerHTML = text1;
}

function changeStatus(x) {
    let mobileStatus = mobile[x].status;
    mobile[x].status = !mobileStatus;
}


function battery(x) {
    document.getElementById(`battery${x}`).value = "pin: " + mobile[x].pin + "%";
}

function xemThuDen(x, id) {
    let noiDung = "";
    let options = id.children;

    for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
            noiDung = options[i].value;
        }
    }
    document.getElementById(`send${x}`).value = noiDung;
}
function boxThuDen(x) {
    let text = '<select class="select-css" id="' + "thuDen" + x + '" onchange="' + "xemThuDen(" + x + ", this)" + '">';
    for (let i = mobile[x].thuDen.length - 1; i >= 0; i--) {
        text = text + `<option id="idThuDen${x}${i}" value="${mobile[x].thuDen[i].noiDung}">hop thu den ${i+1}: ${mobile[x].thuDen[i].ngGui}</option>`;
    }
    text = text + `</select>`;
    text = text + `<div id="boxThuDen${x}">
          </div>`
    document.getElementById(`box${x}ThuDen${x}`).innerHTML = text;
}

function xemDaGui(x, id) {
    let noiDung = "";
    let options = id.children;

    for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
            noiDung = options[i].value;
        }
    }
    document.getElementById(`send${x}`).value = noiDung;
}

function boxDaGui(x) {
    let text = '<select class="select-css" id="' + "daGui" + x + '" onchange="' + "xemDaGui(" + x + ", this)" + '">';
    for (let i = mobile[x].daGui.length - 1; i >= 0; i--) {
        text = text + `<option id="idDaGui${x}${i}" value="${mobile[x].daGui[i].noiDung}">Tin da gui ${i+1}: ${mobile[x].daGui[i].ngNhan}</option>`;
    }
    text = text + `</select>`;
    text = text + `<div id="boxDaGui${x}">
          </div>`
    document.getElementById(`box${x}DaGui${x}`).innerHTML = text;
}

function send(x) {
    let ngNhan = document.getElementById(`ngNhan${x}`).value;
    let idNhan;
    let noiDung = document.getElementById(`send${x}`).value;
    let ngGui = mobile[x].name;
    for (let i = 0; i < mobile.length; i++) {
        if (ngNhan === mobile[i].name) {
            idNhan = mobile[i].id;
        }
    }
    let messGui = {
            id: mobile[idNhan].thuDen.length,
            ngGui: ngGui,
            noiDung: noiDung,
        };
    let messNhan = {
        id: mobile[idNhan].thuDen.length,
        ngNhan: ngNhan,
        noiDung: noiDung,
    };
    mobile[idNhan].thuDen.push(messGui);
    mobile[x].daGui.push(messNhan);
    used(x)
    main();
}

function save(x) {
    let ngNhan = document.getElementById(`ngNhan${x}`).value;
    let noiDung = document.getElementById(`send${x}`).value;
    let mess = {
        id: mobile[x].chuaGui.length,
        ngNhan: ngNhan,
        noiDung: noiDung,
    };
    mobile[x].chuaGui.push(mess);
    used(x)
    main();
}

function xemChuaGui(x, id) {
    let ngNhan = ""
    let noiDung = "";
    let options = id.children;
    for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
            noiDung = options[i].value;
            ngNhan = mobile[x].chuaGui[i].ngNhan;
        }
    }
    document.getElementById(`send${x}`).value = noiDung;
    document.getElementById(`ngNhan${x}`).value = ngNhan;
}
function boxChuaGui(x) {
    let text = '<select class="select-css" id="' + "chuaGui" + x + '" onchange="' + "xemChuaGui(" + x + ", this)" + '">';
    for (let i = mobile[x].chuaGui.length - 1; i >= 0; i--) {
        text = text + `<option id="idChuaGui${x}${i}" value="${mobile[x].chuaGui[i].noiDung}">Nhap ${i+1}: ${mobile[x].chuaGui[i].ngNhan}</option>`;
    }
    text = text + `</select>`;
    // text = text + `<div id="boxChuaGui${x}">
    //       </div>`
    document.getElementById(`box${x}ChuaGui${x}`).innerHTML = text;
}
