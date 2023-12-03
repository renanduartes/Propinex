function colidiuGaeco(X, Y){ //colidiu quadras, colidiu delegacia, colidiu prefeitura, colidiu h, colidiu w
        if (colidiuDelegacia(X, Y) || colidiuQuadras(X, Y) || colidiuBordas(X, Y) || colidiuQuadrasEspeciais(X, Y) || colidiuPrefeitura(X, Y))
        return true;
}

function colidiuCaminhao(){ //colidiu quadras, colidiu delegacia, colidiu prefeitura, colidiu h, colidiu w
    if (colidiuDelegacia(caminhaoX, caminhaoY) || colidiuQuadras(caminhaoX, caminhaoY) || colidiuBordas(caminhaoX, caminhaoY) || colidiuQuadrasEspeciais(caminhaoX, caminhaoY) || colidiuPrefeitura(caminhaoX, caminhaoY))
        return true;
}

function colidiuDelegacia(objetoX, objetoY){
    if(objetoX >= 10-gaecoW
        && objetoY >= 730-gaecoW
        && objetoX <= 10+quadraDelegaciaW
        && objetoY <= 730+quadraDelegaciaH){
        return true;
    }
}

//

function colidiuBordas(objetoX, objetoY){
    if(objetoX >= 770-gaecoW || objetoX <= 0 || objetoY >= 760-gaecoH || objetoY <= 0){
        return true;
    }
}

function colidiuQuadras(objetoX, objetoY){
    for (let i = 0; i < quadraPadraoX.length; i++) {
        if (objetoX >= quadraPadraoX[i]-gaecoW && objetoX <= quadraPadraoX[i]+quadraNormalW &&
        objetoY >= quadraPadraoY[i]-gaecoH && objetoY <= quadraPadraoY[i]+quadraNormalH){
            return true;
        }
    }
}

function colidiuQuadrasEspeciais(objetoX, objetoY){
    if(objetoX >= 400-gaecoW && objetoY >= 190-gaecoH && objetoX <= 400+quadraNormalW+tamanhoRua && objetoY <= 190+quadraNormalH){
        return true;
    }else if(objetoX >= 660-gaecoW && objetoY >= 550-gaecoH && objetoX <= 660+quadraNormalW && objetoY <= 550+quadraNormalH+tamanhoRua){
        return true;
    }else if(objetoX >= 10-gaecoW && objetoY >= 10-gaecoH && objetoX <= 10+quadraNormalW && objetoY <= 10+quadraDuplaH+tamanhoRua){
        return true;
    }else if(objetoX >= 10-gaecoW && objetoY >= 550-gaecoH && objetoX <= 10+quadraNormalW && objetoY <= 550+quadraNormalH+tamanhoRua){
        return true;
    }else if(objetoX >= 140-tamanhoRua-gaecoW && objetoY >= 10-gaecoH && objetoX <= 140-tamanhoRua+quadraNormalW+tamanhoRua && objetoY <= 10+quadraNormalH){
        return true;
    }else if(objetoX >= 400-gaecoW && objetoY >= 10-gaecoH && objetoX <= 400+quadraDuplaW+tamanhoRua && objetoY <= 10+quadraNormalH){
        return true;
    }else if(objetoX >= 10-gaecoW && objetoY >= 370-gaecoH && objetoX <= 10+quadraNormalW+tamanhoRua && objetoY <= 370+quadraNormalH){
        return true;
    }else if(objetoX >= 660-gaecoW && objetoY >= 10-gaecoH && objetoX <= 660+quadraNormalW && objetoY <= 10+quadraNormalH+tamanhoRua){
        return true;
    }else if(objetoX >= 660-gaecoW && objetoY >= 550-tamanhoRua-gaecoH && objetoX <= 660+quadraNormalW && objetoY <= 550+quadraNormalH+tamanhoRua){
        return true;
    }else if(objetoX >= 270-gaecoW && objetoY >= 190-gaecoH && objetoX <= 270+quadraNormalW && objetoY <= 190+quadraNormalH+tamanhoRua){
        return true;
    }else if(objetoX >= 400-gaecoW && objetoY >= 550-gaecoH && objetoX <= 400+quadraNormalW && objetoY <= 550+quadraNormalH+tamanhoRua){
        return true;
    }
}

function colidiuPrefeitura(objetoX, objetoY) {
    if (objetoX >= 660-gaecoW && objetoX <= 660+quadraPrefeituraW && objetoY >= 190-gaecoH && objetoY <= 190+quadraPrefeituraH) {
        return true;
    }
}