const fs = require('fs');

let listItmes = []
let sortedList = []

function readAndSort () {
    fs.readFile('./original.txt',
            {encoding:'utf8', flag:'r'},
            function(err, data) {
        if(err) {
            console.log(err)
        } else {
            let word = data.split(/\r?\n/)
            listItmes.push(word)
            let toBeSorted = listItmes[0]
            sortedList = toBeSorted.sort((a, b) => a.length - b.length)
            writeToFile()
        }
    })
}

function writeToFile() {
    fs.writeFile(
        'result.txt',
        sortedList.map(function(v){ return v }).join('\n'),
        function (err) { console.log(err ? 'Error :'+err : 'Succesfully wrote to file' ) }
    )
}

readAndSort()