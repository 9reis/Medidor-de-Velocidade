//Velocidade maxima de até 70
// a cada 5km acima do limite, voce ganha 1 ponto
//Caso os pontos seham maior que 12 , a carteira é suspendida


verificarVelocidade(130);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if(velocidade <= velocidadeMaxima )
        console.log('Ok');
    else {
       const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto ))
        if(pontos >= 12)
            console.log('Carteira suspensa');
        else
            console.log("Pontos: " + pontos)
    }
}