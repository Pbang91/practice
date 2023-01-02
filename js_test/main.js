var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight -100;

//만약에 이미지를 넣어주고 싶으면
var cactusImg = new Image();
cactusImg.src = "./image/cactus.png";

var dinoImg = new Image();
dinoImg.src = "./image/dinosaur.png";

var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        // ctx.fillRect(10, 10, 100, 100);
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(dinoImg, this.x, this.y);
    }
}


class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(cactusImg, this.x, this.y);
    }
}

var timer = 0;
var cactuses = [];
var jumpTimer = 0;
var animation;

function moveDinoAtSeconds(){
    animation = requestAnimationFrame(moveDinoAtSeconds);
    timer++;

    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    if (timer % 200 === 0){
        var cactus = new Cactus();
        cactuses.push(cactus);
    }

    cactuses.forEach((e, i, o) => {
        if(e.x < 0) {
            o.splice(i,1);
        }
        e.x--;
        checkCrush(dino, e);
        e.draw();
    });
    
    if(jupming == true){
        dino.y -=3;
        jumpTimer++;

    } else if (jupming == false && dino.y < 200) {
        dino.y +=3;
    }

    if (jumpTimer > 30){
        jupming = false;
        jumpTimer = 0;
    }

    dino.draw();
}

//충돌확인
function checkCrush(dino, cactus) {
    var dif_x = cactus.x - (dino.x + dino.width);
    var dif_y = cactus.y - (dino.y + dino.height);

    if (dif_x < 0 && dif_y < 0) {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}

moveDinoAtSeconds();

var jupming = false;

document.addEventListener('keydown', e => {
    if (e.code === "Space"){
        jupming = true;
    }
})