const { median, mean} = require('jsmaths')

if (process.argv[2] === "" || process.argv[2] === undefined) {
    let arr = []
    console.log("Input numbers separated by spaces:")

    let stats = (userInput) => {
        let input = userInput.toString().trim()
        const value = input.split(" ")
        for (let i = 0; i < value.length; i++) {
            let individual = value[i]
            arr.push(parseInt(individual))
        }
        console.log(`Your input was: ${arr}`)
        console.log(`Smallest number: ${Math.min(...arr)}`)
        console.log(`Largest number: ${Math.max(...arr)}`)
        console.log(`Mean: ${mean(arr)}`)
        console.log(`Median: ${median(arr)}`)
        process.exit()
    }
    process.stdin.on('data', stats)
} else {
    let argArr = []
    for (i=2; i < process.argv.length; i++) {
        argArr.push(parseInt(process.argv[i]))
    }
    console.log(`Your input was: ${argArr}`)
    console.log(`Smallest number: ${Math.min(...argArr)}`)
    console.log(`Largest number: ${Math.max(...argArr)}`)
    console.log(`Mean: ${mean(argArr)}`)
    console.log(`Median: ${median(argArr)}`)
}