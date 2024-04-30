

//Bottone per iniziare
document.getElementById('btn-play').addEventListener('click', function () {

    //Recupero il valore del livello
    let livello = document.getElementById('difficolta')
    let valore = livello.value;

    let nCelle = 100;

    //Aggiungo dysplay none al click del bottone e selezione
    document.getElementById('btn-play').classList.add('d-none')
    document.getElementById('difficolta').classList.add('d-none')

    let grid = document.getElementById('griglia')

    //in base alla dificoltà scelta cambia la griglia
    if (valore == 'Medio') {
        nCelle = 81
        grid.classList.add('grid-medio')
    } else if (valore == 'Difficile') {
        nCelle = 49
        grid.classList.add('grid-difficile')
    } else {
        grid.classList.add('grid-facile')

    }


    //Creo ciclo for per creare i quadrati
    for (let i = 1; i <= nCelle; i++) {

        //Richiamo funzione CREAQUADRATO
        let quadrato = creaQuadrato(i)

        //Richiamo funzione Cambio colore
        clickColor(quadrato, i)

        //Aggiungo i DIV nella griglia
        grid.append(quadrato)
    }
})


//funzione crea quadrato
function creaQuadrato(numero) {

    //Creo tag DIV
    let myDiv = document.createElement('div');

    //Aggiungo la classe quadrtao
    myDiv.classList.add('quadrato')

    //Aggiungo numero interno
    myDiv.append(numero)

    //Restituisco il DIV
    return myDiv
}

//funzione CLICK
function clickColor(quadrato, numero) {

    //Creo evento click
    quadrato.addEventListener('click', function () {

        //Aggiungo Classe al QUADRATO
        quadrato.classList.toggle('bck-blu')

        //Stamplo la cella selezionata
        console.log(numero)
    })
}