let grid = document.getElementById('griglia')

//Creo ciclo for per creare i quadrati
for (let i = 1; i <= 100; i++) {

    //Creo tag DIV
    let mydiv = document.createElement('div');

    //Aggiungo classe QUADRATO al div
    mydiv.classList.add('quadrato')

    //Aggiungo i DIV nella griglia
    grid.append(mydiv)
}