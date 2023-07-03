// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero (con i prompt() in questo caso).
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo e questo richiederà un minimo di ricerca.).
// Il risultato andrà visualizzato prima in console e poi possibilmente in un apposito elemento <p> del mio codice HTML.
// BONUS:


// 1) DICHIARARE INSERIRE A PROMPRT I DATI DELL' UTENTE e variabili utili 
    let etaPasseggero=parseInt(prompt("inserisci la tua età:"));
    let numeroKm=parseInt(prompt("inserisci il numero di kilometri da percorrere:"));
    let prezzoKm=0.21;
    const scontoUnder=0.2;
    const scontoOver=0.4;
    let categoriaBiglietto="Biglietto Standard";
    let prezzoBiglietto=0;
    console.log(etaPasseggero)
    console.log(numeroKm)
// 2) ASSEGNAZIONE CATEGORIA
    if (etaPasseggero>65){
        categoriaBiglietto="Biglietto Ridotto";
        prezzoKm=prezzoKm*(1-scontoOver);
        prezzoBiglietto=(prezzoKm*numeroKm).toFixed(2);

    }else if(etaPasseggero<18){
        categoriaBiglietto="Biglietto Ridotto";
        prezzoKm=prezzoKm*(1-scontoUnder);
        prezzoBiglietto=(prezzoKm*numeroKm).toFixed(2);
       
    } else{
        prezzoBiglietto=(prezzoKm*numeroKm).toFixed(2);
        
    }

// 3) STAMPARE L' ELEMENTO A CONSOLE 
    console.log(`
    ----- Informazioni del  passeggero----------

        Età: ${etaPasseggero} 

        Kilometri da percorrere: ${numeroKm} km

        tipo di biglietto : ${categoriaBiglietto}

        prezzo totale: ${prezzoBiglietto}€
    -------------------------------------------------
    `);

// 4) INSERIRE IL CONTENUTO NEL P

const element=document.getElementById("ticketPrice");
element.innerHTML=prezzoBiglietto