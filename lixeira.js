function mudaVariavelDirecaoGaeco(){
    var codigoMudaDirecaoGaeco = getRandom(100);
    if(codigoMudaDirecaoGaeco == 10){
      tentaMudarDirecaoGaeco = true;
    }else {
      tentaMudarDirecaoGaeco = false;
    }
    console.log(codigoMudaDirecaoGaeco);
  }

  

  function mudaDirecaoGaeco() {
    if (tentaMudarDirecaoGaeco == true) {
      if (direcaoGaeco == 0) {
        direcaoGaeco = getRandom(2);
        return direcaoGaeco>1 ?  direcaoGaeco+1 : direcaoGaeco
        if (colidiu()) {
          if (direcaoGaeco == 1) {
            gaecoX -= 1;
            direcaoGaeco == 0;
          }else if (direcaoGaeco == 3) {
            gaecoX -= 1;
            direcaoGaeco == 0;
          }
          
        }
      } else if (direcaoGaeco == 1) {
        direcaoGaeco = getRandom(2);
        if (colidiu()) {
          if (direcaoGaeco == 2) {
            gaecoY -= 1;
            direcaoGaeco == 1;
          }else if (direcaoGaeco == 0) {
            gaecoY += 1;
            direcaoGaeco == 1;
          }
        }
      } else if (direcaoGaeco == 2) {
        direcaoGaeco = getRandom(2);
        return direcaoGaeco<=0 ?  direcaoGaeco+1 : direcaoGaeco
        if (colidiu()) {
          if (direcaoGaeco == 1) {
            gaecoX -= 1;
            direcaoGaeco == 2;
          }else if (direcaoGaeco == 3) {
            gaecoX += 1;
            direcaoGaeco == 2;
          }
        }
      } else if (direcaoGaeco == 3) {
        direcaoGaeco = getRandom(2);
        return direcaoGaeco>0 ?  direcaoGaeco+1 : direcaoGaeco
        if (colidiu()) {
          if (direcaoGaeco == 0) {
              gaecoY += 1;
              direcaoGaeco == 3;
            }else if (direcaoGaeco == 2) {
              gaecoY -= 1;
              direcaoGaeco == 3;
          }
        }
      }
    }
  }

  
  if (direcaoGaeco == 0) {
    direcaoGaeco = 2;
  } else if (direcaoGaeco == 1) {
    direcaoGaeco = 3;
  } else if (direcaoGaeco == 2) {
    direcaoGaeco = 0;
  } else if (direcaoGaeco == 3) {
    direcaoGaeco = 1;
  }