

function palindromaQuestion(parola){
    let parolaMinuscola = parola.toLowerCase();

    let parolaInversa = parolaMinuscola.split('').reverse().join('');

    return parolaMinuscola === parolaInversa
}


let parola = prompt("Inserisci una Parola");

let risultato = palindromaQuestion(parola);

if(risultato == true){
    console.log("La parola è palindroma");
}

else{
    console.log("La parola non è palindroma")
}


