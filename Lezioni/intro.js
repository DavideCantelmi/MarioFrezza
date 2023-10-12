function main() {
    console.log("fabrifibra")
    //adesso parleremo delle variabili
    /*asasxasda mario 
    wooooooowwwww okok
    funge yeahhhhh
    */
   const pippo= 10
   const pomodoro= 22
   let banana= 20
   banana=21
   console.log(pippo,pomodoro,banana)
   console.log (pippo+pomodoro)

   // Number

    const numero= 10
    const numero2= 20
    const numero3= 30
    const numero4= 40
    const patatine = 50
    const cieloAzzurro = 90

    // String

    const nome= "Mario"
    const cognome= "Rossi"
    const colore= "rosso"
    const colore2= "verde"
    const numerone = "10000"

    // Boolean

    const torta = true
    const bigné = false

    console.log('-----------------------------')

    const relazione = 8 < 3
    console.log(9 > 8)
    console.log(3 > 1)
    console.log(2 < 1, 9 < 3)
    console.log('relazione', relazione)

    // AND, OR e NOT 

    const bool1 = 9 < 10 // true
    const bool2 = 2 >= 2 // true
    const bool3 = 4 <= 1 // false

    // AND 
    console.log('ESERCIZIO PER MARIO', bool1 && bool2 && bool3)

    // OR
    console.log('ESERCIZIO PER MARIO', bool1 || bool2 || bool3) //operatore pipe 

    // NOT

    console.log('ESERCIZIO PER MARIO', !bool1 || !bool2 || bool3) 


    // const bool1 = 9 < 10 // true
    // const bool2 = 2 >= 2 // true
    // const bool3 = 4 <= 1 // false
    console.log('ESERCIZIO 1', !(bool1 && bool2) || !bool3) //vero

    console.log('ESERCIZIO 2', !(bool1 && bool2 && bool3)) //vero

    console.log('ESERCIZIO 3', !(bool1 || bool2 || bool3)) // falso

    console.log('ESERCIZIO 4', !(bool1 || bool2) && !bool3) // falso 

    console.log('ESERCIZIO 5', !(bool1 || bool2) && (bool3 && !bool1)) // falso




}
    
main()