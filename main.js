var canvas = document.getElementById('game-propinex');
var pincel = canvas.getContext('2d');

var tamanhoRua = 30;

var quadraNormalW = 100;
var quadraNormalH = 150;
var quadraDuplaH = quadraNormalH+quadraNormalH+tamanhoRua;
var quadraDuplaW = quadraNormalW+quadraNormalW+tamanhoRua;
var quadraDelegaciaW = 750;
var quadraDelegaciaH = 30;
var quadraPrefeituraW = 100
var quadraPrefeituraH = quadraDuplaH;
var ultimaQuadraW = 130;
var quadraPadraoX = [ 10, 140, 270, 400, 530, 660,
                      10, 140, 270, 400, 530, 660,
                      10, 140, 270, 400, 530, 660,
                      10, 140, 270, 400, 530, 660 ];
var quadraPadraoY = [ 10, 10, 10, 10, 10, 10,
                      190, 190, 190, 190, 190, 190,
                      370, 370, 370, 370, 370, 370,
                      550, 550, 550, 550, 550, 550,];

gaecoX = 501;
gaecoY = 700;
gaecoW = 28;
gaecoH = 28;
caminhaoX = 111;
caminhaoY = 250;
caminhaoW = 28;
caminhaoH = 28;
velocidadeGaeco = 1;
direcaoGaeco = 1; // 1 = NORTE, 2 = LESTE, 3 = SUL, 4 = OESTE
var tentaMudarDirecaoGaeco = false;
var codigoMudaDirecaoGaeco = 1;

function desenhaQuadras(){
  for (let i = 0; i < quadraPadraoX.length; i++) {
  pincel.fillStyle = 'white';
  pincel.fillRect(quadraPadraoX[i], quadraPadraoY[i], quadraNormalW, quadraNormalH);
  }



  pincel.fillStyle = 'white';
  pincel.fillRect(400, 190, quadraNormalW + tamanhoRua, quadraNormalH);
  
  pincel.fillStyle = 'white';
  pincel.fillRect(660, 550, quadraNormalW, quadraNormalH + tamanhoRua);

  pincel.fillStyle = 'white';
  pincel.fillRect(10, 10, quadraNormalW, quadraDuplaH + tamanhoRua);

  pincel.fillStyle = 'white';
  pincel.fillRect(10, 550, quadraNormalW, quadraNormalH + tamanhoRua);

  pincel.fillStyle = 'white';
  pincel.fillRect(140-tamanhoRua, 10, quadraNormalW+tamanhoRua, quadraNormalH);

  pincel.fillStyle = 'white';
  pincel.fillRect(400, 10, quadraDuplaW+tamanhoRua, quadraNormalH);

  pincel.fillStyle = 'white';
  pincel.fillRect(10, 370, quadraNormalW+tamanhoRua, quadraNormalH);

  pincel.fillStyle = 'white';
  pincel.fillRect(660, 10, quadraNormalW, quadraNormalH+tamanhoRua);

  pincel.fillStyle = 'white';
  pincel.fillRect(660, 550-tamanhoRua, quadraNormalW, quadraNormalH+tamanhoRua);

  pincel.fillStyle = 'white';
  pincel.fillRect(270, 190, quadraNormalW, quadraNormalH+tamanhoRua);

  pincel.fillStyle = 'white';
  pincel.fillRect(400, 550, quadraNormalW, quadraNormalH+tamanhoRua);



  pincel.fillStyle = 'white';
  pincel.fillRect(10, 730, quadraDelegaciaW, quadraDelegaciaH);

  pincel.fillStyle = 'white';
  pincel.fillRect(660, 190, quadraPrefeituraW, quadraPrefeituraH);


}

function desenhaGaeco()
{
  var gaeco = new Image();
  gaeco.src = 'img/gaeco.png';
  gaeco.onload = function() {
    pincel.drawImage(gaeco,gaecoX,gaecoY,gaecoW,gaecoH);
}}

function desenhaPrefeito(x,y)
{
  var prefeito = new Image();
  prefeito.src = 'img/prefeito.png';
  prefeito.onload = function() {
    pincel.drawImage(prefeito,x,y,80,60);
}}

function desenhaCaminhao(x,y)
{
  var caminhao = new Image();
  caminhao.src = 'img/caminhao.png';
  caminhao.onload = function() {
    pincel.drawImage(caminhao,caminhaoX,caminhaoY,caminhaoW,caminhaoH);
}}



function movimentaGaeco(){
    if (colidiuGaeco()) {
      console.log('colidiu');
      if (direcaoGaeco == 1) {
        gaecoY += 1;
        direcaoGaeco = getRandom(4);
        console.log(direcaoGaeco);
        return direcaoGaeco;
      } else if (direcaoGaeco == 2) {
        gaecoX -= 1;
        direcaoGaeco = getRandom(4);
        console.log(direcaoGaeco);
        return direcaoGaeco;
      } else if (direcaoGaeco == 3) {
        gaecoY -= 1;
        direcaoGaeco = getRandom(4);
        console.log(direcaoGaeco);
        return direcaoGaeco
      } else if (direcaoGaeco == 4) {
        gaecoX += 1;
        direcaoGaeco = getRandom(4);
        console.log(direcaoGaeco);
        return direcaoGaeco
      }      
    }else   if (direcaoGaeco == 1) {
      gaecoY -= velocidadeGaeco
    } else if (direcaoGaeco == 2) {
      gaecoX += velocidadeGaeco    
    } else if (direcaoGaeco == 3) {
      gaecoY += velocidadeGaeco    
    } else if (direcaoGaeco == 4) {
      gaecoX -= velocidadeGaeco    
    }
  
      console.log('Y= '+gaecoY);
      console.log('X= '+gaecoX);
  
} 


function getRandom(max) {
  return Math.floor(Math.random() * max + 1)
}


function apagaTudo() {
  pincel.clearRect(0,0,770,760);
}

function gameLoop(){
  apagaTudo();
  desenhaGaeco();
  desenhaCaminhao();
  desenhaPrefeito(640,320);
  desenhaQuadras();
  movimentaGaeco();
  // mudaDirecaoGaeco();
  // mudaVariavelDirecaoGaeco();
}

setInterval(gameLoop, 10);



