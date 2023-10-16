function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

listaDeTeclas[1].onclick = tocaSomClap;
listaDeTeclas[2].onclick = tocaSomTim;
listaDeTeclas[3].onclick = tocaSomPuff;
listaDeTeclas[4].onclick = tocaSomSplash;
listaDeTeclas[5].onclick = tocaSomToim;
listaDeTeclas[6].onclick = tocaSomPsh;
listaDeTeclas[7].onclick = tocaSomTic;
listaDeTeclas[8].onclick = tocaSomTom;
