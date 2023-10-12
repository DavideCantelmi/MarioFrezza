function main() {

     const n = 35

     if (n%2 === 0) {
        console.log('sono entrato nel primo if')
        if (n>30) {
            console.log('sono entrato anche qui')
        } else {
            console.log('sono entrato nell\'else annidato')
        }
     }


     if (true) {
        if (true) {
            if (true) {
                if (true) {
                    console.log('non faccio niente')
                }
            }
        }
     }
}

main()