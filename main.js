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
var numeroGaecos = [0];
gaecoX = 501;
gaecoY = 700;
gaecoW = 28;
gaecoH = 28;
caminhaoX = 111;
caminhaoY = 250;
caminhaoW = 28;
caminhaoH = 28;
velocidadeGaeco = 1;
velocidadeCaminhao = 1;
direcaoGaeco = 1; // 1 = NORTE, 2 = LESTE, 3 = SUL, 4 = OESTE
direcaoCaminhao = 3;
proximaDirecaoCaminhao = 3;

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
      if (direcaoGaeco == 1) {
        gaecoY += 1;
        direcaoGaeco = getRandom(4);
        return direcaoGaeco;
      } else if (direcaoGaeco == 2) {
        gaecoX -= 1;
        direcaoGaeco = getRandom(4);
        return direcaoGaeco;
      } else if (direcaoGaeco == 3) {
        gaecoY -= 1;
        direcaoGaeco = getRandom(4);
        return direcaoGaeco
      } else if (direcaoGaeco == 4) {
        gaecoX += 1;
        direcaoGaeco = getRandom(4);
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
}


function movimentaCaminhao(){
  if (colidiuCaminhao()) {
    if (direcaoCaminhao == 1) {
      caminhaoY += velocidadeCaminhao;
      direcaoCaminhao = proximaDirecaoCaminhao;
      return direcaoCaminhao;
    } else if (direcaoCaminhao == 2) {
      caminhaoX -= velocidadeCaminhao;
      direcaoCaminhao = proximaDirecaoCaminhao;
      return direcaoCaminhao;
    } else if (direcaoCaminhao == 3) {
      caminhaoY -= velocidadeCaminhao;
      direcaoCaminhao = proximaDirecaoCaminhao;
      return direcaoCaminhao
    } else if (direcaoCaminhao == 4) {
      caminhaoX += velocidadeCaminhao;
      direcaoCaminhao = proximaDirecaoCaminhao;
      return direcaoCaminhao
    }      
  }else   if (direcaoCaminhao == 1) {
    caminhaoY -= velocidadeCaminhao
  } else if (direcaoCaminhao == 2) {
    caminhaoX += velocidadeCaminhao    
  } else if (direcaoCaminhao == 3) {
    caminhaoY += velocidadeCaminhao    
  } else if (direcaoCaminhao == 4) {
    caminhaoX -= velocidadeCaminhao    
  }
}

function verificaGanhou() {
  if (caminhaoY > 320-caminhaoH &&
    caminhaoY < 320+60 &&
    caminhaoX == 631) {
    console.log('ganhou');
  }
}

function verificaPerdeu() {
  if (caminhaoX-caminhaoW >= gaecoX &&
    caminhaoX <= gaecoX+gaecoW &&
    caminhaoY-caminhaoH >= gaecoY &&
    caminhaoY <= gaecoY+gaecoH) {
    console.log('perdeu!');
  }  
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
  movimentaCaminhao();
  verificaGanhou();
  verificaPerdeu();
}

document.addEventListener('keydown',function (evt){
  if (evt.keyCode == 38) {
    proximaDirecaoCaminhao = 1;
  }else if (evt.keyCode == 40) {
    proximaDirecaoCaminhao = 3;   
  }else if (evt.keyCode == 37) {
    proximaDirecaoCaminhao = 4;    
  }else if (evt.keyCode == 39) {
    proximaDirecaoCaminhao = 2;    
  }
}
);

setInterval(gameLoop, 10);


