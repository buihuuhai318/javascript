
class Mobile {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.battery = 100;
        this.status = status;
        this.daGui = [];
        this.chuaGui = [];
        this.thuDen = [];
    };
    xemChuaGui(id) {
        let ngNhan = "";
        let noiDung = "";
        let options = id.children;
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                noiDung = options[i].value;
                ngNhan = this.chuaGui[i].ngNhan;
            }
        }
        document.getElementById(`send${this.id}`).value = noiDung;
        document.getElementById(`ngNhan${this.id}`).value = ngNhan;
    }
    boxChuaGui() {
        let text = `<select class="select-css" id="chuaGui${this.id}" onchange="mobile${this.id}.xemChuaGui(this)">`;
        for (let i = this.chuaGui.length - 1; i >= 0; i--) {
            text = text + `<option id="idChuaGui${this.id}${i}" value="${this.chuaGui[i].noiDung}">Nhap ${i+1}: ${this.chuaGui[i].ngNhan}</option>`;
        }
        text = text + `</select>`;
        let doc = document.getElementById(`box${this.id}ChuaGui${this.id}`);
        if (doc !== null) {
            doc.innerHTML = text;
        }
    }
    used() {
        this.battery = this.battery - 1;
    }
    batteryCharger() {
        this.battery = 100;
        mobileStyle(mobile0);
        mobileStyle(mobile1);
        return this.battery;
    }

    changeStatus() {
        this.status = !this.status;
        mobileStyle(mobile0);
        mobileStyle(mobile1);
        return this.status
    }
    battery() {
        document.getElementById(`battery${this.id}`).value = "pin: " + this.battery + "%";
        if (this.battery === 0) {
            this.changeStatus();
        }
    }
    xemThuDen(id) {
        let noiDung = "";
        let options = id.children;

        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                noiDung = options[i].value;
            }
        }
        document.getElementById(`send${this.id}`).value = noiDung;
    }
    boxThuDen() {
        let text = `<select class="select-css" id="chuaGui${this.id}" onchange="mobile${this.id}.xemThuDen(this)">`;
        for (let i = this.thuDen.length - 1; i >= 0; i--) {
            text = text + `<option id="idThuDen${this.id}${i}" value="${this.thuDen[i].noiDung}">hop thu den ${i+1}: ${this.thuDen[i].ngGui}</option>`;
        }
        text = text + `</select>`;
        text = text + `<div id="boxThuDen${this.id}">
          </div>`;
        let doc = document.getElementById(`box${this.id}ThuDen${this.id}`);
        if (doc !== null) {
            doc.innerHTML = text;
        }
    }
    xemDaGui(id) {
        let noiDung = "";
        let ngNhan = "";
        let options = id.children;

        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                noiDung = options[i].value;
                ngNhan = this.chuaGui[i].ngNhan;
            }
        }
        document.getElementById(`send${this.id}`).value = noiDung;
        document.getElementById(`ngNhan${this.id}`).value = ngNhan;
    }
    boxDaGui() {
        let text = `<select class="select-css" id="chuaGui${this.id}" onchange="mobile${this.id}.xemDaGui(this)">`;
        for (let i = this.daGui.length - 1; i >= 0; i--) {
            text = text + `<option id="idDaGui${this.id}${i}" value="${this.daGui[i].noiDung}">Tin da gui ${i+1}: ${this.daGui[i].ngNhan}</option>`;
        }
        text = text + `</select>`;
        text = text + `<div id="boxDaGui${this.id}">
          </div>`;
        let doc = document.getElementById(`box${this.id}DaGui${this.id}`);
        if (doc !== null) {
            doc.innerHTML = text;
        }
    }
    send() {
        this.used();
        let ngNhan = document.getElementById(`ngNhan${this.id}`).value;
        let noiDung = document.getElementById(`send${this.id}`).value;
        let ngGui = this.name;


        let messGui = {
            id: this.thuDen.length,
            ngGui: ngGui,
            noiDung: noiDung,
        };
        let messNhan = {
            id: this.thuDen.length,
            ngNhan: ngNhan,
            noiDung: noiDung,
        };
        eval(ngNhan).thuDen.push(messGui);
        this.daGui.push(messNhan);
        mobileStyle(mobile0);
        mobileStyle(mobile1);
    }
    save() {
        this.used();
        let ngNhan = document.getElementById(`ngNhan${this.id}`).value;
        let noiDung = document.getElementById(`send${this.id}`).value;
        let mess = {
            id: this.chuaGui.length,
            ngNhan: ngNhan,
            noiDung: noiDung,
        };
        this.chuaGui.push(mess);
        mobileStyle(mobile0);
        mobileStyle(mobile1);
    }
    main() {
        if (this.status) {
            this.boxDaGui();
            this.boxChuaGui();
            this.boxThuDen();
        }
    }
}





let mobile0 = new Mobile(0, "nokia", true);
let mobile1 = new Mobile(1, "apple", true);
mobile0.chuaGui = [
    {
        id: 0,
        ngNhan: "mobile1",
        noiDung: "chua gui 1 nokia",
    },
    {
        id: 1,
        ngNhan: "mobile1",
        noiDung: "chua gui 2 nokia",
    }
];
mobile0.daGui = [
    {
        id: 0,
        ngNhan: "mobile1",
        noiDung: "da gui 1 nokia",
    },
    {
        id: 1,
        ngNhan: "mobile1",
        noiDung: "da gui 2 nokia",
    }
]
mobile0.thuDen = [
    {
        id: 0,
        ngGui: "mobile1",
        noiDung: "thu den 1 nokia",
    },
    {
        id: 1,
        ngGui: "mobile1",
        noiDung: "thu den 2 nokia",
    }
]


mobileStyle(mobile0)
mobileStyle(mobile1)
function mobileStyle(mobile) {
    let text = ``;
        text = text + `
          <div>
            <h3 style="text-align: center;">${mobile.name}</h3>
            <form action="" name="form">
              <div class="row">
                <input type="checkbox" id="statusMB${mobile.id}" onchange="mobile${mobile.id}.changeStatus()">
                <button onclick="mobile${mobile.id}.changeStatus()">on/off</button>
                <button onclick="mobile${mobile.id}.batteryCharger()">Charger</button>
                <input type="text" id="battery${mobile.id}" style="width: 50px" value="${mobile.battery}">
              </div>
              <div class="result" id="textBox${mobile.id}">
              </div>
              <div class="buttons">
                <div class="row" id="button${mobile.id}">
                </div>
                <div class="row" id="buttons${mobile.id}">
                </div>
                <div class="row" id="box${mobile.id}ThuDen${mobile.id}">
                </div>
                <div class="row" id="box${mobile.id}DaGui${mobile.id}">
                </div>
                <div class="row" id="box${mobile.id}ChuaGui${mobile.id}">
                </div>
              </div>
            </form>
          </div>
          <hr>`
    document.getElementById(`mobile${mobile.id}`).innerHTML = text;
    document.getElementById(`textBox${mobile.id}`).innerHTML = `
        <input type="text" id="send${mobile.id}" placeholder="Soạn tin nhắn"/>
        <input type="text" id="ngNhan${mobile.id}" placeholder="Người Nhận"/>`;
    document.getElementById(`button${mobile.id}`).innerHTML = `
        <input type="button" value="send" onclick="mobile${mobile.id}.send()">
        <input type="button" value="save" onclick="mobile${mobile.id}.save()">`;
    document.getElementById(`statusMB${mobile.id}`).checked = mobile.status;
    mobile.main()
}



