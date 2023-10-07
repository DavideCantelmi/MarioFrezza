// creare un programma che verifica se un numero inizialmente è maggiore di 10
// se è maggiore di 10 stampa "il valore è maggiore di 10"
// e soltanto dopo averlo verificato verifica se questo è divisibile per 5

function main (){

    const numero = 8
    if (numero > 10) {
        console.log('il valore è maggiore di 10')
        if (numero % 5 === 0) {
            console.log('il numero è divisibile per 5')
        } else {
            console.log('il numero non è divisibile per 5')
        }
    } else {
        console.log('il numero non è maggiore di 10')
    }
}

main()