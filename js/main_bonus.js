// ------------------- VARIABILI -----------------
    let prezzoKm=0.21;
    const scontoUnder=0.2;
    const scontoOver=0.4;
    let categoriaBiglietto="Biglietto Standard";
    let prezzoBiglietto=0;
    const numeroCarrozza = Math.floor(Math.random() * 7) + 1;
    const codiceCP = (Math.floor(Math.random() * 90000) + 10000).toString();
    
    
    
// ------------------ FUNZIONE ----------------
function submitForm(event) {
    event.preventDefault();

    

    let userName = document.getElementById("passengerName").value;
    
    let passengerKilometers = document.getElementById("passengerKm").value;
    console.log(userName);
    console.log(passengerKilometers);
    const selectElement = document.querySelector('.form-select');
    const selectedOption = selectElement.value;




    // logica

    if(selectedOption=='standard'){
        prezzoBiglietto=(prezzoKm*passengerKilometers).toFixed(2);
    } else if(selectedOption=='maggiore65'){
        
        categoriaBiglietto="Biglietto Ridotto";
        prezzoKm=prezzoKm*(1-scontoOver);
        prezzoBiglietto=(prezzoKm*passengerKilometers).toFixed(2);

    }else{

        categoriaBiglietto="Biglietto Ridotto";
        prezzoKm=prezzoKm*(1-scontoUnder);
        prezzoBiglietto=(prezzoKm*passengerKilometers).toFixed(2);

    }
    console.log(prezzoBiglietto);
    console.log(categoriaBiglietto);

    //INSERIMENTO DEI VALORI TROVATI
    document.getElementById('nameOutput').innerHTML=userName;
    document.getElementById('ticketTypeOutput').innerHTML=categoriaBiglietto;
    document.getElementById('carrozzaOutput').innerHTML=numeroCarrozza;
    document.getElementById('codiceCPOutput').innerHTML=codiceCP;
    document.getElementById('priceOutput').prepend(prezzoBiglietto);


    // MOSTRARE IL BIGLIETTO

    let ticketElement=document.getElementById("bigliettoId");
    let annullaButton=document.getElementById("annullaButtonId");
    ticketElement.classList.remove('d-none');
    annullaButton.classList.remove('d-none');
    //
    
}



function refreshPage() {
  window.location.reload();
}