function main (){

    const sasso = 'S'
    const forbici = 'F'
    const carta = 'C'

    // cambiale come vuoi per fare degli esperimetni
    const sceltaGiocatore = 'S'
    const sceltaComputer = 'C'


    if (sceltaGiocatore === carta && sceltaComputer === sasso || 
    sceltaGiocatore === sasso && sceltaComputer === forbici || 
    sceltaGiocatore === forbici && sceltaComputer === carta) {
        console.log('Hai vinto')
    } else if (sceltaGiocatore === sceltaComputer) {
        console.log('pareggio')
    } else {
        console.log('hai perso')
    }
}

main()