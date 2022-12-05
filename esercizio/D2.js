/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype sono:*/

/* Numero */ let number = 2
/* Stringa */ let string = 'James'
 /* Booleano */ let boolean = true; //let boolean = false;
/* undefined (valore non definito)
/* Null (assenza di valore)
Le variabili sono come delle scatole in cui possiamo inserire qualcosa. All'interno di queste scatole possiamo inserire dei dati e ogni dato sarà di un tipo: numero se inseriamo numeri, stringhe se inseriamo parole o numeri dentro le virgolette o gli apici, booleani se mettiamo vero o falso. Se non inseriamo nessun dato la scatola sarà null, perchè mancherà il valore, se invece inseriamo un dato non specificato sarà undefined.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name = 'Lorenzo'

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(12 + 20);

//oppure

let numero1 = 12
let numero2 = 20

let result = numero1 + numero2

console.log(result);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var name = 'Lo Presti'
const lastName = 'Lo Presti'
//const lastName = 'qualcosa' sarà un errore, perchè non si può cambiare il valore di una costante. Per verificare basta scommentare la riga sotto.
//const lastName = 'qualcosa' 
console.log(lastName);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(4 - x);

//oppure come nell'esercizio 3 ma mettendo - al posto di +

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = 'john'
let name2 = 'John'

console.log(name1 !== name2);

console.log(name1 === name2.toLowerCase()); //il valore di name2 non è stato cambiato, la funzione .toLowerCase() cambia il valore solo all'interno del console.log.

console.log(name1 === name2); //il log darà appunto falso, visto che il valore di name2 non è stato cambiato
