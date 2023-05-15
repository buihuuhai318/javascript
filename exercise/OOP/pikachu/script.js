function Hero(image, top, left, size, speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += this.speed;
    }

    this.moveTop = function () {
        this.top += this.speed;
    }

    this.moveleft = function(){
        this.left -= this.speed;
    }

    this.moveDown = function () {
        this.top -= this.speed;
    }

}

var hero = new Hero('action.png', 20, 30, 300, 50);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        ready();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            hero.moveleft();
            break;
        case 39:
            hero.moveRight();
            break;
        case 38:
            hero.moveDown();
            break;
        case 40:
            hero.moveTop();
            break;
    }
}

function ready() {
    document.addEventListener("keydown", moveSelection);
}


start();