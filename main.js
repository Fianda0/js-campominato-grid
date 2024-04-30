let grid = document.getElementById('griglia')

//Creo ciclo for per creare i quadrati
for (let i = 1; i <= 100; i++) {

    //Aggiungo classe QUADRATO al div
    let quadrato = creaQuadrato(i)

    //Aggiungo EVENTO click
    quadrato.addEventListener('click', function () {
        quadrato.classList.toggle('bck-blu')
        console.log(i)
    })

    //Aggiungo i DIV nella griglia
    grid.append(quadrato)
}

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