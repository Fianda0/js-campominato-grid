let grid = document.getElementById('griglia')

//Creo ciclo for per creare i quadrati
for (let i = 1; i <= 100; i++) {

    //Creo tag DIV
    let myDiv = document.createElement('div');

    //Aggiungo classe QUADRATO al div
    myDiv.classList.add('quadrato')
    myDiv.append(i)

    //Aggiungo EVENTO click
    myDiv.addEventListener('click', function () {
        myDiv.classList.toggle('bck-blu')
        console.log(i)
    })

    //Aggiungo i DIV nella griglia
    grid.append(myDiv)
}