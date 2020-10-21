/****************************************
 * VENDITA BIGLIETTO TRENO
 ***************************************/

/**
 * REFERENZA ELEMENTI
 */
var container = document.getElementById('biglietto');
var bottoneGenera = document.getElementById('bottoneGenera');
var bottoneAnnulla = document.getElementById('bottoneAnnulla');

/**
 * EVENTI
 */

// Calcolo e generazione biglietto
bottoneGenera.addEventListener('click', function() {

    // Ottieni dati utente
    var nome = document.getElementById('nome').value;
    console.log(nome);

    var kmDaPercorrere = document.getElementById('km').value;
    console.log(kmDaPercorrere);

    var fasciaEta = document.getElementById('fascia-eta').value;
    console.log(fasciaEta);

    // Calcolo costo e offerta biglietto 
    var prezzoKm = 0.21;
    var costoBiglietto = prezzoKm * kmDaPercorrere;
    var offerta = 'Biglietto Standard';

    // Eventuale offerta
    if (fasciaEta == 'minorenne') {
        // 20% sconto
        costoBiglietto -= costoBiglietto * 0.2;
        offerta = 'Sconto Minorenni';
    }
    else if (fasciaEta == 'over65') {
        // 40% sconto
        costoBiglietto -= costoBiglietto * 0.4;
        offerta = 'Sconto Over 65';
    }

    // Output decimali e valuta
    costoBiglietto = costoBiglietto.toFixed(2) + '€';

    var numCarrozza = Math.floor(Math.random() * 10) + 1;

    // Da 90000 a 100000 non incluso
    var codiceCp = Math.floor( Math.random() * (100000 - 90000) ) + 90000;
    
    document.getElementById('nome-passeggero').innerHTML = nome;
    document.getElementById('offerta-applicata').innerHTML = offerta;
    document.getElementById('carrozza').innerHTML = numCarrozza;
    document.getElementById('codice-cp').innerHTML = codiceCp;
    document.getElementById('costo-biglietto').innerHTML = costoBiglietto;

    // Rendere visibile biglietto
    container.className = 'show';
});

// Reset biglietto
bottoneAnnulla.addEventListener('click', function() {
    container.className = ('hidden');

    // Input
    var nome = document.getElementById('nome').value;
    console.log(nome);

    var kmDaPercorrere = document.getElementById('km').value;
    console.log(kmDaPercorrere);

    var fasciaEta = document.getElementById('fascia-eta').value;
    console.log(fasciaEta);
    // Valori biglietto
        
});
