/*A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]*/

const characters = [
    "pippo",
    "PLUTO",
    "Paperino",
    "miNNie",
    "dAiSy dUcK"
]
console.log(characters)
const first_uppercase_letter = characters.map((character) => {
    return character.charAt(0).toUpperCase() + character.slice(1).toLowerCase();
})
console.log(first_uppercase_letter)