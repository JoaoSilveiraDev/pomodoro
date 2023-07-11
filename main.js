const minutosElemento = document.getElementById("minutos");
const segundosElemento =  document.getElementById("segundos");
const milisegundosElemento = document.getElementById("milisegundos");
const minElemento = document.getElementById("min");
const segElemento = document.getElementById("seg");
const miliElemento = document.getElementById("mili")
const btnComecar =  document.getElementById("start");
const btnPausar =  document.getElementById("pause");
const btnContinuar =  document.getElementById("resume");
const btnRecomecar =  document.getElementById("restart");

var interval;
var minutos = 0;
var segundos = 0;
var milisegundos = 0;
var pausado = false;

var intervaloDois;
var min = 0;
var seg = 0;
var mili = 0;
pausadoDois = false;

btnComecar.addEventListener("click", iniciarTimer)
btnPausar.addEventListener("click", pausarTempo)
btnContinuar.addEventListener("click", continuarTempo)
btnRecomecar.addEventListener("click", recomecarTempo)

function iniciarTimer() {

    interval = setInterval( () => {

        if( ! pausado){
            
            milisegundos += 10;

            if( milisegundos === 1000 ){
                segundos++;
                milisegundos = 0;
            }

            if( segundos === 60){
                minutos++;
                segundos = 0;
            }
            if(minutos === 25){
                pausado = true;

                intervaloDois = setInterval(() =>{
                    if(! pausadoDois){

                        mili += 10;

                        if( mili === 1000){
                            seg++
                            mili = 0
                        }

                        if(seg === 60){
                            min++
                            seg = 0
                        }

                        if(min === 1){
                           location.reload()
                           alert("Seu ciclo foi finalizado!!")
                        }

                        miliElemento.textContent =formatacaoTempoMili(mili)
                        segElemento.textContent = formatacaoTempo(seg)
                        minElemento.textContent = formatacaoTempo(min)
                    }
                }, 10)
            }
            minutosElemento.textContent = formatacaoTempo(minutos);
            segundosElemento.textContent = formatacaoTempo(segundos);
            milisegundosElemento.textContent = formatacaoTempoMili(milisegundos);
        }

    }, 10)
}
function pausarTempo(){
    pausado = true
}
function continuarTempo(){
    pausado = false
}
function recomecarTempo(){
    clearInterval(interval)
    minutos = 0
    segundos = 0
    milisegundos = 0
    pausado = false

    minutosElemento.textContent = "00"
    segundosElemento.textContent = "00"
    milisegundosElemento.textContent = "000"
}

function formatacaoTempo(tempo){
    return tempo < 10 ? "0" + tempo : tempo;
}
function formatacaoTempoMili(tempo){
    return tempo < 100 ? "0" + tempo : tempo
}

