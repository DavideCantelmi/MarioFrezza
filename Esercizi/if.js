function main() {
    // recap sugli = e sui != (esclamativo, uguale)
    // = assegna un valore

    let a = 8 
    let b = 5
    a = b // a = 5  A DIVENTA 5 (se avessi fatto b = a avrei avuto b = 8)

    let c = 8
    let d = 8

    console.log('c = = d', c==d) // true perché c ha lo stesso valore di d

    let e = 10
    let f = '10'

    console.log('e = = f', e==f) // true perché e ha lo stesso valore di f (AL DOPPIO UGUALE NON IMPORTA NULLA DEL TIPO)

    let g = 10 
    let h = '10'

    console.log('g = = = h', g===h) // false perché g è un numero e h è una stringa (AL TRIPLO UGUALE IMPORTA ANCHE IL TIPO)

    let i = 10
    let j = '11'

    console.log('i ! = j ', i!=j) // true perché i è diverso da j (CON UN SOLO UGUALE NON IMPORTA NULLA DEL TIPO)

    let k = 10
    let l = '10'

    console.log('k ! = = l', k!==l) // true perché k è un numero e l è una stringa (CON DOPPIO UGUALE NON IMPORTA NULLA DEL TIPO)

    let m = 10
    let n = 11

    console.log(n > m ) // true perché n è maggiore di m
    console.log('n > = m', n >= m) // true perché n è maggiore o uguale a m
    console.log(n < m) // false perché n non è minore di m
    console.log('n < = m', n <= m) // false perché n non è minore o uguale a m



    x = 8
    // l'operatore % restituisce il resto della divisione tra due numeri
    if (x%2 === 0) {
        console.log('il numero è pari')
    }

    console.log('il programma è finito, andate in pace')

    y = 11

    if (x%2 === 0) {
        console.log('il numero è pari')
    } else { //altrimenti!!
        console.log('il numero è dispari')
    }

    console.log('ANCHE QUESTO PROGRAMMA È FINITO, ANDATE IN PACE')

    // esempio sugli else if ( più strade)

    if (x%2 === 0) {
        console.log('il numero è pari')
    } else if (x%3 === 0) {
        console.log('il numero è dispari ma è divisibile per 3')
    } else {
        console.log('il numero è dispari e non è divisibile per 3')
    }
}

main()