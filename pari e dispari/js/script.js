let pg1_parioDispari = prompt("Scegli tra pari e dispari");

if(pg1_parioDispari == "pari"){
    pg1_parioDispari = true
}

else{
    pg1_parioDispari = false
}

let pg1_numeroScelto = parseInt(prompt("Scegli un numero da 1 a 5"));


function numeroCasualeMax1_5 (){
    return Math.floor(Math.random() * (5 - 1 + 1)) + 1
}

let pc_numeroCasuale = numeroCasualeMax1_5();
console.log(pc_numeroCasuale)


let pg1_pc_sommaNumeri = pg1_numeroScelto + pc_numeroCasuale;
console.log(pg1_pc_sommaNumeri)

function parioDispari(sommanumeri){
    if(sommanumeri%2 == 0){
        return true
    }

    else{
        return false
    }
}

let pc_parioDispari = parioDispari(pg1_pc_sommaNumeri);

if(pc_parioDispari == pg1_parioDispari  ){
    console.log("Hai Vinto")
}

else{
    console.log("Hai Perso")
}