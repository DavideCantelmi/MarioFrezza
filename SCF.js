function main (){

    
let x = ["s1", "c1", "f1"];

let y = ["s2", "c2", "f2"];


/*s1 > f2 ; s1 < c2 ; s1 = s2 

c1 > s2 ; c1 < f2 ; c1 = c2

f1 > c2 ; f1 < s2 ; f1 = f2 
*/


if ( s1 === f2 || c1 === s2 || f1 === c2 ) {
    console.log('Vince il Giocatore 1')
} else if ( s1 === c2 || c1 === f2 || f1 === s2 ) {
    console.log('Vince il Giocatore 2')
} else if ( s1 === s2 || c1 === c2 || f1 === f2 ) {
    console.log('Pareggio')
} else {
    console.log('Inserire i dati corretti')

}

console.log ( x() === y())


