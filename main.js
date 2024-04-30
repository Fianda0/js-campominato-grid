document.getElementById('btn-play').addEventListener('click', function () {

    //Aggiungo dysplay none al click del bottone
    document.getElementById('btn-play').classList.add('d-none')

    let grid = document.getElementById('griglia')

    //Creo ciclo for per creare i quadrati
    for (let i = 1; i <= 100; i++) {

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