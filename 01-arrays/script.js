const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array

const fourthTeacher = teachers[3];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'

teachers.splice(4, 1, 'Patrick');
console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto

const lastTeacher = teachers.pop();
console.log(lastTeacher);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto

const firstTeacher = teachers.shift();
console.log(firstTeacher);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

teachers.push('Vanessa');
console.log(teachers);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

teachers.unshift('Sarah');
console.log(teachers);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex

const lewisIndex = teachers.indexOf('Lewis');
console.log(lewisIndex);

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

// CHECK CON IL METODO .lenght
// teachers.lenght indica che ci sono 7 elementi nell'array, quindi non è vuoto

const isTeachersEmpty = teachers.length;

// CHECK CON L'UTILIZZO DELLE CONDIZIONI
// (commentare *const isTeachersEmpty = teachers.length; sopra per evitare errori)
// SE il numero degli elementi contenuti nell'array è 0, allora ritonerà TRUE,
// ALTRIMENTI se sono presenti degli elementi FALSE

// const isTeachersEmpty = teachers.length === 0;

console.log(isTeachersEmpty);

// CHECK BONUS
if (teachers.length === 0) {
  console.log("L'array è vuoto!");
} else {
  console.log(`L'array teachers contiene : ${teachers.length} elementi`);
}