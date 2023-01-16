/**
 * 
   PALINDROMA 

   STEP:
   1. Definire una funzione per verificare se è una parola è palindroma o meno
   2. Con un prompt chiedere all'utente di inserire una parola qualsiasi
   3. Prendere la parola ed inserirla nella funzione creata per verificare se è palindroma
   4. Stampare in console l'esito della verifica 
 *
 */


function reverse (parola){       // Funzione necessaria per girare la parola data 

    let parolaRevert = "";       // Creo stringa vuota 

    for (let index = parola.length -1; index >= 0; index--) {

        console.log(parola[index]);

        parolaRevert = parolaRevert + parola[index];    // Giustappongo i caratteri in ordine inverso 
        
    } 

    return parolaRevert;

}

function palindroma(parola) {           // Funzione per verificare se la parola data è palindroma 

    if (parola == reverse(parola) ) {   // True se la parola data è uguale alla parola girata 
        return true;
    }
    else{                               // False se la parola è diversa
        return false;
    }

}

const parolaPrompt = prompt("Inserisci una parola qualsiasi");    // Chiedo all'utente una parola
console.log("parolaPrompt", parolaPrompt);

const risultato = palindroma(parolaPrompt);
console.log("risultato", risultato, typeof risultato);

if (risultato == true) {

    console.log("La parola data è palindroma!")
    
} 
else {

    console.log("La parola data NON è palindroma")
}

