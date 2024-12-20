const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

const reversedTeachers = teachers.reverse();
console.log('Reversed array: ', reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}

console.log(longNames);

// CONTROLLO CON IL METODO .filter

// lunghezzaDelNome è il nome dato alla variabile che rappresenta gli elementi dell'array,
// => indica un "arrow function" (un modo compatto di scrivere le funzioni),
// lunghezzaDelNome.length >= 5 è la condizione da verificare

// const longNames = teachers.filter((lunghezzaDelNome) => lunghezzaDelNome.length >= 5);
// console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

teachers.splice(5, 1);
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

const isFabioPresent = teachers.includes('Fabio');
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

const teachersString = teachers.join();
console.log(teachersString);

// PRIMO ESERCIZIO LIVE CODING

// let firstNumber = parseInt(prompt("Inserisci il primo numero :"));
// let secondNumber = parseInt(prompt("Inserisci il secondo numero :"));
// let numberResult;

// if (firstNumber > secondNumber) {
//   numberResult = "Il primo numero è maggiore del secondo";
// } else if (firstNumber < secondNumber) {
//   numberResult = "Il secondo numero è maggiore del primo";
// } else if (firstNumber = secondNumber) {
//   numberResult = "I due numeri sono uguali";
// }

// console.log(numberResult);



// SECONDO ESERCIZIO LIVE CODING

// L’utente inserisce due parole in successione, con due prompt. 
// Il software stampa prima la parola più corta, poi la parola più lunga.

// let firstWord = prompt("Inserisci la prima parola :");
// let secondWord = prompt("Inserisci la seconda parola :");
// let wordResult;

// if (firstWord.length < secondWord.length) {
//   wordResult = firstWord + " " + secondWord;
// } else if (secondWord.length < firstWord.length) {
//   wordResult = secondWord + " " + firstWord;
// }

// console.log(wordResult);


// TERZO ESERCIZIO LIVE CODING

// Crea un array vuoto. 
// Chiedi per 6 volte all’utente di inserire un numero, 
// se è dispari inseriscilo nell’array

// const justAnEmptyArray = [];

// for (let i = 0; i < 6; i++) {

//   let insertNumber = parseInt(prompt("Inserisci una numero:"));

//   if (insertNumber % 2 == 1) {

//     justAnEmptyArray.push(insertNumber);

//   }

// }

// console.log(justAnEmptyArray);


// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti.

// let sum = 0;

// for (let i = 0; i < 5; i++) {

//   let insertaNumber = parseInt(prompt("Inserisci una numero:"));

//   sum += insertaNumber;
  
// }

// console.log(sum);