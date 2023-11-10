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


