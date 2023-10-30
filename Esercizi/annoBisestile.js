function main() {
    const anno = 2100
    if (anno % 4 == 0 && anno % 100 !== 0) {
        console.log('L\'anno E\' BISESTILE')
    }
    else if (anno % 400 == 0) {
        console.log('L\'anno E\' BISESTILE')
    } else {
        console.log('L\'anno NON E\' BISESTILE')
    }
}
// 1996 è bisestile
// 2000 è bisestile
// 1900 non è bisestile
// 1993 non è bisestile


main()