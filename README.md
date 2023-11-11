Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

MILESTONE 2
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


# MILESTONE 1

devo pensare al fatto che io debba aggiungere tramite js delle immagini in html utilizzando inner.html e per farlo potrei usare un ciclo for che ripete il comando e creare innnzi tutto con il metodo createElement() il div e successivamente aggiungergli la clase e con inner.html tutta la stinga 

# MILESTONE 2

per far girare le foto al click devo creare 2 eventi uno per la frecccia in basso e uno per quella in alto successivamente creare 2 condizioni per le quali se il contatore di immagini è a 0 allora aumenta fino ad arrivare alla lunghezza del nostro array di immagini 

ed il secondo per scorrerle all'indietro occore impostare la condizione come contatore > di 0 cosi che se è maggiore di 0 allora decrementiamo il contatore e ci scorre al contrario


## BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

// creo evento per premere pulsante in alto
tastoAlto.addEventListener('click', function() {
    console.log(actualImg);
    if(actualImg  < imgArray.length){

        allItem[actualImg].classList.remove('active');
        actualImg++;
        allItem[actualImg].classList.add('active');
    }

});


// creo evento per premere pulsante in basso
tastoBasso.addEventListener('click', function() {
    console.log(actualImg);
    if(actualImg < imgArray.length){

        allItem[actualImg].classList.remove('active');
        actualImg++;
        allItem[actualImg].classList.add('active');
    }

});

array[1,2,3,4,5] ---------------> il mio array di 5 

array.length[4]

----immagine 1 ---- immagine 2 ---- immagine 3 ----- immagine 4 ----- immagine 5                    

                  active
array.length[0], array.length[1], array.length[2], array.length[3], varray.length[4]  5

actualImg [0]----actualImg [1]-----actualImg [2]----actualImg [3]---actualImg [4] 5
                1+

# BONUS 2:

Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.