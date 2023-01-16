/*
 * 
  PARI E DISPARI 

  STEP:
  1. Chiedo all'utente di scegliere tra pari e dispari
  2. Assegno la parte non scelta dall'utente al computer (o pari o dispari)
  3. Chiedo all'utente di scegliere un numero tra 1 e 5
  4. Creo una funzione che assegni al computer un numero casuale tra 1 e 5 
  5. Creo una funzione che sommi i due numeri 
  6. Sommo i due numeri e verifico se la somma è un numero pari o un numero dispari
  7. Communico il risultato 
 *
 */



  
// Scelta utente tra pari e dispari 
const domandaPariDispari = prompt("Scegli tra pari e dispari");    
console.log("domandaPariDispari", domandaPariDispari);




// Assegno al computer la controparte
let assegnazioneComputer = "";

if (domandaPariDispari == "Pari"){                       

    assegnazioneComputer = "Dispari";
    console.log("assegnazioneComputer", assegnazioneComputer);

}
else if (domandaPariDispari == "Dispari"){
    
    assegnazioneComputer = "Pari";
    console.log("assegnazioneComputer", assegnazioneComputer);

}




// Scelta numero da parte dell'utente
const domandaNumero = prompt("Scegli un numero da 1 a 5");           
console.log("domandaNumero", domandaNumero);

const sceltaNumeroUtente = parseInt(domandaNumero);
console.log("sceltaNumeroUtente", sceltaNumeroUtente);





// Funzione per l'assegnazione di un numero casuale al computer
function computerNumero(min, max) {                                 
    return Math.floor(Math.random() * (max - min) ) + min;
  }

const numeroRisultatoComputer = computerNumero(1,5);
console.log("numeroRisultatoComputer", numeroRisultatoComputer);




// Somma dei due numeri 
const somma = sceltaNumeroUtente + numeroRisultatoComputer;         
console.log("somma", somma);





// Controllo se la somma è un numero pari o dispari e comunico il risultato 
if (somma % 2 == 0) {                                              

    if (domandaPariDispari == "Pari"){

        console.log("HAI VINTO!");                                

    }
    else {

        console.log("Hai perso...");

    }

}
else {

    if (domandaPariDispari == "Dispari"){

        console.log("HAI VINTO!");

    }
    else {

        console.log("Hai perso...");
        
    }

}